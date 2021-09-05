import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public icons: Record<string, IconDefinition> = {
    faGithub,
    faTwitter,
    faLinkedin,
  };

  constructor() {}

  ngOnInit(): void {}
}
