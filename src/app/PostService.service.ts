import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient} from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Post } from './Models/Post.Model';
import { map} from 'node_modules/rxjs/operators'


@Injectable()
export class PostService {
  
  posts$ : Observable<Post[]>;
  post: Post[];
  
  API_URL = "https://jsonplaceholder.typicode.com/posts";

  constructor(public http : HttpClient) {}

    getAllPosts(): Observable<Post[]> {

          this.posts$ = this.http.get<Post[]>(`${this.API_URL}`).pipe(map(res => res));
     return this.posts$;
} 
}