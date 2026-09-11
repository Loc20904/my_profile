import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineItem, CertificationItem } from '../../core/models/profile.model';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="timeline" class="max-w-5xl mx-auto px-4 py-16">
      
      <!-- Section Header -->
      <div class="mb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 mb-3 border border-zinc-200 dark:border-zinc-700/60">
          <span>04. CAREER & ACADEMIC MILESTONES</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          Experience & <span class="text-violet-600 dark:text-violet-400">Certifications</span>
        </h2>
        <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl">
          Hành trình phát triển kỹ thuật từ môi trường thực tập doanh nghiệp FPT Software đến vai trò lãnh đạo kỹ thuật và các chứng chỉ chuyên ngành quốc tế.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Left 2 Cols: Experience & Education Timeline -->
        <div class="lg:col-span-2 space-y-6">
          <h3 class="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-4 flex items-center gap-2">
            <span>// Lộ trình Nghề nghiệp & Học vấn</span>
            <span class="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></span>
          </h3>

          <div class="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-8">
            @for (item of timeline(); track item.organization) {
              <div class="relative group">
                <!-- Timeline bullet node -->
                <div class="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-zinc-900 dark:border-white bg-white dark:bg-zinc-950 group-hover:bg-violet-500 transition-colors"></div>

                <!-- Card Content -->
                <div class="bezel-outer">
                  <div class="bezel-inner !p-5">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <span class="text-xs font-mono text-violet-600 dark:text-violet-400 font-semibold">
                        {{ item.period }}
                      </span>
                      <span class="text-[11px] font-mono text-zinc-400">
                        {{ item.location }}
                      </span>
                    </div>

                    <h4 class="text-base font-bold text-zinc-950 dark:text-white">
                      {{ item.role }}
                    </h4>
                    <p class="text-xs font-medium text-zinc-600 dark:text-zinc-300 mb-3">
                      {{ item.organization }}
                    </p>

                    <!-- Achievements -->
                    <ul class="space-y-1.5 mb-4">
                      @for (ach of item.achievements; track ach) {
                        <li class="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                          <span class="text-violet-500 font-bold">›</span>
                          <span>{{ ach }}</span>
                        </li>
                      }
                    </ul>

                    <!-- Badges -->
                    <div class="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200 dark:border-zinc-800/80">
                      @for (b of item.badges; track b) {
                        <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                          {{ b }}
                        </span>
                      }
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Right Col: Certifications & Languages -->
        <div class="space-y-6">
          <h3 class="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-4 flex items-center gap-2">
            <span>// Chứng chỉ & Ngoại ngữ</span>
            <span class="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></span>
          </h3>

          <!-- Certifications Card -->
          <div class="bezel-outer">
            <div class="bezel-inner !p-5">
              <div class="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                <svg class="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
                <h4 class="text-sm font-bold text-zinc-950 dark:text-white">
                  Coursera International
                </h4>
              </div>

              <div class="space-y-4">
                @for (cert of certifications(); track cert.name) {
                  <div class="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                    <div class="flex items-center justify-between text-[10px] font-mono text-violet-600 dark:text-violet-400 font-semibold mb-1">
                      <span>{{ cert.issuer }}</span>
                      <span>{{ cert.year }}</span>
                    </div>
                    <div class="text-xs font-bold text-zinc-900 dark:text-zinc-100 leading-snug mb-2">
                      {{ cert.name }}
                    </div>
                    <div class="flex flex-wrap gap-1">
                      @for (s of cert.skills; track s) {
                        <span class="px-1.5 py-0.5 rounded text-[9px] font-mono bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                          {{ s }}
                        </span>
                      }
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>

          <!-- Languages Card -->
          <div class="bezel-outer">
            <div class="bezel-inner !p-5">
              <h4 class="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
                // Khả năng Ngoại ngữ
              </h4>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-xs text-zinc-900 dark:text-zinc-200">English</span>
                    <span class="text-[10px] font-mono text-zinc-400">Professional Working</span>
                  </div>
                  <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    TOEIC L&R 650
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-xs text-zinc-900 dark:text-zinc-200">Japanese</span>
                    <span class="text-[10px] font-mono text-zinc-400">Elementary</span>
                  </div>
                  <span class="text-xs font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                    Basic Communication
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  `
})
export class TimelineComponent {
  timeline = input.required<TimelineItem[]>();
  certifications = input.required<CertificationItem[]>();
}
