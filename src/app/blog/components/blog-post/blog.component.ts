import { Component, ViewEncapsulation } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Meta, Title } from '@angular/platform-browser';
import { tap } from 'rxjs/operators';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';

declare var ng: any;

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
  public data$ = this.routes.getCurrent().pipe(tap(this.updateMetaData()));

  constructor(private routes: ScullyRoutesService, private titleService: Title, private metaService: Meta) {}

  private updateMetaData(): (data: ScullyRoute) => void {
    return (data) => {
      this.titleService.setTitle(data.title + '');
      this.metaService.updateTag({ name: 'description', content: data.description });
    };
  }
}
