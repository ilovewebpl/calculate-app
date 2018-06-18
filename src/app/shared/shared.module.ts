import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const modules = [
  CommonModule,
  FormsModule,
];

const components = [];

const exported = [
  ...components,
  CommonModule,
  FormsModule
];

@NgModule({
  imports: modules,
  declarations: components,
  exports: exported
})

export class SharedModule {
}
