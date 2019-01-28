import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { ModalComponentChooseCategory } from './modal-choose-category/modal-choose-category';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
import { FileuploaderComponent } from './fileuploader/fileuploader';
@NgModule({
	declarations: [
        HeaderComponent,
        ModalComponentChooseCategory,
        FileuploaderComponent,
    ],
    imports: [
        TranslateModule,
        IonicModule // para poder usar icons en componentes???
    ],
    exports: [
        HeaderComponent,
        ModalComponentChooseCategory,
        FileuploaderComponent,
    ],
    entryComponents: [ // sin esto no funciona
        HeaderComponent,
        ModalComponentChooseCategory,
    ]
})
export class CustomComponentsModule {}
