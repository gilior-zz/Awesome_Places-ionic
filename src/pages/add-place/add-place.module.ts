import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlacePage } from './add-place';
import {AgmCoreModule} from "@agm/core";
import {  Geolocation} from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    AddPlacePage,
  ],
  imports: [
    IonicPageModule.forChild(AddPlacePage),
    AgmCoreModule.forRoot({apiKey:'AIzaSyAIzs7SETWf2_wxzxUeBstFTEK5HkmBJTo'}),
  ],
  providers:[Geolocation,Camera]
})
export class AddPlacePageModule {}
