import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Router,CanActivate } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 public username:any;
 public password:any;
 constructor
        (
            private Http: HttpClientModule,
            private router: Router,
            private toastr: ToastrService
        ) {}

  ngOnInit(): void {
  }

onSubmit(form){

	if((form.value.username =="") || (form.value.username ==null)){
      
    this.toastr.error("Please enter the email id");

	}else if((form.value.password =="") || (form.value.password == null)){
      
        this.toastr.error("Please enter the passwords");

	}else if(form.value.username !="test@gmailcom"){
     
        this.toastr.error("Incorrect correct name");

  }else if(form.value.password !="123"){
     
        this.toastr.error("Incorrect correct password");
  }

	if((form.value.username =="test@gmailcom") && ((form.value.password =="123"))){

      this.router.navigate(['master/userdetails-view']);


      this.toastr.success('Welcome to projects');
	}

}

}
