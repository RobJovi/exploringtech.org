import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }
  blog;
  sub;
  id;
  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      this.id = params;
      this.fetchBlog();
    });
  }

  fetchBlog(){
    
  }

}
