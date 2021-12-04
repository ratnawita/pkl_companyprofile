import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detailblog } from './detailblog.model';
import { NewsapiservicesService } from '../../service/newsapiservices.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detailblog',
  templateUrl: './detailblog.component.html',
  styleUrls: ['./detailblog.component.css']
})
export class DetailblogComponent implements OnInit {
  //load-spinner
  users!: Object;
  loading = true;

  id: any;
  detailblog = new Detailblog();
  data: any;

  constructor (
    private location: Location,
    private route:ActivatedRoute,
    private _service:NewsapiservicesService) { }

  goBack() {
    // window.history.back();
    this.location.back();
    console.log( 'goBack()...' );
  }

  // display data

  ngOnInit () {
    this.id = this.route.snapshot.params.id;
    this.getData();

    this._service.getUsers().subscribe((data: Object) => {
      this.users = data;
      this.loading = false;
    });
  }

  getData() {
    this._service.getDetailblogById(this.id).subscribe(res=> {
      this.data=res;
      this.detailblog = this.data;
    })
  }
  
}