import { Injectable, inject } from '@angular/core';
import { LangService } from '../lang.service';

@Injectable()
export class FooterTranslateService {
  private lang = inject(LangService);

  private dict: Record<string, Record<string, string>> = {
    es: {
      // ---------- Pie de página ----------
      'footer.rights': '© {{year}} Juan Guillermo Cárdenas – Portafolio Profesional',
    },
    en: {
      // ---------- Footer ----------
      'footer.rights': '© {{year}} Juan Guillermo Cárdenas – Professional Portfolio',
    },
  };

  t(key: string, params?: Record<string, string>): string {
    let text = this.dict[this.lang.currentLang()]?.[key] ?? key;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.replace(`{{${k}}}`, v);
      }
    }
    return text;
  }
}
