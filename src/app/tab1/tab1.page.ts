import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public selectedIdioma: string = "";
  public selectedTema: string = "";
  public audio: HTMLAudioElement = new Audio();

  constructor() { }
  ngOnInit(): void {

  }

  selectIdioma(idioma: string) {
    this.selectedIdioma = idioma;
  }

  selectTema(tema: string) {
    this.selectedTema = tema;
  }

  play(select: string) {
    console.log(select);
    this.audio.pause();
    this.audio = new Audio(`assets/audios/${select}_${this.selectedIdioma}.mp3`);
    this.audio.play()
  }

}
