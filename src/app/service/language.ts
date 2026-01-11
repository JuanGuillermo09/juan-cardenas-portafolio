import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Language {


    // idioma actual
  lang = signal<'es' | 'en'>(
    (localStorage.getItem('lang') as 'es' | 'en') || 'es'
  );

  // textos
  private texts = {
    es: {
      nav: {
        home: 'Inicio',
        about: 'Sobre mí',
        experience: 'Experiencia',
        projects: 'Proyectos',
        training: 'Formación',
        skills: 'Habilidades',
        contact: 'Contacto',
        cv: 'Mi CV'
      }
      
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About me',
        experience: 'Experience',
        projects: 'Projects',
        training: 'Education',
        skills: 'Skills',
        contact: 'Contact',
        cv: 'My CV'
      }
    }
  };

  constructor() {
    // persistir idioma automáticamente
    effect(() => {
      localStorage.setItem('lang', this.lang());
    });
  }

  changeLang(lang: 'es' | 'en') {
    this.lang.set(lang);
  }

  t(path: string): string {
    return path
      .split('.')
      .reduce((o: any, k) => o?.[k], this.texts[this.lang()]) || '';
  }
  
}
