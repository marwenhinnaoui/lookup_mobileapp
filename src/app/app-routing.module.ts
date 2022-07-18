
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './Services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
   { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: 'devoir',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/devoir/devoir.module').then( m => m.DevoirPageModule)
  },
  {
    path: 'detail-devoir',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/detail-devoir/detail-devoir.module').then( m => m.DetailDevoirPageModule)
  },
  {
    path: 'evaluation',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/evaluation/evaluation.module').then( m => m.EvaluationPageModule)
  },
  {
    path: 'homework',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/homework/homework.module').then( m => m.HomeworkPageModule)
  },
  {
    path: 'punition',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/punition/punition.module').then( m => m.PunitionPageModule)
  },
  {
    path: 'presence',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/presence/presence.module').then( m => m.PresencePageModule)
  },
  {
    path: 'welcome',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'choice-student',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/choice-student/choice-student.module').then( m => m.ChoiceStudentPageModule)
  },
  {
    path: 'testpage',
    loadChildren: () => import('./testpage/testpage.module').then( m => m.TestpagePageModule)
  },
  {
    path: 'courset-tp',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/courset-tp/courset-tp.module').then( m => m.CoursetTpPageModule)
  },
  {
    path: 'classes',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/enseignant/classes/classes.module').then( m => m.ClassesPageModule)
  },
  {
    path: 'acceuil-es-tabs',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/enseignant/acceuil-es-tabs/acceuil-es-tabs.module').then( m => m.AcceuilEsTabsPageModule)
  },
  { path: '',canActivate: [AuthGuardService], loadChildren: './pages/enseignant/acceuil-es-tabs/acceuil-es-tabs.module#AcceuilEsTabsPageModule' },
  {
    path: 'lst-eleves',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/enseignant/lst-eleves/lst-eleves.module').then( m => m.LstElevesPageModule)
  },
  {
    path: 'lst-seances',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/enseignant/lst-seances/lst-seances.module').then( m => m.LstSeancesPageModule)
  },
  {
    path: 'cours-tp-en',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/enseignant/cours-tp-en/cours-tp-en.module').then( m => m.CoursTpEnPageModule)
  },
  {
    path: 'excercice-en',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/enseignant/excercice-en/excercice-en.module').then( m => m.ExcerciceEnPageModule)
  },
  {
    path: 'excercice-en-ajout',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/enseignant/excercice-en-ajout/excercice-en-ajout.module').then( m => m.ExcerciceEnAjoutPageModule)
  },
  {
    path: 'devoirs-en',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/enseignant/devoirs-en/devoirs-en.module').then( m => m.DevoirsEnPageModule)
  },
  {
    path: 'cours-ajout-en',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/enseignant/cours-ajout-en/cours-ajout-en.module').then( m => m.CoursAjoutEnPageModule)
  },
  {
    path: 'tp-ajout-en',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/enseignant/tp-ajout-en/tp-ajout-en.module').then( m => m.TpAjoutEnPageModule)
  },
  {
    path: 'eleve-info-en',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/enseignant/eleve-info-en/eleve-info-en.module').then( m => m.EleveInfoEnPageModule)
  },
  {
    path: 'anonnce-user',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/anonnce-user/anonnce-user.module').then( m => m.AnonnceUserPageModule)
  },
  {
    path: 'annonce-en',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/enseignant/annonce-en/annonce-en.module').then( m => m.AnnonceEnPageModule)
  },
  {
    path: 'bulletin',
    loadChildren: () => import('./pages/bulletin/bulletin.module').then( m => m.BulletinPageModule)
  },
  {
    path: 'observations',
    loadChildren: () => import('./pages/observations/observations.module').then( m => m.ObservationsPageModule)
  },
  {
    path: 'lst-bulletins',
    loadChildren: () => import('./pages/lst-bulletins/lst-bulletins.module').then( m => m.LstBulletinsPageModule)
  },
  {
    path: 'acceuil-con-tabs',
    loadChildren: () => import('./pages/conducteur/acceuil-con-tabs/acceuil-con-tabs.module').then( m => m.AcceuilConTabsPageModule)
  },
  {
    path: 'notifications-con',
    loadChildren: () => import('./pages/conducteur/notifications-con/notifications-con.module').then( m => m.NotificationsConPageModule)
  },
  {
    path: 'voyages-con',
    loadChildren: () => import('./pages/conducteur/voyages-con/voyages-con.module').then( m => m.VoyagesConPageModule)
  },
  {
    path: 'menu-con',
    loadChildren: () => import('./pages/conducteur/menu-con/menu-con.module').then( m => m.MenuConPageModule)
  },
  {
    path: 'ajout-voyage',
    loadChildren: () => import('./pages/conducteur/ajout-voyage/ajout-voyage.module').then( m => m.AjoutVoyagePageModule)
  },
  {
    path: 'info-voyage',
    loadChildren: () => import('./pages/conducteur/info-voyage/info-voyage.module').then( m => m.InfoVoyagePageModule)
  },
  {
    path: 'observations-con',
    loadChildren: () => import('./pages/conducteur/observations-con/observations-con.module').then( m => m.ObservationsConPageModule)
  },
  {
    path: 'annonces',
    loadChildren: () => import('./pages/annonces/annonces.module').then( m => m.AnnoncesPageModule)
  },
  {
    path: 'detail-annonce',
    loadChildren: () => import('./pages/detail-annonce/detail-annonce.module').then( m => m.DetailAnnoncePageModule)
  },
  {
    path: 'demande-ad',
    loadChildren: () => import('./pages/demande-ad/demande-ad.module').then( m => m.DemandeAdPageModule)
  },
  {
    path: 'detail-exercice',
    loadChildren: () => import('./pages/detail-exercice/detail-exercice.module').then( m => m.DetailExercicePageModule)
  },
  {
    path: 'detail-cours',
    loadChildren: () => import('./pages/detail-cours/detail-cours.module').then( m => m.DetailCoursPageModule)
  },
  {
    path: 'detail-tp',
    loadChildren: () => import('./pages/detail-tp/detail-tp.module').then( m => m.DetailTPPageModule)
  },
  {
    path: 'detail-exercice-en',
    loadChildren: () => import('./pages/enseignant/detail-exercice-en/detail-exercice-en.module').then( m => m.DetailExerciceEnPageModule)
  },
  {
    path: 'detail-cours-tp-en',
    loadChildren: () => import('./pages/enseignant/detail-cours-tp-en/detail-cours-tp-en.module').then( m => m.DetailCoursTpEnPageModule)
  },
  {
    path: 'detail-tp-cours-en',
    loadChildren: () => import('./pages/enseignant/detail-tp-cours-en/detail-tp-cours-en.module').then( m => m.DetailTpCoursEnPageModule)
  },
  {
    path: 'observation-en',
    loadChildren: () => import('./pages/enseignant/observation-en/observation-en.module').then( m => m.ObservationEnPageModule)
  },  {
    path: 'detailannonce-en',
    loadChildren: () => import('./pages/enseignant/detailannonce-en/detailannonce-en.module').then( m => m.DetailannonceEnPageModule)
  },








  

  

  


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
