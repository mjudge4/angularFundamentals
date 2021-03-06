import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'selector-name',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    username
    password
    mouseoverLogin
    loginInvalid = false;

    constructor(private authService:AuthService, private router:Router) { }

    ngOnInit() { }

    login(formValues){
        this.authService.loginUser(formValues.userName, formValues.password)
        .subscribe(resp => {
            if(!resp){
                this.loginInvalid = true;
            }else{
                this.router.navigate(['events'])
            }
        });
        
    }

    cancel(){
        this.router.navigate(['/events']);
    }
}