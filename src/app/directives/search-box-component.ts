import {Component, Input, Output, EventEmitter, OnInit, ElementRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';

/* input #input type="text" class="form-control" (input)="update.emit(input.value)" */

@Component({
  selector: 'app-search-box',
  template: `<div class="input-group">
    <span class="input-group-addon icon-lookup">
      <span class="fa fa-search" aria-hidden="true"></span>
    </span>
    <input type="text" class="form-control" [placeholder]="placeholder">
    <span class="input-group-addon" style="border:0px;background: none;font-size:20px;padding:2px">
      <i class="fa fa-spinner fa-spin fa-fw" *ngIf="isLoading" ></i>
    </span>
  </div>`
})

export class SearchBoxComponent implements OnInit {
  @Input() placeholder: string;
  delay: number;
  isLoading: boolean;
  @Output() update = new EventEmitter();

  constructor(private el: ElementRef) {
    this.delay = 300;
  }

  ngOnInit(): void {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .debounceTime(this.delay)
      .distinctUntilChanged()
      .subscribe(
        input => {
          this.isLoading =  true;
          console.log('input success ....isLoading  ', this.isLoading, input);
          this.update.emit(input);
        }
      );
  }
}

