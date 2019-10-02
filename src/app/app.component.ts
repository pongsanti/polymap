import { Component, OnInit } from '@angular/core';
import { paths } from './paths';
import { paths2 } from './paths2';
import { LatLngLiteral, PolyMouseEvent, LatLngBounds } from '@agm/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  map: any;
  title = 'polygon-googlemap';
  lat = 13.607668;
  lng = 100.691143;

  paths: Array<LatLngLiteral> = paths;
  paths2: Array<LatLngLiteral> = paths2;

  ngOnInit() {
    // console.log(this.paths);
  }

  loadAPIWrapper(map) {
    console.log('map loaded');
    this.map = map;
  }

  onPolylClick(id: string, e: PolyMouseEvent) {
    console.log(id);
    console.log(e.latLng.lat());
    console.log(e.latLng.lng());
  }

  onBoundsChange(b: LatLngBounds) {
    const ne = b.getNorthEast();
    const sw = b.getSouthWest();
    console.log(`min lng = ${sw.lng()}, min lat = ${sw.lat()}, max lng = ${ne.lng()}, max lat = ${ne.lat()}`);
  }

  onMapClick(e: any) {
    console.log(e);
    const location = e.coords;
    this.lat = location.lat;
    this.lng = location.lng;
  }
}
