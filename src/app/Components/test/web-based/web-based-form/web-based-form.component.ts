import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  Pipe,
  PipeTransform,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { IB_APTITUDE } from 'src/app/Constants/indiabixAptitude';
import { URLS, WEBTESTURLS } from 'src/app/Constants/materialURLS';

interface SideNavName {
  name: string;
  index: number;
}

interface ChildNames {
  name: string;
  url: string;
  index: number;
  tag: string;
}

interface Desc {
  name: string;
  // url: string;
  // selected:boolean;
}

@Component({
  selector: 'app-web-based-form',
  templateUrl: './web-based-form.component.html',
  styleUrls: ['./web-based-form.component.css'],
})
export class WebBasedFormComponent implements OnInit {
  showList: boolean = true;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('sidenav1') sidenav1!: MatSidenav;
  iframeURL: any = 'index.html';
  // sideNavNames:Array<Object>=[];
  sideNavNames: SideNavName[] = [];
  childNames: ChildNames[] = [];
  activeItemSideNav = null;
  activeItemChild = null;
  mainName!: any;
  childName!: any;
  desc: Desc[] = [];
  selected: any = false;
  htmlContent: any;
  showPagesClicked: any = false;
  showChildClicked: any = false;
  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {}

  ngOnInit(): void {
    WEBTESTURLS.forEach((element, index) => {
      this.sideNavNames.push({ name: element.name, index: index });
    });

    IB_APTITUDE.forEach((element, index) => {
      this.childNames.push({
        name: element.name,
        url: element.url,
        tag: element.tag,
        index: index,
      });
    });
  }

  openNewTab(url: any) {
    window.open(url, '_blank');
  }

  showPages(index: any) {
    this.desc = [];
    this.mainName = WEBTESTURLS[index].name;
    WEBTESTURLS[index].desc.forEach((element, index) => {
      // console.log({ name: element.iName, url: element.iURL });
      this.desc.push({ name: element.iName });
    });
  }
  toggleSelectionSideNav(item: any) {
    this.childName = item.name;
    if (this.activeItemSideNav === item) {
      this.activeItemSideNav = null;
    } else {
      this.activeItemSideNav = item;
    }
  }
  toggleSelectionChild(item: any) {
    if (this.activeItemChild === item) {
      this.activeItemChild = null;
    } else {
      this.activeItemChild = item;
    }
  }

  back() {
    this.showPagesClicked = !this.showPagesClicked;
  }
}
