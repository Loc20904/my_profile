import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileData } from '../../core/models/profile.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="overview" class="pt-32 pb-16 md:pt-40 md:pb-24 max-w-5xl mx-auto px-4">
      <div class="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-10">
        
        <!-- Left: Text & Pitch -->
        <div class="flex-1 max-w-2xl">
          <!-- Status Pill Badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-6 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{{ profile().statusBadge }}</span>
          </div>

          <!-- Swiss Headline -->
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.12] mb-6">
            Engineering High-Throughput <span class="text-violet-600 dark:text-violet-400">.NET Core</span> Systems & Resilient <span class="underline decoration-violet-500/30 underline-offset-8">AI Pipelines</span>.
          </h1>

          <!-- Sub-headline -->
          <p class="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            Tôi là <strong class="text-zinc-900 dark:text-zinc-100 font-semibold">{{ profile().name }}</strong>, Kỹ sư phần mềm định hướng chuyên sâu vào kiến trúc backend với 
            <span class="text-zinc-900 dark:text-zinc-200 font-medium">ASP.NET Core</span>, 
            <span class="text-zinc-900 dark:text-zinc-200 font-medium">Clean Architecture</span> và 
            <span class="text-zinc-900 dark:text-zinc-200 font-medium">AI Microservices (RAG)</span>. 
            Tốt nghiệp ĐH FPT (GPA 3.5/4.0), cựu Backend Intern tại FPT Software Đà Nẵng.
          </p>

          <!-- Action Button Cluster -->
          <div class="flex flex-wrap items-center gap-3.5">
            <!-- Primary CTA -->
            <a 
              href="#architecture" 
              class="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-violet-700 dark:hover:bg-zinc-200 transition-all shadow-md group">
              <span>Explore Architecture Topology</span>
              <svg class="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </a>

            <!-- Secondary CTA -->
            <button 
              (click)="openResumeModal.emit()"
              class="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all">
              <svg class="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <span>Preview Resume</span>
            </button>

            <!-- Social Links -->
            <div class="flex items-center gap-2 pl-2">
              <a 
                [href]="profile().contacts.linkedin" 
                target="_blank" 
                rel="noopener noreferrer"
                class="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/30 transition-colors"
                title="LinkedIn Profile">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0-.02-3.3 1.65 1.65 0 0 0 .02 3.3m1.4 10.24v-8.37H5.06v8.37h2.8z"/>
                </svg>
              </a>

              <a 
                [href]="profile().contacts.github" 
                target="_blank" 
                rel="noopener noreferrer"
                class="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                title="GitHub Profile">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Developer Monogram / Modern Avatar Card -->
        <div class="relative w-full sm:w-auto flex justify-center">
          <div class="bezel-outer w-48 h-48 sm:w-56 sm:h-56 relative group">
            <div class="bezel-inner w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200/80 dark:border-zinc-800">
              
              <!-- Subtle Background Grid Pattern -->
              <div class="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:12px_12px]"></div>
              
              <!-- Avatar Graphic Placeholder -->
              <div class="relative z-10 w-20 h-20 rounded-2xl bg-zinc-900 dark:bg-zinc-800 border-2 border-violet-500/40 shadow-xl flex items-center justify-center text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                <span class="font-mono font-bold text-2xl tracking-tight text-violet-400">NL</span>
                <span class="absolute -bottom-1.5 -right-1.5 px-1.5 py-0.5 rounded text-[9px] font-mono bg-violet-600 text-white font-semibold">.NET</span>
              </div>

              <!-- Name & Title Tag -->
              <span class="relative z-10 font-bold text-xs tracking-tight text-zinc-900 dark:text-zinc-100">
                Nguyễn Thành Lộc
              </span>
              <span class="relative z-10 text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                Backend Engineer
              </span>

              <!-- Live Ping Dot -->
              <div class="absolute top-3 right-3 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class HeroComponent {
  profile = input.required<ProfileData>();
  openResumeModal = output<void>();
}
