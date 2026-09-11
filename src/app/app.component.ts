import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROFILE_DATA } from './core/data/profile-data';
import { NavbarComponent } from './features/navbar/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { MetricsRibbonComponent } from './features/metrics-ribbon/metrics-ribbon.component';
import { CaseStudiesComponent } from './features/case-studies/case-studies.component';
import { TechRadarComponent } from './features/tech-radar/tech-radar.component';
import { TimelineComponent } from './features/timeline/timeline.component';
import { FooterComponent } from './features/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    MetricsRibbonComponent,
    CaseStudiesComponent,
    TechRadarComponent,
    TimelineComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  profileData = PROFILE_DATA;
}
