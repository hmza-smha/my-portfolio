import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NextPageComponent } from './next-page/next-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    EducationComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    NextPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
