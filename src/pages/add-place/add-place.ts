import {Component} from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {Location} from "../../models";
import {Geolocation} from "@ionic-native/geolocation";

/**
 * Generated class for the AddPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {
  location: Location = new Location(40.7324324, -73.9759827)
  marker: Location;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private  modalController: ModalController,
              private  geolocation: Geolocation,
              private loadingController: LoadingController,
              private  toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlacePage');
  }

  onSubmit(f: NgForm) {
    console.log(f.value)
  }

  onLocate() {
    let loadingController = this.loadingController.create({content: 'getting ur location'})
    loadingController.present();
    this.geolocation.getCurrentPosition()
      .then(res => {
        this.marker = new Location(res.coords.latitude, res.coords.longitude);
        loadingController.dismissAll();
      })
      .catch(res => {
        loadingController.dismissAll();
        this.toastController.create({message: res,duration:2000}).present()
      })

  }

  onOpenMap() {

    let modalController = this.modalController.create('SetLocationPage', {
      marker: this.marker,
      location: this.location
    });
    modalController.present();
    modalController.onDidDismiss(data => {
      this.marker = data;
    })
  }

  onTakePhoto() {

  }
}
