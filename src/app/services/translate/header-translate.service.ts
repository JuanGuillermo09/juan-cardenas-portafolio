import { Injectable, inject } from '@angular/core';
import { LangService } from '../lang.service';

@Injectable()
export class HeaderTranslateService {
  private lang = inject(LangService);

  private dict: Record<string, Record<string, string>> = {
    es: {
      'header.home': 'Inicio',
      'header.experience': 'Experiencia',
      'header.projects': 'Proyectos',
      'header.training': 'Formación',
      'header.skills': 'Habilidades',
      'header.cv': 'Mi',
      'header.lang': 'EN',
    },
    en: {
      'header.home': 'Home',
      'header.experience': 'Experience',
      'header.projects': 'Projects',
      'header.training': 'Education',
      'header.skills': 'Skills',
      'header.cv': 'My',
      'header.lang': 'ES',
    },
  };

  t(key: string): string {
    return this.dict[this.lang.currentLang()]?.[key] ?? key;
  }

  toggleLang(): void {
    this.lang.toggleLang();
  }
}
