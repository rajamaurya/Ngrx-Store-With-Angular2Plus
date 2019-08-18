import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostReducer } from './Reducers/Post.reducers';
import { PostService } from './PostService.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
        post: PostReducer,
    })
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
