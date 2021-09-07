import { Component, ViewEncapsulation } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Title } from '@angular/platform-browser';
import { shareReplay, tap } from 'rxjs/operators';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'space-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent {
  public icons: Record<string, IconDefinition> = {
    faLongArrowAltLeft,
    faTwitter,
    faFacebook,
    faLinkedin,
  };
  public data$ = this.routes.getCurrent().pipe(shareReplay(1), tap(this.setInitData));

  public twitterLink = '';
  public facebookLink = '';
  public linkedinLink = '';

  constructor(private routes: ScullyRoutesService, private titleService: Title) {}

  private setInitData(): (data: ScullyRoute) => void {
    return (data) => {
      const url: string = `https://ravciok.dev${data.route}`;

      this.twitterLink = `https://twitter.com/intent/tweet?url=${url}&text=${data.title}&via=ravciok`;
      this.facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${data.title}`;
      this.linkedinLink = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;

      this.titleService.setTitle(data.title + '');
    };
  }
}
