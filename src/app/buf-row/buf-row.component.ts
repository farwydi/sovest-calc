import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRowBuf} from '../interface.row-buf';

@Component({
  selector: 'app-buf-row',
  templateUrl: './buf-row.component.html',
  styleUrls: ['./buf-row.component.less']
})
export class BufRowComponent implements OnInit {

  @Output()
  press_button = new EventEmitter<IRowBuf>();

  @Input()
  add_type = true;

  @Input()
  id = -1;

  @Input()
  show_tooltip = true;

  @Input()
  show_id = false;

  @Input()
  amount = 0;

  @Input()
  disc = '';

  @Input()
  plan = 0;

  size_of_id: number;

  ngOnInit() {
    this.size_of_id = 24 + (this.id.toString().length + 1) * 9;
  }

  emit(): void {
    const row: IRowBuf = {amount: this.amount, disc: this.disc, plan: this.plan};

    this.press_button.emit(row);
  }

}
