import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'flyGrocery';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Hide preloader after page load
      window.addEventListener('load', () => {
        setTimeout(() => {
          const preloader = document.getElementById('preloader');
          if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
              preloader.style.display = 'none';
            }, 300);
          }
        }, 500);
      });
    }
  }
}
