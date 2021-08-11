import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Blog } from './../shared/blog'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  p: number = 1;
  Blog: Blog[];
  hideWhenNoBlog: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  nameblog: string ='';

  constructor(
    public crudApi: CrudService,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.dataState();
    let s = this.crudApi.GetBlogsList(); 
    s.snapshotChanges().subscribe(data => {
      this.Blog = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Blog.push(a as Blog);
      })
    })
  }

  dataState() {     
    this.crudApi.GetBlogsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoBlog = false;
        this.noData = true;
      } else {
        this.hideWhenNoBlog = true;
        this.noData = false;
      }
    })
  }

  deleteBlog(blog) {
    if (window.confirm('Are sure you want to delete this blog ?')) { 
      this.crudApi.DeleteBlog(blog.$key)
      this.toastr.success(blog.title + ' successfully deleted!');
    }
  }

  Search(){
    console.log(this.nameblog);
    if(this.nameblog == ""){
      this.Blog=[]
      this.ngOnInit();
    }else{
      console.log(this.nameblog)
      this.Blog= this.Blog.filter(res => {
        console.log(res.title);
        console.log(res.title.toLocaleLowerCase().match(this.nameblog.toLocaleLowerCase()));
        return res.title.toLocaleLowerCase().match(this.nameblog.toLocaleLowerCase())
      })
    }

    
  }

  upvoteBlog(blog){
    let v = blog.upvote;
    v+=1;
    this.crudApi.UpvoteBlog(blog.$key,v);
  }
  downvoteBlog(blog){
    let v = blog.downvote;
    v+=1;
    this.crudApi.DownvoteBlog(blog.$key,v);
  }
}
