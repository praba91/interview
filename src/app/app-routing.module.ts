import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule,Routes,CanActivate } from '@angular/router'; 
import { LoginComponent } from './component/authendication/login/login.component';
import { UserdetailsComponent } from './component/master/userdetails/userdetails.component';
import { UserdetailsViewComponent } from './component/master/userdetails-view/userdetails-view.component';


const routes: Routes = [

		 {path :'',component:LoginComponent},
		 {path :'login',component:LoginComponent},
		 {path :'master/userdetails',component:UserdetailsComponent},
		 {path :'master/userdetails-view',component:UserdetailsViewComponent},

 ];

@NgModule({
  imports: [
          RouterModule.forRoot(routes,{useHash:true})
  ],
  exports: [RouterModule],
   declarations: []
})
export class AppRoutingModule {


 }
