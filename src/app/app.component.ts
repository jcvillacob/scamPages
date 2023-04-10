import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'scamPages';

  ngOnInit() {
    let windowHeight: number | undefined;
    let footerHeight: number | undefined;

    $(window).on('load', () => {
      windowHeight = $(window).height();
      footerHeight = $('footer').height();

      const heightDocument = (windowHeight || 0) + ($('.content').height() || 0) + (footerHeight || 0) - 20;

      // Definindo o tamanho do elemento pra animar
      $('#scroll-animate, #scroll-animate-main').css({
        'height': heightDocument + 'px'
      });

      // Definindo o tamanho dos elementos header e conteúdo
      $('header').css({
        'height': (windowHeight || 0) + 'px',
        'line-height': (windowHeight || 0) + 'px'
      });

      $('.wrapper-parallax').css({
        'margin-top': (windowHeight || 0) + 'px'
      });

      if (windowHeight && footerHeight) {
        this.scrollFooter(window.scrollY, footerHeight);
      }
    });

    // ao dar rolagem
    window.onscroll = () => {
      const scroll = window.scrollY;

      $('#scroll-animate-main').css({
        'top': '-' + scroll + 'px'
      });

      if (windowHeight && footerHeight) {
        $('header').css({
          'background-position-y': 50 - (scroll * 100 / ((windowHeight || 0) + ($('.content').height() || 0) + (footerHeight || 0) - 20)) + '%'
        });

        this.scrollFooter(scroll, footerHeight);
      }
    };
  }

  scrollFooter(scrollY: number | undefined, heightFooter: number | undefined) {
    console.log(scrollY);
    console.log(heightFooter);

    if (scrollY && heightFooter) {
      $('footer').css({
        'bottom': scrollY >= heightFooter ? '0px' : '-' + heightFooter + 'px'
      });
    }
  }
}
