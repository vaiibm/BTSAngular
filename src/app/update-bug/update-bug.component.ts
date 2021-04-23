import { Component, Input, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service'
/*
not implmented successfully yet
*/

@Component({
  selector: 'app-update-bug',
  templateUrl: './update-bug.component.html',
  styleUrls: ['./update-bug.component.css', './style.css']
})
export class UpdateBugComponent implements OnInit {
  bugArray: any;
  title: string = "update bugs";
  bug: Bug = new Bug();
  tempbug: any;
  tbug: any;;
  selectId: string;
  ess: any;
  constructor(private bugService: BugService) { }
editBug(index:number)
{
this.bug=this.tempbug[index];
document.getElementById('showBugTable').style.display='none';
document.getElementById('showEditBug').style.display='block';
}
  getFieldData() {
    // let takevalue = (<HTMLInputElement>document.getElementById('takevalue')).value;
    // const observable = this.bugService.getBugs(takevalue);
    // observable.subscribe(response => {
    //   this.tempbug = response;
    //   if (this.tempbug[0] == undefined) {
    //     return alert("No Resposne for this input");
    //   }
    //   this.bug = this.tempbug;
    //   //this.ess=this.bug.eta.toString().split('T')[0];


    // },
    //   erro => {
    //     return alert("No Resposne for this input");
    //   });
    let value = (<HTMLInputElement>document.getElementById('partialselect')).value;
    if (value == '') {
      let val = ' ';
      let tBug = this.bug;
      let setAll = (bug, val) => Object.keys(bug).forEach(k => bug.k = val);
      let setNull = (tBug) => setAll(tBug,val);
      this.bug=tBug;
     // this.bug = null;
    }
    else {
      this.bug = this.tempbug[value];
    }

  }
  showSynopsis(synopsis: string) {
    document.getElementById('showSynopsis').innerHTML = synopsis;

    return document.getElementById('synopsisButton').click();
  }

  closeEditBug()
  {
    document.getElementById('showEditBug').style.display='none';
    document.getElementById('showBugTable').style.display='block';
  }
  partialSearch() {
    document.getElementById('showEditBug').style.display='none';

    let takevalue = (<HTMLInputElement>document.getElementById('takevalue')).value;
    let remText =takevalue.replace(/ /g, "");
    if (remText.length > 50) {
    return alert("Error : Name should be minimum 1 and maximum 50)");
    }
    const observable = this.bugService.partialSearch(takevalue);
    observable.subscribe(response => {
      this.tempbug = response;
      //document.getElementById('partialHidden').style.display = "none";
      if (this.tempbug[0] == undefined) {
        return alert("No Resposne for this input");
      }
      if (this.tempbug[0] != undefined) {
        document.getElementById('showBugTable').style.display='block'
      }
      else{
        this.bug=this.tempbug[0];
      }
      // this.bug = this.tempbug;
      this.bug.etaString=this.bug.eta.toString().split('T')[0];
      console.log(this.tempbug);

    },
      erro => {
        return alert("No Resposne for this input");
      });
  }

  ngOnInit(): void {
    document.getElementById('buttonSave').innerHTML = 'Update Bug';
    document.getElementById('searchbutton').className = 'btn btn-primary';
    document.getElementById('createbutton').className = 'btn btn-primary';
    document.getElementById('updatebutton').className = 'btn btn-link';
    document.getElementById('buttonSave').innerHTML = 'Update Bug';
  }
}


