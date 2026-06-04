import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderTranslateService } from '../../services/translate/header-translate.service';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
  providers: [HeaderTranslateService],
})
export class Header {
  translate = inject(HeaderTranslateService);
  lang = inject(LangService);

  menuOpen = false;
  isDarkMode = true;
  activeSection = '';

  private observer: IntersectionObserver | null = null;

  ngOnInit() {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      this.isDarkMode = false;
      document.body.classList.add('light-theme');
    }
    this.initScrollSpy();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private initScrollSpy() {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    if (!sections.length) return;

    this.observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach(s => this.observer!.observe(s));
  }

  isActive(route: string): boolean {
    const sectionId = route.replace('/', '');
    return this.activeSection === sectionId;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  }


  getCvUrl(): string {
    return this.lang.currentLang() === 'en'
      ? 'hoja-de-vida/Hoja de Vida Juan Guillermo Cardenas Miranda - EN.pdf'
      : 'hoja-de-vida/Hoja de Vida Juan Guillermo Cardenas Miranda.pdf';
  }
}
