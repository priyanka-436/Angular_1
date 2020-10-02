import {Component,Input,Output,EventEmitter} from '@angular/core'

@Component({
    selector:'app-child',
    templateUrl:'./ChildComponent.html'
})

export class ChildComponent {

    @Input() inputMsg : string;
    @Output () outputTxt : EventEmitter <string> = new EventEmitter();
 outputMessage : string= "I am from child Component!"
    constructor(){

    }

    sendValue() {
        this.outputTxt.emit(this.outputMessage);
    }
}