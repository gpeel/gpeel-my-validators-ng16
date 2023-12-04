import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MY_ALERT_SERVICE_API, MyValidatorsModule} from '@gpeel/my-validators';
import {PlogModule} from '@gpeel/plog';
import {environment} from '../environments/environment';
import {AlertWithSimpleLogService} from './alert-with-simple-log.service';

import {AppComponent} from './app.component';
import {ErrorMessageComponent} from './my-validators/error-message.component';
import {ErrorDirective} from './my-validators/error.directive';
import {ReactiveAllComponent} from './reactive-all/reactive-all.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveAllComponent,
    ErrorMessageComponent,
    ErrorDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    //
    MyValidatorsModule,
    PlogModule.forRoot(environment),
  ],
  providers: [
    {
      // eanble to have a feedback when submitting a form with errors
      // otherwise, the form is submitted and the errors are displayed but no alert is shown
      // comment this provider to see the difference
      provide: MY_ALERT_SERVICE_API,
      useClass: AlertWithSimpleLogService,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

