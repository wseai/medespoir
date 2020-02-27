import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SearchPipe } from './pipe/search.pipe';
import { SanitizerPipe } from './pipe/sanitizer.pipe';
import { HomeComponent } from './component/home/home.component';
import { TemoComponent } from './component/temo/temo.component';
import { TeleComponent } from './component/tele/tele.component';
import { BlogComponent } from './component/blog/blog.component';
import { MediaComponent } from './component/media/media.component';
import { AdminComponent } from './component/admin/admin.component';
import { DevisComponent } from './component/devis/devis.component';
import { CongComponent } from './component/cong/cong.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MediaComponent,
    TemoComponent,
    TeleComponent,
    DevisComponent,
    BlogComponent,
    AdminComponent,
    CongComponent,
    SanitizerPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path : '', component: HomeComponent},
      {path : 'media', component : MediaComponent, data: {animation: 'media'} },
      {path : 'tele' , component : TeleComponent , data: {animation: 'tele'}},
      {path : 'temo' , component : TemoComponent , data: {animation: 'temo'}},
      {path : 'devis', component : DevisComponent, data: {animation: 'devis'}},
      {path : 'blog' , component : BlogComponent , data: {animation: 'blog'}}
    ])
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
