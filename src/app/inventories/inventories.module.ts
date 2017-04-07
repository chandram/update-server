import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';

import { SearchBoxComponent } from '../directives/search-box-component';
import { FilterPipe } from '../pipes/filter-pipe';
import { FilterByPipe } from '../pipes/filter-by';

import { InventoriesComponent } from './inventories.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MainComponent } from './main/main.component';
import { InventoryService } from './inventory.service';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: ':id', component: InventoryComponent }
];

@NgModule({
  declarations: [
    InventoriesComponent,
    InventoryComponent,
    MainComponent,
    SearchBoxComponent,
    FilterPipe,
    FilterByPipe
  ],
  exports: [
    InventoriesComponent,
    InventoryComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    InventoryService
  ]
})
export class InventoriesModule { }
