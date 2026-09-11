import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileData } from '../../../core/models/profile.model';

@Component({
  selector: 'app-resume-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (isOpen()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
        
        <!-- Backdrop Click to Close -->
        <div class="fixed inset-0" (click)="closeModal.emit()"></div>

        <!-- Modal Content Container -->
        <div class="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl p-4 sm:p-6 z-10">
          
          <!-- Header -->
          <div class="flex items-center justify-between pb-3 sm:pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center font-mono font-bold text-sm shadow-sm">
                CV
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-bold text-zinc-950 dark:text-white leading-tight">
                  Curriculum Vitae Preview
                </h3>
                <p class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  BackEnd_.NET_loc20904.pdf
                </p>
              </div>
            </div>

            <button 
              type="button"
              (click)="closeModal.emit()"
              aria-label="Đóng modal"
              class="p-2 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- PDF Viewer Iframe -->
          <div class="my-4 w-full">
            <iframe 
              src="assets/cv/BackEnd_.NET_loc20904.pdf#view=FitH" 
              class="w-full h-[70vh] rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white shadow-inner" 
              title="Preview Resume PDF">
            </iframe>
          </div>

          <!-- Actions -->
          <div class="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-3 sm:pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <button 
              type="button"
              (click)="closeModal.emit()"
              class="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              Đóng
            </button>

            <div class="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
              <!-- Download Button -->
              <a 
                href="assets/cv/BackEnd_.NET_loc20904.pdf" 
                download="BackEnd_.NET_loc20904.pdf"
                class="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700/80 transition-all flex items-center justify-center gap-2">
                <svg class="w-4 h-4 text-zinc-500 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                <span>Tải về máy ↓</span>
              </a>

              <!-- Open Fullscreen in New Tab Button -->
              <a 
                href="assets/cv/BackEnd_.NET_loc20904.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                class="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-700 text-white transition-all shadow-sm hover:shadow flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                <span>Mở tab mới (Toàn màn hình) ↗</span>
              </a>
            </div>
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
