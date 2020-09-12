import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown/';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { PanelModule}  from 'primeng/panel';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    DialogModule,
    DropdownModule,
    CheckboxModule,
    InputTextModule,
    ListboxModule,
    PanelModule,
    TabMenuModule,
    
  ],
  exports: [
    CommonModule,
    ButtonModule,
    CardModule,
    DialogModule,
    DropdownModule,
    CheckboxModule,
    InputTextModule,
    ListboxModule,
    PanelModule,
    TabMenuModule,
  ]
})
export class NgPrimeModule { }
