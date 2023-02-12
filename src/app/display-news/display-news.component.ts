import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-news',
  templateUrl: './display-news.component.html',
  styleUrls: ['./display-news.component.scss']
})
export class DisplayNewsComponent implements OnInit {

  constructor(public http:HttpClient) { }
  news:any;

  ngOnInit(): void {
    this.getData();
  }
  getData()
  {
    this.http
      .get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed')
      .subscribe((data: any) => {
        console.log(data);
        this.news = data;
        console.log(this.news[0].date);
      });
      console.log(this.news);

  }

}
