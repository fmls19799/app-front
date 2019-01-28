import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'fileuploader',
  templateUrl: 'fileuploader.html'
})
export class FileuploaderComponent implements OnInit{
  
  text: string;
  @Input() hideInput: boolean;
  @Input() icon: boolean;
  @Input() iconName: string;
  @Input() widthOfDivContainer: string;
  @Output() uploadFileFromChildrenToParent: EventEmitter<any> = new EventEmitter;
  @ViewChild('file') file: ElementRef;
  @ViewChild('fileContainer') fileContainer: ElementRef;
  
  imagePicked: any;
  
  constructor() {
    
  }
  
  ngOnInit(){
    // console.log(this.hideInput);
    // console.log(this.icon);
    // console.log(this.iconName);
    // console.log(this.widthOfDivContainer);
    // console.log(this.file);
    // console.log(this.fileContainer);
    
    this.fileContainer.nativeElement.style.width = this.widthOfDivContainer;
    // this.file.nativeElement.style.border = '1px solid red';
    
  }

  clickButtonToOpenFile(){
    this.file.nativeElement.click(); // desde un icono ejecuto apertura del file
  }
  
  // a(){
  //   this.eee.emit({'a': 'b'})
  // }
  
  fileChangeEvent($event: any){
    console.log('aa');
    
    this.imagePicked = $event.target.files[0];
    this.uploadFileFromChildrenToParent.emit(this.imagePicked); // le envio la imagen al padre
  }
  
}

