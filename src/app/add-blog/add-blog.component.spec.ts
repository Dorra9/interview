import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogComponent } from './add-blog.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('AddBlogComponent', () => {
  let component: AddBlogComponent;
  let fixture: ComponentFixture<AddBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBlogComponent ],
      imports: [ReactiveFormsModule, FormsModule], 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
