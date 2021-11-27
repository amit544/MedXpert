import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
loading:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  register(form:any){
   console.log("here we are register");
  }

}
