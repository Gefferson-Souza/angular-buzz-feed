import { Component, OnInit } from '@angular/core';
import { quizMenteDoDesenvolvedor } from '../../data/quizzProgramador'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {

  Quizz: any = quizMenteDoDesenvolvedor;

  title: string = '';
  titleDescription: string = '';

  questions: any[] = [];
  currentQuestion: any;
  questionTitle: string = '';
  currentIndex: number = 0;
  questionsLength: number = 0;

  answers: any;
  selectedAnswer: string = '';

  finished: boolean = false;

  constructor() { }

  ngOnInit(): void {

    if (this.Quizz) {
      const { title, description, questions, results, observation } = this.Quizz;

      this.title = title;
      this.titleDescription = description;
      this.questions = [...questions];
      this.questionsLength = this.questions.length;

      this.currentQuestion = this.questions[this.currentIndex];
      this.questionTitle = this.currentQuestion.question;

      this.answers = this.currentQuestion.options.sort(() => Math.random() - 0.5);

      console.log(this.answers)

    }
  }

}
