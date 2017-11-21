import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs = [
    {
      id: "12312312",
      title: "First Blog",
      imgURL: "assets/blog/placeholder.jpg",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      date: Date.now(),
      author: 'admin',
      author_img_url: 'assets/blog/placeholder.jpg'
    },
    {
      id: "12313444",
      title: "Second Blog",
      imgURL: "assets/blog/placeholder.jpg",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      date: Date.now(),
      author: 'admin',
      author_img_url: 'assets/blog/placeholder.jpg'
    },
    {
      id: "6786782312",
      title: "Third Blog",
      imgURL: "assets/blog/placeholder.jpg",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      date: Date.now(),
      author: 'admin',
      author_img_url: 'assets/blog/placeholder.jpg'
    },
    {
      id: "1289789",
      title: "Fourth Blog",
      imgURL: "assets/blog/placeholder.jpg",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      date: Date.now(),
      author: 'admin',
      author_img_url: 'assets/blog/placeholder.jpg'
    },
    {
      id: "18796787",
      title: "Fifth Blog",
      imgURL: "assets/blog/placeholder.jpg",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      date: Date.now(),
      author: 'admin',
      author_img_url: 'assets/blog/placeholder.jpg'
    }
  ]
  constructor(public router: Router) { }

  ngOnInit() {
  }
  changeRoute(obj){
    var url = obj.title.replace(/ /g,"_");
    this.router.navigate(['/blog', url], {queryParams: {id:obj.id}});
  }
}
