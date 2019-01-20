import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchProductPage } from './search-product';

@NgModule({
  declarations: [
    SearchProductPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchProductPage),
  ],
})
export class SearchProductPageModule {}
