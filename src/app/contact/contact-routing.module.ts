import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '@contact/contact/contact.component';
import { MessageComponent } from '@contact/message/message.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    data: {
      title: 'Contact',
      description: 'Meta description contact',
    },
  },
  {
    path: 'success',
    component: MessageComponent,
    data: {
      title: 'Contact',
      description: 'Meta description contact',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
