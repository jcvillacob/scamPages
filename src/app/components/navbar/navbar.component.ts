import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const bars = document.getElementById("nav-action");
    const nav = document.getElementById("nav");

    //setting up the listener
    bars?.addEventListener("click", barClicked, false);

    //setting up the clicked Effect
    function barClicked() {
      bars?.classList.toggle('active');
      nav?.classList.toggle('visible');
    }
  }

}