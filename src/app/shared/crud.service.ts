import { Injectable } from '@angular/core';
import { Blog } from '../shared/blog';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  blogsRef: AngularFireList<any>;
  blogRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

   // Create blog
   AddBlog(blog: Blog) {
    this.blogsRef.push({
      title: blog.title,
      content: blog.content,
      author: blog.author,
      upvote: 0,
      downvote: 0

    })
  }

  // Fetch Single blog Object
  GetBlog(id: string) {
    this.blogRef = this.db.object('blog-list/' + id);
    return this.blogRef;
  }

  // Fetch blogs List
  GetBlogsList() {
    this.blogsRef = this.db.list('blog-list');
    return this.blogsRef;
  } 
  DeleteBlog(id: string) { 
    this.blogRef = this.db.object('blog-list/'+id);
    this.blogRef.remove();
  }
  
  UpvoteBlog(id : string, val: number) {
    this.blogRef = this.db.object('blog-list/'+id);
    this.blogRef.update({
      upvote: val
    })
  } 

  DownvoteBlog(id : string, val: number) {
    this.blogRef = this.db.object('blog-list/'+id);
    this.blogRef.update({
      downvote: val
    })
  } 

  UpdateBlog(blog: Blog) {
    this.blogRef.update({
      title: blog.title,
      content: blog.content,
      author: blog.author,
      upvote: blog.upvote,
      downvote: blog.downvote
    })
  }  
}
