import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpperCasePipe } from './upper-case.pipe';
import { RepositoriesComponent } from './repositories/repositories/repositories.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form/search-form.component';
import { SearchComponent } from './user/search/search.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SearchRequestService} from './search-request.service';


@NgModule({
  declarations: [
    AppComponent,
    UpperCasePipe,
    RepositoriesComponent,
    NavbarComponent,
    SearchFormComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    NgProgressModule,
    NgProgressHttpModule.forRoot(),
    HttpClientModule
    // AppRoutingModule
  ],
  providers: [SearchRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
