import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Location, Place} from "../../models";


/*
  Generated class for the PlacesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlacesProvider {
 private _places: Place[] = [
   {location:new Location(1,1),desc:'111111',title:'111111111',imgPth:'111111.jpg'},
   {location:new Location(1,1),desc:'22222',title:'222222',imgPth:'2222.jpg'},
   {location:new Location(1,1),desc:'33333',title:'333333',imgPth:'33333.jpg'},
 ];

  constructor(public http: HttpClient) {
    console.log('Hello PlacesProvider Provider');
  }

  addPlace(title,desc,loc,img) {
    let place=new Place(title,desc,loc,img);
    this._places.push(place);
  }

  get places(){
    return this._places;
  }

}
