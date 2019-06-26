import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckWRoutingModule } from './check-w-routing.module';
import { CheckWComponent } from './check-w.component';

@NgModule({
  declarations: [CheckWComponent],
  imports: [
    CommonModule,
    CheckWRoutingModule
  ]
})
export class CheckWModule { }
