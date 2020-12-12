import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service'
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit {

  blogPosts: Array<BlogPost> ;
  posts;
 
  
  constructor(private data:PostService, private router: Router) { }

  ngOnInit(): void {
    this.posts = this.data.getAllPosts().subscribe(data=>this.blogPosts = data);
  }

  rowClicked(e, id){
    this.router.navigate(['/admin/post', id]);
    e.preventDefult();
  }

  ngOnDestroy() {
    if (this.posts) this.posts.unsubscribe();
  }

}
