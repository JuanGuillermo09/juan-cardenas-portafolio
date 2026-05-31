import { Component, inject } from '@angular/core';
import { Carousel } from "../../layout/carousel/carousel";
import { Goodbye } from '../../layout/goodbye/goodbye';
import { ProjectsTranslateService } from '../../services/translate/projects-translate.service';

@Component({
  selector: 'app-projects',
  imports: [Carousel, Goodbye],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  providers: [ProjectsTranslateService],
})
export class Projects {
  translate = inject(ProjectsTranslateService);
}
