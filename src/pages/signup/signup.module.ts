import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CityService } from '../../services/domain/city.service';
import { EstateService } from '../../services/domain/estate.service';
import { SignupPage } from './signup';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  providers:[
    CityService,
    EstateService
  ]
})
export class SignupPageModule {}
