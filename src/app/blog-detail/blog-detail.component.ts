import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Blog } from './../shared/blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  blog : Blog;
  constructor(
    private crudApi: CrudService,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi.GetBlog(id).valueChanges().subscribe(data => {
      this.blog=data;
      console.log("bb :",this.blog);
    })
 }

  ngOnInit(): void {
   
  }

  goBack() {
    this.location.back();
  }

}
