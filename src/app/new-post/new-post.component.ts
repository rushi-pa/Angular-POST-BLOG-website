import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service'
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  blogPost:BlogPost = new BlogPost();
  
  tags: string =null;

  constructor(private data: PostService,private Route:Router) { }

  ngOnInit(): void {

  }

  formSubmit(f: NgForm): void{
    this.blogPost.tags = this.tags.split(',').map(tag => tag.trim());
    this.blogPost.isPrivate = false;
    this.blogPost.postDate = new Date().toLocaleDateString();
    this.blogPost.postedBy = 'WEB422 Student';
    this.blogPost.views = 0;
    this.data.newPost(this.blogPost).subscribe( () => this.Route.navigate(['/admin']));
  }

  // onSubmit(f: NgForm): void { }

}
