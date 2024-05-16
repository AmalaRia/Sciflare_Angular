import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule,RouterModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login;

  constructor(private http: HttpClient,private router: Router) {
    this.loginObj = new Login();
  }

  onLogin(loginForm: NgForm) {
    this.http.post('http://localhost:3000/user/userLogin', this.loginObj).subscribe((res:any)=>{
      console.log("res: ", res);
      if(res.status) {
        alert("Login Success");
        localStorage.setItem('angular17token', res.token)
        localStorage.setItem('email',this.loginObj.email)
        this.router.navigateByUrl('/dashboard')
      } else {
        alert(res.message)
      }
    })
  }
}

export class Login { 
    email: string;
    password: string;
    constructor() {
      this.email = '';
      this.password = '';
    } 
}
