import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{ // use this way to create directive not basic-highlight directive example because its better way to access DOM

  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor : string;

  constructor( private elementRef : ElementRef, private renderer : Renderer2) {

   }

   ngOnInit(){
     this.backgroundColor  = this.defaultColor;
     this.renderer.setStyle(this.elementRef.nativeElement,'background-color' , 'lightblue'); //also has flag as parameter
   }

   @HostListener('mouseover') mouseover(eventData : Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color' , 'lightgreen'); // using renderer
    this.backgroundColor = this.highlightColor; // using HostBinding
   }

   @HostListener('mouseleave') mouseleave(eventData : Event){ // intially after page load will not trigger but after mouse leave it will trigger
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color' , 'transparent');
    this.backgroundColor = this.defaultColor;
   }
}
