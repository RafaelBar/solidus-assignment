import { Component, OnInit, Input } from '@angular/core';
import { AppModule } from '../app.module';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'my-gallery',
  templateUrl: './my-gallery.component.html',
  styleUrls: ['./my-gallery.component.less']
})
export class MyGalleryComponent implements OnInit {
  images: any = [];
  showSearch: boolean = false;
  @Input() feed: string;
  @Input() search: boolean;
  constructor(private httpClient: HttpClient) { }
   
   ngOnInit(){
      this.httpClient.get(this.feed).subscribe(data =>{
        console.log(data);
        this.images = data;
      })
      this.showSearch = this.search;
  }

}
