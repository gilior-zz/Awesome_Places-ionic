import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Place} from "../../models";
import {PlacesProvider} from "../../providers/places/places";

/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  place: Place

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private  placesProvider: PlacesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
    console.log(this.navParams.data)
    this.place = this.navParams.data;
  }

  onClose() {
    this.navCtrl.pop();
  }

  onDelete() {
    this.placesProvider.removePlace(this.place);
    this.navCtrl.pop();
  }
}
