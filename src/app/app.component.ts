import { Component, ViewChild, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, NavController, ViewController, ToastController, Modal, ModalController, MenuController } from 'ionic-angular';
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
  rootPage: any;
  currentPage: string;
  environment: string;
  isCordova: boolean;
  versionWebOrPhone: string;
  userAgent: string;
  // showTabs: boolean = false;
  isLogged: boolean;
  userLocalStorage: any;
  icons: Array<any> = [
    {
      name: 'profile',
      icon: 'ios-contact-outline',
      active: false
    },
    {
      name: 'upload',
      icon: 'ios-reverse-camera-outline',
      active: false
    },
    {
      name: 'map',
      icon: 'ios-map-outline',
      active: false
    },
    {
      name: 'items',
      icon: 'ios-pricetag-outline',
      active: false
    },
    {
      name: 'chat',
      icon: 'ios-chatbubbles-outline',
      active: false
    },
    {
      name: 'settings',
      icon: 'ios-cog-outline',
      active: false
    },
  ]
  
  @ViewChild(Nav) nav: Nav;
  @ViewChild('menutoggle') menutoggle: any;
  
  constructor(private translate: TranslateService, 
    private platform: Platform, 
    private config: Config, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen,
    private utils: Utils,
    private auth: AuthProvider,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private menuController: MenuController
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
    
    closeMenu(){
      this.menuController.close();
    }
    
    ngOnInit(){
      this.auth.saveUserInAuthWhenAppLoads();
      // set root page at first load and environment
      this.rootPage = 'HomePage';
      this.environment = CONFIG.ENV;
      
      // check phone or web
      this.isCordova = this.utils.isCordova() ? true : false;
      this.versionWebOrPhone = this.isCordova ? 'phone' : 'web';
      
      //check user agent
      // console.log(navigator.userAgent);
      
      // if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
      //   this.userAgent = 'firefox';        
      // } else if(/Mozilla/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)){
      //   this.userAgent = 'chrome';        
      // }
      
      
      //global guardas in here (NAV is the whole nav, not like using ionviewwilleneter,
      //  VIEW CONTROLLER is the view that is going to load) 
      this.nav.viewWillEnter.subscribe((view: ViewController)=>{
  
        if (this.currentPage !== view.id) {
          this.currentPage = view.id;
          console.log(view.id);
          
          const publicPagesRegex = /login|register|LoginPage|RegisterPage/;          
          // if (!this.auth.isLoggedIn() && (!/login/.test(this.currentPage.toLowerCase())) || (!/register/.test(this.currentPage.toLowerCase()))) {
          //   console.log('no estas logueado y la vista no es login');
          //   this.nav.setRoot('LoginPage'); // si no paso siempre por login los subjects fallaran????
          //   this.translator('LOGIN_ERROR');
          // }
          // if(this.auth.isLoggedIn() && ((/login/.test(this.currentPage.toLowerCase())) || (/register/.test(this.currentPage.toLowerCase())))){
          //   console.log('estas logueado e intentas ir a login o register');
          //   this.nav.setRoot('HomePage'); 
          // }
        }
      })
    }
    
    translator(messageToTranslate: string, closeAfterDismissedToast?: boolean){
      this.translate.get(messageToTranslate).subscribe((data: string)=>{          
        this.showToast(data);
      })
    }
    
    showToast(data: string, closeAfterDismissedToast?: boolean){
      let toast = this.toastCtrl.create({
        message: data,
        duration: 2000,
        position: 'top',
      }).present();
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
      
    }
    
    // GO TO SELECTED SEGMENT
    goToSelectedTab(icon: string){                      
      switch (icon) {
        case 'upload': this.modalCtrl.create(ModalComponentChooseCategory).present(); 
        break;
        case 'profile': this.nav.push('ProfilePage'); 
        break;
        case 'map': this.nav.push('MapPage');  
        break;
        case 'chat': this.nav.push('ChatPage');
        break;
        case 'items': this.nav.push('ItemsPage');
        break;
        case 'settings': this.nav.push('SettingsPage');
        break;
        
        default:
        break;
      }
      this.menuController.close();
    }
  }
  