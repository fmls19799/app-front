import { Injectable, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class Utils implements OnInit {
    platforma
    
    constructor( private platform: Platform) { 
        
    }
    
    ngOnInit() {
        
    }
    
    isCordova(){
        return this.platform.is('cordova');
    }
}
