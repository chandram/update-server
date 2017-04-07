import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  routes as inventoryRoutes,
  InventoriesModule
} from './inventories/inventories.module';

// import { SearchBoxComponent } from './directives/search-box-component';
// import { FilterPipe } from './directives/filter-pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InventoriesComponent } from './inventories/inventories.component';
// import { FilterByComponent } from './directives/filter-by/filter-by.component';

// import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // nested
  {
    path: 'inventories',
    component: InventoriesComponent,
    children: inventoryRoutes
  }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,
    CommonModule,
    RouterModule.forRoot(routes), // <-- routes
    InventoriesModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }, // <-- remove this if you don't want # in url
    { provide: 'API_URL', useValue: 'localhost:4200/update/api/v1'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
