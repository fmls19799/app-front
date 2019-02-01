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
  @Input() multipleImages: boolean; // NO LO ESTOY USANDO???
  @Output() uploadFileFromChildrenToParent: EventEmitter<any> = new EventEmitter;
  @ViewChild('file') file: ElementRef;
  @ViewChild('fileContainer') fileContainer: ElementRef;
  
  imagesPicked: Array<File> = [];
  
  constructor() {
    
  }
  
  ngOnInit(){
    // console.log('hide input : ',this.hideInput);
    // console.log('icon: ',this.icon);
    // console.log('icon name : ',this.iconName);
    // console.log('file : ',this.file);
    // console.log('file container : ',this.fileContainer);
  }
  
  clickButtonToOpenFile(){
    this.file.nativeElement.click(); // desde un icono ejecuto apertura del file y se ejecuta en la funcion de abajo
  }
  
  fileChangeEvent(images: HTMLInputElement,$event: any){  
    this.imagesPicked = $event.target.files;
    this.uploadFileFromChildrenToParent.emit(this.imagesPicked); // le envio la imagen al padre
  }
  
}

