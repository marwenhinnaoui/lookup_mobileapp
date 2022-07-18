import { AngularFireMessaging} from '@angular/fire/messaging';
import { environment } from './../../../environments/environment';
import { UserService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';


import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed } from '@capacitor/core';
import swal from 'sweetalert';
import { Storage } from '@ionic/storage';

  const { PushNotifications } = Plugins;
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string='';pass:string='';
code='';
appear=true;

  constructor(private nav:NavController,
    private menu:MenuController,private US:UserService,private storage:Storage,
    private afMessaging: AngularFireMessaging,private translate: TranslateService) {
      // this language will be used as a fallback when a translation isn't found in the current language
      this.translate.setDefaultLang('en'); 
    }
show=false;
status:boolean=false;
  ngOnInit() {

     new Promise((resolve,reject)=>{
      this.storage.get('apiToken').then(val=>{
      resolve(val);
     localStorage.setItem('token',val); 
      });
     }).then(()=>{
       new Promise((resol,rejec)=>{
        this.storage.get('rememberme').then(val=>{
          resol(val);
          localStorage.setItem('rememberme',val); 
          }).then(()=>{
            if(localStorage.getItem('rememberme'))
            {this.status=JSON.parse(localStorage.getItem('rememberme'));
              if(localStorage.getItem('rememberme')==='true')
              {
                this.US.getconnecteduser(localStorage.getItem('token')).subscribe(
                  user=>{ 
                    if(user.isEnseignant)
                    {
                      this.nav.navigateRoot('classes');
                       //@ts-ignore
                       localStorage.setItem("nom",user.lastname)
                       localStorage.setItem("userid",String(user.id))
                       //@ts-ignore
                       localStorage.setItem("prenom",user.firstname)   
                   }
                   else if (user.isDriver)
                   {
                    this.nav.navigateRoot('/acceuil-con-tabs')
                    //@ts-ignore
                    localStorage.setItem("nom",user.lastname)
                    localStorage.setItem("userid",String(user.id))
                    //@ts-ignore
                    localStorage.setItem("prenom",user.firstname)  
                   }
                    else
                   {  localStorage.setItem("userid",String(user.id));this.nav.navigateRoot('/choice-student');}
            
                   },
                   err=>{
                  console.log(err.error.code, err.error.message);
            
                   }
                   );
              }
            }
          });
       })
     })
   
    localStorage.setItem('reftoken','test');  
    this.menu.enable(false,'Parent');
    
      //notification registration 
   PushNotifications.requestPermissions().then( result => {
  
    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();});

PushNotifications.addListener('registration',
(token: PushNotificationToken) => {
  localStorage.setItem('reftoken',token.value);  
}
);
// Some issue with our setup and push will not work
PushNotifications.addListener('registrationError',
(error) => {
 // alert(error);
   
}
);

// Show us the notification payload if the app is open on our device
PushNotifications.addListener('pushNotificationReceived',
(notification: PushNotification) => {

  swal(notification.title,notification.body);
 this.US.testDelayednotification(notification.title,notification.body,new Date(Date.now()+300000))
  
}
);

// Method called when tapping on a notification
PushNotifications.addListener('pushNotificationActionPerformed',
(notification: PushNotificationActionPerformed) => {

  this.US.testDelayednotification(notification.notification.title,notification.notification.body,new Date(Date.now()+300000))
  this.US.getconnecteduser(localStorage.getItem('token')).subscribe(
    user=>{ 
      if(user.isEnseignant)
      {
        this.nav.navigateForward('/tabs/notifications');
         //@ts-ignore
         localStorage.setItem("nom",val.lastname)
         localStorage.setItem("userid",String(user.id))
         //@ts-ignore
         localStorage.setItem("prenom",val.firstname)   
     }
     else if (user.isDriver)
     {
      this.nav.navigateRoot('acceuil-con-tabs')
      //@ts-ignore
      localStorage.setItem("nom",val.lastname)
      localStorage.setItem("userid",String(user.id))
      //@ts-ignore
      localStorage.setItem("prenom",val.firstname)  
     }
      else
     {  localStorage.setItem("userid",String(user.id));   this.nav.navigateForward('/tabs/notifications');}

     },
     err=>{
    console.log(err.error.code, err.error.message);

     }
     );
}
);
}
  ionViewWillEnter() {
    
    this.storage.get('domain').then(value=>{   
      this.code=this.getKeyByValue(environment.domainsUrls,value);
 //if(value)
// {this.appear=false}

      });
  }
  login(){
    if(this.appear)
    {
      if(environment.domainsUrls[this.code])
    {
      this.US.showtoast("Successfully registered institution");
      this.US.apiUrl=environment.domainsUrls[this.code];
      this.appear=false;
      this.storage.set('domain',environment.domainsUrls[this.code]);
    }
    else
    {
     
      this.US.showtoast("This institution does not exist");
      return;
    }
    }
    var token= localStorage.getItem('reftoken');
    this.pass.trim();
    this.email.trim();
    this.US.Login(this.email,this.pass,token)
    
  }
showpass(){
this.show=!this.show;
}
changestatus()
{this.storage.set('rememberme',JSON.stringify(this.status));
  localStorage.setItem('rememberme',JSON.stringify(this.status));

}
getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
}
