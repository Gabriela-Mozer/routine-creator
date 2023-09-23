import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { InformationFormComponent } from './components/information-form/information-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { DataSavingService } from './services/data-saving.service';
import { BusinessUserInfoComponent } from './components/business-user-info/business-user-info.component';
import { PersonalUserInfoComponent } from './components/personal-user-info/personal-user-info.component';
import { BothUserInfoComponent } from './components/both-user-info/both-user-info.component';
import { BusinnessExtraInfoComponent } from './components/businness-extra-info/businness-extra-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    InformationFormComponent,
    ProfilePageComponent,
    BusinessUserInfoComponent,
    PersonalUserInfoComponent,
    BothUserInfoComponent,
    BusinnessExtraInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [DataSavingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
