import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoTitleComponent } from './components/quizz/logo-title/logo-title.component';
import { QuestionsComponent } from './components/quizz/questions/questions.component';
import { ResultComponent } from './components/quizz/result/result.component';
import { ProgressBarComponent } from './components/quizz/progress-bar/progress-bar.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    HomeComponent,
    LogoTitleComponent,
    QuestionsComponent,
    ResultComponent,
    ProgressBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
