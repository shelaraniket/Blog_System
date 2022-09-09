import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {

  public notiftyLogin$=new Subject();
  constructor(private httpClient:HttpClient) { }

  blogs:any[]=[];

  register(name:string,email:string,password:string){
    return this.httpClient.post('http://localhost:3000/user/register',{name,email,password})
  }

  login(email:string,password:string){
    return this.httpClient.post('http://localhost:3000/user/login',{email,password});
  }

  AllBlogs(){
    return this.httpClient.get('http://localhost:3000/blogs/all');
  }

  myBlogs()
  {
    return this.httpClient.get('http://localhost:3000/blogs/myblogs');
  }

  deleteBlog(id:number){
    return this.httpClient.delete(`http://localhost:3000/blog/destroy/${id}`);

  }

  updateBlog(data:any){
    return this.httpClient.put('http://localhost:3000/blog/update',data);
  }

  createBlog(data:any){
    return this.httpClient.post('http://localhost:3000/blog/create',data);
  }

  comment(blogID: any, comment: any){
    return this.httpClient.put('http://localhost:3000/blog/comment/add',{blogID, comment});
  }

  getoken(){
    this.notiftyLogin$.next(true);
    return localStorage.getItem('token')
  }

  
}
