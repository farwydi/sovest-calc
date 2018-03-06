import {Component, ViewContainerRef} from '@angular/core';
import {UserDataSetService} from './user-data-set.service';
import {IRowBuf} from './interface.row-buf';
import {LoaderService} from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  amount = '';
  disc = '';
  plan = '';

  constructor(private service: UserDataSetService,
              private loader: LoaderService,
              private view_container: ViewContainerRef) {
    service.set_root_view_container_ref(view_container);

    loader.show();
  }

  add(e: IRowBuf) {
    this.service.add_dynamic(e);
  }

  countChange(e) {
    console.log(e);
  }

}
