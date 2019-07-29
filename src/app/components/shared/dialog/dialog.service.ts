import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { DialogComponent } from './dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private modalService: BsModalService) {
  }

  public dialog: BsModalRef;

  public show(title: string, message: string) {

    let modalOptions: ModalOptions = {
      animated: false,
      class: 'modal-dialog-top',
      initialState: { title: title, message: message }
    }

    this.dialog = this.modalService.show(DialogComponent, modalOptions);
  }
  
  public async hide() {

    await this.delay(1300);
    this.dialog.hide();

  }

  public delay(millisecond: number): Promise<void> {
    return new Promise<void>(resolve => {
      setTimeout(resolve, millisecond);
    })
  }
}
