import { Component, inject } from '@angular/core';
import { Goodbye } from '../../layout/goodbye/goodbye';
import { ExperienceTranslateService } from '../../services/translate/experience-translate.service';

@Component({
  selector: 'app-experience',
  imports: [Goodbye],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  providers: [ExperienceTranslateService],
})
export class Experience {
  translate = inject(ExperienceTranslateService);
}
