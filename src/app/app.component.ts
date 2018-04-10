
import { Component, OnInit, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data:any;
   public loading = false;
constructor(private _dataservice :DataService,private router:Router){

}

addDetail(){
    this.router.navigateByUrl('/admin');
   
}
ngOnInit() {
this.loading = true;
this._dataservice.getValues().subscribe(
      (respose) => {
        debugger;
       this.data=respose;
           this.loading = false;
      },
      (error) => {
           this.loading = false;
        console.log(error.json());
      }

    );
  } 
}
