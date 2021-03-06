import { Component, ViewChild, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';
import { CONFIG } from '../config/config.int'; // AQUI DEFINO EL ENTORNO !!!
import { Utils } from './../providers/utils';
// import { CONFIG } from '@environment';

@Component({
  templateUrl: 'app.html' 
})
export class MyApp implements OnInit{
  //1. La primera vez, en app component pongo el root en html asi en lugar de setroot ya que no funcionaria
  rootPage: string;
  environment: string;
  isCordova: boolean;
  versionWebOrPhone: string;
  userAgent: string;
  
  @ViewChild(Nav) nav: Nav;
  
  constructor(private translate: TranslateService, 
    private platform: Platform, 
    private config: Config, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen,
    private utils: Utils) {
      
      platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
      this.initTranslate();
    }
    
    ngOnInit(){
      // set root page at first load and environment
      this.rootPage = 'LoginPage';
      this.environment = CONFIG.ENV;
      
      // check phone or web / hacerlo con ternario???
      this.isCordova = this.utils.isCordova();
      if (this.isCordova) {
        this.versionWebOrPhone = 'phone';
      } else{
        this.versionWebOrPhone = 'web';
      }
      
      //check user agent
      if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        this.userAgent = 'firefox';
      } else if(/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)){
        this.userAgent = 'chrome';        
      }
      
    }
    
    
    initTranslate() {
      // Set the default language for translation strings, and the current language.
      this.translate.setDefaultLang('en');
      const browserLang = this.translate.getBrowserLang();
      
      if (browserLang) {
        if (browserLang === 'zh') {
          const browserCultureLang = this.translate.getBrowserCultureLang();
          
          if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
            this.translate.use('zh-cmn-Hans');
          } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
            this.translate.use('zh-cmn-Hant');
          }
        } else {
          this.translate.use(this.translate.getBrowserLang());
        }
      } else {
        this.translate.use('en'); // Set your language here
      }
      
      this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
        this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
      });
    }
  }
  