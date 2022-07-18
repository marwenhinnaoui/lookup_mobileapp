import { MenuController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  image="";
  name="";


  constructor(private nav:NavController, private menu: MenuController,private userService:UserService) { }

  ngOnInit() {
    this.menu.enable(true,localStorage.getItem('role'));
    this.userService.GetEducoUrl(localStorage.getItem('token')).subscribe(val=>{
      this.image = this.userService.apiUrl+"/images/"+val[0].image; 
      this.name = val[0].name;
      });

  }
eleves()
{
  this.nav.navigateForward('lst-eleves');
}
courstp()
{
  this.nav.navigateForward('cours-tp-en');
}
Devoirs(){
  this.nav.navigateForward('devoirs-en');
}
Excercice(){
  this.nav.navigateForward('excercice-en');
}
observation(){
  this.nav.navigateForward('observation-en/notificationsEn');
}
}
