import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataWRoutingModule } from './data-w-routing.module';
import { DataWComponent } from './data-w.component';

@NgModule({
  declarations: [DataWComponent],
  imports: [
    CommonModule,
    DataWRoutingModule
  ]
})
export class DataWModule { }
