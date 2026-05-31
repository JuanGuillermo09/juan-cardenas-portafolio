import { Injectable, inject } from '@angular/core';
import { LangService } from '../lang.service';

@Injectable()
export class HomeTranslateService {
  private lang = inject(LangService);

  private dict: Record<string, Record<string, string>> = {
    es: {
      'home.greeting': 'Hola, soy',
      'home.role': 'Desarrollador de Software',
      'home.see_projects': 'Ver proyectos',
      'home.cv': 'Mi',
      'home.about_1': 'Soy apasionado por la creación de soluciones que faciliten el trabajo de las personas y aporten valor a las organizaciones.',
      'home.about_2': 'Me caracterizo por ser una persona responsable, comprometida y con gran capacidad de aprendizaje, siempre dispuesto a asumir nuevos retos y adquirir conocimientos que fortalezcan mi crecimiento profesional.',
      'home.about_3': 'Disfruto analizar problemas, diseñar soluciones eficientes y participar en proyectos que permitan optimizar procesos y mejorar la experiencia de los usuarios.',
      'home.about_4': 'Mi objetivo es continuar desarrollándome profesionalmente, contribuyendo con ideas innovadoras y generando un impacto positivo a través de la tecnología.',
      'home.alt_photo': 'Foto Juan Guillermo',
    },
    en: {
      'home.greeting': 'Hi, I\'m',
      'home.role': 'Software Developer',
      'home.see_projects': 'View projects',
      'home.cv': 'My',
      'home.about_1': 'I am passionate about creating solutions that make people\'s work easier and bring value to organizations.',
      'home.about_2': 'I am a responsible, committed person with a great capacity for learning, always willing to take on new challenges and acquire knowledge that strengthens my professional growth.',
      'home.about_3': 'I enjoy analyzing problems, designing efficient solutions and participating in projects that optimize processes and improve user experience.',
      'home.about_4': 'My goal is to continue developing professionally, contributing with innovative ideas and generating a positive impact through technology.',
      'home.alt_photo': 'Photo of Juan Guillermo',
    },
  };

  t(key: string): string {
    return this.dict[this.lang.currentLang()]?.[key] ?? key;
  }
}
