import { trigger, state, animate, transition, style ,query,stagger,keyframes} from '@angular/animations';

export const slideInOutAnimation =
    trigger('slideInOutAnimation', [

        transition('* <=> *',[
          query(':enter', style({position: 'fixed',opacity:0}),{optional:true}),
          query(':leave',
            animate('.6s ease', keyframes([
              style({ position: 'fixed',width:'100%',opacity:1,transform:'translateX(0)',offset:0}),
              style({opacity:.5,transform:'translateY(55px)',offset:.3}),
              style({opacity:0,transform:'translateX(-75%)',offset:1}),
            ]))
          ,{optional:true}),

           
            query(':enter',
              animate('.6s ease', keyframes([
                style({position: 'fixed', width:'100%',opacity:0,transform:'translateX(-75%)',offset:0}),
                style({opacity:.5,transform:'translateX(35px)',offset:.3}),
                style({opacity:1,transform:'translateX(0)',offset:1}),
              ]))
            ,{optional:true}),
    
          
          ]),
          
    
    ]);