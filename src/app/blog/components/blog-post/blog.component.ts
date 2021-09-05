import { AfterViewInit, Component, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
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
export class BlogComponent implements AfterViewInit {
  @ViewChild('comments') commentsContainer: any;

  public data$ = this.routes.getCurrent().pipe(shareReplay(1));

  private url: string = window.location.href;
  private title: string =
    'Angular hidden features of dependecy injection angular hidden features of dependecy injection angular hidden features of dependecy injection';
  private user: string = 'ravciok';

  public twitterLink = `https://twitter.com/intent/tweet?url=${this.url}&text=${this.title}&via=${this.user}`;
  public facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${this.url}&quote=${this.title}`;
  public linkedinLink = `https://www.linkedin.com/sharing/share-offsite/?url=${this.url}&title=${this.title}`;

  constructor(private routes: ScullyRoutesService, private titleService: Title, private renderer: Renderer2) {}

  public ngAfterViewInit() {
    this.setTitle();
    this.addCommentsScript();
  }

  private setTitle(): void {
    this.data$.pipe(take(1)).subscribe((data) => {
      this.titleService.setTitle(data.title as string);
    });
  }

  private addCommentsScript(): void {
    const script = this.renderer.createElement('script');

    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'ravciok/blog-comments',
      'issue-term': 'pathname',
      theme: 'github-light',
      crossorigin: 'anonymous',
      async: true,
    };

    for (const [key, value] of Object.entries(attributes)) {
      script.setAttribute(key, value);
    }

    this.renderer.appendChild(this.commentsContainer.nativeElement, script);
  }
}
