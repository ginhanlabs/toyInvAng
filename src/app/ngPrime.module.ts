import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown/';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';
import { PanelModule}  from 'primeng/panel';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    DropdownModule,
    CheckboxModule,
    ListboxModule,
    PanelModule,
    TabMenuModule,
    
  ],
  exports: [
    CommonModule,
    CardModule,
    DropdownModule,
    CheckboxModule,
    ListboxModule,
    PanelModule,
    TabMenuModule,
  ]
})
export class NgPrimeModule { }
