import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { URLS, WEBTESTURLS } from 'src/app/Constants/materialURLS';

interface SideNavName {
  name: string;
  index: number;
}
interface Desc {
  name: string;
  url: string;
  // selected:boolean;
}

@Component({
  selector: 'app-web-based-form',
  templateUrl: './web-based-form.component.html',
  styleUrls: ['./web-based-form.component.css']
})


export class WebBasedFormComponent implements OnInit{
  showList: boolean = true;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  iframeURL:any="index.html";
  // sideNavNames:Array<Object>=[];
  sideNavNames:SideNavName[]=[];
  activeItem = null;
  mainName!:any;
  desc:Desc[]=[];
  selected:any=false;
  constructor(private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    WEBTESTURLS.forEach((element,index) => {
      this.sideNavNames.push({'name':element.name, 'index':index});
    });
    console.log(JSON.stringify(this.sideNavNames[0].name));

  }

    openNewTab(url: any) {
    window.open(url, '_blank');
    // const unsafeURL = URLS[index];
    // this.iframeURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://cors-anywhere.herokuapp.com/"+unsafeURL);
    // console.log(this.iframeURL);
    // this.iframeURL = URLS[index];
    this.sidenav.close();
  }

  showPages(index:any){
    this.desc=[];
    this.mainName = WEBTESTURLS[index].name;
    WEBTESTURLS[index].desc.forEach((element,index) => {
      console.log({'name':element.iName, 'url':element.iURL});
      this.desc.push({'name':element.iName, 'url':element.iURL});
    });
    this.sidenav.close();
    // console.log(JSON.stringify(this.desc.name));
  }
  toggleSelection(item:any) {
    // item.selected = !item.selected;
    if (this.activeItem === item) {
      this.activeItem = null; // Clicking on the active item again should deactivate it.
    } else {
      this.activeItem = item;
    }
  }
}
