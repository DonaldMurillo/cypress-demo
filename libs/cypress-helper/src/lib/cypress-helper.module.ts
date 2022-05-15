import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagicOverlayComponent } from './components/magic-overlay/magic-overlay.component';
import { GetCyValuePipe } from './components/magic-overlay/get-cy-value.pipe';
import {MatListModule} from '@angular/material/list';
import { WatchDomDirective } from './components/magic-overlay/watch-dom.directive';

@NgModule({
  imports: [CommonModule, MatListModule],
  declarations: [MagicOverlayComponent, GetCyValuePipe, WatchDomDirective],
  exports: [MagicOverlayComponent],
})
export class CypressHelperModule {}
