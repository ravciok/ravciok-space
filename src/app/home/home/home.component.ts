import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ScullyRoutesService } from '@scullyio/ng-lib';
// @ts-ignore
import blobshape from 'blobshape';

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

  public generateBlob(): string {
    return blobshape({ size: 300, growth: 8, edges: 12, seed: '12345678' }).path;
  }
}
