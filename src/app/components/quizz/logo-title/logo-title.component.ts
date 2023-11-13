import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-title',
  templateUrl: './logo-title.component.html',
  styleUrls: ['./logo-title.component.scss']
})
export class LogoTitleComponent implements OnInit {

  @Input()
  title: string = '';
  @Input()
  titleDescription:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
