import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { CityDTO } from '../../models/city.dto';
import { EstateDTO } from '../../models/estate.dto';
import { CityService } from '../../services/domain/city.service';
import { ClientService } from '../../services/domain/client.service';
import { EstateService } from '../../services/domain/estate.service';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;
  estates: EstateDTO[];
  cities: CityDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public cityService: CityService,
    public estateService: EstateService,
    public clientService: ClientService,
    public alertCtrl: AlertController
    ,
  ) {
    this.formGroup = formBuilder.group({
      name: ['Joaquin', [Validators.required, Validators.maxLength(50)]],
      email: ['joaquin@gmail.com', [Validators.required, Validators.email]],
      clientType: ['1', [Validators.required]],
      cpfOuCnpj: ['666554467786', [Validators.required]],
      password: ['123', [Validators.required]],
      publicPlace: ['Rua', [Validators.required]],
      fullAddress: ['Av tomé de souza', [Validators.required]],
      number: ['4', [Validators.required]],
      district: ['Jardim vila galvão', [Validators.required]],
      zipCode: ['07054021', [Validators.required]],
      phoneNumber1: ['11982523608', [Validators.required]],
      estateId: [null, [Validators.required]],
      cityId: [null, [Validators.required]],
    });
  }

  ionViewDidLoad() {
    this.estateService.findAll()
      .subscribe(response => {
        this.estates = response;
        this.formGroup.controls.estateId.setValue(this.estates[0].id);
        this.updateCities();
      },
        error => { });

  }

  signupUser() {
    this.clientService.insert(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      })
  }
  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'sucesso',
      message: 'Cadastro efetuado com sucesso',
      enableBackdropDismiss: false,
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.navCtrl.pop;
          this.navCtrl.setRoot('HomePage');
        }
      }
      ]
    });
    alert.present();
  }

  updateCities() {
    let estate_id = this.formGroup.value.estateId;
    this.cityService.findAll(estate_id)
      .subscribe(response => {
        this.cities = response;
        this.formGroup.controls.cityId.setValue(null);
      },
        error => { });
  }

}
