import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input()
  description: string = '';

  @Input()
  professions: any[] = [];

  @Input()
  observation: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  refresh(): void {
    window.location.reload();
  }

}
