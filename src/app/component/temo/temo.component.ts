import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import * as temo from '../../../assets/data/Temo.json';

@Component({
  selector: 'app-temo',
  templateUrl: './temo.component.html',
  styleUrls: ['./temo.component.css']
})
export class TemoComponent implements OnInit {

  videos: any = (temo as any).default;

  constructor() { }

  ngOnInit() {
    console.log(temo);
  }

}
