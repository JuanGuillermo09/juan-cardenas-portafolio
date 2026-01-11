import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {



  menuOpen = false;
  isDarkMode = true; // 🌙 por defecto

  ngOnInit() {
    const theme = localStorage.getItem('theme');

    if (theme === 'light') {
      this.isDarkMode = false;
      document.body.classList.add('light-theme');
    }
  }


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }


  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  }

}
