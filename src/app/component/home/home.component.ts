import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import * as episode from '../../../assets/data/Episode.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: any = (episode as any).default;

  constructor() { }

  ngOnInit() {
    console.log(episode);
  }
}
