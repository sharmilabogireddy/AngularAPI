import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logIn',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css']
})
export class LogInComponent implements OnInit {

  form = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(8) ]),
    password: new FormControl('', [Validators.required, Validators.minLength(8) ]),

  });

  constructor(private router: Router) { }
  get f() {
    return this.form.controls;
  }

  LogIn(): void{
    //console.log('Form submission', this.form.value);
    console.log('UserName: ', this.form.value.userName);
    console.log('Password: ', this.form.value.password);
    this.router.navigateByUrl('home');
    console.log('Welcome to LogIn Page.');

  }

  ngOnInit() {
  }

}
