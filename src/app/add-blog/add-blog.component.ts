import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  public blogForm: FormGroup;  
  constructor( public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router) {

      let formControls = {
        title: new FormControl('', [
          Validators.required, Validators.minLength(2)
        ]),
        content: new FormControl('', [
          Validators.required, Validators.minLength(10)
        ]),
        author: new FormControl('', [
          Validators.required,
        ])
      }
      this.blogForm = fb.group(formControls);
     }

  ngOnInit(): void {
    this.crudApi.GetBlogsList();

  }



  get title() {
    return this.blogForm.get('title');
  }

  get content() {
    return this.blogForm.get('content');
  }  

  get author() {
    return this.blogForm.get('author');
  }


  ResetForm() {
    this.blogForm.reset();
  }  

  submitBlogData() {
    this.crudApi.AddBlog(this.blogForm.value);
    this.toastr.success(this.blogForm.controls['title'].value + ' successfully added!');
    this.ResetForm();
    this.router.navigate(['/view-blogs']);
   };

}
