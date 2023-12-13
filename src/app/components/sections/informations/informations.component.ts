import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss','informations.responsive.component.scss']
})
export class InformationsComponent implements OnInit {
  ngOnInit(): void {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.informations',
        start:"-20% center",
        end:"bottom center",
        scrub:true,
      }
    })
    tl.fromTo('.about',{
      x:100,
      opacity:0
    },{
      x:0,
      opacity:1
    })
    const tl1 = gsap.timeline({
      scrollTrigger:{
        trigger:'.informations',
        start:"top center",
        end:"bottom center",
        scrub:true,
      }
    })
    tl1.from('li',{
      opacity:0,
      stagger:0.2,
      transition:.6
    })
   
  }

}
