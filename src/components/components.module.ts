import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { ModalComponentChooseCategory } from './modal-choose-category/modal-choose-category';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
import { ModalComponentCategoryIcons } from './modal-component-category-icons/modal-component-category-icons';
@NgModule({
	declarations: [
        HeaderComponent,
        ModalComponentChooseCategory,
        ModalComponentCategoryIcons
    ],
    imports: [
        TranslateModule,
        IonicModule // para poder usar icons en componentes???
    ],
    exports: [
        HeaderComponent,
        ModalComponentChooseCategory,
        ModalComponentCategoryIcons 
    ],
    entryComponents: [ // sin esto no funciona
        HeaderComponent,
        ModalComponentChooseCategory,
        ModalComponentCategoryIcons
    ]
})
export class CustomComponentsModule {}
