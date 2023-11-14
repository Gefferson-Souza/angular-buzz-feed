import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  @Input()
  question: string = '';

  @Input()
  options: any[] = [{}];

  @Output()
  answersChange: EventEmitter<string[]> = new EventEmitter<string[]>()

  answers: string[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  addAnswer(alias: any) {
    this.answers.push(alias)
    this.emitAnswers()
  }

  private emitAnswers() {
    this.answersChange.emit(this.answers);
  }


}
