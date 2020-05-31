import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

private intialColor = '#f5f5f5';
private defaultColor = '#009699';
private defaultHeigh = 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.intialColor);
    this.setHeight(this.defaultHeigh);
  }

  @Input('appBorderCard') borderColor: string; // alias

  @HostListener('mouseenter') onMouseEnter() { // lié la méthode a notre directive a un évenement donner
    this.setBorder(this.borderColor || this.defaultColor); // pour définir une couleur par défaut
  }

  @HostListener('mouseleave') onMouseLeave() { //  lorque le curseur se déplacera
    this.setBorder(this.intialColor);
  }

  private setBorder(color: string) {
    const border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }
}
