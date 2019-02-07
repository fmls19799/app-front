import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent implements OnInit{

  @Input() name: string;
  text: string;

  constructor() {

  }

  ngOnInit(){
    console.log(this.name);
    
  }


}
