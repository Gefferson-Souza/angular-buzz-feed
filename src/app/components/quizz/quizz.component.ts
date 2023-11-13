import { Component, OnInit } from '@angular/core';
import { quizMenteDoDesenvolvedor } from '../../data/quizzProgramador'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {

  title: string = quizMenteDoDesenvolvedor.title;
  titleDescription: string = quizMenteDoDesenvolvedor.description;

  constructor() { }

  ngOnInit(): void {
  }

}
