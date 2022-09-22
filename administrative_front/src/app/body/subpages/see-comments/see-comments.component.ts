import { Component, OnInit } from '@angular/core';
import { SenderService } from 'src/app/sender.service';

export interface Model {
  id: string;
  name: string;
  category: string;
  grade: string;
}

@Component({
  selector: 'app-see-comments',
  templateUrl: './see-comments.component.html',
  styleUrls: ['./see-comments.component.css']
})
export class SeeCommentsComponent implements OnInit {

  detailComment!: Model;

  constructor(private service: SenderService) { }


  ngOnInit(): void {
    this.detailComment = this.service.data
    console.log(this.detailComment)
  }

}
