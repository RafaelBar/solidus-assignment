import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AppModule } from '../app.module';
import { HttpClient } from "@angular/common/http";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-gallery',
  templateUrl: './my-gallery.component.html',
  styleUrls: ['./my-gallery.component.less']
})
export class MyGalleryComponent implements OnInit {

  images: any = [];
  sliderImages: any = [];
  searchText: string;
  p: number = 1; //number of the page to start the gallery
  isSlideshow: boolean = false;
  @ViewChild('slideshow', {static: false}) slideshow: any; 
  
  @Input() feed: string;
  @Input() search: boolean;
  @Input() pagination: boolean;
  @Input() sorting: boolean;
  @Input() itemsPerPage: number;
  @Input() transitionTime: number;

  constructor(private httpClient: HttpClient) { }
   
   ngOnInit(){
      this.httpClient.get(this.feed).subscribe(data =>{
        //console.log(data);
        this.images = data;
      })
      this.search = this.search ?  this.search : true;
      this.pagination = this.pagination ?  this.pagination : true;
      this.sorting = this.sorting ?  this.sorting : true;
      this.itemsPerPage = this.itemsPerPage ?  this.itemsPerPage : 10;
      this.transitionTime = this.transitionTime ?  this.transitionTime : 4;
  }

  sortBy(sortType: string){
    if(sortType == "title")
      this.images.sort((a,b) => a.title.localeCompare(b.title));
    else
      this.images.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  openSlideshow(imageObject){
    //console.log(imageObject);
    // const sliderTemp = [];
    // const sliderStartTemp = [];
    // this.images.forEach(function (key) {
    //   if(key<imageObject)
    //     sliderStartTemp.push({key});   
    //   else{
    //     sliderTemp.push({key});  
    //   }
    // });
    // sliderTemp.push({sliderStartTemp});
    // console.log(sliderTemp);
    this.sliderImages = [imageObject].map((n) => this.images[n]);
    
  }

}
