import { Post } from './Post.Model';

export interface AppState{
    readonly post: Array<Post>
}