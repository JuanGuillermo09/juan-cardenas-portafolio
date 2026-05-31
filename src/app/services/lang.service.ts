import { Injectable, signal } from '@angular/core';

export type Lang = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class LangService {
  currentLang = signal<Lang>('es');

  toggleLang(): void {
    this.currentLang.update(l => (l === 'es' ? 'en' : 'es'));
  }
}
