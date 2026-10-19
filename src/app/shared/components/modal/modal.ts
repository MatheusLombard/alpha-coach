import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {


  public closeModal = output<boolean>()

  public clickBackground(event : MouseEvent){
    if(event?.target === event.currentTarget){
      this.closeModal.emit(false)
    }
  }


}
