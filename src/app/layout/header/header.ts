import { Component, inject, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnDestroy {

  menuOpen = false;
  isDarkMode = true; // 🌙 por defecto
  activeSection = 'home'; // Sección activa actual
  private scrollSubscription: Subscription | null = null;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    const theme = localStorage.getItem('theme');

    if (theme === 'light') {
      this.isDarkMode = false;
      document.body.classList.add('light-theme');
    }

    // Inicializar scroll spy
    this.initScrollSpy();
  }

  ngOnDestroy() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

  initScrollSpy() {
    this.scrollSubscription = fromEvent(window, 'scroll').subscribe(() => {
      this.updateActiveSection();
    });

    // Actualizar también al cargar la página
    setTimeout(() => this.updateActiveSection(), 100);
  }

  updateActiveSection() {
    const sections = [
      'home',
      'about', 
      'experience',
      'projects',
      'training',
      'skills',
      'contact',
      'goodbye'
    ];

    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          if (this.activeSection !== section) {
            this.activeSection = section;
            this.updateActiveLink();
          }
          break;
        }
      }
    }
  }

  updateActiveLink() {
    // Remover clase activa de todos los enlaces
    const allLinks = this.el.nativeElement.querySelectorAll('.nav-links li a');
    allLinks.forEach((link: HTMLElement) => {
      this.renderer.removeClass(link, 'active');
    });

    // Agregar clase activa al enlace correspondiente
    const activeLink = this.el.nativeElement.querySelector(`.nav-links li a[href="#${this.activeSection}"]`);
    if (activeLink) {
      this.renderer.addClass(activeLink, 'active');
    }
  }


  // Método para scroll suave lento sin modificar espacios
  smoothScrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const startPosition = window.pageYOffset;
      const targetPosition = element.offsetTop;
      const distance = targetPosition - startPosition;
      const duration = 1000; // 1 segundo para transición suave
      
      let start: number | null = null;
      
      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Easing suave
        
        window.scrollTo(0, startPosition + (distance * easeProgress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
      
      requestAnimationFrame(animation);
    }
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

}
