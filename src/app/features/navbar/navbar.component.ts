import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
      <nav class="w-full max-w-5xl rounded-full border border-black/10 dark:border-white/10 bg-white/75 dark:bg-zinc-950/75 backdrop-blur-md px-5 py-3 shadow-lg shadow-black/5 flex items-center justify-between">
        
        <!-- Logo / Brand -->
        <a href="#" class="flex items-center gap-2.5 group">
          <div class="h-8 w-8 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700/80 bg-zinc-900 text-white flex items-center justify-center font-mono font-bold text-xs tracking-wider transition-transform group-hover:scale-105 shadow-sm">
            <img src="assets/avatar.jpg" alt="Thành Lộc" class="w-full h-full object-cover object-center" />
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-sm tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              Thành Lộc
            </span>
            <span class="text-[10px] font-mono text-zinc-500 tracking-wider uppercase">
              .NET Backend
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-600 dark:text-zinc-300">
          <a href="#overview" class="hover:text-zinc-900 dark:hover:text-white transition-colors">Overview</a>
          <a href="#case-studies" class="hover:text-zinc-900 dark:hover:text-white transition-colors">Case Studies</a>
          <a href="#tech-stack" class="hover:text-zinc-900 dark:hover:text-white transition-colors">Tech Stack</a>
          <a href="#timeline" class="hover:text-zinc-900 dark:hover:text-white transition-colors">Timeline</a>
          <a href="#contact" class="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a>
        </div>

        <!-- Action Items -->
        <div class="flex items-center gap-2.5">
          <!-- Theme Toggle Button -->
          <button 
            (click)="themeService.toggleTheme()" 
            class="p-2 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title="Đổi giao diện Dark / Light"
            aria-label="Toggle Theme">
            @if (themeService.isDarkMode()) {
              <!-- Sun icon -->
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            } @else {
              <!-- Moon icon -->
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            }
          </button>

          <!-- Open Resume Link -->
          <a 
            href="assets/cv/BackEnd_.NET_loc20904.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-violet-700 dark:hover:bg-zinc-200 transition-all shadow-sm">
            <span>Resume (PDF)</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  `
})
export class NavbarComponent {
  themeService = inject(ThemeService);
}
