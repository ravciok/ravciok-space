import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from '@contact/contact-routing.module';
import { ContactComponent } from '@contact/contact/contact.component';
import { UiModule } from '@ui/ui.module';
import { MessageComponent } from '@contact/message/message.component';

@NgModule({
  declarations: [ContactComponent, MessageComponent],
  imports: [CommonModule, ContactRoutingModule, UiModule],
})
export class ContactModule {}
