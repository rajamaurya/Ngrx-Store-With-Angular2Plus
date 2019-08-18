import { Component, OnInit } from '@angular/core';
import {Observable} from 'node_modules/rxjs';
import { Post } from './Models/Post.Model';
import { PostService } from './PostService.service';
import { Post_Action_Type, PostAction, PostActionItem } from './Actions/Post.actions';

import {AppState} from './Models/App.state.model';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NGRX-APP';
  post$: Post[];
  posts$: Post[];
  ifNoPostAvilable: boolean = true;
   constructor(private store : Store<AppState>, public postService: PostService ){
   
   }
  ngOnInit(){
    
   
     this.store.select(store => store.post).subscribe(data => this.post$ = [...data] );
     
  }
  GetPosts(){
   
      this.ifNoPostAvilable = false; 
      this.postService.getAllPosts().subscribe(res => { 
        this.posts$ = [...res];
        this.store.dispatch({type:Post_Action_Type.GET_POST, payload:  this.posts$ })  ;
        
      });
    
  }
}
