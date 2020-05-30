import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetdataserviceService } from '../../getdataservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  private cate;
  private SEARCH;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GetdataserviceService
  ) {}

  Data;
  search;
  ngOnInit() {
    this.route.queryParams.subscribe((param) => {
      this.search = param.d;
      this.service.get_cat(this.search).subscribe((data2) => {
        this.Data = data2;
      });
    });
  }
}
