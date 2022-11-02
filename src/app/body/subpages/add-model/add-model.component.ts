import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test(mName:string, model:string, grade:string){
    console.log(mName); 
    console.log(model); 
    console.log(grade); 
  }

}
