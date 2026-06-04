import { Component, inject } from '@angular/core';
import { Goodbye } from '../../layout/goodbye/goodbye';
import { HomeTranslateService } from '../../services/translate/home-translate.service';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-home',
  imports: [Goodbye],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [HomeTranslateService],
})
export class Home {
  translate = inject(HomeTranslateService);
  lang = inject(LangService);

  getProfileImage(): string {
    return this.lang.currentLang() === 'en'
      ? 'avatar/saludos/11.41.33 PM'
      : 'avatar/saludos/2.56 PM';
  }

  getCvUrl(): string {
    return this.lang.currentLang() === 'en'
      ? 'hoja-de-vida/Hoja de Vida Juan Guillermo Cardenas Miranda - EN.pdf'
      : 'hoja-de-vida/Hoja de Vida Juan Guillermo Cardenas Miranda.pdf';
  }
}
