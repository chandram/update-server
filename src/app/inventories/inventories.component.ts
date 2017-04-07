import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InventoryService} from './inventory.service';
// import {SearchBoxComponent} from '../directives/search-box-component';
// import {FilterPipe} from '../directives/filter-pipe';


@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})
export class InventoriesComponent implements OnInit {

  results: Object[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private inventoryService: InventoryService) {
  }

  ngOnInit() {
    this.inventoryService.fetch('test').subscribe((response) => {
      this.results = response;
    }, (err) => {
      console.log('in failure ', err);
    });
  }

  goToInventory(id: string): void {
    this.router.navigate(['./', id], {relativeTo: this.route});
  }

}
