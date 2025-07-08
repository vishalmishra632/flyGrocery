import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: false,
  styleUrls: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Initialize any required functionality
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header?.classList.add('sticky');
    } else {
      header?.classList.remove('sticky');
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
