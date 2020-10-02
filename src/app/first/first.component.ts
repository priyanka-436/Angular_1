import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from '../Services/Api.service';
import {Router,ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  public users=[];
  public todayNumber;
  public todayDate;
  public todayString;
  public todayISOString;
  public username="Test";




  constructor(private formBuilder: FormBuilder,private service : ApiService, private router : Router) { }
  testForm : FormGroup

  ngOnInit(): void {   
   this.testForm = this.formBuilder.group({
    username: ['', Validators.required],
   }) 

   this.service.getUsers().subscribe(result => {
     this.users=result.data
   })
   this.getData()
}
 getData(){
  this.service.getUsers().subscribe(result => {
    this.users=result.data
  })
 }
editUser(id){
this.router.navigate(['/editUser',id])
}
deletUser(id){
  var r = confirm("Are you sure you want to delete");
  if (r == true) {
    this.service.deleteUser(id).subscribe(resp=>{
      this.getData()
  
    })
  } else {
    this.getData()

  }
 
}

}
