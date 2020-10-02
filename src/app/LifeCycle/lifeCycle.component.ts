import { Component, OnInit, OnDestroy } from '@angular/core'


@Component({
    selector: 'rufus',
    template: `<h1> Life Cycle Hooks </h1>`
})

export class LifeCycleComponent implements OnInit, OnDestroy {

    ngOnInit() {
        console.log("Initialised!!")
    }

    ngOnDestroy() {
        console.log("Destroyed!!!")
    }

}