import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  localAPI: '../../src/assets/data/CrawledAPI.json';
  temoAPI: '../../src/assets/data/Temo.json' ;
  epAPI: '../../src/assets/data/Episode.json';
  TeleAPI: '../../src/assets/data/Tele.json';


  constructor( private http: HttpClient) { }

  getNew() {
    return this.http.get(this.localAPI);
  }

  getEp() {
    return this.http.get(this.epAPI);
  }

  getTemo() {
    return this.http.get(this.temoAPI);
  }

  getTele() {
    return this.http.get(this.TeleAPI);
  }
}
