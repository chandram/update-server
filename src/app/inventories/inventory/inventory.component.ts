import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../inventory.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

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

}
