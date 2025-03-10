import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastsRoutingModule } from './toasts-routing.module';
import { ToastsComponent } from './toasts.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [ToastsComponent],
  imports: [CommonModule, ToastsRoutingModule, ToastrModule.forRoot()],
})
export class ToastsModule {}
