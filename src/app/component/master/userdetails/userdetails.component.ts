import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { RouterModule,Router,CanActivate } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';
import { Observable }  from 'rxjs/Observable';
import { FormBuilder, FormGroup, FormControl, Validators,FormGroupDirective,NgForm } from '@angular/forms';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
constructor
        (
            private http: HttpClient,
            private router: Router,
            private toastr: ToastrService,
            private formBuilder: FormBuilder
        ) {}

  ngOnInit(): void {

    //     this.createForm();
    // this.setChangeValidate();
  }

logout(){


}

  firstname = new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')]);
  lastname = new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')]);
  email = new FormControl('', [Validators.required, Validators.email]);
  mobile = new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('[a-zA-Z ]*')]);
  address = new FormControl('', [Validators.required, Validators.maxLength(500), Validators.pattern('[a-zA-Z ]*')]);
  password=new FormControl('', [Validators.required, Validators.minLength(8)]);
  Conpassword=new FormControl('', [Validators.required, Validators.minLength(8)]);


 

  getErrorMessageFname() {
    if (this.firstname.hasError('required')) {
      return 'You must enter a value';
    }

    return this.firstname.hasError('firstname') ? 'Not a valid firstname' : '';
  }

 getErrorMessageLname() {
    if (this.lastname.hasError('required')) {
      return 'You must enter a value';
    }

    return this.lastname.hasError('lastname') ? 'Not a valid lastname' : '';
  }
  getErrorMessageemail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

   getErrorMessagepassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';
  }

  getErrorMessageconfirmpassword() {
    if (this.Conpassword.hasError('required')) {
      return 'You must enter a value';
    }

    return this.Conpassword.hasError('Conpassword') ? 'Not a valid password' : '';
  }
  

  getErrorMessagemobile() {
    if (this.mobile.hasError('required')) {
      return 'You must enter a value';
    }

    return this.address.hasError('address') ? 'Not a valid address' : '';
  }
  getErrorMessageaddress() {
    if (this.address.hasError('required')) {
      return 'You must enter a value';
    }

    return this.address.hasError('address') ? 'Not a valid address' : '';
  }




    onSubmit(){
    this.firstname.value

       this.http.post('http://localhost/testing/Angular_DB.php',{from: 'User_Details', action: 'add', 
         first:this.lastname.value,email:this.email.value,password:this.password.value,Conpassword:this.Conpassword.value,address:this.address.value,
         mobile:this.mobile.value
})
       .subscribe((res: any)=>{
        if(res.status){          
           this.toastr.success('Success', res.message);
 
         } else {
           this.toastr.error('Success', res.message);
               console.log(res);
         }                   
       },(err)=>{
               console.log(err);
       });

   
 }

}
