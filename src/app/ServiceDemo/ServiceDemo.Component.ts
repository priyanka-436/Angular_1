import {Component} from '@angular/core';
import {LogService} from '../Services/log.service'

@Component({
   selector : 'log-demo' ,
   templateUrl: './ServiceDemo.Component.html'
})

export class DemoLogComponent {

    constructor ( private LogService : LogService) {

    }

    OutputtingLog (msg : string) {
        this.LogService.log(msg)
    }

}