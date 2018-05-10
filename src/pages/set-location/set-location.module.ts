import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetLocationPage } from './set-location';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    SetLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(SetLocationPage),
    AgmCoreModule.forRoot({apiKey:'AIzaSyAIzs7SETWf2_wxzxUeBstFTEK5HkmBJTo'})
  ],
})
export class SetLocationPageModule {}
