import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private modalCtrl: ModalController) {
  }

  openModal() {
    const modal = this.modalCtrl.create('ModalPage');
    modal.present();
    }


}
