import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'space-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((route) => {
          let child = this.activatedRoute.firstChild;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else if (child.snapshot.data && child.snapshot.data['title']) {
              return child.snapshot.data;
            } else {
              return null;
            }
          }
          return null;
        }),
        filter(Boolean)
      )
      .subscribe((data: any) => {
        this.titleService.setTitle(data.title);
        this.metaService.updateTag({ name: 'description', content: data.description });
      });
  }
}
