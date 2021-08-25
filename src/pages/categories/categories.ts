import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryService } from '../../services/domain/category.service';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoryService: CategoryService
    ) {
  }

  ionViewDidLoad() {
    this.categoryService.findAll()
    .subscribe(res => {
      console.log(res);
    },
    error => {
      console.log(error);
    }
    );
  }


}
