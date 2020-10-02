import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textVal = 'training-Sep';
  fileName='';
  day='Thursday';
  p1=true;

  getData(){
    console.log(document.getElementById('getData')) 
       }

       getChildData(data){
console.log(data);
       }
}
