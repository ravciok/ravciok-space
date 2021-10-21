import { Component } from '@angular/core';
import { faLongArrowAltRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'space-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public icons: Record<string, IconDefinition> = {
    faLongArrowAltRight,
  };
}
