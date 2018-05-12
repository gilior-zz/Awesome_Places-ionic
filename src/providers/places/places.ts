import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Location, Place} from "../../models";
import {Storage} from "@ionic/storage";
import {File} from "@ionic-native/file";

declare var cordova:any;
/*
  Generated class for the PlacesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlacesProvider {
  constructor(public http: HttpClient,
              private storage: Storage,
              private file: File) {
    console.log('Hello PlacesProvider Provider');
  }


  private _places: Place[] = [
    {location: new Location(1, 1), desc: '111111', title: '111111111', imgPth: '111111.jpg'},
    {location: new Location(1, 1), desc: '22222', title: '222222', imgPth: '2222.jpg'},
    {location: new Location(1, 1), desc: '33333', title: '333333', imgPth: '33333.jpg'},
  ];

  get places() {
    return this._places;
  }

  addPlace(title, desc, loc, img) {
    let place = new Place(title, desc, loc, img);
    this._places.push(place);
    this.storage.set('places', this.places)
      .then((res) => {

      })
      .catch((res) => {
        let ind = this.places.indexOf(place);
        this.places.splice(ind);
      })
  }

  removePlace(plc: Place) {
    let ind = this._places.indexOf(plc);
    this._places.splice(ind, 1);
    const name = plc.imgPth.replace(/^.*[\\\/]/, '');


    this.file.removeFile(cordova.file.dataDirectory, name)
      .then(() => {
        this.storage.set('places', this.places)
      })
      .catch((err) => {

      })
  }

  loadFromStorage() {
    this.storage.get('places')
      .then((res) => {
        this._places = res || this._places;
      })
  }

}
