import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public title: string;
  public message: string;
	public closeCallback: Function;
	protected eventEmitter = new EventEmitter(); 
	dialogButtonCommands: DialogButtonCommand[];
	
	constructor(public bsModalRef: BsModalRef) {
	}
  ngOnInit() {
  }

  close() {
		if (this.closeCallback) {
			this.closeCallback.call(this);
		}

		this.bsModalRef.hide();
	}

	closeWithCommand(fn: DialogButtonCommand) {
		fn.Command.call(this);
		this.bsModalRef.hide();
	}

}

export class DialogButtonCommand {
  constructor(name: string, command: Function) {
      this.Name = name;
      this.Command = command;
  }

  public Name: string;
  public Command: Function;
}