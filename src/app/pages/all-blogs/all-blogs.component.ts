import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from 'src/app/services/authservices.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {

  allBlog:any=[];
  constructor(private authservicesService:AuthservicesService) { }

  ngOnInit(): void {
    this.AllBlogs();
  }

  AllBlogs(){
    this.authservicesService.AllBlogs().subscribe((data:any)=>{
      console.log(data);
      this.allBlog=data.blogs;
    },
    (err:any) => {
      console.log(err);
    })
  }

  toggle(blog: any) {
    if (blog.showComments) {
    blog.showComments = false;
    } else {
    blog.showComments = true;
    }
    }
  
  
  
    
  
    PostComment(id: any, blog: any) {
      this.authservicesService.comment(id, blog.tempComment).subscribe(
        (data: any) => {
          console.log(data);
          this.allBlog.forEach((blog:any) => {
            if (blog._id === id) {
              blog.comments = data.blog.comments;
            }
          });
        },
        (err) => {

        }
        );

    }

}  
