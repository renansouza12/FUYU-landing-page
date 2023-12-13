import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss','hero.responsive.component.scss']
})
export class HeroComponent implements OnInit{
  ngOnInit(): void {

    const tl = gsap.timeline({
        scrollTrigger:{
        trigger:'.img',
        start:"top center",
        end:"bottom center",
        scrub:true,
      },
    });
    tl.fromTo('.img',{
      y:-100,
      transition:.4
    },{
      y:50,
    })
    
    const myText = new SplitType('.txt');
    
    const tl1 = gsap.timeline({
      scrollTrigger:{
        trigger:'.title',
        start:"top top",
        end:"bottom center",
        scrub:true,
      }
    })    
   tl1.to('.char',{
    stagger:-0.5,
    opacity:0,
   })

   gsap.fromTo('.txt',{
    opacity:0,    
   },{
    opacity:1,
    duration:2,
    transition:0.5
   })
  }

}


