import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'main/:category', component: MainContentComponent },
    { path: 'add', component: AddComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [AddComponent]
})
export class AppRoutingModule { }