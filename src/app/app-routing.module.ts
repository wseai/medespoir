import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { TemoComponent } from './component/temo/temo.component';
import { TeleComponent } from './component/tele/tele.component';
import { AdminComponent } from './component/admin/admin.component';
import { DevisComponent } from './component/devis/devis.component';
import { MediaComponent } from './component/media/media.component';
import { CongComponent } from './component/cong/cong.component';


const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'media', component : MediaComponent, data: {animation: 'media'}},
  {path : 'tele' , component : TeleComponent , data: {animation: 'tele'}},
  {path : 'temo' , component : TemoComponent , data: {animation: 'temo'}},
  {path : 'devis', component : DevisComponent, data: {animation: 'devis'}},
  {path : 'blog' , component : BlogComponent , data: {animation: 'blog'}},
  {path : 'admin', component : AdminComponent, data: {animation: 'admin'}},
  {path : 'cong' , component : CongComponent , data: {animation: 'cong'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
