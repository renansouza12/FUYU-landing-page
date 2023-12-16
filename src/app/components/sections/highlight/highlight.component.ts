import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss','highlight.response.component.scss']
})
export class HighlightComponent implements OnInit{
  ngOnInit(): void {
    
      const tl = gsap.timeline({
        scrollTrigger:{
        trigger:'.highlight_img',
        start:"top center",
        end:"bottom center",
        scrub:true,
      },
      });
      tl.fromTo('.highlight_img',{
        y:100,
        transition:.4
      },{
        y:0,
      })
  }

}
