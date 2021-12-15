import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import  { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: any;  
credentialsList:{name:string, password:string}[] = [];

  constructor(private login: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
console.log(this.credentialsList)
    this.loginForm = this.login.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', Validators.required]
      // lastName: [''],
      // address: this.login.group({
      //   street: [''],
      //   city: [''],
      //   state: [''],
      //   zip: ['']
      // }),
    });
    this.getUserCredentiasl();
  }


  handleSubmit() {
    console.log(this.loginForm.value);
  }

  getUserCredentiasl() {
    // let url = 'https://api.first.org/data/v1/countries';
    const url = 'https://restcountries.eu/rest/v2/name/india';
    // let url = 'app/shared/constants/login-credentials.json';
     this.api.get(url).subscribe(
      data => { 
        console.log('data', data);
        this.credentialsList = data;

      },
      err => {
        console.log('err', err);

      }
    );

  }

  get firstname() {
    return this.loginForm.get('firstname'); //notice this
  }
  get password() {
    return this.loginForm.get('password');  //and this too
  }
}
