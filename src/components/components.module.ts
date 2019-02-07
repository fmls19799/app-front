import { NgModule } from '@angular/core';
import { ModalComponentChooseCategory } from './modal-choose-category/modal-choose-category';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
import { FileuploaderComponent } from './fileuploader/fileuploader';
import { HeaderComponent } from './header/header';
@NgModule({
	declarations: [
        ModalComponentChooseCategory,
        FileuploaderComponent,
        HeaderComponent,
    ],
    imports: [
        TranslateModule,
        IonicModule // para poder usar icons en componentes???
    ],
    exports: [
        ModalComponentChooseCategory,
        FileuploaderComponent,
        HeaderComponent,
    ],
    entryComponents: [ // sin esto no funciona
        ModalComponentChooseCategory,
    ]
})
export class CustomComponentsModule {}
