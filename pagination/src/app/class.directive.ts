import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective implements OnChanges {
  @Input() backgroundColor!: string;

  constructor(private element: ElementRef) { }

  ngOnChanges() {
    if (this.backgroundColor) {
      this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    }
  }
}
