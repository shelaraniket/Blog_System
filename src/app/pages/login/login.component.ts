import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/services/authservices.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any='';
  password:any='';
  loading=false;
  loginError=false;

  fb:FormBuilder=new FormBuilder()
  fg:any=null;

  constructor( private router:Router,private authservicesService :AuthservicesService) { }

  ngOnInit(): void {
    this.fg=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
    this.fg.valueChanges.subscribe((data : any) => console.log(data));
  }

  login(){
    console.log("login works")
    console.log(this.fg.errors)
    console.log(this.fg.valid)
    console.log(this.fg.value)
    
    if(this.fg.valid){
      this.loginError=false;
       this.loading=true;
      this.authservicesService.login(this.fg.get('email').value,this.fg.get('password').value).subscribe((data:any)=>{
         console.log(`login sucess`,data)
         localStorage.setItem('token',data.token)
         //this.router.navigate(['/home'])-:it is used whem we login sucessfully it redirected to home page
         this.router.navigate(['/home'])
       },
       err  => {
         this.loginError=true;
        this.loading=false;
         console.log(`login error`,err)
       })
     }
  }

}
