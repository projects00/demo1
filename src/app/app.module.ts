import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataService} from './data.service'
import { HttpModule } from '@angular/http';
import { LoadingModule } from 'ngx-loading';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdminrepoComponent } from './adminrepo/adminrepo.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{
   path: 'app',
  component: AppComponent},
  {path: 'admin',
  component: AdminComponent,
    children : [
                { path: 'dashboard', component: AdmindashComponent },
                { path: 'report', component: AdminrepoComponent} 
]}];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdmindashComponent,
    AdminrepoComponent
  ],
  imports: [
    BrowserModule,HttpModule,LoadingModule,
     RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
