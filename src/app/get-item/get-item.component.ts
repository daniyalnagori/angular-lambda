import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-get-item',
  templateUrl: './get-item.component.html',
  styleUrls: ['./get-item.component.scss']
})
export class GetItemComponent implements OnInit {

  constructor(private http: HttpClient) { 
    this.http.get('https://lsj8s8y21b.execute-api.us-east-1.amazonaws.com/dev/posts').subscribe((data) => {
      console.log('data',data);
    })
    console.log('data');
  }

  ngOnInit() {
  }

}
