import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data/CrawledAPI.json';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {

  heading = 'les nouveautés dans l' + 'esthétique';
  News: any = (data as any).default;

  constructor() { }

  ngOnInit() {
    console.log(data);
  }

}
