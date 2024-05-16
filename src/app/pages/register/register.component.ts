import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  regiObj: Register;

  constructor(private http: HttpClient,private router: Router) {
    this.regiObj = new Register();
  }
  phoneNumberControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]{10}$') // Adjust the regex pattern as needed
  ]);
  onRegister(registrationForm: NgForm){
    if (registrationForm.valid) {
      this.http.post('http://localhost:3000/user/userRegister', this.regiObj).subscribe((res:any)=>{
        console.log("res: ", res);
        if(res.status) {
          alert(res.message);
          localStorage.setItem('email',this.regiObj.email)
          this.router.navigateByUrl('/dashboard')
        } else {
          alert(res.message)
        }
      })
    }else{
      alert('Kindly fill all the fields')

    }
 
  }
}

export class Register { 
  email: string;
  password: string;
  username:string;
  type:string;
  organization:string;
  contactNumber:string;


  constructor() {
    this.email = '';
    this.password = '';
    this.username = '';
    this.type = '';
    this.organization = '';
    this.contactNumber = '';

  } 
}