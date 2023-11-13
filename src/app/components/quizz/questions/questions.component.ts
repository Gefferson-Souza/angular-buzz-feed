import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  @Input()
  question: string = '';

  @Input()
  answers: any[] = [{}];


  constructor() { }

  ngOnInit(): void {
  }

  teste(alias: any) {
    console.log(alias)
  }

}
