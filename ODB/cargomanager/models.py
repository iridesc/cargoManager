from django.db import models

# Create your models here.
class Staff(models.Model):
    username = models.CharField(primary_key=True,max_length=20)
    password=models.CharField(max_length=20)
    role = models.CharField(max_length=10)

class Order(models.Model):
    addtime=models.FloatField()
    saler=models.ForeignKey(Staff, on_delete=models.CASCADE)

    info = models.CharField(max_length=300) 
    product=models.CharField(max_length=100,default='')
    expnum=models.CharField(max_length=100,default='')
    
    def getJson(self):
        return {
            'id':self.id,
            'saler':self.saler.username,
            'info':self.info,
            'product':self.product,
            'expnum':self.expnum,
            'addtime':self.addtime
        }

