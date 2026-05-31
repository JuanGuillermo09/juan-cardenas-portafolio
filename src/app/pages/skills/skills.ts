import { Component, inject } from '@angular/core';
import { Goodbye } from '../../layout/goodbye/goodbye';
import { SkillsTranslateService } from '../../services/translate/skills-translate.service';

@Component({
  selector: 'app-skills',
  imports: [Goodbye],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  providers: [SkillsTranslateService],
})
export class Skills {
  translate = inject(SkillsTranslateService);
}
