from django.shortcuts import render
from django.http import (
    HttpResponse,
    JsonResponse,
    HttpResponseNotAllowed,
    HttpResponseBadRequest,
)

from django import forms
from django.contrib.auth.forms import UserCreationForm
import django.contrib.auth as auth
import json
from django.shortcuts import render
from .models import Staff, Order

from django.contrib.auth.models import User
from loger import setting, makelog
import traceback
import time


# Create your views here.
def home(request):
    return HttpResponse(render(request, "index.html"))


def api(request):
    if request.method == "POST":
        try:
            # 请求的获取与解析
            postdata = json.loads(request.body)
            reason = postdata['reason']
            returndata = {
                'suc': False
            }
            makelog(str(postdata))
            # 处理请求
            if reason == 'login':
                try:
                    staff = Staff.objects.get(username=postdata['username'])
                    if staff.password == postdata['password']:
                        returndata['suc'] = True
                    else:
                        returndata['suc'] = False
                        returndata['reason'] = 'PwDoesntMatch'

                except:
                    returndata['suc'] = False
                    returndata['reason'] = 'StaffDoesntExist'
            elif reason == 'getOrders':

                returndata['orders'] = [order.getJson()
                                        for order in Order.objects.all()]
                returndata['suc'] = True

            elif reason == 'addOrder':
                try:
                    Order(
                        addtime=time.time(),
                        saler=Staff.objects.get(username= postdata['saler']),
                        info=postdata['info'],
                        product=postdata['product']
                    ).save()
                    returndata['suc'] = True
                except Exception as e:
                    returndata['reason']=str(e)
            elif reason == 'updateOrder':
    
                # try:
                order=  Order.objects.get(id=postdata['orderId'])
                order.expnum=postdata['expnum']
                order.product=postdata['product']
                order.info=postdata['info']
                order.save()
                returndata['suc'] = True
                # except Exception as e:
                #     returndata['reason']=str(e)

            return JsonResponse(returndata)

        except Exception as E:
            makelog("Main error in api\n" + str(E), 1)
            makelog(traceback.format_exc())
            e_data_str = str(request.body, encoding="utf-8", errors="ignore")
            makelog(e_data_str)

            return HttpResponseBadRequest()
    else:
        makelog("wrong method!", 1)
        e_data_str = str(request.body, encoding="utf-8", errors="ignore")
        makelog(e_data_str,)
        return HttpResponseBadRequest()
