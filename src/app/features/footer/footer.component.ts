import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileData } from '../../core/models/profile.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer id="contact" class="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950 mt-20 transition-colors">
      <div class="max-w-5xl mx-auto px-4 py-16">
        
        <!-- Top Row: Server Status & Quick Pitch -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 mb-3">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Loc-Engine: 200 Healthy</span>
              <span class="text-zinc-400">|</span>
              <span>Uptime: 99.98%</span>
              <span class="text-zinc-400">|</span>
              <span>Da Nang, VN</span>
            </div>
            <h3 class="text-2xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
              Ready to engineer reliable <span class="text-violet-600 dark:text-violet-400">backend systems</span>?
            </h3>
            <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-lg">
              Tôi luôn sẵn sàng đón nhận các cơ hội việc làm Backend .NET Developer tại Đà Nẵng hoặc làm việc Hybrid / Remote.
            </p>
          </div>

          <!-- Direct Resume CTA -->
          <div class="flex items-center gap-3">
            <a 
              href="assets/cv/BackEnd_.NET_loc20904.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="px-5 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-violet-700 dark:hover:bg-zinc-200 transition-all shadow flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <span>View Resume (PDF) ↗</span>
            </a>
          </div>
        </div>

        <!-- Contact Links Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 border-b border-zinc-200 dark:border-zinc-800">
          
          <!-- Email -->
          <div>
            <span class="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">Email Direct</span>
            <a [href]="'mailto:' + profile().contacts.email" class="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-violet-600 dark:hover:text-violet-400 transition-colors break-all">
              {{ profile().contacts.email }}
            </a>
          </div>

          <!-- Phone -->
          <div>
            <span class="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">Phone Number</span>
            <a [href]="'tel:' + profile().contacts.phone" class="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              {{ profile().contacts.phone }}
            </a>
          </div>

          <!-- LinkedIn -->
          <div>
            <span class="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">LinkedIn Network</span>
            <a [href]="profile().contacts.linkedin" target="_blank" rel="noopener noreferrer" class="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-500 transition-colors">
              th4nhl0c ↗
            </a>
          </div>

          <!-- GitHub -->
          <div>
            <span class="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">GitHub Repos</span>
            <a [href]="profile().contacts.github" target="_blank" rel="noopener noreferrer" class="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-violet-500 transition-colors">
              Loc20904 ↗
            </a>
          </div>

        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© 2026 {{ profile().name }}. Built with Angular 19 Standalone & Tailwind CSS.</p>
          <button 
            (click)="scrollToTop()"
            class="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors flex items-center gap-1">
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  profile = input.required<ProfileData>();

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
