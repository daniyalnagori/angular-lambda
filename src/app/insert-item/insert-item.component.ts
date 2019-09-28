import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-insert-item',
  templateUrl: './insert-item.component.html',
  styleUrls: ['./insert-item.component.scss']
})
export class InsertItemComponent implements OnInit {
  profile = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });
  constructor(private http: HttpClient) {
    
   }

  ngOnInit() {
  }


  onSubmit(){
    console.warn(this.profile.value);
    this.http.post('https://24pr8rllef.execute-api.us-east-1.amazonaws.com/dev/post',this.profile.value).subscribe((data) => {
      console.log(data);
    })
  }


}
