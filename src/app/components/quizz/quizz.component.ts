import { Component, OnInit } from '@angular/core';
import { quizMenteDoDesenvolvedor } from '../../data/quizzProgramador'
import { Quizz } from 'src/app/interfaces/questions';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {

  Quizz: Quizz = quizMenteDoDesenvolvedor;

  title: string = '';
  titleDescription: string = '';

  questions: any[] = [];
  currentQuestion: any;
  questionTitle: string = '';
  currentIndex: number = 0;
  questionsLength: number = 0;

  options: any;
  selectedAnswers: string[] = [];

  allResults: any = [];
  currentResult: any;
  resultDescription: string = '';
  professions: any[] = [];
  observation: string = '';


  mostFrequent: string = '';
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

      this.options = this.currentQuestion.options.sort(() => Math.random() - 0.5);

      this.allResults = results;
      this.observation = observation

      console.log(results)

    }
  }


  getAnswers(selectedAnswers: string[]) {
    this.selectedAnswers = selectedAnswers;
    this.nextQuestion()
  }


  nextQuestion() {
    this.currentIndex++;
    if (this.currentIndex < this.questionsLength) {
      this.currentQuestion = this.questions[this.currentIndex];
      this.questionTitle = this.currentQuestion.question;

      this.options = this.currentQuestion.options.sort(() => Math.random() - 0.5);
    } else {
      this.mostFrequent = this.mostFrequentItem(this.selectedAnswers);
      this.currentResult = this.allResults[this.mostFrequent];
      this.resultDescription = this.currentResult.description;
      this.professions = this.currentResult.profession;
      this.finished = true;
    }
  }

  mostFrequentItem(array: any[]): string {
    let frequencyMap: { [key: string]: number } = {};
    let maxCount: number = 0;
    let mostFrequent;

    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      if (frequencyMap[item] === undefined) {
        frequencyMap[item] = 1;
      } else {
        frequencyMap[item]++;
      }

      if (frequencyMap[item] > maxCount) {
        maxCount = frequencyMap[item];
        mostFrequent = item;
      }
    }
    return mostFrequent;
  }






}
