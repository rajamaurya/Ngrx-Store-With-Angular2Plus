import {Post} from '../Models/Post.Model';
import { PostAction, PostActionItem, Post_Action_Type } from '../Actions/Post.actions';

const default_post: Array<Post> = [
    {
       id : 1,
       userId: 1,
       title: "Initial Title",
       body: "Initial Body Content"
    }
]

export function PostReducer(state: Array<Post> = default_post, action : PostAction){
    
       switch (action.type) {
           case Post_Action_Type.GET_POST:
               
               return [...state, action.payload]
       
           default:
             return state;
       }
}