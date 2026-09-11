import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechCategory } from '../../core/models/profile.model';

@Component({
  selector: 'app-tech-radar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="tech-stack" class="max-w-5xl mx-auto px-4 py-16">
      
      <!-- Section Header -->
      <div class="mb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 mb-3 border border-zinc-200 dark:border-zinc-700/60">
          <span>03. TECHNICAL COMPETENCIES & RADAR</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          Categorized <span class="text-violet-600 dark:text-violet-400">Engineering Stack</span>
        </h2>
        <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl">
          Phân tầng năng lực kỹ thuật rõ ràng, ưu tiên tính ứng dụng thực chiến, tuân thủ nguyên tắc Clean Code và khả năng mở rộng hệ thống.
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        @for (cat of skills(); track cat.category) {
          <div class="bezel-outer">
            <div class="bezel-inner h-full flex flex-col justify-between">
              
              <div>
                <!-- Category Title -->
                <div class="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200 dark:border-zinc-800">
                  <h3 class="text-sm font-bold text-zinc-950 dark:text-zinc-100">
                    {{ cat.category }}
                  </h3>
                  <span class="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                </div>

                <p class="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                  {{ cat.description }}
                </p>

                <!-- Skill Chips -->
                <div class="flex flex-wrap gap-2">
                  @for (skill of cat.items; track skill.name) {
                    <div 
                      [ngClass]="skill.highlight ? 'border-violet-500/40 bg-violet-500/10 text-violet-700 dark:text-violet-300' : ''"
                      class="px-2.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800/90 bg-zinc-50 dark:bg-zinc-900/60 text-xs font-mono flex items-center gap-1.5 transition-all">
                      @if (skill.highlight) {
                        <span class="text-violet-500 font-bold">★</span>
                      }
                      <span class="font-medium text-zinc-800 dark:text-zinc-200">{{ skill.name }}</span>
                      <span class="text-[10px] text-zinc-400 dark:text-zinc-500">[{{ skill.level }}]</span>
                    </div>
                  }
                </div>
              </div>

            </div>
          </div>
        }
      </div>

    </section>
  `
})
export class TechRadarComponent {
  skills = input.required<TechCategory[]>();

  isDark(): boolean {
    return document.documentElement.classList.contains('dark');
  }
}
