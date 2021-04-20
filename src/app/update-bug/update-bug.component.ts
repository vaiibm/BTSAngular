import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service'
/*
not implmented successfully yet
*/

@Component({
  selector: 'app-update-bug',
  templateUrl: './update-bug.component.html',
  styleUrls: ['./update-bug.component.css']
})
export class UpdateBugComponent implements OnInit {
  bugArray: any;
  title: string = "update bugs";
  bug: Bug = new Bug();
  tempbug: any;
  selectId: string;
  constructor(private bugService: BugService) { }

  getFieldData() {
    this.selectId = (<HTMLInputElement>document.getElementById('selectId')).value;
    const observable = this.bugService.getBugs(this.selectId);
    observable.subscribe(response => {
      this.tempbug = response;
      this.bug = this.tempbug;
    });
  }
  ngOnInit(): void {
    const observable = this.bugService.getBugs('');
    observable.subscribe(response => {
      this.bugArray = response;
      let txt1 = "<select onchange='getFieldData()' name=\"id\" id=\"selectId\" class=\"form-control\"   style=\"display: block;margin:0 auto;\">";
      for (let i = 0; i < this.bugArray.length; i++) {
        txt1 += "<option  value='" + this.bugArray[i].id + "'>" + "  " + this.bugArray[i].name + "  </option>";
      }
      txt1 += "</select>";
      if (document.getElementById('selectBug')) {
        document.getElementById('selectBug').innerHTML = txt1;
        this.getFieldData();
      }
    }
    );

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
    // })
  }

}
