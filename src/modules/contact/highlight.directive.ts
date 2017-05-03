/* tslint:disable */
// Same directive name and selector as
// HighlightDirective in parent AppModule
// It selects for both input boxes and  'highlight' attr
// and it highlights in blue instead of gold

import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[highlight], input' })
/** Highlight the attached element or an InputElement in blue */
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'powderblue';
    console.log(
      `* Contact highlight called for ${el.nativeElement.tagName}`);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/