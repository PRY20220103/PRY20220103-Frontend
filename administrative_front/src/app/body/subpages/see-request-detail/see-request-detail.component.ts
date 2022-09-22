import { Component, OnInit } from '@angular/core';
import { SenderService } from 'src/app/sender.service';

export interface Request {
  id: string;
  name: string;
  rol: string;
  desc: string;
  status: string;
  category: string;
  grade: string;
}

@Component({
  selector: 'app-see-request-detail',
  templateUrl: './see-request-detail.component.html',
  styleUrls: ['./see-request-detail.component.css']
})
export class SeeRequestDetailComponent implements OnInit {

  detailService!: Request;

  constructor(private service: SenderService) { }

  ngOnInit(): void {
    this.detailService = this.service.data
    console.log(this.detailService.name)
  }

  

}
