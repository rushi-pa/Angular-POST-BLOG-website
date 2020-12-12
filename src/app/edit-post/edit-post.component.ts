import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service'
import { ActivatedRoute,Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  blogPost:BlogPost;
  
  tags: string =null;

  post;
  constructor(private data: PostService,private Router:ActivatedRoute,private Route:Router) { }

  ngOnInit(): void {
    this.post = this.data.getPostbyId(this.Router.snapshot.params['id']).subscribe(data=>{
      this.blogPost = data;
      this.tags = data.tags.toString();
    })
  }

  // onSubmit(f: NgForm): void { }

  formSubmit(f: NgForm): void{
    
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());
    this.data.updatePostById(this.blogPost._id,this.blogPost).subscribe(()=>{
      this.Route.navigate(['/admin']);
    })
  }

  deletePost(){
    this.data.deletePostById(this.blogPost._id).subscribe(()=>{
      this.Route.navigate(['/admin']);
    })
  }

  ngOnDestroy() {
    if (this.post) this.post.unsubscribe();
  }

}
