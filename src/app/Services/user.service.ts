import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';
const { LocalNotifications } = Plugins;
export interface user{
  NomAr: string
  PrenomAr: string
  adresse: string
  eleveAnneeScolaires: any
  etablissementPrecedent: string
  filsMaman: any
  enseignantClasses?:any
  filsPapa: any
  filsTuteur: any
  firstname: string
  frereSoeurCibles: any
  frereSoeurSources: any
  hasFrere: string
  hasMere: string
  hasPere: string
  hasTuteur: string
  id: number
  image: string
  isEleve: boolean
  isEnseignant: true
  isParent: boolean
  isDriver: boolean
  isStaff: boolean
  lastname: string
  lieunaissance: string
  mere: null
  nationality: null
  notifications: any
  pere: null
  phone: any
  situationFamilialeParent: string
  token: null
  travail: null
  tuteur: null
}
export interface cours{
    subjet: string,
    description: string,
    matiere:string,
    doc: any,
    video: any,
     Classe:string[],
    date:string
  }
  export interface voyage{
    circuit:string,
    type:string, //0->aller 1->retour 2->términé
    //status voyage -> en attente ->démarré -> cloturé
    datedepart?:string
    vehicule:string
  }
export interface excercie{
    subject: string,
    description:string,
    specialiteNiveau?:string ,//"/api/specialite_niveaus/1"
    anneeScolaire?:string,// "/api/annee_scolaires/1",
    matiere:string,// "/api/matieres/16",
    Classe:string,// "/api/classes/1",
    enseignant:string,// "/api/users/9",
    datelimit:string,// "2021-07-20T00:00:00+00:00",
    date:string,// "2021-07-28T16:41:09+00:00"
    doc: any
}
export interface AttVoyage{
  voyage:string,
  users:string[]
}
export interface VoyageAttEleve{
  ideleve:string;
  idvoyage:string;
  statut:string;
  dateEnCours:Date;
}
export interface statusVoyage{
  id:string;
  status:string //0-> En attente 1->Démarré 2-> Cloturé
}
export interface cours {

  subjet: string,
  description: string,
  specialiteNiveau?: any,
  Classe: string[],
  anneeScolaire?: string,
  matiere: string,
  doc: any,
  video: any,
  
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

    apiUrl= ''

  private auth_token=''
  nom=localStorage.getItem('nom');
  prenom=localStorage.getItem('prenom');
  constructor(private http:HttpClient,private toast:ToastController,private nav:NavController,private storage: Storage) {
    this.storage.create();
    this.storage.get('domain').then(value=>{
    this.apiUrl=value;
    });

   }
   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  })

GetStudents(id){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    //'Authorization': `Bearer ${this.auth_token}`
  })
  return this.http.get<any>(this.apiUrl+'/api/eleve_annee_scolaires/'+id, {headers:headers,params: {"pagination": "false"}});
}

GetEleves(){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    //'Authorization': `Bearer ${this.auth_token}`
  })
  return this.http.get<any>(this.apiUrl+'/api/eleve_annee_scolaires/', {headers:headers,params: {"pagination": "false"}});
}

//enseignant_classes
getMatiereByEns(id,idClasse){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    //'Authorization': `Bearer ${this.auth_token}`
  })
  console.log(this.apiUrl+'/api/enseignant_classes?enseignant='+idClasse+'&classe='+id);
  return this.http.get<any>(this.apiUrl+'/api/enseignant_classes?enseignant='+idClasse+'&classe='+id, {headers:headers,params: {"pagination": "false"}});
}
//cours comme d hab , filtrage selon
getSousMat(id){
  //api/matieres/{id}/sousmaieres
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    //'Authorization': `Bearer ${this.auth_token}`
  })
  return this.http.get<any>(this.apiUrl+'/api/matieres/'+id+'/sousmaieres', {headers:headers,params: {"pagination": "false"}});
}


GetClasse(id){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    //'Authorization': `Bearer ${this.auth_token}`
  })
  return this.http.get<any>(this.apiUrl+'/api/classes/'+id+'?pagination=false', {headers:headers});
}

getSalle(id){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    //'Authorization': `Bearer ${this.auth_token}`
  })
  return this.http.get<any>(this.apiUrl+'/api/salle_classes/'+id+'?pagination=false', {headers:headers});
}

GetClasses(){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    //'Authorization': `Bearer ${this.auth_token}`
  })
  return this.http.get<any>(this.apiUrl+'/api/classes?pagination=false', {headers:headers});
}
GetlstSubjects(token){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  })
  return this.http.get(this.apiUrl+'/api/matieres?pagination=false', {headers:headers});
}
GetlstAttendences(token){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  })
  return this.http.get(this.apiUrl+'/api/attendances?pagination=false', {headers:headers});
}
GetlstClasses(token){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  })
  return this.http.get(this.apiUrl+'/api/classes?pagination=false', {headers:headers});
}


GetlstHomework(token){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  })
  return this.http.get(this.apiUrl+'/api/homework?pagination=false', {headers:headers});
}

ajouterHomework(token,exc:FormData){
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  })
  return this.http.post(this.apiUrl+'/api/homework',exc, {headers:headers});
}

async getvalues(ch:string){
  var x;
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  })
  let promise = new Promise((resolve, reject) => {
    this.http.get(this.apiUrl+ch+'?pagination=false', {headers:headers}).toPromise().then(
      res=>{
       x=res;
      },
      msg=>{

      }
    )
  });
  
  return promise;
}
Getnotes(token){
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  })
  return this.http.get(this.apiUrl+'/api/notes', { headers: headers,params: {"pagination": "false"} });
}
getcursusStudent(token,id){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    'content-length':'14'
  })
  return this.http.get(this.apiUrl+'/api/eleve_annee_scolaires/'+id, {headers:headers,params: {"pagination": "false"}});
}
GetDevoirs(token)
 { 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<any>(this.apiUrl+'/api/devoirs', {headers:headers,params: {"pagination": "false"}});
  }

  GetSeances(token)
 { 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.get(this.apiUrl+'/api/seances', {headers:headers,params: {"pagination": "false"}});
  
  }

  getHomeWork(token,id){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(this.apiUrl+'/api/classes/'+id+'/homework', {headers:headers ,params: {"pagination": "false"}});
  }

  getExamens(token,id){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(this.apiUrl+'/api/classes/'+id+'/les_devoirs', {headers:headers});
  }

  getExamenType(token){  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(this.apiUrl+'/api/examen_types/', {headers:headers});
  }


  setToken(token,devtoken:string){
    var data={tokenDevice:devtoken}
      
      const headers2 = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        
      })  
      this.http.post(this.apiUrl+'/api/setTokenDevice',data,{headers:headers2,responseType:'json'}).subscribe(
        val=>{
        console.log(val);
      },
      err=>{
        console.log(err);

      }
      
      );
    }
    Readat(token,id:string){
    var data={}
      
      const headers2 = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        
      })  
      this.http.post(this.apiUrl+'/api/read/'+id,data,{headers:headers2}).subscribe(
        val=>{
        console.log(val);
      },
      err=>{
        console.log(err);

      }
      
      );
    }
  Login(username:string,password:string,devtoken:string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      
      //'Authorization': `Bearer ${this.auth_token}`
    })
    
    var params={username:username,password:password}
     this.http.post<any>(this.apiUrl+'/api/login_check',params,{headers:headers}).subscribe(
      (response) => { 
        this.getconnecteduser(response.token).subscribe(val=>{                        //Next callback
     
       
        
      this.auth_token=  response.token;
      this.setToken(response.token,devtoken);
      this.storage.set('apiToken',this.auth_token);
      localStorage.setItem('token',this.auth_token);
      if(val.isEnseignant)
      {
        this.nav.navigateRoot('classes');
         //@ts-ignore
         localStorage.setItem("nom",val.lastname)
         localStorage.setItem("userid",String(val.id))
         this.nom=val.lastname
         this.prenom=val.firstname
         //@ts-ignore
         localStorage.setItem("prenom",val.firstname)   
     }
     else if (val.isDriver)
     {
      this.nav.navigateRoot('acceuil-con-tabs')
      //@ts-ignore
      localStorage.setItem("nom",val.lastname)
      localStorage.setItem("userid",String(val.id))
      this.nom=val.lastname
      this.prenom=val.firstname
      //@ts-ignore
      localStorage.setItem("prenom",val.firstname)  
     }
      else
     {  localStorage.setItem("userid",String(val.id));this.nav.navigateRoot('/choice-student');}
    },
    (error) => { 
      console.log(error)
    }
    );
      },
      (error) => {     
        if(error.error.code==401){
          this.showtoast(' Wrong Username/Password');
        }                         //Error callback
        
        
      }
     );
    }

    async showtoast(msg) {
      const toast = await this.toast.create({
        message: msg,
        duration: 2000
      });
      toast.present();
    }
    showtoken(){
    }
    SerializeJSONDL(ch:string,ch2:string){
      ch= ch.replace(ch2,'');
      return ch;
    }
    getusers(token){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
      return this.http.get(this.apiUrl+'/api/users', {headers:headers,params: {"pagination": "false"}});
    
    }
    getAnonncesClasse(token,id){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }); 
      return this.http.get<any>(this.apiUrl+'/api/classes/'+id+'/annonces', {headers:headers});
    }

    getAnonncesUser(token,id){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }); 
      return this.http.get<any>(this.apiUrl+'/api/users/'+id+'/annonces', {headers:headers});
    }
    bulletinAut(token,id){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      return this.http.get<any>(this.apiUrl + '/api/eleve_annee_scolaires/'+id+'/bulletin_eleves', { headers: headers });
    }
    getBulletinEtudiant(token,id){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }); 
        // @ts-ignore
      return this.http.get<any>(this.apiUrl+'/api/getBulletinEleve/'+id, {headers:headers,responseType:"text"});
    }
    getuser(token,id){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
      return this.http.get<any>(this.apiUrl+'/api/users/'+id, {headers:headers,params: {"pagination": "false"}});
    
    }
    getconnecteduser(token){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
      return this.http.get<user>(this.apiUrl+'/api/me', {headers:headers,params: {"pagination": "false"}});
    
    }
    getsalleclasse(token){
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
      return this.http.get(this.apiUrl+'/api/salle_classes', {headers:headers,params: {"pagination": "false"}});
    
    }
    async testDelayednotification(title,body,date){
      const notifs = await LocalNotifications.schedule({
        notifications: [
          {
            title: title,
            body: body,
            id: 1,    
            schedule: { at: date },
            sound: null,
            attachments: null,
            actionTypeId: "",
            extra: null
          }
        ]
      });
    }
    GetTps(token){
const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
      return this.http.get(this.apiUrl+'/api/tps', {headers:headers,params: {"pagination": "false"}});
    
    }
    GetCours(token){
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
      return this.http.get(this.apiUrl+'/api/cours', {headers:headers,params: {"pagination": "false"}});      
    }

    GetCoursByID(token,id){
      const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
        return this.http.get(this.apiUrl+'/api/cours/'+id, {headers:headers,params: {"pagination": "false"}});      
      }

    getAllCours(token,id){
      const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
        return this.http.get(this.apiUrl+'/api/classes/'+id+'/cours', {headers:headers,params: {"pagination": "false"}});      
      }//api/cours_by_classe_and_enseignant?classe=6&enseignant=1862

      GetCoursByIDclass(token,idEns,idClass){
        const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              })
              return this.http.get(this.apiUrl+'/api/cours_by_classe_and_enseignant?classe='+idClass+'&enseignant='+idEns, {headers:headers,params: {"pagination": "false"}});
            
            }
            GetTPsByIDclass(token,idEns,idClass){
              const headers = new HttpHeaders({
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${token}`
                    })
                    return this.http.get(this.apiUrl+'/api/tps_by_classe_and_enseignant?classe='+idClass+'&enseignant='+idEns, {headers:headers,params: {"pagination": "false"}});
                  
                  }

      GetTpByID(token,id){
        const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              })
              return this.http.get(this.apiUrl+'/api/tps/'+id, {headers:headers,params: {"pagination": "false"}});
            
            }

  GetHomeworkByID(token,id){
     const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        })
    return this.http.get(this.apiUrl+'/api/homework/'+id, {headers:headers,params: {"pagination": "false"}});
  }

    AjouterCours(token,cours:FormData){
      
      const headers = new HttpHeaders({
              'Authorization': `Bearer ${token}`
      })
      return this.http.post(this.apiUrl+'/api/cours',cours, {headers:headers,params: {"pagination": "false"}});
    }

    AjouterTP(token,cours:FormData){
      const headers = new HttpHeaders({      
        'Authorization': `Bearer ${token}`
      })
      return this.http.post(this.apiUrl+'/api/tps',cours, {headers:headers,params: {"pagination": "false"}});
    }

    downloadfiles(ch:string){      
    ch=  ch.replace(/ /g,'%20');  
      return this.apiUrl+"/uploads/files/doc/"+ch;      
    }
    
    returnurl(ch:string){
      ch=ch.replace(/ /g,'%20')
      return this.apiUrl+'/media/cache/small/uploads/images/users/'+ch
    }
    GetCircuit(token){
      const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
        return this.http.get<any>(this.apiUrl+'/api/getcircuit', {headers:headers,params: {"pagination": "false"}});
        
      }
      GetVehicule(token){
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          })
          return this.http.get<any>(this.apiUrl+'/api/getvehicule', {headers:headers,params: {"pagination": "false"}});
          
        }
        
      setVoyage(token,voyage:voyage)
      {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
        return this.http.post(this.apiUrl+'/api/setVoyage',voyage, {headers:headers});
      }

      setVoyageAttendance(token,attendance:AttVoyage)
      {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        });
        return this.http.post(this.apiUrl+'/api/setVoyageAttendance',attendance, {headers:headers});
      }
      setVoyageAttendanceEleve(token,attendance:VoyageAttEleve)//set eleve to present when the trip is set to going.
      {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        });
        return this.http.post(this.apiUrl+'/api/updateStatusVoyageAttendance',attendance, {headers:headers});
      }
      updateSatusVoyage(token,attendance:statusVoyage)
      {var body=JSON.stringify({
        "id": attendance.id,
        "statut":attendance.status
      })
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        });
        return this.http.post(this.apiUrl+'/api/updateStatusVoyage',body, {headers});
      }

      GetEducoUrl(token){
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          })
          return this.http.get(this.apiUrl+'/api/configurations', {headers:headers});          
        }

        setDemande(token,id,type,demande)
        {
          let demandeObj;
          const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          })
          if(type.id === 0){
             demandeObj={
              eleve:id,
              type:type.id,
              demande:demande}
            }else{
               demandeObj={
                eleve:id,
                type:type.id,
                demande:type.nom}
            }
         
          return this.http.post(this.apiUrl+'/api/setDemande',demandeObj, {headers:headers});
        }



}
