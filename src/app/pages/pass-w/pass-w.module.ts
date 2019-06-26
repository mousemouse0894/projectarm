import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassWRoutingModule } from './pass-w-routing.module';
import { PassWComponent } from './pass-w.component';

@NgModule({
  declarations: [PassWComponent],
  imports: [
    CommonModule,
    PassWRoutingModule
  ]
})
export class PassWModule { }
