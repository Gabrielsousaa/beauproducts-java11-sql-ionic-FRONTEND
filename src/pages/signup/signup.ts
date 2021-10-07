import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CityDTO } from '../../models/city.dto';
import { EstateDTO } from '../../models/estate.dto';
import { CityService } from '../../services/domain/city.service';
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
  ) {
    this.formGroup = formBuilder.group({
      name: ['Joagquin', [Validators.required, Validators.maxLength(50)]],
      email: ['joaguin@gmail.com', [Validators.required, Validators.email]],
      tipo: ['1', [Validators.required]],
      cpfOuCnpj: ['05645767865', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      senha: ['123', [Validators.required]],
      logradouro: ['Rua', [Validators.required]],
      endereco: ['Av tomé de souza', [Validators.required]],
      numero: ['4', [Validators.required]],
      bairro: ['Jardim vila galvão', [Validators.required]],
      cep: ['07054021', [Validators.required]],
      telefone: ['11982523608', [Validators.required]],
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
    console.log("Enviou o form");
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
