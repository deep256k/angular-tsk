import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {
  id: number;
  blogDetails: object;
  show = true;
  showbutton = false;
  commentData: object;

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
      this.id = this.route.snapshot.params.id;
      this.http.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .subscribe(res => {
          this.blogDetails = res;
         // console.log('res is', res);
      });
  }
  showComments() {
    this.show = true;
    this.showbutton = true;
    this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.id}`)
    .subscribe(res => {
      this.commentData = res;
    });
  }
  hideComments() {
    this.show = false;
    this.showbutton = false;
  }
  deletePost() {
    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
    .subscribe(() => {
     this.router.navigate(['']);
    });
  }
}
