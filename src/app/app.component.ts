import {
  Component,
  ViewChild,
  OnInit
} from '@angular/core';
import {
  SplashScreen
} from '@ionic-native/splash-screen';
import {
  StatusBar
} from '@ionic-native/status-bar';
import {
  TranslateService
} from '@ngx-translate/core';
import {
  Config,
  Nav,
  Platform,
  NavController,
  ViewController,
  ToastController,
  Modal,
  ModalController,
  MenuController
} from 'ionic-angular';
import {
  CONFIG
} from '../config/config.int'; // AQUI DEFINO EL ENTORNO !!!
import {
  Utils
} from './../providers/utils';
import {
  AuthProvider
} from './../providers/auth/auth';
import {
  ModalComponentChooseCategory
} from '../components/modal-choose-category/modal-choose-category';
import { a } from '@angular/core/src/render3';
// import { CONFIG } from '@environment';

// // FIREBASE STORAGE
// import { AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  templateUrl: 'app.html',
})
export class MyApp implements OnInit {
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
  icons: Array<any> = [{
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
    name: 'favorites',
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
  
  closeMenu() {
    this.menuController.close();
  }
  
  ngOnInit() {
    console.log('INIT');
    // set root page at first load, set environment and bring the user from localstorage
    this.auth.saveUserInAuthWhenAppLoads();
    this.rootPage = 'HomePage';
    this.environment = CONFIG.ENV;
    
    // check phone or web
    this.isCordova = this.utils.isCordova() ? true : false;
    this.versionWebOrPhone = this.isCordova ? 'phone' : 'web';
    
    
    
    
    
    this.nav.viewWillEnter.subscribe((view: ViewController) => {
      const publicPagesRegex = /login|register|LoginPage|RegisterPage/;
      
      if (!this.auth.isLoggedIn()) {
        if (!publicPagesRegex.test(view.id.toLocaleLowerCase())) {
          if (!/login/.test(view.id.toLocaleLowerCase())) {
            this.nav.setRoot('LoginPage');
          }
        }
      } else if(this.auth.isLoggedIn() && publicPagesRegex.test(view.id.toLocaleLowerCase())){
        this.nav.setRoot('HomePage');
      }
      
    })
  }
  
  translator(messageToTranslate: string, closeAfterDismissedToast?: boolean) {
    this.translate.get(messageToTranslate).subscribe((data: string) => {
      this.showToast(data);
    })
  }
  
  showToast(data: string, closeAfterDismissedToast?: boolean) {
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
  goToSelectedTab(icon: string) {
    if (icon === 'upload') {
      this.modalCtrl.create(ModalComponentChooseCategory).present();
    } else {
      this.nav.push(`${icon.replace(/\b\w/g, l => l.toUpperCase())}Page`);
    }
    this.menuController.close();
  }
}