import { Component, OnInit } from '@angular/core';
import { paths } from './paths';
import { paths2 } from './paths2';
import { LatLngLiteral, PolyMouseEvent } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'polygon-googlemap';
  lat = 13.607668;
  lng = 100.691143;

  paths: Array<LatLngLiteral> = paths;
  paths2: Array<LatLngLiteral> = paths2;

  ngOnInit() {
    // console.log(this.paths);
  }

  onPolylClick(id: string, e: PolyMouseEvent) {
    console.log(id);
    console.log(e.latLng.lat());
    console.log(e.latLng.lng());
  }
}
