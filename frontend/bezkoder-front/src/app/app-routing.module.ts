import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsComponent } from './components/tutorials/tutorials.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: '/tutorials' },
  { path: 'tutorials', component: TutorialsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
