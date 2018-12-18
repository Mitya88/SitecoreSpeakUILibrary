import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-page',
  templateUrl: './color-page.component.html',
  styleUrls: ['./color-page.component.scss']
})
export class ColorPageComponent implements OnInit {

   classes: string[] = [ "bg-main-xxx-dark"  ,"bg-main-xx-dark"  ,"bg-main-x-dark"  ,"bg-main-dark "  ,"bg-main-default"  ,"bg-main-light "  ,"bg-main-x-light"  ,"bg-main-xx-light"  ,"bg-main-xxx-light"  ,"bg-primary-xxx-dark "  ,"bg-primary-xx-dark "  ,"bg-primary-x-dark "  ,"bg-primary-dark"  ,"bg-primary-default"  ,"bg-primary-light"  ,"bg-primary-x-light"  ,"bg-primary-xx-light "  ,"bg-primary-xxx-light "  ,"bg-basic-xxx-dark"  ,"bg-basic-xx-dark "  ,"bg-basic-x-dark "  ,"bg-basic-dark "  ,"bg-basic-default "  ,"bg-basic-light"  ,"bg-basic-x-light"  ,"bg-basic-xx-light "  ,"bg-basic-xxx-light"  ,"bg-basic-black"  ,"bg-basic-white "  ,"bg-sky-xxx-dark "  ,"bg-sky-xx-dark "  ,"bg-sky-x-dark "  ,"bg-sky-dark "  ,"bg-sky-default"  ,"bg-sky-light"  ,"bg-sky-x-light"  ,"bg-sky-xx-light"  ,"bg-sky-xxx-light"  ,"bg-grass-xxx-dark"  ,"bg-grass-xx-dark "  ,"bg-grass-x-dark"  ,"bg-grass-dark "  ,"bg-grass-default"  ,"bg-grass-light "  ,"bg-grass-x-light"  ,"bg-grass-xx-light"  ,"bg-grass-xxx-light"  ,"bg-banana-xxx-dark "  ,"bg-banana-xx-dark "  ,"bg-banana-x-dark"  ,"bg-banana-dark "  ,"bg-banana-default"  ,"bg-banana-light "  ,"bg-banana-x-light"  ,"bg-banana-xx-light"  ,"bg-banana-xxx-light"  ,"bg-carrot-xxx-dark "  ,"bg-carrot-xx-dark "  ,"bg-carrot-x-dark "  ,"bg-carrot-dark "  ,"bg-carrot-default"  ,"bg-carrot-light"  ,"bg-carrot-x-light "  ,"bg-carrot-xx-light "  ,"bg-carrot-xxx-light "  ,"bg-tomato-xxx-dark "  ,"bg-tomato-xx-dark "  ,"bg-tomato-x-dark "  ,"bg-tomato-dark "  ,"bg-tomato-default"  ,"bg-tomato-light "  ,"bg-tomato-x-light"  ,"bg-tomato-xx-light"  ,"bg-tomato-xxx-light"  ,"bg-eggplant-xxx-dark"  ,"bg-eggplant-xx-dark "  ,"bg-eggplant-x-dark "  ,"bg-eggplant-dark "  ,"bg-eggplant-default"  ,"bg-eggplant-light "  ,"bg-eggplant-x-light"  ,"bg-eggplant-xx-light"  ,"bg-eggplant-xxx-light"  ,"bg-sand-xxx-dark "  ,"bg-sand-xx-dark "  ,"bg-sand-x-dark "  ,"bg-sand-dark "  ,"bg-sand-default"  ,"bg-sand-light "  ,"bg-sand-x-light"  ,"bg-sand-xx-light "  ,"bg-sand-xxx-light"  ,"bg-wood-xxx-dark "  ,"bg-wood-xx-dark "  ,"bg-wood-x-dark "  ,"bg-wood-dark"  ,"bg-wood-default"  ,"bg-wood-light "  ,"bg-wood-x-light"  ,"bg-wood-xx-light"  ,"bg-wood-xxx-light"  ,"bg-steel-xxx-dark "  ,"bg-steel-xx-dark "  ,"bg-steel-x-dark "  ,"bg-steel-dark "  ,"bg-steel-default"  ,"bg-steel-light "  ,"bg-steel-x-light"  ,"bg-steel-xx-light"  ,"bg-steel-xxx-light"];
  constructor() { }

  ngOnInit() {
  }

}
