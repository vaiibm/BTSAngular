import { Component, Input, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service'
/*
not implmented successfully yet
*/

@Component({
  selector: 'app-update-bug',
  templateUrl: './update-bug.component.html',
  styleUrls: ['./update-bug.component.css','./style.css']
})
export class UpdateBugComponent implements OnInit {
  bugArray: any;
  title: string = "update bugs";
  bug: Bug = new Bug();
  tempbug: any;
  selectId: string;
  constructor(private bugService: BugService) { }

  getFieldData() {
    let takevalue = (<HTMLInputElement>document.getElementById('takevalue')).value;
    const observable = this.bugService.getBugs(takevalue);
    observable.subscribe(response => {this.tempbug = response;
      if (this.tempbug[0] == undefined) {
        return alert("No Resposne for this input");
      }
      this.bug = this.tempbug;


    },
    erro=>{
      return alert("No Resposne for this input");
    });
  }

  ngOnInit(): void {
    document.getElementById('buttonSave').innerHTML='Update Bug';
    document.getElementById('searchbutton').className='btn btn-primary';
    document.getElementById('createbutton').className='btn btn-primary';
    document.getElementById('updatebutton').className='btn btn-link';
    document.getElementById('buttonSave').innerHTML='Create Bug'
    // const observable = this.bugService.getBugs('');
    // observable.subscribe(response => {
    //   this.bugArray = response;
      // let txt1 = "<select (change)='this.getFieldData.emit()' name=\"id\" id=\"selectId\" class=\"form-control\"   style=\"display: block;margin:0 auto;\">";
      // for (let i = 0; i < this.bugArray.length; i++) {
      //   txt1 += "<option  value='" + this.bugArray[i].id + "'>" + "  " + this.bugArray[i].name + "  </option>";
      // }
      // txt1 += "</select>";
      // let txt1="<input  class=\"form-control form-control-lg form-control-borderless\" type=\"search\" id='takevalue' placeholder=\"Enter Bug Name\"><button style=\"margin: 10px;\" onclick='getFieldData()' class=\"btn btn-lg btn-success\">    Search</button>";
      // if (document.getElementById('selectBug')) {
      //   document.getElementById('selectBug').innerHTML = txt1;
       // this.getFieldData();
      //}
    }}


    // fetch('/bug/')
    // .then(response => response.json())
    // .then(json => {
    // 	let radr = JSON.stringify(json)
    // 	radr = JSON.parse(radr)

    // 	let txt1 = "<select onchange='getFieldData()' name=\"id\" id=\"id\" class=\"form-control\"   style=\"display: block;margin:0 auto;\">";
    // 	for (let i = 0; i < radr.length; i++) {
    // 		txt1 += "<option  value='" + radr[i].id + "'>" + radr[i].id + "  " + radr[i].name + "</option>";

    // 	}
    // 	txt1 += "</select>";
    // 	if (document.getElementById('idselect')) {
    // 		document.getElementById('idselect').innerHTML = txt1;
    // 		getProject();

    // 		getFieldData();

    // 	}
    // })
    // .then(data => {
    // 	if (document.getElementById('showbugdata')) {
    // 		getBug()
    // 	}
    // }
