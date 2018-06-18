import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-array',
  templateUrl: './result-array.component.html'
})
export class ResultArrayComponent implements OnInit {

  @Input() list: Array<number>;
  @Input() result: number;

  public isLessThanZero: boolean;

  ngOnInit() {
    this.result < 0 ? this.isLessThanZero = true : this.isLessThanZero = false;
  }
}
