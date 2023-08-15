import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { InformationFormComponent } from './components/information-form/information-form.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { BusinessUserInfoComponent } from './components/business-user-info/business-user-info.component';
import { PersonalUserInfoComponent } from './components/personal-user-info/personal-user-info.component';
import { BothUserInfoComponent } from './components/both-user-info/both-user-info.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'app-information-form', component: InformationFormComponent },
  { path: 'app-profile-page', component: ProfilePageComponent },
  { path: 'app-business-user-info', component: BusinessUserInfoComponent },
  { path: 'app-personal-user-info', component: PersonalUserInfoComponent },
  { path: 'app-both-user-info', component: BothUserInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
