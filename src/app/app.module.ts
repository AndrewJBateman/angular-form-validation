/*It is necessary to import the FormsModule from '@angular/forms' and include it in the imports
array of the @NgModule decorator.
Also import the custom validation directive { MustMatchDirective }
from './_helpers/must-match.directive' and include it in
the declarations array of the @NgModule decorator.*/
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MustMatchDirective} from './_helpers/must-match.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MustMatchDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
