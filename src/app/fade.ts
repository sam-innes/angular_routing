import { ElementRef} from '@angular/core';
export class fade{
    static fade(inp: ElementRef){
        var op = 0.1;  // initial opacity
        var page = inp.nativeElement;
        
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            page.style.opacity = op;
            page.style.filter = 'alpha(opacity=' + op * 150 + ")";
            op += op * 0.1;
        }, 10);
    }
}