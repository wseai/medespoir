import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import * as tele from '../../../assets/data/Tele.json';

@Component({
  selector: 'app-tele',
  templateUrl: './tele.component.html',
  styleUrls: ['./tele.component.css']
})
export class TeleComponent implements OnInit {

  videos: any = (tele as any).default;

  constructor() { }

  ngOnInit() {
    console.log(tele);
  }

}
