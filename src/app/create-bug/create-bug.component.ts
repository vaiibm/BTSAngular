import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import {BugService} from '../bug.service'

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.css','./style.css']


})
export class CreateBugComponent implements OnInit {
title:string="CreateBug";
bug:Bug= new Bug();
bugArray:Bug[]=[];
 constructor( private bugService:BugService){}
 save(){
  const promise=this.bugService.save(this.bug);
  promise.subscribe(response =>{
    console.log(response);
    alert('bug added..')
    this.bugArray.push(Object.assign({},this.bug))},


  error=>{
    console.log(error);
    if(!error.ok)
    alert("Error !! : "+error.headers.get("error"))
    else{
      alert('bug added..');
    }
  });
}
  ngOnInit(): void {
  }

}
