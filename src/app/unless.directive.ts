import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {  //custom structural directive
  @Input() set appUnless(condition:boolean){ // method should have same name as directive 
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);

    }
    else{
      this.vcRef.clear();
    }
  }

  constructor(private templateRef:TemplateRef<any> , private vcRef:ViewContainerRef ) { 

  }

}
