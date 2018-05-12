import {Component, OnInit} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {Place} from "../../models";
import {PlacesProvider} from "../../providers/places/places";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  constructor(public navCtrl: NavController, private  placesProvider: PlacesProvider,
              private modalController: ModalController) {

  }

  get places(): Place[] {
    return this.placesProvider.places;
  }

  ngOnInit(): void {
    this.placesProvider.loadFromStorage();
  }

  onAdd() {

  }

  onOpenPlc(plc: Place) {
    // this.navCtrl.push('PlacePage', plc);
    let modalController = this.modalController.create('PlacePage', plc);
    modalController.present();

  }
}
