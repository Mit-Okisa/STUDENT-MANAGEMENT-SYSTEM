import {Injectable, inject} from '@angular/core';
import {Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable()
export class AppTitleStrategy extends TitleStrategy{
  private title = inject(Title);

  override updateTitle(snapshot:RouterStateSnapshot){
    const pageTitle = this.buildTitle(snapshot) || this.title.getTitle();
    this.title.setTitle(pageTitle);
}
}
