import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: false,
  styleUrls: [],

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

  setActiveNav(event: Event) {
    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.navbar-nav .nav-item a');
    navItems.forEach(item => item.classList.remove('active'));

    // Add active class to clicked item
    (event.target as HTMLElement).classList.add('active');
  }

  scrollToCategories(event: Event) {
    event.preventDefault();

    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.navbar-nav .nav-item a');
    navItems.forEach(item => item.classList.remove('active'));

    // Add active class to Categories link
    (event.target as HTMLElement).classList.add('active');

    // Scroll to categories section
    const categoriesSection = document.getElementById('categories-section');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Add highlight effect
      categoriesSection.classList.add('highlight-section');

      // Remove highlight and active class after 2 seconds
      setTimeout(() => {
        categoriesSection.classList.remove('highlight-section');
        (event.target as HTMLElement).classList.remove('active');
      }, 2000);
    }
  }
}
