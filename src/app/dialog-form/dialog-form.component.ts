import { Component, OnInit, HostBinding, ViewChild, Input, Output, EventEmitter, Renderer2, AfterViewInit, OnChanges, ViewEncapsulation, SimpleChanges } from '@angular/core';
import { Dialog, DomHandler } from 'primeng/primeng';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent implements AfterViewInit, OnChanges {
  @HostBinding('class.opened') isOpened: boolean;
  @HostBinding('class.hidden') isHidden: boolean = true;

  @ViewChild(Dialog, { static: false }) dialog: Dialog;

  @Input() header: string;

  @Input() width = 0;
  @Input() height = 0;
  @Input() resizable = false;
  @Input() ngClass = '';
  @Input() visible: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onHide = new EventEmitter<any>();
  @Output() onShow = new EventEmitter<any>();
  @Output() onBeforeShow = new EventEmitter<any>();

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    const innerDiv = this._getInnerDiv();
    innerDiv && this.updateStyle();
  }

  ngOnChanges(changes: SimpleChanges) {
    const { width } = changes;
    width && !width.firstChange && setTimeout(() => {
      this.dialog && this.dialog.setDimensions();
      this.dialog && this.dialog.center();
    }, 0)
  }

  private _getInnerDiv(): HTMLDivElement {
    const el: HTMLElement = this.dialog.el.nativeElement;
    return el.querySelector('div');
  }

  updateStyle() {
    const innerdiv = this._getInnerDiv();
    this.renderer.addClass(innerdiv, 'dialogContainer');
    const title = innerdiv.querySelector('.ui-dialog-titlebar');
    const content = innerdiv.querySelector('.ui-dialog-content');
    title && title.setAttribute('class', 'dialogHeader');
    content && content.setAttribute('class', 'dialogContent');
    title && title.querySelector('a span').remove();
    title && title.querySelector('a').setAttribute('class', 'closeDialog');
    setTimeout(() => {
      this.isHidden = false
    }, 0);

  }

  hideHandler() {
    this.visibleChange.emit(false);
    this.onHide.emit();
    this.isOpened = false;
  }

  showHandler() {
    this.visibleChange.emit(true);
    this.onHide.emit();
    setTimeout(() => this.updateStyle());
    this.isOpened = true;
  }

  beforeShowHandler() {
    this.onBeforeShow.emit();
  }

}
