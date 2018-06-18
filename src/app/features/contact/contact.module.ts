import { NgModule} from '@angular/core';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

const modules = [
  ContactRoutingModule
];

@NgModule({
  imports: modules,
  declarations: [
    ContactComponent
  ]
})

export class ContactModule {
}
