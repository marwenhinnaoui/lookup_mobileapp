// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   firebaseConfig : {
    apiKey: "AIzaSyCgxnPOsIOrZOgC7KC38PeujRwXNQqdEUU",
    authDomain: "educo-ltc.firebaseapp.com",
    projectId: "educo-ltc",
    storageBucket: "educo-ltc.appspot.com",
    messagingSenderId: "664472023712",
    appId: "1:664472023712:web:572665974a1faadf1fcfc5",
    measurementId: "G-REM39S09X2"
  },
  // firebaseConfig : {
  //   apiKey: "AIzaSyCiH99l1IKo82ndsD-vD8fVluJ3_Fry57U",
  //   authDomain: "educogolf.firebaseapp.com",
  //   projectId: "educogolf",
  //   storageBucket: "educogolf.appspot.com",
  //   messagingSenderId: "23551136766",
  //   appId: "1:23551136766:web:8d6ee88c6cf615a12766af",
  //   measurementId: "G-HGGS51SQJC"
  // },
  domainsUrls:
  {Niels_Bohr:'https://niels-bohr.educo-solution.com',
  Production:'https://prod.educo-solution.com',
  Pre_production:'https://preprod.educo-solution.com',
  Bouslimi:'https://bouslimi.educo-solution.com',
  Kawekeb:'https://kawekeb.educo-solution.com',
  Carthage:'https://carthage.educo-solution.com',
  Les_Trois_Colombes:'https://ltc.educo-solution.com',
  Secondaire:'https://secondaire.educo-solution.com',
  Primaire:'https://primaire.educo-solution.com',
  Les_Pilotes:'https://app.lespilotesbizerte.com',
  El_manhal:'https://elmanhal.educo-solution.com',
  Einstein_school:'https://easchool.educo-solution.com',
  Mafez:'https://mafez.educo-solution.com',
  Almafez:'https://almafez.educo-solution.com',
  Demo:'https://demo.educo-solution.com' ,
  Test:'https://test.educo-solution.com',
  Socrate:'https://socrate.educo-solution.com',
  DemoFr:'https://demofr.educo-solution.com'
}    
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.