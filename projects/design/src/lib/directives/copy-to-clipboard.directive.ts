import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[copyToClipboard]' })
export class CopyToClipboardDirective {

  private _value: string;

  @Input('copyToClipboard') set copyToClipboard(value: string) {
    this._value = value;
  }
  constructor(
    private el: ElementRef 
  ) { }



  @HostListener('dblclick')
  dblclick() {
    const input = document.createElement('input');
    input.value = this._value || (this.el.nativeElement as HTMLElement).innerText;

    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');

    input.remove();
  }
}
