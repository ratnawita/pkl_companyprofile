import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../../service/newsapiservices.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  //load-spinner
  users!: Object;
  loading = true;
  data: any;

  constructor (private _service:NewsapiservicesService) { }

  // display data
  blogDisplay:any = [];

  ngOnInit(): void {

    this._service.blog().subscribe((result)=> {
      console.log(result);
      this.blogDisplay = result;
    })

    this._service.getUsers().subscribe((data: Object) => {
      this.users = data;
      this.loading = false;
    });
    
  }

}
