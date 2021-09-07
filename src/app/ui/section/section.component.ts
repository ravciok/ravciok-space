import { Component, Input } from '@angular/core';

@Component({
  selector: 'space-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  @Input() public tilt = false;
  @Input() public mirror = false;
}
