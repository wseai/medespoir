import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import * as episode from '../../../assets/data/Episode.json';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  videos: any = (episode as any).default;

  constructor() { }

  ngOnInit() {
    console.log(episode);
  }

}
