import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.css','./style.css']
})
export class BugFormComponent implements OnChanges  {
  @Input()  bug:Bug= new Bug();
  //@Output("getFieldData") getFieldData: EventEmitter<any> = new EventEmitter();
  name:string='';
  tempbug: any;
  bugArray: any;
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
    erro=>{
      return alert("No Resposne for this input");
    });
  }
  constructor(private bugService: BugService) { }
save(){
;
if(!this.bugService.validateBug(this.bug))
return;
const promise=this.bugService.putBug(this.bug);
promise.subscribe(response =>{
 console.log(response);
 alert('bug updated..')
},


error=>{
 console.log(error);
 if(error.statusText!=='OK')
 alert("Error !! : "+error.headers.get("error"))
 else{
   alert('Error !! :');
 }
});
}
allMsgChangeLogs: string[] = [];
allEmployeeChangeLogs: string[] = [];
ngOnChanges(changes: SimpleChanges) {

	for (let propName in changes) {
		let change = changes[propName];

		this.bug = change.currentValue[0];
		// let prevVal = JSON.stringify(change.previousValue);
		// let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;

		// if (propName === 'message') {
		//    this.allMsgChangeLogs.push(changeLog);
		// } else if (propName === 'employee') {
		//    this.allEmployeeChangeLogs.push(changeLog);
		// }
        }
  }
  ngOnInit(): void {
  }

}
