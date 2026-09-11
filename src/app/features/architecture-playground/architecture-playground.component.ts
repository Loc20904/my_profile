import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchitectureNode, MockEndpoint } from '../../core/models/profile.model';

@Component({
  selector: 'app-architecture-playground',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="architecture" class="max-w-5xl mx-auto px-4 py-16">
      
      <!-- Section Header -->
      <div class="mb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 mb-3 border border-zinc-200 dark:border-zinc-700/60">
          <span>01. SYSTEM ARCHITECTURE & API EXPLORER</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
          Under the Hood: <span class="text-violet-600 dark:text-violet-400">Clean Architecture</span> & Live Topology
        </h2>
        <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl">
          Khám phá mô hình phân tầng kiến trúc backend hướng hiệu năng cao và thử nghiệm gửi request trực tiếp qua cURL terminal giả lập.
        </p>
      </div>

      <!-- Part 1: Interactive C4 Topology Visualizer -->
      <div class="bezel-outer mb-12">
        <div class="bezel-inner">
          <div class="flex items-center justify-between mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <h3 class="text-base font-bold text-zinc-950 dark:text-white flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-violet-500"></span>
                <span>Interactive C4 System Topology</span>
              </h3>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                Nhấp vào từng phân tầng kiến trúc để xem chi tiết design patterns và chiến lược tối ưu
              </p>
            </div>
            <span class="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              ● All Services Active
            </span>
          </div>

          <!-- Layers Navigation Buttons -->
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-6">
            @for (node of nodes(); track node.id) {
              <button 
                (click)="selectNode(node.id)"
                [ngClass]="selectedNodeId() === node.id ? 'ring-2 ring-violet-500 bg-violet-50 dark:bg-violet-950/40' : ''"
                class="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/50 hover:border-violet-500/50 text-left transition-all group">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[10px] font-mono uppercase text-zinc-400 dark:text-zinc-500">
                    {{ node.id }}
                  </span>
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                </div>
                <div class="font-bold text-xs text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors truncate">
                  {{ node.title }}
                </div>
                <div class="text-[10px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                  {{ node.tech }}
                </div>
              </button>
            }
          </div>

          <!-- Active Node Detail Card -->
          @if (currentNode(); as activeNode) {
            <div class="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-950/60 p-5 transition-all">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-200 dark:border-zinc-800/80">
                <div>
                  <span class="text-xs font-mono text-violet-600 dark:text-violet-400 font-semibold">
                    {{ activeNode.layerName }}
                  </span>
                  <h4 class="text-lg font-bold text-zinc-950 dark:text-white">
                    {{ activeNode.title }}
                  </h4>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-mono px-2.5 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    Tech: {{ activeNode.tech }}
                  </span>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Responsibilities -->
                <div>
                  <h5 class="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                    // Nghiệp vụ & Trách nhiệm
                  </h5>
                  <p class="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {{ activeNode.responsibilities }}
                  </p>

                  <!-- Design Patterns -->
                  <h5 class="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-4 mb-2">
                    // Design Patterns Áp dụng
                  </h5>
                  <div class="flex flex-wrap gap-1.5">
                    @for (pattern of activeNode.patterns; track pattern) {
                      <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-200/80 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                        {{ pattern }}
                      </span>
                    }
                  </div>
                </div>

                <!-- Performance Optimization Note -->
                <div class="rounded-lg border border-violet-500/20 bg-violet-500/5 dark:bg-violet-950/20 p-4 flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-mono uppercase tracking-wider text-violet-600 dark:text-violet-400 font-bold flex items-center gap-1.5 mb-2">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                      <span>Chiến lược Hiệu năng & Tối ưu</span>
                    </h5>
                    <p class="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {{ activeNode.performanceNote }}
                    </p>
                  </div>
                  <div class="mt-4 pt-3 border-t border-violet-500/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>Status: {{ activeNode.status }}</span>
                    <span class="text-emerald-500 font-semibold">● 0 unhandled faults</span>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>

      <!-- Part 2: Mock Terminal / cURL API Explorer -->
      <div class="bezel-outer">
        <div class="bezel-inner !p-0 overflow-hidden">
          
          <!-- Terminal Header -->
          <div class="bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span class="text-xs font-mono text-zinc-400 ml-2">bash — backend-api-explorer &#64; loc20904</span>
            </div>
            <div class="text-[11px] font-mono text-zinc-500">
              HTTP/2 Live Simulator
            </div>
          </div>

          <!-- Endpoint Tabs -->
          <div class="bg-zinc-950 px-4 pt-3 flex flex-wrap gap-2 border-b border-zinc-800/80">
            @for (ep of endpoints(); track ep.path; let idx = $index) {
              <button 
                (click)="selectEndpoint(idx)"
                [class.bg-zinc-800]="selectedEndpointIdx() === idx"
                [class.text-white]="selectedEndpointIdx() === idx"
                [class.border-b-2]="selectedEndpointIdx() === idx"
                [class.border-violet-500]="selectedEndpointIdx() === idx"
                [class.text-zinc-400]="selectedEndpointIdx() !== idx"
                class="px-3 py-1.5 rounded-t-md text-xs font-mono transition-colors flex items-center gap-1.5 hover:text-white">
                <span 
                  [class.text-emerald-400]="ep.method === 'GET'"
                  [class.text-blue-400]="ep.method === 'POST'"
                  class="font-bold text-[10px]">
                  {{ ep.method }}
                </span>
                <span class="truncate max-w-[200px] sm:max-w-xs">{{ ep.path }}</span>
              </button>
            }
          </div>

          <!-- Terminal Body -->
          <div class="bg-zinc-950 p-5 font-mono text-xs">
            @if (currentEndpoint(); as ep) {
              
              <!-- Command & Run Trigger -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-zinc-800/80">
                <div class="text-zinc-400 text-xs">
                  <span class="text-emerald-400"># </span>{{ ep.description }}
                </div>
                <div class="flex items-center gap-2">
                  <!-- Copy cURL button -->
                  <button 
                    (click)="copyCurl(ep.curlCommand)"
                    class="px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs transition-colors flex items-center gap-1.5">
                    @if (copied()) {
                      <span class="text-emerald-400">✓ Copied!</span>
                    } @else {
                      <span>Copy cURL</span>
                    }
                  </button>

                  <!-- Send Request Button -->
                  <button 
                    (click)="executeRequest()"
                    [disabled]="isExecuting()"
                    class="px-4 py-1.5 rounded bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white font-semibold transition-all shadow flex items-center gap-2">
                    @if (isExecuting()) {
                      <span class="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Sending...</span>
                    } @else {
                      <span>Send Request ▶</span>
                    }
                  </button>
                </div>
              </div>

              <!-- cURL Display -->
              <div class="mb-4">
                <div class="text-zinc-500 mb-1.5">$ {{ ep.curlCommand }}</div>
              </div>

              <!-- Response Box -->
              <div class="rounded-lg border border-zinc-800 bg-zinc-900/90 p-4 relative">
                <div class="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800/80 text-[11px]">
                  <div class="flex items-center gap-2">
                    <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                      HTTP {{ ep.statusCode }} OK
                    </span>
                    <span class="text-zinc-400">
                      Latency: <strong class="text-zinc-200">{{ ep.latencyMs }}ms</strong>
                    </span>
                  </div>
                  <span class="text-zinc-500">Content-Type: application/json</span>
                </div>

                <!-- Preformatted JSON with Syntax Highlight Simulation -->
                <pre class="overflow-x-auto text-[11px] leading-relaxed text-zinc-300 font-mono"><code>{{ ep.responsePayload | json }}</code></pre>
              </div>

            }
          </div>

        </div>
      </div>

    </section>
  `
})
export class ArchitecturePlaygroundComponent {
  nodes = input.required<ArchitectureNode[]>();
  endpoints = input.required<MockEndpoint[]>();

  selectedNodeId = signal<string>('gateway');
  selectedEndpointIdx = signal<number>(0);
  isExecuting = signal<boolean>(false);
  copied = signal<boolean>(false);

  selectNode(id: string): void {
    this.selectedNodeId.set(id);
  }

  selectEndpoint(idx: number): void {
    this.selectedEndpointIdx.set(idx);
  }

  currentNode() {
    return this.nodes().find(n => n.id === this.selectedNodeId()) || this.nodes()[0];
  }

  currentEndpoint() {
    return this.endpoints()[this.selectedEndpointIdx()] || this.endpoints()[0];
  }

  isDark(): boolean {
    return document.documentElement.classList.contains('dark');
  }

  executeRequest(): void {
    this.isExecuting.set(true);
    setTimeout(() => {
      this.isExecuting.set(false);
    }, 450);
  }

  copyCurl(curlCmd: string): void {
    navigator.clipboard.writeText(curlCmd);
    this.copied.set(true);
    setTimeout(() => {
      this.copied.set(false);
    }, 2000);
  }
}
