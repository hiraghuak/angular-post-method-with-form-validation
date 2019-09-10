import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otherlogin',
  templateUrl: './otherlogin.component.html',
  styleUrls: ['./otherlogin.component.css']
})
export class OtherloginComponent implements OnInit {
  baseUrl = 'http://52.77.255.211:8088';

  postdata: any;
  // FORM VALIDAITON START
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });
  // FORM VALIDAITON END

  constructor(
    private titleService: Title,
    private http: HttpClient,
  ) {

  }

  onClickMe(value: any, value2: any) {
    console.log(value + ' formDAta ' + value2);

    this.postdata = {
      email: value,
      password: value2
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http
      .post(this.baseUrl + '/api/user/login', this.postdata, httpOptions)
      .toPromise()
      .then((data: any) => {
        console.log(data);
      });

  }

  ngOnInit() {
    this.titleService.setTitle('Try Other Login methods');
  }
}
