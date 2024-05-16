import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  users:any

  constructor(private router: Router,private http:HttpClient) {

  }
  ngOnInit(): void {
    this.getAllusers();
  }
  getAllusers() {
    const email = localStorage.getItem('email');
    console.log("email: ", email);
    var data = {
      email : email
    }
    this.http.post('http://localhost:3000/user/UserDetails',data).subscribe((res:any) => {
      this.users = res.data;
      console.log("this.users: ", this.users);
    })
  }

  logoff() {
    this.router.navigateByUrl('/login');
  }
}
