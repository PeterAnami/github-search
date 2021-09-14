import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ProfileService } from "./profile.service";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HighlightsDirective } from './highlights.directive';
import { CustomDateFormat } from './date.pipe';

@NgModule({
  declarations: [
    AppComponent, 
    ProfileComponent, 
    CustomDateFormat, 
    FooterComponent, 
    HomeComponent, 
    HighlightsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
