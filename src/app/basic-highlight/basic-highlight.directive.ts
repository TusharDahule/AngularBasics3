import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]' //use square here to tell we can use without square

})


export class BasicHighlightDirective implements OnInit{

    constructor(private elementRef:ElementRef){

    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
    }
    

}