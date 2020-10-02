import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponennt} from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { PipeDemoComponent } from './PipeDemo/PipeDemo.component';
import {BracketsPipe} from './CustomPipes/Brackets.pipe';
import  { LifeCycleComponent} from './LifeCycle/lifeCycle.component' 
import {LogService} from './Services/log.service';
import {DemoLogComponent} from './ServiceDemo/ServiceDemo.Component';
import {ChildComponent} from './ChildComponent/ChildComponent';
import {ApiService} from './Services/Api.service';
import {userComponent} from './User/user.component';
import { loginComponent } from './Login/login.component'
import  { AuthenticationGuard } from './Services/authentication.guard'
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponennt,
    ThirdComponent,
    PipeDemoComponent,
    BracketsPipe,
    LifeCycleComponent,
    DemoLogComponent,
    ChildComponent,
    userComponent,
    loginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LogService,ApiService,AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
