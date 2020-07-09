import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { RouterModule,Router,CanActivate } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-userdetails-view',
  templateUrl: './userdetails-view.component.html',
  styleUrls: ['./userdetails-view.component.css']
})
export class UserdetailsViewComponent implements OnInit {

constructor
        (
            private http: HttpClient,
            private router: Router,
            private toastr: ToastrService
        ) {}


  ngOnInit(): void {

  	this.Loadlist();
  }

public data:any=[];


Loadlist(){
this.http.post('http://localhost/testing/Angular_DB.php',{from: 'User_Details', action: 'List'})
       .subscribe((res: any)=>{
          if(res.status){
             this.data=res.content;
             console.log(this.data,"data");
         }else{
             console.log(res.message);             
         }                   
       },(err)=>{
               console.log(err);
       });
  }

}
