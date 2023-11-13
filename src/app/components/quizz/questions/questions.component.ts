import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  @Input()
  questions: Question[] = [
    {
      id: 1,
      question: '',
      options: [
        {
          id: 0,
          name: 'string',
          alias: 'string'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
