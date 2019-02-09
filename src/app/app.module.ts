import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptorProvider } from '../providers/app-http-interceptor';
import { Utils } from './../providers/utils';
import { AuthProvider } from '../providers/auth/auth';
import { CustomComponentsModule } from './../components/components.module';
import { ProductsProvider } from './../providers/products/products';

// MEDIATORS

// FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { HandlingErrorsProvider } from '../providers/handling-errors/handling-errors';
import { FavoritesProvider } from '../providers/favorites/favorites';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
      backButtonText: 'Back'
    }),
    CustomComponentsModule,
    AngularFireModule.initializeApp({
      apiKey: "<your-api-key>",
      authDomain: "<your-auth-domain>",
      storageBucket: "<project-id>.appspot.com",
      projectId: "<your-project-id>",
    }),
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass:AppHttpInterceptorProvider, multi: true},
    Utils,
    AuthProvider,
    ProductsProvider,
    HandlingErrorsProvider,
    FavoritesProvider
  ]
})
export class AppModule {}


