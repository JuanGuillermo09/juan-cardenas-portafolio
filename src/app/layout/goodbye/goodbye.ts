import { Component, inject } from '@angular/core';
import { GoodbyeTranslateService } from '../../services/translate/goodbye-translate.service';

@Component({
  selector: 'app-goodbye',
  imports: [],
  templateUrl: './goodbye.html',
  styleUrl: './goodbye.css',
  providers: [GoodbyeTranslateService],
})
export class Goodbye {
  translate = inject(GoodbyeTranslateService);
}
