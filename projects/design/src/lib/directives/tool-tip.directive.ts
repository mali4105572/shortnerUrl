import { Directive, HostListener, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({ selector: '[toolTip]' })
export class ToolTipDirective {
  lastLeftClass = '';

  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private document: any
  ) { }


  @HostListener('mouseenter', ['@event'])
  mouseenter(event: MouseEvent) {
    this.changeLocation(event);
  }

  @HostListener('mousemove', ['@event'])
  mousemove(event: MouseEvent) {
    this.changeLocation(event);
  }

  changeLocation(event: MouseEvent) {
    const el: HTMLElement = this.el.nativeElement;
    const bodyEl: HTMLElement = (this.document as Document).body;
    const t = el.querySelector('.tooltiptext');
    if (t && bodyEl) {
      const elementX = event.clientX - event.offsetX;
      const elementY = event.clientY - event.offsetY + el.clientHeight;
      const newX = bodyEl.clientWidth - t.clientWidth;
      const newY = bodyEl.clientHeight - t.clientHeight;

      const [offsetLeft, offsetTop] = [
        newX > elementX ? elementX : newX,
        newY > elementY ? elementY : newY
      ];
      t.setAttribute('style', `top:${offsetTop}px; left: ${offsetLeft}px`);

      const newArrowX = elementX - offsetLeft + 20;
      console.log(newArrowX);
      if (this.lastLeftClass !== '' && t.classList.contains(this.lastLeftClass)) {
        t.classList.remove(this.lastLeftClass);
      }
      this.lastLeftClass = `u-left-${newArrowX}`;
      t.classList.add(this.lastLeftClass);
    }
  }
}
