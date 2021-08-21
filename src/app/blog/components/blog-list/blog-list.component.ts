import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'app-blog',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  public blogs$: Observable<any[]> = this.srs.available$.pipe(
    tap((data) => console.log('routes: ', data)),
    map((routes) =>
      routes
        .filter((route) => !!route.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    )
  );

  public trackByFn = (index: number) => index;

  constructor(private srs: ScullyRoutesService) {}
}
