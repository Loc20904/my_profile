import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricItem } from '../../core/models/profile.model';

@Component({
  selector: 'app-metrics-ribbon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="max-w-5xl mx-auto px-4 pb-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        @for (item of metrics(); track item.label) {
          <div class="bezel-outer">
            <div class="bezel-inner !p-4 flex flex-col justify-between h-full">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xl sm:text-2xl font-extrabold tracking-tight font-mono text-zinc-950 dark:text-white">
                  {{ item.value }}
                </span>
                <div class="w-7 h-7 rounded-lg bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                  @switch (item.iconName) {
                    @case ('graduation') {
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                      </svg>
                    }
                    @case ('zap') {
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    }
                    @case ('layers') {
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                      </svg>
                    }
                    @default {
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                      </svg>
                    }
                  }
                </div>
              </div>
              <div>
                <p class="text-xs font-semibold text-zinc-900 dark:text-zinc-200 tracking-tight">
                  {{ item.label }}
                </p>
                <p class="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                  {{ item.detail }}
                </p>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class MetricsRibbonComponent {
  metrics = input.required<MetricItem[]>();
}
