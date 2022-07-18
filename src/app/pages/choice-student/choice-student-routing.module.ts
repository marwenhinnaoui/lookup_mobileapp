import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoiceStudentPage } from './choice-student.page';

const routes: Routes = [
  {
    path: '',
    component: ChoiceStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoiceStudentPageRoutingModule {}
