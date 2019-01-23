import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { ModalComponentChooseCategory } from './modal-choose-category/modal-choose-category';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [
        HeaderComponent,
        ModalComponentChooseCategory,
    ],
    imports: [
        TranslateModule,
        IonicModule // para poder usar icons en componentes???
    ],
    exports: [
        HeaderComponent,
        ModalComponentChooseCategory,
    ],
    entryComponents: [ // sin esto no funciona
        HeaderComponent,
        ModalComponentChooseCategory,
    ]
})
export class CustomComponentsModule {}
