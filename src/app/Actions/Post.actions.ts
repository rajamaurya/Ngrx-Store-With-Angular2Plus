import { Action } from '@ngrx/store';

import { Post } from '../Models/Post.Model';

export enum Post_Action_Type {
   GET_POST = '[GET_POST] Get Post'
}

export class PostActionItem implements Action{
    readonly type = Post_Action_Type.GET_POST;
    constructor(public payload : Post){

    }
}
export type PostAction = PostActionItem;