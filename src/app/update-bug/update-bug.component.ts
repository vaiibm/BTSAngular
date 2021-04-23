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
  selectId: string;
  ess: any;
  constructor(private bugService: BugService) { }

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
   let value= (<HTMLInputElement>document.getElementById('partialselect')).value;
   if(value=='')
   {
this.bug=null;
   }
   else{
   this.bug=this.tempbug[value];}

  }

  partialSearch()
  {
    let takevalue = (<HTMLInputElement>document.getElementById('takevalue')).value;
    const observable = this.bugService.partialSearch(takevalue);
    observable.subscribe(response => {
      this.tempbug = response;
      if (this.tempbug[0] == undefined) {
        return alert("No Resposne for this input");
      }
      if(this.tempbug[1]!=undefined)
      {
      let txt='';
      txt+="<option value='' > SELECT BUG </option>";
      for(let i=0;i<this.tempbug.length;i++)
      {
        txt+="<option value='"+i+"'>"+this.tempbug[i].name+"</option>";
      }
      txt+="";
      document.getElementById('partialselect').innerHTML=txt;
      document.getElementById('partialHidden').style.display="block";
    }
      // this.bug = this.tempbug;
      // //this.ess=this.bug.eta.toString().split('T')[0];
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


