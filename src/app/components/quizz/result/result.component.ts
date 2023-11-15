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

  shareOnSocialMedia() {
    const message = `Eu sou DEV do tipo:\n${this.description}\n${this.professions.map(p => p.name).join('\n')}\nQual é o seu Tipo Dev? acesse o link abaixo e descruba!\nhttps://seutipodev.netlify.app/
    `;

    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank')
  }
}
