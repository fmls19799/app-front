import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchProductPage } from './search-product';
import { TranslateModule } from '@ngx-translate/core';
import { CustomComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    SearchProductPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchProductPage),
    TranslateModule.forChild(),
    CustomComponentsModule
  ],
})
export class SearchProductPageModule {}
