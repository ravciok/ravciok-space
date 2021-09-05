import { Component, ViewEncapsulation } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Title } from '@angular/platform-browser';
import { shareReplay, take } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent {
  public data$ = this.routes.getCurrent().pipe(shareReplay(1));

  private url: string = window.location.href;
  private title: string =
    'Angular hidden features of dependecy injection angular hidden features of dependecy injection angular hidden features of dependecy injection';
  private user: string = 'ravciok';

  public twitterLink = `https://twitter.com/intent/tweet?url=${this.url}&text=${this.title}&via=${this.user}`;
  public facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${this.url}&quote=${this.title}`;
  public linkedinLink = `https://www.linkedin.com/sharing/share-offsite/?url=${this.url}&title=${this.title}`;

  constructor(private routes: ScullyRoutesService, private titleService: Title) {
    this.data$.pipe(take(1)).subscribe((data) => {
      this.titleService.setTitle(data.title as string);
    });
  }
}
