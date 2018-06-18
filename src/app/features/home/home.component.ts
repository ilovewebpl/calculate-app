import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  public result = 0;
  public arrayItems: Array<number> = [];
  public valuePattern = /^-?[0-9]+$/;

  calculateResult(mathForm: NgForm): void {
    this.arrayItems = [];
    this.result = 0;
    const a: number = +mathForm.value.a;
    const b: number = +mathForm.value.b;
    if (!a && !b) {
      return;
    } else {
      this.result = a + a * a - b + b * b;
      this.arrayItems = new Array(this.result);
    }
  }

}
