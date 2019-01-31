// import { LoadingController, Loading, Events, ToastController } from 'ionic-angular';
// import { Observable } from 'rxjs/Observable';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/finally';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// interface LoaderModel {
//     text?: string;
//     showLoader: boolean;
// }

// @Injectable()
// export class AppHttpInterceptorProvider implements HttpInterceptor {
    
//     private loader: Loading = null;
//     private pendingCalls: number = 0;
//     private isLoading = new BehaviorSubject<LoaderModel>({
//         showLoader: false
//     });
    
//     constructor(
//         private loadingCtrl: LoadingController,
//         private events: Events,
//         public toastCtrl: ToastController,
//         // private utils: UtilsProvider
//         ) {
//             this.isLoading.subscribe(
//                 (data) => {                
//                     if (!this.loader && data.showLoader) {
//                         this.loader = this.loadingCtrl.create({
//                             content: data.text || '',
//                             // dismissOnPageChange: true
//                         });
//                         // this.loader.onDidDismiss(() => this.pendingCalls = 0)
//                         // console.log('Show loader', 'loader:', this.loader, 'data show loader:', data.showLoader);
//                         this.loader.present();
                        
//                     } else if (this.loader && !data.showLoader) {
                        
//                         // console.log('Hide loader');
//                         this.loader.dismiss()
//                         .then((success) => this.loader = null)
//                         .catch((error) => { });
//                     }
//                 }
//                 );
//             }
            
//             // Definicón de interceptores. Se pueden llamar en el orden en que se definen los metadata del provider
//             intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
                
//                 this.updatePendingRequests(1);
                
//                 const noLoaderHeader = req.headers.get('No-Loader');
//                 // console.log(noLoaderHeader);
                
//                 this.isLoading.next({
//                     text: req.headers.get('Loader-Text') || '',
//                     showLoader: !noLoaderHeader || (noLoaderHeader && noLoaderHeader !== 'true')
//                 });
                
//                 // let a = false;
//                 if (req.headers.get('Content-Type') && req.headers.get('Content-Type') === 'multipart/form-data') {
//                     console.log('TIPO FOTO');
                    
//                     req = req.clone({
//                         headers: req.headers
//                         .delete('Loader-Text')
//                         //.append('Content-Type', 'application/json')
//                         // .append('utc', new Date().toString())
//                         // .append('cognito_id', atob(localStorage.getItem('cognito_id')))
//                         // .append('X-Authorization', `${atob(localStorage.getItem('access_token'))}`)
//                         // .append('Y-Authorization', `Bearer ${atob(localStorage.getItem('adfsaccessToken'))}`)
//                         // .append('env', CONFIG.ENV)
//                     });
//                 } else {
//                     console.log('TIPO JSON');
                    
//                     req = req.clone({
//                         headers: req.headers
//                         .delete('Loader-Text')
//                         .append('Content-Type', 'application/json')
//                         // .append('utc', new Date().toString())
//                         // .append('cognito_id', atob(localStorage.getItem('cognito_id')))
//                         // .append('Authorization', `${atob(localStorage.getItem('access_token'))}`)
//                         // .append('Y-Authorization', `Bearer ${atob(localStorage.getItem('adfsaccessToken'))}`)
//                         // .append('env', CONFIG.ENV)
//                     });
//                 }
                
//                 return next.handle(req)
//                 .map((event: HttpEvent<any>) => {
//                     if (event instanceof HttpResponse) {
//                         // change the response body here
//                         // console.log(event.body);
//                         if ((event.body && event.body['errorMessage']) && (event.body['errorMessage'] === '401 Unauthorized' || event.body['errorMessage'] === '[401] Unauthorized')) {
//                             throw event.clone({ status: 401 });
//                         } else if (event.body && event.body['errorMessage']) {
//                             throw event.clone({ status: 567 });
//                         } else if (event.body && event.body['body'] && event.body['body'] === '401 Unauthorized') {
//                             throw event.clone({ status: 401 });
//                         } else if (event.body && event.body['message'] && event.body['message'] === '401 Unauthorized') {
//                             throw event.clone({ status: 401 });
//                         }
//                     }
//                     return event;
//                 })
//                 .do(
//                     // return next.handle(req).do(
//                     (success: HttpResponse<any>) => {
//                         if (success instanceof HttpResponse) {
//                             this.updatePendingRequests(-1);
//                         }
//                     },
//                     (err: HttpErrorResponse) => {
//                         if (err instanceof HttpErrorResponse) {
//                             this.updatePendingRequests(-1);
//                         }
//                         if (err instanceof HttpResponse) {
//                             this.updatePendingRequests(-1);
//                         }
//                         if (err.status === 403 || err.status === 401) {
//                             this.events.publish('logout', true);
//                         } else {
//                             if (err.status !== 200) {
//                                 this.events.publish('network-error', err.status);
//                             }
//                         }
//                         if (err.status === 567 || err.status === 504) {
//                             // let alert = this.utils.createBasicAlert('', 'El servicio no responde, inténtelo de nuevo más tarde');
//                             // alert.present();
//                         }
//                     }
//                     );
//                 }
                
//                 updatePendingRequests(update: number): any {
//                     if (this.pendingCalls < 0) {
//                         // console.log('pendingCalls = 0');
//                         this.pendingCalls = 0;
//                     }
//                     if (update > 0) {
//                         this.pendingCalls += update;
//                         // console.log('pendingCalls++:', this.pendingCalls);
//                     } else {
//                         const _update = update;
//                         setTimeout(() => {
//                             if (this.pendingCalls > 0) {
//                                 this.pendingCalls += _update;
//                                 // console.log('pendingCalls--:', this.pendingCalls);
//                                 this.isLoading.next({ showLoader: this.pendingCalls > 0 });
//                             }
//                         }, 1000);
//                     }
//                 }
//             }