import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {


  users:any;
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    console.log("dddddddd");
    this.getUserDetails();
  }

 async getUserDetails() {
    const email = localStorage.getItem('email');
    console.log("email: ", email);
    console.log("nnnnnnnnnn");
    var data = {
      email : email
    }
     this.http.post('http://localhost:3000/user/UserDetails',data).subscribe((res:any) => {
      console.log("res: ", res);
      this.users = res.data;
      console.log("this.users:??????????? ", this.users);
    } )
  }

}
