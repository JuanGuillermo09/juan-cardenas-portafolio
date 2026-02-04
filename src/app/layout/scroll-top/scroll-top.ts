import { CommonModule } from '@angular/common';
import { Component, HostListener, Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  imports: [CommonModule],
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.css',
})
export class ScrollTop {
  showButton = false;
  isAtBottom = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    // Verificar estado inicial al cargar
    this.checkScrollPosition();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScrollPosition();
  }

  checkScrollPosition() {
    const scrollY = window.scrollY;
    this.showButton = scrollY > 300;
    
    // Detectar si estamos cerca del final
    const scrollPosition = scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    this.isAtBottom = scrollPosition >= documentHeight - 100;
    
    // Ajustar posición dinámicamente
    this.updateButtonPosition();
  }

  updateButtonPosition() {
    const button = this.el.nativeElement.querySelector('.scroll-top-btn');
    if (button) {
      if (this.isAtBottom) {
        this.renderer.setStyle(button, 'bottom', '100px');
      } else {
        this.renderer.setStyle(button, 'bottom', '20px');
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
