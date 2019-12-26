import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
    id: number;
  userPost: object;
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.id}&skip=0&limit=10`)
    .subscribe(res => {
     // console.log('res is ', res);
        this.userPost = res;
    });
  }
  navigateToDetails(i) {
     // console.log(i);
    this.router.navigate([`details/${ this.userPost[i].id}`]);
  }
}
