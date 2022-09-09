import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthservicesService } from 'src/app/services/authservices.service';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent implements OnInit {

  myBlog:any=[];
  title:any='';
  content:any='';
  currentUpdatingBlog:any
  

  constructor(private authservicesService:AuthservicesService) { }

  ngOnInit(): void {
    this. MyBlogs()
  }

  MyBlogs(){
    this.authservicesService.myBlogs().subscribe((data:any)=>{
      console.log(data);

      this.myBlog=data.blogs;
    },
    (err:any) => {
      console.log(err);
    })
  }

  deleteBlog(id:number){
    console.log("delete......")
    this.authservicesService.deleteBlog(id).subscribe((data:any)=>{
      // console.log(data);
      this.MyBlogs()
      
    },
    (err:any) => {
      console.log(err);
    })
  }

  openModal(blog:any){
    this.currentUpdatingBlog=blog
  }

  updateBlogs(id:any,updatedTitle:HTMLInputElement,updatedContent:HTMLTextAreaElement){
    const data:any={title:updatedTitle.value,content:updatedContent.value,id:id}
    console.log(id)
    console.log(updatedTitle.value)
    console.log(updatedContent.value)
    this.authservicesService.updateBlog(data).subscribe((data:any)=>{
      console.log(data);
      this.MyBlogs()
    },
    (err:any) => {
      console.log(err);
    })
  }


  createBlogs(){

    this.authservicesService.createBlog({title:this.title,content:this.content}).subscribe((data:any)=>{
      // const data={title:res.blog.title,content:res.blog.content}
      // this.authservicesService.blogs.push(data)
      // console.log(data);
      this.MyBlogs()
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
       if(blog.tempComment.value ===""){
         return alert("Please type Comment")
       }
          console.log(data);
          const emoji=document.getElementById('emojis')
          console.log(emoji)
          this.myBlog.forEach((blog:any) => {
            if (blog._id === id) {
              blog.comments = data.blog.comments;
            }
          });
        

      },
      (err) => {}
      );
    }













}