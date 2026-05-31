import { Injectable, inject } from '@angular/core';
import { LangService } from '../lang.service';

@Injectable()
export class GoodbyeTranslateService {
  private lang = inject(LangService);

  private dict: Record<string, Record<string, string>> = {
    es: {
      'goodbye.title': '¡Gracias por estar aquí! 🙌',
      'goodbye.text': 'Gracias por tomarte el tiempo de ver mi portafolio. Espero que hayas disfrutado conocer un poco de mi trabajo.',
      'goodbye.sub': '¡Espero que vuelvas pronto! 🚀',
      'goodbye.alt': 'Gracias por visitar mi portafolio',
    },
    en: {
      'goodbye.title': 'Thank you for being here! 🙌',
      'goodbye.text': 'Thank you for taking the time to view my portfolio. I hope you enjoyed learning about my work.',
      'goodbye.sub': 'See you soon! 🚀',
      'goodbye.alt': 'Thank you for visiting my portfolio',
    },
  };

  t(key: string): string {
    return this.dict[this.lang.currentLang()]?.[key] ?? key;
  }
}
