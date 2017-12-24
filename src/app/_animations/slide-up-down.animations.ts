

import { trigger, state, animate, transition, style ,query,stagger,keyframes} from '@angular/animations';

export const slideUpDownAnimation =
    trigger('slideUpDownAnimation', [
      
        // end state styles for route container (host)
      
        // route 'enter' transition
      
            transition('* => *',[
              query(':enter', style({opacity: 0}),{optional:true}),
              query(':enter',stagger('300ms',[
                animate('.6s ease-in', keyframes([
                  style({opacity:0,transform:'translateY(-75%)',offset:0}),
                  style({opacity:.5,transform:'translateY(35px)',offset:.3}),
                  style({opacity:1,transform:'translateY(0)',offset:1}),
                ]))
              ]),{optional:true}),
      
              query(':leave',stagger('300ms',[
                animate('.6s ease-in', keyframes([
                  style({opacity:1,transform:'translateY(0)',offset:0}),
                  style({opacity:.5,transform:'translateY(35px)',offset:.3}),
                  style({opacity:0,transform:'translateY(-75%)',offset:1}),
                ]))
              ]),{optional:true})
            ])
         
          
    
    ]);