import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown/';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    DropdownModule,
    CheckboxModule,
    PanelModule
  ],
  exports: [
    CommonModule,
    CardModule,
    DropdownModule,
    CheckboxModule,
    PanelModule
  ]
})
export class NgPrimeModule { }
