import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.css', './style.css']
})

export class BugFormComponent implements OnChanges {
  @Input() bug: Bug = new Bug();
  bug1: Bug = new Bug();
  // @Output() getFieldData = new EventEmitter(Bug);
  name: string = '';
  tempbug: any;
  bugArray: any;
  @Output("sendBug") sendBug: EventEmitter<Bug> = new EventEmitter<Bug>();

  getFieldData() {
    let takevalue = (<HTMLInputElement>document.getElementById('takevalue')).value;
    const observable = this.bugService.getBugs(takevalue);
    observable.subscribe(response => {
      this.tempbug = response;
      if (this.tempbug[0] == undefined) {
        return alert("No Resposne for this input");
      }
      this.bug = this.tempbug;
    },
      error => {
        return alert("No Resposne for this input");
      });
  }

  postBugParent()
  {
    this.sendBug.emit(this.bug);
  }

  constructor(private bugService: BugService) { }

  // checkFunction() {
  //   let check = document.getElementById('buttonSave').innerHTML;
  //   if (check == 'Create Bug') {
  //     this.sendBug.emit(this.bug);
  //   }
  //   else {
  //     this.sendBugUpdate.emit(this.bug);
  //   }
  // }

  // save() {
  //   this.bug.eta = new Date(this.bug.etaString);
  //   if (!this.bugService.validateBug(this.bug))
  //     return;
  //   const promise = this.bugService.putBug(this.bug);
  //   promise.subscribe(response => {
  //     console.log(response);
  //     alert('bug updated..')
  //   },
  //     error => {
  //       console.log(error);
  //       if (error.status != 200)
  //         alert("Error !! : " + error.headers.get("error"))
  //       else {
  //         alert('Bug Updated');
  //       }
  //     });
  // }

  // savePost() {
  //   this.bug.eta = new Date(this.bug.etaString);
  //   if (!this.bugService.validateBug(this.bug))
  //     return;
  //   const promise = this.bugService.postBug(this.bug);
  //   promise.subscribe(response => {
  //     console.log(response);
  //     alert('bug created..')
  //   },
  //     error => {
  //       console.log(error);
  //       if (error.status != 201)
  //         alert("Error !! : " + error.headers.get("error"))
  //       else {
  //         alert('bug created..');
  //       }
  //     });
  // }

  textCounter( field:string, countfield:string, maxlimit:number ) {
    let dsize= (<HTMLInputElement>document.getElementById(field));
    if ( dsize.value.length > maxlimit ) {
     dsize.value = dsize.value.substring( 0, maxlimit );
     dsize.blur();
     dsize.focus();
     return false;
    } else {
     document.getElementById(countfield).innerHTML = "<i>* " + (maxlimit - dsize.value.length)+" characters remaining</i>";
    }
   }

  allMsgChangeLogs: string[] = [];
  allEmployeeChangeLogs: string[] = [];
  ngOnChanges(changes: SimpleChanges) {

    for (let propName in changes) {
      let change = changes[propName];
      this.bug = change.currentValue;
      this.bug.etaString = this.bug.eta.toString().split('T')[0];
    }
  }

  ngOnInit(): void {
  }

}

