import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit{
  ngOnInit(): void {
    
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.img',
        start:"top center",
        end:"bottom center",
        scrub:true,
      }
    })
    tl.fromTo('.img',{
      y:-100,
      transition:.4
    },{
      y:50,
    })
    
  }

}


