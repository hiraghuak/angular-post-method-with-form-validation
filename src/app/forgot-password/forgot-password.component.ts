import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private titleService: Title) { }

    // FORM VALIDAITON START
    form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
    // FORM VALIDAITON END

  ngOnInit() {
    this.titleService.setTitle( 'Forgot Password' );
  }

}
