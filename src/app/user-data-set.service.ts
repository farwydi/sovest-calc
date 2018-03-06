import {ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef, ViewRef} from '@angular/core';
import {BufRowComponent} from './buf-row/buf-row.component';
import {IRowBuf} from './interface.row-buf';

@Injectable()
export class UserDataSetService {
  private _root_view_container: ViewContainerRef;

  private last_id = 0;

  constructor(private factory_resolver: ComponentFactoryResolver) {
  }

  set_root_view_container_ref(view_container_ref) {
    this._root_view_container = view_container_ref;
  }

  add_dynamic(e: IRowBuf) {
    const factory = this.factory_resolver
      .resolveComponentFactory(BufRowComponent);

    const component: ComponentRef<BufRowComponent> = factory
      .create(this._root_view_container.parentInjector);

    component.instance.disc = e.disc;
    component.instance.amount = e.amount;
    component.instance.plan = e.plan;
    component.instance.show_id = true;
    component.instance.show_tooltip = false;
    component.instance.add_type = false;
    component.instance.id = this.gen_id();
    component.instance.press_button.subscribe(() => {
      this.remove_dynamic(component.hostView);
      this._clean_id(component.instance.id);
    });

    this._root_view_container.insert(component.hostView);
  }

  remove_dynamic(component: ViewRef) {
    this._root_view_container.remove(this._root_view_container.indexOf(component));
  }

  private _clean_id(id: number) {
    if (id === this.last_id) {
      this.last_id--;
    }
  }

  gen_id(): number {
    this.last_id++;

    if (this._root_view_container.length === 0) {
      this.last_id = 1;
    }

    return this.last_id;
  }

}
