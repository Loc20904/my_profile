import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileData } from '../../../core/models/profile.model';

@Component({
  selector: 'app-resume-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (isOpen()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
        
        <!-- Backdrop Click to Close -->
        <div class="fixed inset-0" (click)="closeModal.emit()"></div>

        <!-- Modal Content Container -->
        <div class="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl p-6 sm:p-8 z-10">
          
          <!-- Header -->
          <div class="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200 dark:border-zinc-800">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center font-mono font-bold text-sm">
                CV
              </div>
              <div>
                <h3 class="text-lg font-bold text-zinc-950 dark:text-white">
                  Curriculum Vitae Preview
                </h3>
                <p class="text-xs text-zinc-500 font-mono">
                  BackEnd_.NET_loc20904.pdf
                </p>
              </div>
            </div>

            <button 
              (click)="closeModal.emit()"
              class="p-2 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Quick Summary Cards -->
          <div class="space-y-4 mb-8">
            <div class="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60">
              <h4 class="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">
                Candidate Profile
              </h4>
              <p class="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                {{ profile().name }} — {{ profile().title }}
              </p>
              <p class="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Đại học FPT (GPA 3.5/4.0) | Cựu Backend Intern tại FPT Software Đà Nẵng | AI Team Lead BrandHub
              </p>
            </div>

            <div class="grid grid-cols-2 gap-3 text-xs">
              <div class="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <span class="text-zinc-400 font-mono block text-[10px] uppercase">Core Tech</span>
                <span class="font-bold text-zinc-800 dark:text-zinc-200">C#, ASP.NET Core, FastAPI</span>
              </div>
              <div class="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <span class="text-zinc-400 font-mono block text-[10px] uppercase">Languages</span>
                <span class="font-bold text-zinc-800 dark:text-zinc-200">English (TOEIC 650), Japanese</span>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <button 
              (click)="closeModal.emit()"
              class="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              Đóng
            </button>

            <!-- Download PDF Button -->
            <a 
              href="assets/cv/BackEnd_.NET_loc20904.pdf" 
              download="BackEnd_.NET_loc20904.pdf"
              target="_blank"
              class="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-700 text-white transition-all shadow flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              <span>Download Official PDF (196 KB)</span>
            </a>
          </div>

        </div>

      </div>
    }
  `
})
export class ResumeModalComponent {
  isOpen = input.required<boolean>();
  profile = input.required<ProfileData>();
  closeModal = output<void>();
}
