import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './UI/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserSearchPipe } from './pipe/user-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
