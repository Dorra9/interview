import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import Firebase modules + environment
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

// Import below modules for NGX Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Reactive Form Module
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';

import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBlogComponent,
    BlogListComponent,
    BlogDetailComponent

  ],
  imports: [
    ReactiveFormsModule, // Reactive forms module
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    NgxPaginationModule,  // Include it in imports array
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
