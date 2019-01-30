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
  rootPage: string;
  currentPage: string;
  environment: string;
  isCordova: boolean;
  versionWebOrPhone: string;
  userAgent: string;
  showTabs: boolean = false;
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
    private toast: ToastController,
    private modalCtrl: ModalController,
    private menuController: MenuController
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

    closeMenu(){
      this.menuController.close();
    }
    
    ngOnInit(){
      console.log(this.menutoggle);
      console.log('dasdassad');
      
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
      this.nav.viewWillEnter.subscribe((view: any)=>{
        if (this.currentPage !== view.id) {
          //set current page ????
          this.currentPage = view.id;
          
          // console.log('current page =>:', this.currentPage);
          if (this.currentPage === 'LoginPage' || this.currentPage === 'login' || this.currentPage === 'register' || this.currentPage === 'RegisterPage') {
            this.showTabs = false;
          } else{
            this.showTabs = true;
          }
          const publicPagesRegex = /login|register|LoginPage|RegisterPage/;
          
          // check user is logged in          
          if (this.auth.isLoggedIn()) {
            this.isLogged = true;
            this.userLocalStorage = this.auth.getUserFromLocalStorage;
            this.nav.setRoot('HomePage');
            // console.log('auth');
          
          } else{
            // console.log('not auth');
          
          }
          // console.log(1, !publicPagesRegex.test(this.currentPage) && (!this.isLogged));
          // console.log(2, (!publicPagesRegex.test(this.currentPage) && !/LoginPage/.test(this.currentPage)) && (!/register/.test(this.currentPage) && !/RegisterPage/.test(this.currentPage)) && !this.isLogged);
          
          // if current page is not login / register, set login as root
          // if ((!publicPagesRegex.test(this.currentPage) && !/LoginPage/.test(this.currentPage)) && (!/register/.test(this.currentPage) && !/RegisterPage/.test(this.currentPage)) && !this.isLogged) {
          //   this.nav.setRoot('LoginPage');
          //   this.translate.get('LOGIN_ERROR').subscribe((value: string)=>{
          //     this.toast.create({
          //       message: value,
          //       duration: 3000,
          //       position: 'top'
          //     }).present()
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
      
    }
    
    colorIcons(nameOfTab: string){
      
      // COLOR ICON IF SELECTED
      this.icons.forEach(icon => {
        icon.active = (nameOfTab === icon.name) ? true : false;
        
        if (icon.active) {
          // icon.icon = icon.icon.substring(0, icon.icon.indexOf('-outline'));
          this.closeMenu();
          this.goToSelectedTab(icon);
        } 
        
        // if (!(icon.icon.includes('-outline')) && !icon.active) {
        //   icon.icon = icon.icon.concat('-outline');
        // }
        
      });
    }
    
    // GO TO SELECTED SEGMENT
    goToSelectedTab(icon: any){
      // console.log('goto', icon);
      
      switch (icon.name) {
        case 'upload': this.modalCtrl.create(ModalComponentChooseCategory).present(); 
        
        break;
        
        default:
        break;
      }
    }
    
    
  }
  
  