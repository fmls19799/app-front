import { Component, ViewChild, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, NavController, ViewController, ToastController, Modal, ModalController } from 'ionic-angular';
import { CONFIG } from '../config/config.int'; // AQUI DEFINO EL ENTORNO !!!
import { Utils } from './../providers/utils';
import { AuthProvider } from './../providers/auth/auth';
import { ModalComponentChooseCategory } from '../components/modal-choose-category/modal-choose-category';
// import { CONFIG } from '@environment';

@Component({
  templateUrl: 'app.html',
})
export class MyApp implements OnInit{
  //1. La primera vez, en app component pongo el root en html asi en lugar de setroot ya que no funcionaria
  rootPage: string;
  currentPage: string;
  environment: string;
  isCordova: boolean;
  versionWebOrPhone: string;
  userAgent: string;
  showTabs: boolean = false;
  
  @ViewChild(Nav) nav: Nav;
  
  constructor(private translate: TranslateService, 
    private platform: Platform, 
    private config: Config, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen,
    private utils: Utils,
    private auth: AuthProvider,
    private toast: ToastController,
    private modalCtrl: ModalController,
    // private viewCtrl: ViewController
    ) {
      
      platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
      this.initTranslate();
    }
    


    ionViewWillEnter() {      
      // console.log(this.viewCtrl);
      
    }

    ngOnInit(){
      // set root page at first load and environment
      this.rootPage = 'LoginPage';
      this.environment = CONFIG.ENV;
      
      // check phone or web
      this.isCordova = this.utils.isCordova() ? true : false;
      this.versionWebOrPhone = this.isCordova ? 'phone' : 'web';
      
      //check user agent
      console.log(navigator.userAgent);
      
      if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        this.userAgent = 'firefox';        
      } else if(/Mozilla/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)){
        this.userAgent = 'chrome';        
      }
      
      //global guardas in here (NAV is the whole nav, not like using ionviewwilleneter,
      //  VIEW CONTROLLER is the view that is going to load) 
      this.nav.viewWillEnter.subscribe((view: any)=>{
        if (this.currentPage !== view.id) {
          //set current page
          this.currentPage = view.id;
          console.log(view.id);
          
          // console.log('current page =>:', this.currentPage);
          if (this.currentPage === 'login' || this.currentPage === 'register' || this.currentPage === 'LoginPage' || this.currentPage === 'RegisterPage') {
            this.showTabs = false;
          } else{
            this.showTabs = true;
            console.log(this.currentPage);
            console.log(this.showTabs);
            
          }
          const publicPagesRegex = /login|register/;
          //check user is logged in          
          // if (this.auth.isLoggedIn() && !this.auth.rememberMe()) {
          //   console.log('is logged and has remember me');
          //   // this.nav.setRoot('HomePage')
          // } else{
          //   console.log('not logged');
          // }
          // if current page is not login, set login as root
          // if (!/login/.test(this.currentPage)) {
          //   this.translate.get('LOGIN_ERROR').subscribe((value: string)=>{
          //     let toast = this.toast.create({
          //       message: value,
          //       duration: 3000,
          //       position: 'top'
          //     });
          //     toast.onDidDismiss(()=>{
          //       this.nav.setRoot('LoginPage')
          //     })
          //     toast.present();
          //   })
          
          // }
        }
        
        
      })
      
      
      
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
    
    uploadItem(){
      this.modalCtrl.create(ModalComponentChooseCategory).present();
    }
  }
  
  