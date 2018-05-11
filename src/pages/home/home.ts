import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Place} from "../../models";
import {PlacesProvider} from "../../providers/places/places";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private  placesProvider: PlacesProvider) {

  }


  get places(): Place[] {
    return this.placesProvider.places;
  }

  onAdd() {

  }

  onOpenPlc(plc: Place) {
    this.navCtrl.push('PlacePage', plc)
  }
}
