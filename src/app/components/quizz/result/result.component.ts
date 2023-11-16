import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnChanges {

  @Input()
  description: string = '';

  @Input()
  professions: any[] = [];

  @Input()
  observation: string = '';

  message: string = '';

  title: string = 'O seu DEV TYPE'

  urls: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.message = `Eu sou DEV do tipo:\n${this.description}\n${this.professions.map(p => p.name).join('\n')}\nQual é o seu Tipo Dev? acesse o link abaixo e descruba!\nhttps://seutipodev.netlify.app/
    `;

    this.updateUrls();
  }

  refresh(): void {
    return window.location.reload();
  }

  shareOnSocialMedia(url: string): Window | null {
    return window.open(url, '_blank')
  }

  updateUrls(): void {
    this.urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(this.message)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(this.message)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(this.title)}&summary=${encodeURIComponent(this.message)}&source=${encodeURIComponent('GTS-DEV')}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(this.message)}`,
      reddit: `https://www.reddit.com/submit?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(this.title)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(this.message)}`,
    }
  }


}
