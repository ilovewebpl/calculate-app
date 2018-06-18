import { NgModule} from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { ResultArrayComponent } from './result-array/result-array.component';

const modules = [
  HomeRoutingModule,
  SharedModule
];

@NgModule({
  imports: modules,
  declarations: [
    HomeComponent,
    ResultArrayComponent
  ]
})

export class HomeModule {
}
