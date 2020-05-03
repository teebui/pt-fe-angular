import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer">
    <div class="container content has-text-centered">
      <p>©️2020 by Monsieur BUI</p>
    </div>
  </footer>
  `,
  styles: [
  ],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
