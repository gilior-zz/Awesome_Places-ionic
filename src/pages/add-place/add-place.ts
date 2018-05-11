import {Component} from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {Location} from "../../models";
import {Geolocation} from "@ionic-native/geolocation";
import {Camera} from '@ionic-native/camera';
import {PlacesProvider} from "../../providers/places/places";

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
  imgUrl: string = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private  modalController: ModalController,
              private  geolocation: Geolocation,
              private loadingController: LoadingController,
              private  toastController: ToastController,
              private camera: Camera,
              private  placesProvider: PlacesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlacePage');
  }

  onSubmit(f: NgForm) {
    console.log(f.value)
    this.placesProvider.addPlace(f.value.title, f.value.desc, this.marker || this.location, this.imgUrl)
    this.imgUrl = '';
    this.marker = null;
    f.resetForm();
    this.navCtrl.popToRoot();
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
        this.toastController.create({message: res, duration: 2000}).present()
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
    this.camera.getPicture({
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    })
      .then((res) => {
        this.imgUrl = res;
      })
      .catch((res) => {
        console.log(res)
      })
  }
}
