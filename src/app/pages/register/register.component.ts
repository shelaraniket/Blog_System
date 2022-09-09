import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from 'src/app/services/authservices.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:string='';
  email:string='';
  password:string='';

  registerError = false;
  constructor(private authservicesService:AuthservicesService) { }

  ngOnInit(): void {
  }

  register(){
    this.authservicesService.register(this.name,this.email,this.password).subscribe((data: any)=>{
      this.registerError=false;
      alert(" User Register sucessfully")
      console.log(`register sucessful`,data)
    },
      (err: { message: any; })=>{
      this.registerError=true
      console.log(`register error`,err.message)
    })
    // console.log(this.name)
    // console.log(this.email)
    // console.log(this.password)

  }

}
