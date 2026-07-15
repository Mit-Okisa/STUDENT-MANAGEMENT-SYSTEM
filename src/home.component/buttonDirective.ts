import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[btnHighlight]',
  host: {
    '(mouseenter)': 'mouseEnter()',
    '(mouseleave)': 'mouseLeave()'
  }
})

export class ButtonDirective {
  private _elementRef = inject(ElementRef);
  mouseEnter() {
    this.changeBackground('#371818', 'bold');
  }

  mouseLeave() {
    this.changeBackground('#873b3b', 'normal');
  }

  changeBackground(color: string, size: string) {
    this._elementRef.nativeElement.style.backgroundColor = color;
    this._elementRef.nativeElement.style.fontWeight = size;
  }
}
