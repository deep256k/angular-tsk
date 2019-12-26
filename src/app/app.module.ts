import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostCommentComponent } from './components/post-comment/post-comment.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: 'details/:id', component: PostCommentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostDetailsComponent,
    PostCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
