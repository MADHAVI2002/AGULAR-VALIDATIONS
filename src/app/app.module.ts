import {NgModule} from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms';
//import {FormsModule } from "@angular/forms"
//import { DeclarationListEmitMode } from '@angular/compiler'
@NgModule({
    imports:[BrowserModule,ReactiveFormsModule],
    declarations:[AppComponent],
    providers: [],
    bootstrap:[AppComponent]

})





export class AppModule{

}