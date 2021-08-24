import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/Services/login.service';
import { ErrordataComponent } from '../errordata/errordata.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   users:any;
   user: any;
  constructor(
    private modalService:NgbModal,
    private userService: LoginService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  validateForm = new FormGroup({
    email: new FormControl("username@mail.com",[Validators.required,Validators.email]),
    password: new FormControl(1234567,[Validators.required,Validators.minLength(5),])
  })

  get validateEmail(){
    return this.validateForm.controls.email.valid;
  }
  get validatePassword(){
    return this.validateForm.controls.password.valid;
  }

  getUsers(){
    this.userService.getUsers().subscribe(res=>{
      console.log(res)
      this.users = res;
    })
  }
  login(user:any){
    this.userService.login(user).subscribe(res=>{
      console.log(res)
      if(res){
        setTimeout(()=>{
            this.route.navigateByUrl('/contacts')
          },1000);
      }
        
    
    })
  }
  onSubmit(){
    
     if(this.validateEmail && this.validatePassword){
      
          this.user = {
            email: this.validateForm.controls.email.value,
            password: this.validateForm.controls.password.value
          }

          this.login(this.user);

        }
      // else{
      //   this.modalService.open(ErrordataComponent,{
      //     size: 'lg'
      //   })
      // }
    //});
  }
}
