import { Component, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import { ScrollTop } from "./layout/scroll-top/scroll-top";
import { LangService } from './services/lang.service';

const metaMap: Record<string, { es: string; en: string }> = {
  '/home':       { es: 'Juan Cardenas - Inicio | Desarrollador Full Stack',       en: 'Juan Cardenas - Home | Full Stack Developer' },
  '/experience': { es: 'Juan Cardenas - Experiencia | Desarrollador Full Stack',  en: 'Juan Cardenas - Experience | Full Stack Developer' },
  '/projects':   { es: 'Juan Cardenas - Proyectos | Portafolio',                  en: 'Juan Cardenas - Projects | Portfolio' },
  '/training':   { es: 'Juan Cardenas - Formación | Ingeniero de Sistemas',       en: 'Juan Cardenas - Training | Systems Engineer' },
  '/skills':     { es: 'Juan Cardenas - Habilidades | Tecnologías',               en: 'Juan Cardenas - Skills | Technologies' },
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ScrollTop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private langService = inject(LangService);
  private title = inject(Title);
  private meta = inject(Meta);

  private readonly defaultDesc: Record<string, string> = {
    es: 'Portafolio profesional de Juan Guillermo Cardenas Miranda — Desarrollador Full Stack especializado en Angular, Node.js y SQL Server.',
    en: 'Professional portfolio of Juan Guillermo Cardenas Miranda — Full Stack Developer specialized in Angular, Node.js and SQL Server.',
  };

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        this.setMeta(event.urlAfterRedirects);
      }
    });
  }

  private setMeta(url: string) {
    const lang = this.langService.currentLang();
    const entry = metaMap[url];
    const titleText = entry ? entry[lang] : 'Juan Cardenas Miranda';
    const descText = this.defaultDesc[lang];

    this.title.setTitle(titleText);
    this.meta.updateTag({ name: 'description', content: descText });
    this.meta.updateTag({ property: 'og:title', content: titleText });
    this.meta.updateTag({ property: 'og:description', content: descText });
  }
}
