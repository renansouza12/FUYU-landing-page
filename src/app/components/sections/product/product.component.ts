import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  ngOnInit(): void {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.products_container',
        start:'top center',
        end:'bottom center',
        scrub:true,
        markers:true
      }
    })

   tl.fromTo('.img',{
    opacity:0,
    y:100
   },{
    opacity:1,
    stagger:0.2,
    y:0
   })
   tl.from('.product_txt',{
    opacity:0
   })
   tl.to('.product_txt',{
    opacity:1
   })


  }
 

}
