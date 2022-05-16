import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagicOverlayComponent } from './components/magic-overlay/magic-overlay.component';
import { GetCyValuePipe } from './components/magic-overlay/get-cy-value.pipe';
import {MatListModule} from '@angular/material/list';
import { WatchDomDirective } from './components/magic-overlay/watch-dom.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ElementDataPipe } from './components/magic-overlay/element-data.pipe';

@NgModule({
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule],
  declarations: [MagicOverlayComponent, GetCyValuePipe, WatchDomDirective, ElementDataPipe],
  exports: [MagicOverlayComponent],
})
export class CypressHelperModule {}
