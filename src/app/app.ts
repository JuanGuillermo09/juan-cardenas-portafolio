import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import { ScrollTop } from "./layout/scroll-top/scroll-top";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Experience } from "./pages/experience/experience";
import { Projects } from "./pages/projects/projects";
import { Skills } from "./pages/skills/skills";
import { CommonModule } from '@angular/common';
import { Training } from "./pages/training/training";
import { Contact } from "./pages/contact/contact";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, ScrollTop, Home, About, Experience, Projects, Skills, CommonModule, Training, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('juan-cardenas-portfolio');

}
