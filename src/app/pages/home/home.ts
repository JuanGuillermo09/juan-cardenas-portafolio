import { Component, inject } from '@angular/core';
import { Goodbye } from '../../layout/goodbye/goodbye';
import { HomeTranslateService } from '../../services/translate/home-translate.service';

@Component({
  selector: 'app-home',
  imports: [Goodbye],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [HomeTranslateService],
})
export class Home {
  translate = inject(HomeTranslateService);
}
