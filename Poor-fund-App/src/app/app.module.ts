import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DonorsComponent } from './donors/donors.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { ContactComponent } from './contact/contact.component';
import { ManageComponent } from './manage/manage.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
// FOR bootstrap
import { AppBootstrapModule } from './app-bootstrap.module';
// AUTHENTICATION
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthGuard } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { routes } from './app.routes';
import { MembersComponent } from './members/members.component';
// FOR FILE UPLOAD
import { HttpClientModule } from '@angular/common/http';
import { UploadFileService } from './consumers/consumers.upload.service';
import { ConsumerService } from './consumers/consumers.consumer-service';
// FOR MATERIAL
import 'hammerjs';
import { NgMaterialModule } from './app.material';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DonorsComponent,
    ConsumersComponent,
    ContactComponent,
    ManageComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    // FOR BOOTSTRAP
    AppBootstrapModule,
    // FOR AUTHENTICATION
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    routes,
    // FOR FILE UPLOAD
    HttpClientModule,
    // FOR NG MATERIAL
    NgMaterialModule,
    // FOR FORM MODULE
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AngularFireAuth, UploadFileService, ConsumerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
