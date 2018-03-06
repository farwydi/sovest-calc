import {Injectable} from '@angular/core';

@Injectable()
export class LoaderService {
  private loader: HTMLElement;
  private wrapper: HTMLElement;

  constructor() {
    this.loader = <HTMLElement>document.querySelector('#loader');
    this.wrapper = <HTMLElement>document.querySelector('#wrapper');
  }

  show() {
    if (this.loader && this.wrapper) {
      this.loader.style.display = 'none';
      this.wrapper.style.display = 'block';
    }
  }

  hide() {
    if (this.loader && this.wrapper) {
      this.wrapper.style.display = 'none';
      this.loader.style.display = 'block';
    }
  }
}
