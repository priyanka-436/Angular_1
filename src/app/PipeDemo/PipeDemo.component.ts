import { Component } from '@angular/core'

@Component({
    selector:'sample-pipe',
    template:`<h2> Hey its a custom pipe!!</h2>
    {{title | brackets}}
    <p></p>
    {{title | brackets : 'u'}}
    <p></p>
    {{title | brackets : 'l'}}
    `
})

export class PipeDemoComponent {
    title : string = "Hey I am new Pipe!!"
}