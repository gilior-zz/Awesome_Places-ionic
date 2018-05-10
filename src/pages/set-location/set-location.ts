import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Location} from "../../models";
import {MouseEvent} from '@agm/core';

/**
 * Generated class for the SetLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage {
  location: Location;
  marker: Location;

  constructor(public navCtrl: NavController, public navParams: NavParams, private  viewController: ViewController) {

    this.location = this.navParams.get('location');
    this.marker = this.navParams.get('marker');
    console.log(this.navParams)
    console.log(this.location)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetLocationPage');


  }

  onSetMarker($event: MouseEvent) {
    this.marker = new Location($event.coords.lat, $event.coords.lng)
  }

  onAbort() {
    this.viewController.dismiss();
  }

  onConfirm() {
    this.viewController.dismiss(this.marker);
  }
}
