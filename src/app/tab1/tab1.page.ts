import { Component } from '@angular/core'
import { ModalController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { UserService } from '../Services/user.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  image="";
  name="";
  constructor(private nav:NavController,private userService:UserService,private modalController:ModalController,private storage:Storage,private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');    
  }

  ngOnInit() {
    
    this.userService.GetEducoUrl(localStorage.getItem('token')).subscribe(val=>{
      console.log(val);
      
      this.image = this.userService.apiUrl+"/images/"+val[0].image; 
      //https://demo.educo-solution.com/images/
      this.name = val[0].name;
      });

  }

  devoir(){this.nav.navigateForward('/devoir');}
  evaluation()
  {
    this.nav.navigateForward('/lst-bulletins'); 
}
  homework(){this.nav.navigateForward('/homework'); }
  observation(){this.nav.navigateForward('/observations/annonces'); }
  punition(){this.nav.navigateForward('/punition');}
  presence(){this.nav.navigateForward('/presence');}
  CoursTp(){this.nav.navigateForward('/courset-tp');}
  openInscri(){
    this.userService.GetEducoUrl(localStorage.getItem('token')).subscribe(val=>{
      window.open(val[0].lienInscrit)      
    },
    err=>{
      console.log(err);
      
    })
   
  }

}