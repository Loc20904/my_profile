import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCaseStudy } from '../../core/models/profile.model';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="case-studies" class="max-w-5xl mx-auto px-4 py-16">
      
      <!-- Section Header -->
      <div class="mb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 mb-3 border border-zinc-200 dark:border-zinc-700/60">
          <span>02. FEATURED CASE STUDIES & PROJECTS</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          Production Systems & <span class="text-violet-600 dark:text-violet-400">Architectural Leadership</span>
        </h2>
        <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl">
          Các dự án tiêu biểu minh chứng năng lực thiết kế kiến trúc .NET, tối ưu hiệu năng cơ sở dữ liệu và tích hợp Microservices AI/RAG thực chiến.
        </p>
      </div>

      <!-- Case Studies List -->
      <div class="space-y-8">
        @for (project of projects(); track project.id) {
          <div class="bezel-outer group hover:border-violet-500/30 transition-all">
            <div class="bezel-inner">
              
              <!-- Project Meta Header -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div>
                  <div class="flex flex-wrap items-center gap-2 mb-1.5">
                    <span class="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                      {{ project.category }}
                    </span>
                    <span class="text-xs text-zinc-400 font-mono">
                      {{ project.period }}
                    </span>
                  </div>
                  <h3 class="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {{ project.title }}
                  </h3>
                </div>

                <!-- GitHub Link if available -->
                @if (project.githubUrl) {
                  <div>
                    <a 
                      [href]="project.githubUrl" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-500 transition-colors">
                      <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                      </svg>
                      <span>View Code ↗</span>
                    </a>
                  </div>
                }
              </div>

              <!-- Tagline & Overview -->
              <p class="text-sm font-semibold text-zinc-900 dark:text-zinc-200 mb-2">
                "{{ project.tagline }}"
              </p>
              <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {{ project.overview }}
              </p>

              <!-- Architecture Highlights Grid -->
              <div class="mb-6">
                <h4 class="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
                  // Điểm sáng Kiến trúc & Kỹ thuật
                </h4>
                <div class="space-y-2">
                  @for (highlight of project.architectureHighlights; track highlight) {
                    <div class="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <span class="text-violet-500 mt-1 font-bold">›</span>
                      <span>{{ highlight }}</span>
                    </div>
                  }
                </div>
              </div>

              <!-- Metrics Ribbons for Case Study -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                @for (metric of project.metrics; track metric.label) {
                  <div class="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40">
                    <span class="text-[10px] font-mono text-zinc-500 block uppercase">
                      {{ metric.label }}
                    </span>
                    <span class="text-xs sm:text-sm font-bold font-mono text-zinc-900 dark:text-zinc-100">
                      {{ metric.value }}
                    </span>
                  </div>
                }
              </div>

              <!-- Tech Stack Tags -->
              <div class="flex flex-wrap items-center gap-1.5 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <span class="text-xs font-mono text-zinc-400 mr-2">Stack:</span>
                @for (tech of project.techStack; track tech) {
                  <span class="px-2.5 py-1 rounded text-xs font-mono bg-zinc-100 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/50">
                    {{ tech }}
                  </span>
                }
              </div>

            </div>
          </div>
        }
      </div>

    </section>
  `
})
export class CaseStudiesComponent {
  projects = input.required<ProjectCaseStudy[]>();
}
