import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/header/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './components/hero/hero.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuzzComponent } from './components/buzz/buzz.component';
import { MissionComponent } from './components/mission/mission.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { SectionComponent } from './components/section/section.component';

// material >
// import { MatButtonModule } from '@angular/material/button';
// >

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HeroComponent,
    ButtonComponent,
    FooterComponent,
    BuzzComponent,
    MissionComponent,
    NewsletterComponent,
    SectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
