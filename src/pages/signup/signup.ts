import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      name: ['Joagquin', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
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
      estateId: ['2', [Validators.required]],
      cityId: ['2', [Validators.required]],
    });
  }

  signupUser() {
    console.log("Enviou o form");
  }

}
