import { Component, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './Modal.html',
  styleUrl: './Modal.css',
})
export class Modal {


  public closeModal = output<boolean>()

  public clickBackground(event : MouseEvent){
    if(event?.target === event.currentTarget){
      this.closeModal.emit(false)
    }
  }


}
