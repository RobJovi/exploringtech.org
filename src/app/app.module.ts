import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { RoutingModule} from './routing/routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
// components
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { SclaComponent } from './scla/scla.component';
import { SealsComponent } from './seals/seals.component';
import { LeadcsComponent } from './leadcs/leadcs.component';
import { HackathonComponent } from './hackathon/hackathon.component';
import { GetInvovledComponent } from './get-invovled/get-invovled.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { MentorComponent } from './mentor/mentor.component';
import { FellowshipComponent } from './fellowship/fellowship.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { PhonePipePipe } from './phone-pipe.pipe';
import { PreloadSelectedModulesList } from './config/preload_selected_modules_list';
import { ArticleComponent } from './article/article.component';
import { TechEntrepreneurComponent } from './tech-entrepreneur/tech-entrepreneur.component';
import { TechTalkComponent } from './tech-talk/tech-talk.component';
import { Article1Component } from './article1/article1.component';
import { Article2Component } from './article2/article2.component';
import { Article3Component } from './article3/article3.component';
import { Article4Component } from './article4/article4.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { SclaFormComponent } from './scla-form/scla-form.component';
import { SclaRecoverPasswordComponent } from './scla-recover-password/scla-recover-password.component';
import { SclaRecoverUserComponent } from './scla-recover-user/scla-recover-user.component';
import { SclaLoginComponent } from './scla-login/scla-login.component';
import { SclaRegisterComponent } from './scla-register/scla-register.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HomeComponent,
    ProgramsComponent,
    SclaComponent,
    SealsComponent,
    LeadcsComponent,
    HackathonComponent,
    GetInvovledComponent,
    ContactUsComponent,
    VolunteerComponent,
    MentorComponent,
    FellowshipComponent,
    PhonePipePipe,
    ArticleComponent,
    TechEntrepreneurComponent,
    TechTalkComponent,
    Article1Component,
    Article2Component,
    Article3Component,
    Article4Component,
    BlogComponent,
    BlogDetailComponent,
    SclaFormComponent,
    SclaRecoverPasswordComponent,
    SclaRecoverUserComponent,
    SclaLoginComponent,
    SclaRegisterComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Angular2FontawesomeModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, PreloadSelectedModulesList],
  bootstrap: [AppComponent]
})
export class AppModule { }
