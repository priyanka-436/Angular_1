import {Component,OnInit} from '@angular/core'

@Component({
    selector:'app-second',
  // template:`<h3>HeyThere I am a template!!!!</h3>`,
   templateUrl:'./second.component.html',
   styleUrls:['./second.component.css'],
})

export class SecondComponennt implements OnInit {
    title="From Component!!!"
p1=true;
Test=3;
public users=[];
    ngOnInit(){
this.users=[{
    "firstName":"Rufus",
    "Occupation":"Developer",
    "temp":25,
    "salary":700000
},
{
    "firstName":"Jack",
    "Occupation":"Developer",
    "temp":26,
    "salary":70006700
},
{
    "firstName":"Fisher",
    "Occupation":"Developer",
    "temp":45,
    "salary":45000
},
{
    "firstName":"Mike",
    "Occupation":"Developer",
    "temp":56,
    "salary":348907
}]

for(var i=0;i<this.users.length;i++){
    console.log(this.users[i].firstName)
}
}

}
