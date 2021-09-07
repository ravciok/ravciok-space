import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ScullyRoutesService } from '@scullyio/ng-lib';

@Component({
  selector: 'space-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public blogs$: Observable<any[]> = this.srs.available$.pipe(
    tap((data) => console.log('routes: ', data)),
    map((routes) => routes.filter((route) => !!route.published))
  );

  public trackByFn = (index: number) => index;
  constructor(private srs: ScullyRoutesService) {}
}
