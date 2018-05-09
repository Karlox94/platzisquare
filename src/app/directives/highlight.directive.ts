import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit{

  @Input('highlight') plan: string;

  constructor(private _element: ElementRef, private _redenrer2: Renderer2) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.plan == 'premium') {
      this._redenrer2.setStyle(this._element.nativeElement, 'background-color', 'yellow');
      this._redenrer2.setStyle(this._element.nativeElement, 'font-weight', 'bold');
    } else {
      
    }
  }

}