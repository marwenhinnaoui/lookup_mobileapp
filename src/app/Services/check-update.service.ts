import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AlertController, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { AppVersion } from '@ionic-native/app-version/ngx'
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

const { NativeMarket } = Plugins;

interface AppUpdate {
  serverV: string;
  currentV: string;
  enabled: boolean;
  msg?:{
    title: string;
    msg: string;
    btn: string;
  };
  majorMsg?:{
    title: string;
    msg: string;
    btn: string;
  };
  minorMsg?:{
    title: string;
    msg: string;
    btn: string;
  }
}



@Injectable({
  providedIn: 'root'
})
export class CheckUpdateService {


  updateExample="https://primaire.educo-solution.com/mobile-version-api";
  //currentV= '../../../android/app/build.gradle';
  currentV = '../../../android/app/build.gradle';

  
  constructor(private http: HttpClient,
    private alertCtrl: AlertController,
    private appVersion: AppVersion,
    private iab: InAppBrowser,
    private plt: Platform) {   
     // console.log(CurrentVersion);      
    }

    async CheckForUpdate(){

     // BuildConfig.VERSION_NAME).toString()
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
        //'Authorization': `Bearer ${this.auth_token}`
      })

        this.http.get(this.updateExample, {headers:headers}).subscribe(async (info:AppUpdate)=>{
          
        });
    }

}


