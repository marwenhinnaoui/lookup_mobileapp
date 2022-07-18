import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;
@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.page.html',
  styleUrls: ['./testpage.page.scss'],
})
export class TestpagePage implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  test(){
    this.http.get('https://dev.educo-solution.com/api/eleve_annee_scolaires/1').subscribe(val=>{
      console.log(val)
    });

  }
 async testDelayednotification(){
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: "Title",
          body: "Body",
          id: 1,
          schedule: { at: new Date(Date.now() + 30000) },
          sound: null,
          attachments: null,
          actionTypeId: "",
          extra: null
        }
      ]
    });
    console.log('scheduled notifications', notifs);
  }
async  testnotification(){
    await LocalNotifications.getPending().then(val=>{
      console.log(val);
    })
  }
  clearlocal(){
    localStorage.clear()
  }

}
