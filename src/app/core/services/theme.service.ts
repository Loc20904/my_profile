import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(true);

  constructor() {
    let initialDark = true;
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          initialDark = savedTheme === 'dark';
        } else if (window.matchMedia) {
          initialDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
      }
    } catch {
      initialDark = true;
    }
    this.isDarkMode.set(initialDark);

    // Effect to apply theme changes to DOM safely
    effect(() => {
      const dark = this.isDarkMode();
      try {
        if (typeof document !== 'undefined' && document.documentElement) {
          if (dark) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('theme', dark ? 'dark' : 'light');
        }
      } catch {
        // Silently handle webview storage restrictions
      }
    });
  }

  toggleTheme(): void {
    this.isDarkMode.update(curr => !curr);
  }
}
