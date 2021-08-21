import { Component, ViewEncapsulation } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent {
  public data$ = this.routes.getCurrent();

  private url: string = window.location.href;
  private title: string =
    'Angular hidden features of dependecy injection angular hidden features of dependecy injection angular hidden features of dependecy injection';
  private user: string = 'ravciok';

  public twitterLink = `https://twitter.com/intent/tweet?url=${this.url}&text=${this.title}&via=${this.user}`;
  public facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${this.url}&quote=${this.title}`;
  public linkedinLink = `https://www.linkedin.com/sharing/share-offsite/?url=${this.url}&title=${this.title}`;

  constructor(private routes: ScullyRoutesService) {}

  public openInPopup(link: string, event: Event) {
    event.preventDefault();
    window.open(link, 'name', 'width=600,height=600');
  }
}
