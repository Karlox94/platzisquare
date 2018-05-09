import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: 'a[click-count]'
})
export class ClickCountDirective {

  clicks:number = 0;

  @HostBinding('style.opacity') opacity:number = .1;

  @HostListener('click', ['$event.target']) onclick(btn: any) {
    console.log('a', btn, 'Cantidad de clicks:', this.clicks++);
    this.opacity += .1;
  }

  constructor() { }

}
