import {Component} from '@angular/core';

@Component({
  selector: 'pageNotFound',
  template: `<head><title>Page Not Found</title>
              </head><h3>Sorry, Page not found!</h3>`,
  styles: `h3{
      font-size: 20px;
      font-weight: bold;
      text-align: center;}`
})
export class PageNotFound {}
