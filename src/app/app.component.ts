import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from './services/authservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  loggedIn=false;

    constructor(private router:Router , private authService:AuthservicesService) {}

    ngOnInit(){
      
      this.loggedIn=!!this.authService.getoken();
      this.authService.notiftyLogin$.subscribe(data =>{
      this.loggedIn=true;
      });
    }
  

  logout(){
    localStorage.removeItem('token');
    alert("Logout Sucessfully")
    this.router.navigate(['/login'])
    this.loggedIn=false;
  }

  

}
