import { Component, inject } from '@angular/core';
import { Goodbye } from '../../layout/goodbye/goodbye';
import { TrainingTranslateService } from '../../services/translate/training-translate.service';

@Component({
  selector: 'app-training',
  imports: [Goodbye],
  templateUrl: './training.html',
  styleUrl: './training.css',
  providers: [TrainingTranslateService],
})
export class Training {
  translate = inject(TrainingTranslateService);
}
