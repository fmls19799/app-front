import { NgModule } from '@angular/core';
import { ModalComponentChooseCategory } from './modal-choose-category/modal-choose-category';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
import { FileuploaderComponent } from './fileuploader/fileuploader';
@NgModule({
	declarations: [
        ModalComponentChooseCategory,
        FileuploaderComponent,
    ],
    imports: [
        TranslateModule,
        IonicModule // para poder usar icons en componentes???
    ],
    exports: [
        ModalComponentChooseCategory,
        FileuploaderComponent,
    ],
    entryComponents: [ // sin esto no funciona
        ModalComponentChooseCategory,
    ]
})
export class CustomComponentsModule {}
