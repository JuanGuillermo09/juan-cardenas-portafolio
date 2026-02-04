import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  @Input() images: string[] = [];
  index = 0;

  // Getter para verificar si hay múltiples imágenes
  get hasMultipleImages(): boolean {
    return this.images.length > 1;
  }

  next() {
    if (this.hasMultipleImages) {
      this.index = (this.index + 1) % this.images.length;
    }
  }

  prev() {
    if (this.hasMultipleImages) {
      this.index = (this.index - 1 + this.images.length) % this.images.length;
    }
  }

  goTo(i: number) {
    if (this.hasMultipleImages) {
      this.index = i;
    }
  }

}
