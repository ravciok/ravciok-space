import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  },
  {
    path: 'success',
    component: MessageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
