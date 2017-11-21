import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadSelectedModulesList } from '../config/preload_selected_modules_list'

import { HomeComponent } from '../home/home.component';
import { ProgramsComponent } from '../programs/programs.component';
import { SclaComponent } from '../scla/scla.component';
import { SealsComponent } from '../seals/seals.component';
import { LeadcsComponent } from '../leadcs/leadcs.component';
import { HackathonComponent } from '../hackathon/hackathon.component';
import { SclaLoginComponent } from '../scla-login/scla-login.component';
import { SclaRegisterComponent } from '../scla-register/scla-register.component';
import { SclaRecoverPasswordComponent } from '../scla-recover-password/scla-recover-password.component';
import { SclaRecoverUserComponent } from '../scla-recover-user/scla-recover-user.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { SclaFormComponent } from '../scla-form/scla-form.component';
import { GetInvovledComponent } from '../get-invovled/get-invovled.component';
import { VolunteerComponent } from '../volunteer/volunteer.component';
import { MentorComponent } from '../mentor/mentor.component';
import { FellowshipComponent } from '../fellowship/fellowship.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { Article1Component } from '../article1/article1.component';
import { Article2Component } from '../article2/article2.component';
import { Article3Component } from '../article3/article3.component';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';
import { BlogComponent } from '../blog/blog.component';

const appRoutes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutusComponent },
  {
    path: 'programs', component: ProgramsComponent,
    children: [
      { path: 'SCLA', component: SclaComponent, data:{ preload: true} },
      { path: 'seals', component: SealsComponent, data:{ preload: true} },
      { path: 'leadCs', component: LeadcsComponent, data:{ preload: true} },
      { path: 'hustlencode', component: HackathonComponent, data:{ preload: true} },
      { path: '**', redirectTo: 'SCLA', pathMatch: 'full' }
    ]
  },
  {
    path: 'SCLA',
    children: [
      { path: 'login', component: SclaLoginComponent},
      { path: 'register', component: SclaRegisterComponent},
      { path: 'recoverPassword', component: SclaRecoverPasswordComponent},
      { path: 'recoverUser', component: SclaRecoverUserComponent},
      { path: 'form/:id', component: SclaFormComponent},
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  {
    path: 'getInvolved', component: GetInvovledComponent,
    children: [
      { path: 'volunteer', component: VolunteerComponent , data:{ preload: true}},
      { path: 'mentor', component: MentorComponent, data:{ preload: true} },
      { path: 'fellowship', component: FellowshipComponent, data:{ preload: true} },
      { path: '**', redirectTo: 'volunteer', pathMatch: 'full' }
    ]
  },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'article',
    children:[
      {path: 'cultivating-steve-jobs', component: Article1Component},
      {path: 'tech-entrepreneur', component: Article2Component},
      {path: 'txt-labs', component: Article3Component}
    ]},
  {path: 'blog/:id', component: BlogDetailComponent},
  {path: 'blog', component: BlogComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
]


@NgModule({
  imports: [ ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
