import { NgModule } from '@angular/core';
import { DesignComponent } from './design.component';
import { ToolTipDirective } from './directives/tool-tip.directive';
import { CopyToClipboardDirective } from './directives/copy-to-clipboard.directive';

@NgModule({
  declarations: [DesignComponent, ToolTipDirective, CopyToClipboardDirective],
  imports: [
  ],
  exports: [DesignComponent]
})
export class DesignModule { }
