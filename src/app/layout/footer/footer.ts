import { Component, inject } from '@angular/core';
import { FooterTranslateService } from '../../services/translate/footer-translate.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  providers: [FooterTranslateService],
})
export class Footer {
  translate = inject(FooterTranslateService);
  currentYear = new Date().getFullYear();
}
