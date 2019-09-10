import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private titleService: Title) { }

    // FORM VALIDAITON START
    form = new FormGroup({
      phonenumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ])
    });
    // FORM VALIDAITON END


  ngOnInit() {
    this.titleService.setTitle( 'Login' );
  }

}
