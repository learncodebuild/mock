import { Component, ElementRef, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1-main-comp',
  templateUrl: './comp1-main-comp.component.html',
  styleUrls: ['./comp1-main-comp.component.css']
})
export class Comp1MainCompComponent implements OnInit {
  ngOnInit(): void {
    var script = document.createElement("script");
    script.id = "ff-script";
    script.src = "https://formfacade.com/include/113082221084342209427/form/1FAIpQLScnq5Cd4Yz4sE1uJaKYHjwmFSRUG5aM96YtqF97C5BlkwAuNQ/classic.js?div=ff-compose";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }
    // throw new Error('Method not implemented.');
  }
