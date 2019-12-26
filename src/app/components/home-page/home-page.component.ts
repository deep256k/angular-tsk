import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  userData: object;

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(response => {
      this.userData = response;
    });
  }
  navigateToPosts(i) {
    this.router.navigate([`posts/${this.userData[i].id}`]);

  }
}
