import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { CreateBugComponent } from './create-bug/create-bug.component';
import { ShowBugsComponent } from './show-bugs/show-bugs.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UpdateBugComponent } from './update-bug/update-bug.component';
import { BugFormComponent } from './bug-form/bug-form.component';
import { SelectBugComponent } from './select-bug/select-bug.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBugComponent,
    ShowBugsComponent,
    HeaderComponent,
    SidenavComponent,
    UpdateBugComponent,
    BugFormComponent,
    SelectBugComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      {path: 'create', component: CreateBugComponent},
      {path: 'search', component: ShowBugsComponent},
      {path: 'update', component: UpdateBugComponent},
      {path: '', redirectTo: '/search', pathMatch: 'full'},
    ],{useHash: true}),
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
