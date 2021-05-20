(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\VaibhavGhadage\Documents\ibm\BTSAngular\src\main.ts */"zUnb");


/***/ }),

/***/ "1YZ/":
/*!********************************!*\
  !*** ./src/app/bug.service.ts ***!
  \********************************/
/*! exports provided: BugService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugService", function() { return BugService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class BugService {
    constructor(http) {
        this.http = http;
        this.BUGURL = "bug";
    }
    deleteBug(bugId) {
        return this.http.delete(this.BUGURL + '/' + bugId);
    }
    putBug(bug) {
        return this.http.put(this.BUGURL + '/' + bug.id, bug, { headers: { "content-type": 'application/json' } });
    }
    postBug(bug) {
        return this.http.post(this.BUGURL + '', bug, { headers: { "content-type": 'application/json' } });
    }
    getBugs(name) {
        return this.http.get(this.BUGURL + '/' + name);
    }
    getBugsByStatus(status) {
        return this.http.get(this.BUGURL + '/status/' + status);
    }
    partialSearch(bugName) {
        return this.http.get(this.BUGURL + '/partialsearch/*' + bugName + "*");
    }
    getBugByNameAndStatus(name, status) {
        return this.http.get(this.BUGURL + '/search?status=' + status + '&name=' + name);
    }
    validateBug(bug) {
        let error = 0;
        let errorText = "";
        if (bug.name) {
            let remText = bug.name.replace(/ /g, "");
            if (remText.length < 1 || remText.length > 50) {
                error++;
                errorText += error + ". Error- Name should be minimum 1 and maximum 50) \n";
            }
        }
        else {
            error++;
            errorText += error + ". Error- Name is mandatory \n";
        }
        if (bug.status) {
        }
        else {
            error++;
            errorText += error + ". Error- status is mandatory \n";
        }
        if (bug.priority) {
        }
        else {
            error++;
            errorText += error + ". Error- priority is mandatory \n";
        }
        if (bug.severity) {
        }
        else {
            error++;
            errorText += error + ". Error- severity is mandatory \n";
        }
        if (bug.type) {
        }
        else {
            error++;
            errorText += error + ". Error- type is mandatory \n";
        }
        if (bug.projectId) {
            let remText = bug.projectId.replace(/ /g, "");
            if (remText.length < 1 || remText.length > 25 || remText.length != bug.projectId.length) {
                error++;
                errorText += error + ". Error- projectId should be minimum 1 and maximum 25 and spaces not allowed) \n";
            }
        }
        else {
            error++;
            errorText += error + ". Error- projectId is mandatory \n";
        }
        if (bug.synopsis) {
            let remText = bug.synopsis.replace(/ /g, "");
            if (remText.length < 10 || remText.length > 200) {
                error++;
                errorText += error + ". Error- synopsis should be minimum 10 and maximum 200) \n";
            }
        }
        else {
            error++;
            errorText += error + ". Error- synopsis is mandatory \n";
        }
        if (bug.module) {
            let remText = bug.module.replace(/ /g, "");
            if (remText.length < 1 || remText.length > 50) {
                error++;
                errorText += error + ". Error- module should be minimum 10 and maximum 50) \n";
            }
        }
        else {
            error++;
            errorText += error + ". Error- module is mandatory \n";
        }
        if (bug.description) {
            let remText = bug.description.replace(/ /g, "");
            if (remText.length < 10 || remText.length > 500) {
                error++;
                errorText += error + ". Error- description should be minimum 10 and maximum 500) \n";
            }
        }
        else {
            error++;
            errorText += error + ". Error- description is mandatory \n";
        }
        if (bug.buildVersion) {
            let remText = bug.buildVersion.replace(/ /g, "");
            if (remText.length < 1 || remText.length > 25) {
                error++;
                errorText += error + ". Error- buildVersion should be minimum 1 and maximum 25) \n";
            }
        }
        if (bug.eta) {
        }
        if (bug.testerId) {
            let remText = bug.testerId.replace(/ /g, "");
            if (remText.length < 1 || remText.length > 25 || remText.length != bug.testerId.length) {
                error++;
                errorText += error + ". Error- testerId should be minimum 1 and maximum 25 and no spaces allowed) \n";
            }
        }
        if (bug.developerId) {
            let remText = bug.developerId.replace(/ /g, "");
            if (remText.length < 1 || remText.length > 25 || remText.length != bug.developerId.length) {
                error++;
                errorText += error + ". Error- developerId should be minimum 1 and maximum 25 and no spaces allowed) \n";
            }
        }
        if (error) {
            if (error < 4) {
                alert("Total error are : " + error + "\n" + errorText);
            }
            else {
                alert("total Errors are : " + error + "\n" + errorText);
                return 0;
            }
        }
        else {
            return 1;
        }
    }
}
BugService.ɵfac = function BugService_Factory(t) { return new (t || BugService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BugService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BugService, factory: BugService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Beas":
/*!**************************************************!*\
  !*** ./src/app/show-bugs/show-bugs.component.ts ***!
  \**************************************************/
/*! exports provided: ShowBugsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowBugsComponent", function() { return ShowBugsComponent; });
/* harmony import */ var _Bug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Bug */ "XGRQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bug_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bug.service */ "1YZ/");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "Jjks");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ShowBugsComponent_tr_71_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bug_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", bug_r1.synopsis, "");
} }
function ShowBugsComponent_tr_71_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowBugsComponent_tr_71_td_15_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const bug_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.showSynopsis(bug_r1.synopsis); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bug_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, bug_r1.synopsis, 0, 15), "");
} }
function ShowBugsComponent_tr_71_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bug_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", bug_r1.description, "");
} }
function ShowBugsComponent_tr_71_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowBugsComponent_tr_71_td_17_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const bug_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.showDescription(bug_r1.description); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bug_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, bug_r1.description, 0, 15), "");
} }
function ShowBugsComponent_tr_71_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ShowBugsComponent_tr_71_td_14_Template, 2, 1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ShowBugsComponent_tr_71_td_15_Template, 6, 5, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ShowBugsComponent_tr_71_td_16_Template, 2, 1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ShowBugsComponent_tr_71_td_17_Template, 6, 5, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowBugsComponent_tr_71_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const bug_r1 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.deleteBug(bug_r1.id, bug_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bug_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bug_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bug_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bug_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 10, bug_r1.eta));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bug_r1.severity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bug_r1.projectId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", bug_r1.synopsis.length < 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(bug_r1.synopsis.length < 15));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", bug_r1.description.length < 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(bug_r1.description.length < 15));
} }
class ShowBugsComponent {
    constructor(bugService) {
        this.bugService = bugService;
        this.title = "show bugs";
        this.bug = new _Bug__WEBPACK_IMPORTED_MODULE_0__["Bug"]();
    }
    ;
    getBugs(name) {
        const observable = this.bugService.partialSearch(name);
        observable.subscribe(response => {
            console.log(response);
            this.bugArray = response;
            if (this.bugArray[0] == undefined) {
                return alert("No Record found for given name");
            }
        }, error => {
            console.log(error);
            if (error.statusText !== 'OK')
                alert("Error not able to get record.  ");
            else {
                alert('Error not able to get record.');
            }
        });
    }
    showDescription(description) {
        document.getElementById('showDescription').innerHTML = description;
        return document.getElementById('temp').click();
    }
    showSynopsis(synopsis) {
        document.getElementById('showSynopsis').innerHTML = synopsis;
        return document.getElementById('synopsisButton').click();
    }
    getBugByNameAndStatus(name, status) {
        const observable = this.bugService.getBugByNameAndStatus(name, status);
        observable.subscribe(response => {
            console.log(response);
            this.bugArray = response;
            if (this.bugArray[0] == undefined) {
                return alert("No Record found for given Name and Status");
            }
        }, error => {
            console.log(error);
            if (error.status != 200)
                alert("Error not able to get record. ");
            else {
                alert('Record not loaded successfully');
            }
        });
    }
    getBug(name, status) {
        if (name.length > 50) {
            return alert("Error : Name should be minimum 1 and maximum 50)");
        }
        if (name && status) {
            this.getBugByNameAndStatus(name, status);
        }
        else if (name && !status) {
            this.getBugs(name);
        }
        else if (!name && status) {
            this.getBugsByStatus(status);
        }
        else {
            this.getBugs('');
        }
    }
    deleteBug(bugId, name) {
        var r = confirm("Press a button to Delete this Bug - " + name);
        if (r == true) {
            const observable = this.bugService.deleteBug(bugId);
            observable.subscribe(response => {
                console.log(response);
                alert("Bug Deleted Successfully");
                return this.getBugs('');
            }, error => {
                console.log(error);
                if (error.status != 200)
                    alert("Error Not able to delete Bug");
                else {
                    alert('deleted Bug successfully');
                    this.getBugs('');
                }
            });
        }
    }
    getBugsByStatus(status) {
        const observable = this.bugService.getBugsByStatus(status);
        observable.subscribe(response => {
            console.log(response);
            this.bugArray = response;
            if (this.bugArray[0] == undefined) {
                return alert("No Resposne for this input STATUS");
            }
        }, error => {
            console.log(error);
            if (error.status != 200)
                alert("Error not able to get record.");
            else {
                alert('Error not able to get record.');
            }
        });
    }
    ngOnInit() {
        document.getElementById('searchbutton').style.border = "2px solid #2196F3";
        this.bug.status = '';
        this.bug.name = '';
        const observable = this.bugService.getBugs('');
        observable.subscribe(response => {
            this.bugArray = response;
            if (this.bugArray[0] == undefined) {
                return alert("No Records available  currently from server");
            }
        }, error => {
            if (error.statusText !== 'OK')
                return alert("Unable to fetch records from server");
        });
    }
}
ShowBugsComponent.ɵfac = function ShowBugsComponent_Factory(t) { return new (t || ShowBugsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bug_service__WEBPACK_IMPORTED_MODULE_2__["BugService"])); };
ShowBugsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowBugsComponent, selectors: [["app-show-bugs"]], decls: 104, vars: 3, consts: [[1, "container-fluid", "text-center", 2, "background-color", "#f8f9fa"], [1, "row", "content"], [2, "background-color", "#bfcee0", "padding-bottom", "1%", "padding-top", "1%"], ["id", "search", 1, "col-sm-12", "bg-light", "text-dark", 2, "background-color", "#f8f9fa"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-8", "col-md-12", "col-lg-12"], [1, "card-body", "row", "no-gutters", "align-items-center"], [1, "form-inline"], ["type", "search", "placeholder", "Enter Bug Name", 1, "form-control", "form-control-lg", "form-control-borderless", 3, "ngModel", "ngModelChange"], [1, "col-1", "col-md-1", "col-lg-1"], ["placeholder", " ddd", "id", "status", 1, "form-control", 2, "margin", "10px", 3, "ngModel", "ngModelChange"], ["value", ""], ["value", "NEW"], ["value", "ASSIGNED"], ["value", "OPEN"], ["value", "FIXED"], ["value", "PENDING_RETEST"], ["value", "RETEST"], ["value", "REOPEN"], ["value", "VERIFIED"], ["value", "CLOSED"], ["value", "REJECTED"], ["value", "DUPLICATED"], ["value", "DEFERRED"], ["value", "NOT_A_BUG"], [1, "btn", "btn-lg", "btn-success", 2, "margin", "10px", 3, "click"], [1, "table-responsive"], [1, "table", "table-bordered"], [2, "text-align-last", "center"], ["scope", "col"], ["scope", "col", "s", ""], [4, "ngFor", "ngForOf"], ["id", "showmore"], ["data-toggle", "modal", "data-target", "#myModal", "id", "synopsisButton", 1, "btn", "btn-link", "btn-lg", 2, "display", "none"], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-title"], ["id", "showSynopsis", 1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["data-toggle", "modal", "data-target", "#myModalDescription", "id", "temp", 1, "btn", "btn-link", "btn-lg", 2, "display", "none"], ["id", "myModalDescription", "role", "dialog", 1, "modal", "fade"], ["id", "showDescription", 1, "modal-body"], [4, "ngIf"], ["onMouseOver", "this.style.color='#FF0000'", "onMouseOut", "this.style.color='#337ab7'", "type", "button", 1, "btn", "btn-link", "btn-sm", 2, "margin", "0", "padding", "0", "height", "0px", "inline-size", "0%", 3, "click"], [1, "glyphicon", "glyphicon-trash"], [1, "btn", "btn-link", "btn-xs", 3, "click"]], template: function ShowBugsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ShowBugsComponent_Template_input_ngModelChange_11_listener($event) { return ctx.bug.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ShowBugsComponent_Template_select_ngModelChange_15_listener($event) { return ctx.bug.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "SELECT STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "NEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "ASSIGNED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "OPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "FIXED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "PENDING_RETEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "RETEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "REOPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "VERIFIED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "CLOSED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "REJECTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "DUPLICATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "DEFERRED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "NOT_A_BUG");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowBugsComponent_Template_button_click_44_listener() { return ctx.getBug(ctx.bug.name, ctx.bug.status); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "table", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "thead", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "TYPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "ETA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "SEVERITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Project ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Synopsis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, ShowBugsComponent_tr_71_Template, 22, 12, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h4", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Synopsis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "h4", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.bug.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.bug.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.bugArray);
    } }, directives: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LWJ1Z3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Jjks":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class SidenavComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 6, vars: 0, consts: [["id", "createbutton", "routerLink", "/create", "routerLinkActive", "activebutton", 1, "btn", "btn-primary", 2, "margin", "10px"], ["id", "searchbutton", "routerLink", "/search", 1, "btn", "btn-link", 2, "margin", "10px"], ["id", "updatebutton", "routerLink", "/update", 1, "btn", "btn-primary", 2, "margin", "10px"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Bug");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search Bug");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Update Bug");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlbmF2LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "KQel":
/*!****************************************************!*\
  !*** ./src/app/update-bug/update-bug.component.ts ***!
  \****************************************************/
/*! exports provided: UpdateBugComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBugComponent", function() { return UpdateBugComponent; });
/* harmony import */ var _Bug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Bug */ "XGRQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bug_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bug.service */ "1YZ/");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "Jjks");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _bug_form_bug_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bug-form/bug-form.component */ "blS2");






function UpdateBugComponent_tr_33_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bug1_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", bug1_r1.synopsis, "");
} }
function UpdateBugComponent_tr_33_td_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdateBugComponent_tr_33_td_14_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const bug1_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.showSynopsis(bug1_r1.synopsis); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bug1_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, bug1_r1.synopsis, 0, 15), "..");
} }
function UpdateBugComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UpdateBugComponent_tr_33_td_13_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UpdateBugComponent_tr_33_td_14_Template, 6, 5, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdateBugComponent_tr_33_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const i_r2 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.editBug(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bug1_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bug1_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bug1_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, bug1_r1.submitOn));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 9, bug1_r1.eta));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bug1_r1.projectId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", bug1_r1.synopsis.length < 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(bug1_r1.synopsis.length < 15));
} }
class UpdateBugComponent {
    constructor(bugService) {
        this.bugService = bugService;
        this.title = "update bugs";
        this.bug = new _Bug__WEBPACK_IMPORTED_MODULE_0__["Bug"]();
    }
    editBug(index) {
        this.bug = this.tempbug[index];
        document.getElementById('showBugTable').style.display = 'none';
        document.getElementById('showEditBug').style.display = 'block';
    }
    getFieldData() {
        let value = document.getElementById('partialselect').value;
        if (value == '') {
            let val = ' ';
            let tBug = this.bug;
            let setAll = (bug, val) => Object.keys(bug).forEach(k => bug.k = val);
            let setNull = (tBug) => setAll(tBug, val);
            this.bug = tBug;
        }
        else {
            this.bug = this.tempbug[value];
        }
    }
    showSynopsis(synopsis) {
        document.getElementById('showSynopsis').innerHTML = synopsis;
        return document.getElementById('synopsisButton').click();
    }
    closeEditBug() {
        document.getElementById('showEditBug').style.display = 'none';
        document.getElementById('showBugTable').style.display = 'block';
    }
    partialSearch() {
        document.getElementById('showEditBug').style.display = 'none';
        let takevalue = document.getElementById('takevalue').value;
        let remText = takevalue.replace(/ /g, "");
        if (remText.length > 50) {
            return alert("Error : Name should be minimum 1 and maximum 50)");
        }
        const observable = this.bugService.partialSearch(takevalue);
        observable.subscribe(response => {
            this.tempbug = response;
            if (this.tempbug[0] == undefined) {
                return alert("No Resposne for this input");
            }
            if (this.tempbug[0] != undefined) {
                document.getElementById('showBugTable').style.display = 'block';
            }
            else {
                this.bug = this.tempbug[0];
            }
            this.bug.etaString = this.bug.eta.toString().split('T')[0];
            console.log(this.tempbug);
        }, erro => {
            return alert("No Resposne for this input");
        });
    }
    putBugParent(bugTemp) {
        bugTemp.eta = new Date(bugTemp.etaString);
        if (!this.bugService.validateBug(bugTemp))
            return;
        const promise = this.bugService.putBug(bugTemp);
        promise.subscribe(response => {
            console.log(response);
            alert('bug updated..');
        }, error => {
            console.log(error);
            if (error.status != 200)
                alert("Error !! : " + error.headers.get("error"));
            else {
                alert('Bug Updated');
            }
        });
    }
    ngOnInit() {
        document.getElementById('buttonSave').innerHTML = 'Update Bug';
        document.getElementById('searchbutton').className = 'btn btn-primary';
        document.getElementById('createbutton').className = 'btn btn-primary';
        document.getElementById('updatebutton').className = 'btn btn-link';
        document.getElementById('buttonSave').innerHTML = 'Update Bug';
        document.getElementById('updatebutton').style.border = "2px solid #2196F3";
    }
}
UpdateBugComponent.ɵfac = function UpdateBugComponent_Factory(t) { return new (t || UpdateBugComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bug_service__WEBPACK_IMPORTED_MODULE_2__["BugService"])); };
UpdateBugComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UpdateBugComponent, selectors: [["app-update-bug"]], decls: 55, vars: 2, consts: [[1, "container-fluid", "text-center", 2, "background-color", "#f8f9fa"], [1, "row", "content"], [1, "col-sm-2", "sidenav", 2, "background-color", "#bfcee0"], ["id", "bugDetails", 2, "background-color", "#f8f9fa"], [1, "form-inline"], ["id", "selectBug", 2, "background-color", "#f8f9fb"], ["id", "showSearchBox", 2, "background-color", "#ecf3f7"], ["type", "search", "id", "takevalue", "placeholder", "Enter Bug Name", 1, "form-control", "form-control-lg", "form-control-borderless", 2, "margin-top", "20px"], [1, "btn", "btn-lg", "btn-success", 2, "margin", "10px", 3, "click"], ["id", "showBugTable", 2, "display", "none"], ["id", "column1", 1, "col-sm-10", "text-left", 2, "background-color", "#f8f9fa"], [1, "table-responsive"], [1, "table", "table-bordered"], [2, "text-align-last", "center"], ["scope", "col"], ["scope", "col", "s", ""], [4, "ngFor", "ngForOf"], ["id", "showmore"], ["data-toggle", "modal", "data-target", "#myModal", "id", "synopsisButton", 1, "btn", "btn-link", "btn-lg", 2, "display", "none"], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-title"], ["id", "showSynopsis", 1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["id", "showEditBug", 2, "display", "none"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true", 2, "font-size", "xx-large"], [3, "bug", "sendBug"], [4, "ngIf"], ["onMouseOver", "this.style.color='#FF0000'", "onMouseOut", "this.style.color='#337ab7'", "type", "button", 1, "btn", "btn-link", 3, "click"], [1, "glyphicon", "glyphicon-pencil"], [1, "btn", "btn-link", "btn-xs", 3, "click"]], template: function UpdateBugComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdateBugComponent_Template_button_click_10_listener() { return ctx.partialSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "thead", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Submitted On");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "ETA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Project ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Synopsis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, UpdateBugComponent_tr_33_Template, 19, 11, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Synopsis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdateBugComponent_Template_button_click_51_listener() { return ctx.closeEditBug(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "app-bug-form", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sendBug", function UpdateBugComponent_Template_app_bug_form_sendBug_54_listener($event) { return ctx.putBugParent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tempbug);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bug", ctx.bug);
    } }, directives: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _bug_form_bug_form_component__WEBPACK_IMPORTED_MODULE_5__["BugFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtYnVnLmNvbXBvbmVudC5jc3MifQ== */", ".navbar[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    border-radius: 0;\r\n}\r\n  \r\n.row.content[_ngcontent-%COMP%] {\r\n      height: 450px\r\n}\r\n  \r\n.sidenav[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    background-color: #f1f1f1;\r\n    height: 100%;\r\n}\r\n  \r\nfooter[_ngcontent-%COMP%] {\r\n    background-color: #555;\r\n    color: white;\r\n    padding: 15px;\r\n}\r\n  \r\n@media screen and (max-width: 767px) {\r\n    .sidenav[_ngcontent-%COMP%] {\r\n      height: auto;\r\n      padding: 15px;\r\n    }\r\n    .row.content[_ngcontent-%COMP%] {height:auto;} \r\n}\r\n  \r\np[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n}\r\n  \r\nimg[_ngcontent-%COMP%]{\r\n    height: 100px;\r\n    width: 150px;\r\n}\r\n  \r\n.well[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    align-content: center;\r\n    padding: 2px;\r\n}\r\n  \r\n#logo[_ngcontent-%COMP%]{\r\n    height: 35px;\r\n    width: 180px;\r\n}\r\n  \r\n.jumbotron[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n  \r\n.buttonStyling[_ngcontent-%COMP%]{\r\n    border-color: #008CBA;\r\n    width: 100%;\r\n    margin-bottom: 5px;\r\n}\r\n  \r\n.buttonStyling[_ngcontent-%COMP%]:hover {\r\n    background-color: #008CBA;\r\n    color: white;\r\n  }\r\n  \r\n#updateDetails[_ngcontent-%COMP%]{\r\n    visibility: hidden;\r\n}\r\n  \r\n.submitButton[_ngcontent-%COMP%]{\r\n    width:50%;\r\n    align-self:center;\r\n    padding: 10px;\r\n    border-color: seagreen;\r\n}\r\n  \r\n.submitButton[_ngcontent-%COMP%]:hover {\r\n    background-color: seagreen;\r\n    color: white;\r\n  }\r\n  \r\n.column[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 50%;\r\n    padding: 10px;\r\n}\r\n  \r\nlabel[_ngcontent-%COMP%]{\r\n    display:inline-block;\r\n    width:200px;\r\n    margin-right:5px;\r\n    text-align:left;\r\n    }\r\n  \r\ninput[_ngcontent-%COMP%]{\r\n    margin-bottom: 15px;\r\n    }\r\n  \r\nfieldset[_ngcontent-%COMP%]{\r\n    border:none;\r\n    width:500px;\r\n    margin:0px auto;\r\n    }\r\n  \r\n#column1[_ngcontent-%COMP%], #column2[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n    background-color: silver;\r\n}\r\n  \r\n#bugDetails[_ngcontent-%COMP%]{\r\n    visibility: visible;   \r\n}\r\n  \r\n#updateBugDetails[_ngcontent-%COMP%]{\r\n    visibility: hidden;\r\n}\r\n  \r\n#toast[_ngcontent-%COMP%] {\r\n  visibility: hidden; \r\n  min-width: 250px; \r\n  margin-left: -125px; \r\n  background-color: mediumaquamarine;\r\n  color: black; \r\n  text-align: center; \r\n  border-radius: 2px; \r\n  padding: 16px;\r\n  position: fixed; \r\n  z-index: 1;\r\n  left: 50%; \r\n  bottom: 30px; \r\n}\r\n  \r\n#toast.show[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n  \r\n\r\n  \r\n@keyframes fadein {\r\n  from {bottom: 0; opacity: 0;}\r\n  to {bottom: 20px; opacity: 1;}\r\n}\r\n  \r\n@keyframes fadeout {\r\n  from {bottom: 20px; opacity: 1;}\r\n  to {bottom: 0; opacity: 0;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7TUFDTTtBQUNOOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7TUFDRSxZQUFZO01BQ1osYUFBYTtJQUNmO0lBQ0EsY0FBYyxXQUFXLENBQUM7QUFDOUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztBQUVGO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7RUFDZDs7QUFDRjtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZjs7QUFFSjtJQUNJLG1CQUFtQjtJQUNuQjs7QUFFQTtJQUNBLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmOztBQUVKO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFFbkIseUNBQXlDO0FBQzNDOztBQUVBLG1CQUFtQjs7QUFNbkI7RUFDRSxNQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7RUFDNUIsSUFBSSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQy9COztBQU9BO0VBQ0UsTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0VBQy9CLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUM1QiIsImZpbGUiOiJzdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbiAgXHJcbi5yb3cuY29udGVudCB7XHJcbiAgICAgIGhlaWdodDogNDUwcHhcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiAgXHJcbmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG4gIFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLnNpZGVuYXYge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAucm93LmNvbnRlbnQge2hlaWdodDphdXRvO30gXHJcbn1cclxuXHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4ud2VsbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4jbG9nb3tcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxufVxyXG5cclxuLmp1bWJvdHJvbntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b25TdHlsaW5ne1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA4Q0JBO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b25TdHlsaW5nOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhDQkE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuI3VwZGF0ZURldGFpbHN7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zdWJtaXRCdXR0b257XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHNlYWdyZWVuO1xyXG59XHJcbi5zdWJtaXRCdXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2VhZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4uY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDoyMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxuaW5wdXR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmaWVsZHNldHtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgd2lkdGg6NTAwcHg7XHJcbiAgICBtYXJnaW46MHB4IGF1dG87XHJcbiAgICB9XHJcblxyXG4jY29sdW1uMSwjY29sdW1uMixib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xyXG59XHJcblxyXG4jYnVnRGV0YWlsc3tcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7ICAgXHJcbn1cclxuXHJcbiN1cGRhdGVCdWdEZXRhaWxze1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4jdG9hc3Qge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgXHJcbiAgbWluLXdpZHRoOiAyNTBweDsgXHJcbiAgbWFyZ2luLWxlZnQ6IC0xMjVweDsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtYXF1YW1hcmluZTtcclxuICBjb2xvcjogYmxhY2s7IFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgYm9yZGVyLXJhZGl1czogMnB4OyBcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgei1pbmRleDogMTtcclxuICBsZWZ0OiA1MCU7IFxyXG4gIGJvdHRvbTogMzBweDsgXHJcbn1cclxuXHJcbiN0b2FzdC5zaG93IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyBcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG59XHJcblxyXG4vKiBmb3IgYW5pbWF0aW9ucyAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcclxuICBmcm9tIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxyXG4gIHRvIHtib3R0b206IDIwcHg7IG9wYWNpdHk6IDE7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgZnJvbSB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxuICB0byB7Ym90dG9tOiAyMHB4OyBvcGFjaXR5OiAxO31cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xyXG4gIGZyb20ge2JvdHRvbTogMjBweDsgb3BhY2l0eTogMTt9XHJcbiAgdG8ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgZnJvbSB7Ym90dG9tOiAyMHB4OyBvcGFjaXR5OiAxO31cclxuICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'BTSAngular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Tt+7":
/*!****************************************************!*\
  !*** ./src/app/create-bug/create-bug.component.ts ***!
  \****************************************************/
/*! exports provided: CreateBugComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBugComponent", function() { return CreateBugComponent; });
/* harmony import */ var _Bug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Bug */ "XGRQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bug_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bug.service */ "1YZ/");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "Jjks");
/* harmony import */ var _bug_form_bug_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bug-form/bug-form.component */ "blS2");





class CreateBugComponent {
    constructor(bugService) {
        this.bugService = bugService;
        this.title = "CreateBug";
        this.bug = new _Bug__WEBPACK_IMPORTED_MODULE_0__["Bug"]();
        this.bugchild = new _Bug__WEBPACK_IMPORTED_MODULE_0__["Bug"]();
        this.bugArray = [];
    }
    postBugParent(bugTemp) {
        bugTemp.eta = new Date(bugTemp.etaString);
        if (!this.bugService.validateBug(bugTemp))
            return;
        const promise = this.bugService.postBug(bugTemp);
        promise.subscribe(response => {
            console.log(response);
            alert('bug created..');
        }, error => {
            console.log(error);
            if (error.status != 201)
                alert("Error !! : " + error.headers.get("error"));
            else {
                alert('bug created..');
            }
        });
    }
    ngOnInit() {
        document.getElementById('searchbutton').className = 'btn btn-primary';
        document.getElementById('createbutton').className = 'btn btn-link';
        document.getElementById('buttonSave').innerHTML = 'Create Bug';
        document.getElementById('createbutton').style.border = "2px solid #2196F3";
    }
}
CreateBugComponent.ɵfac = function CreateBugComponent_Factory(t) { return new (t || CreateBugComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bug_service__WEBPACK_IMPORTED_MODULE_2__["BugService"])); };
CreateBugComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateBugComponent, selectors: [["app-create-bug"]], decls: 8, vars: 0, consts: [[1, "container-fluid", "text-center", 2, "background-color", "#f8f9fa"], [1, "row", "content"], [1, "col-sm-2", "sidenav", 2, "background-color", "#bfcee0"], ["id", "bugDetails", 2, "background-color", "#f8f9fa"], [1, "form-inline"], [3, "sendBug"]], template: function CreateBugComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-bug-form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sendBug", function CreateBugComponent_Template_app_bug_form_sendBug_7_listener($event) { return ctx.postBugParent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"], _bug_form_bug_form_component__WEBPACK_IMPORTED_MODULE_4__["BugFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtYnVnLmNvbXBvbmVudC5jc3MifQ== */", ".navbar[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    border-radius: 0;\r\n}\r\n  \r\n.row.content[_ngcontent-%COMP%] {\r\n      height: 450px\r\n}\r\n  \r\n.sidenav[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    background-color: #f1f1f1;\r\n    height: 100%;\r\n}\r\n  \r\nfooter[_ngcontent-%COMP%] {\r\n    background-color: #555;\r\n    color: white;\r\n    padding: 15px;\r\n}\r\n  \r\n@media screen and (max-width: 767px) {\r\n    .sidenav[_ngcontent-%COMP%] {\r\n      height: auto;\r\n      padding: 15px;\r\n    }\r\n    .row.content[_ngcontent-%COMP%] {height:auto;} \r\n}\r\n  \r\np[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n}\r\n  \r\nimg[_ngcontent-%COMP%]{\r\n    height: 100px;\r\n    width: 150px;\r\n}\r\n  \r\n.well[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    align-content: center;\r\n    padding: 2px;\r\n}\r\n  \r\n#logo[_ngcontent-%COMP%]{\r\n    height: 35px;\r\n    width: 180px;\r\n}\r\n  \r\n.jumbotron[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n  \r\n.buttonStyling[_ngcontent-%COMP%]{\r\n    border-color: #008CBA;\r\n    width: 100%;\r\n    margin-bottom: 5px;\r\n}\r\n  \r\n.buttonStyling[_ngcontent-%COMP%]:hover {\r\n    background-color: #008CBA;\r\n    color: white;\r\n  }\r\n  \r\n#updateDetails[_ngcontent-%COMP%]{\r\n    visibility: hidden;\r\n}\r\n  \r\n.submitButton[_ngcontent-%COMP%]{\r\n    width:50%;\r\n    align-self:center;\r\n    padding: 10px;\r\n    border-color: seagreen;\r\n}\r\n  \r\n.submitButton[_ngcontent-%COMP%]:hover {\r\n    background-color: seagreen;\r\n    color: white;\r\n  }\r\n  \r\n.column[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 50%;\r\n    padding: 10px;\r\n}\r\n  \r\nlabel[_ngcontent-%COMP%]{\r\n    display:inline-block;\r\n    width:200px;\r\n    margin-right:5px;\r\n    text-align:left;\r\n    }\r\n  \r\ninput[_ngcontent-%COMP%]{\r\n    margin-bottom: 15px;\r\n    }\r\n  \r\nfieldset[_ngcontent-%COMP%]{\r\n    border:none;\r\n    width:500px;\r\n    margin:0px auto;\r\n    }\r\n  \r\n#column1[_ngcontent-%COMP%], #column2[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n    background-color: silver;\r\n}\r\n  \r\n#bugDetails[_ngcontent-%COMP%]{\r\n    visibility: visible;   \r\n}\r\n  \r\n#updateBugDetails[_ngcontent-%COMP%]{\r\n    visibility: hidden;\r\n}\r\n  \r\n#toast[_ngcontent-%COMP%] {\r\n  visibility: hidden; \r\n  min-width: 250px; \r\n  margin-left: -125px; \r\n  background-color: mediumaquamarine;\r\n  color: black; \r\n  text-align: center; \r\n  border-radius: 2px; \r\n  padding: 16px;\r\n  position: fixed; \r\n  z-index: 1;\r\n  left: 50%; \r\n  bottom: 30px; \r\n}\r\n  \r\n#toast.show[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n  \r\n\r\n  \r\n@keyframes fadein {\r\n  from {bottom: 0; opacity: 0;}\r\n  to {bottom: 20px; opacity: 1;}\r\n}\r\n  \r\n@keyframes fadeout {\r\n  from {bottom: 20px; opacity: 1;}\r\n  to {bottom: 0; opacity: 0;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7TUFDTTtBQUNOOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7TUFDRSxZQUFZO01BQ1osYUFBYTtJQUNmO0lBQ0EsY0FBYyxXQUFXLENBQUM7QUFDOUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztBQUVGO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7RUFDZDs7QUFDRjtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZjs7QUFFSjtJQUNJLG1CQUFtQjtJQUNuQjs7QUFFQTtJQUNBLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmOztBQUVKO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFFbkIseUNBQXlDO0FBQzNDOztBQUVBLG1CQUFtQjs7QUFNbkI7RUFDRSxNQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7RUFDNUIsSUFBSSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQy9COztBQU9BO0VBQ0UsTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0VBQy9CLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUM1QiIsImZpbGUiOiJzdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbiAgXHJcbi5yb3cuY29udGVudCB7XHJcbiAgICAgIGhlaWdodDogNDUwcHhcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiAgXHJcbmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG4gIFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLnNpZGVuYXYge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAucm93LmNvbnRlbnQge2hlaWdodDphdXRvO30gXHJcbn1cclxuXHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4ud2VsbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4jbG9nb3tcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxufVxyXG5cclxuLmp1bWJvdHJvbntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b25TdHlsaW5ne1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA4Q0JBO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b25TdHlsaW5nOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhDQkE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuI3VwZGF0ZURldGFpbHN7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zdWJtaXRCdXR0b257XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHNlYWdyZWVuO1xyXG59XHJcbi5zdWJtaXRCdXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2VhZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4uY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDoyMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxuaW5wdXR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmaWVsZHNldHtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgd2lkdGg6NTAwcHg7XHJcbiAgICBtYXJnaW46MHB4IGF1dG87XHJcbiAgICB9XHJcblxyXG4jY29sdW1uMSwjY29sdW1uMixib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xyXG59XHJcblxyXG4jYnVnRGV0YWlsc3tcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7ICAgXHJcbn1cclxuXHJcbiN1cGRhdGVCdWdEZXRhaWxze1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4jdG9hc3Qge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgXHJcbiAgbWluLXdpZHRoOiAyNTBweDsgXHJcbiAgbWFyZ2luLWxlZnQ6IC0xMjVweDsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtYXF1YW1hcmluZTtcclxuICBjb2xvcjogYmxhY2s7IFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgYm9yZGVyLXJhZGl1czogMnB4OyBcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgei1pbmRleDogMTtcclxuICBsZWZ0OiA1MCU7IFxyXG4gIGJvdHRvbTogMzBweDsgXHJcbn1cclxuXHJcbiN0b2FzdC5zaG93IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyBcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG59XHJcblxyXG4vKiBmb3IgYW5pbWF0aW9ucyAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcclxuICBmcm9tIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxyXG4gIHRvIHtib3R0b206IDIwcHg7IG9wYWNpdHk6IDE7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgZnJvbSB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxuICB0byB7Ym90dG9tOiAyMHB4OyBvcGFjaXR5OiAxO31cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xyXG4gIGZyb20ge2JvdHRvbTogMjBweDsgb3BhY2l0eTogMTt9XHJcbiAgdG8ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgZnJvbSB7Ym90dG9tOiAyMHB4OyBvcGFjaXR5OiAxO31cclxuICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxufSJdfQ== */"] });


/***/ }),

/***/ "XGRQ":
/*!************************!*\
  !*** ./src/app/Bug.ts ***!
  \************************/
/*! exports provided: Bug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bug", function() { return Bug; });
class Bug {
    constructor() {
        this.name = '';
        this.priority = 'HIGH';
        this.type = 'LOGICAL';
        this.status = 'NEW';
        this.severity = 'LOW';
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _create_bug_create_bug_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-bug/create-bug.component */ "Tt+7");
/* harmony import */ var _show_bugs_show_bugs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-bugs/show-bugs.component */ "Beas");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "Jjks");
/* harmony import */ var _update_bug_update_bug_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-bug/update-bug.component */ "KQel");
/* harmony import */ var _bug_form_bug_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bug-form/bug-form.component */ "blS2");
/* harmony import */ var _select_bug_select_bug_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./select-bug/select-bug.component */ "nZSf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                { path: 'create', component: _create_bug_create_bug_component__WEBPACK_IMPORTED_MODULE_4__["CreateBugComponent"] },
                { path: 'search', component: _show_bugs_show_bugs_component__WEBPACK_IMPORTED_MODULE_5__["ShowBugsComponent"] },
                { path: 'update', component: _update_bug_update_bug_component__WEBPACK_IMPORTED_MODULE_9__["UpdateBugComponent"] },
                { path: '', redirectTo: '/search', pathMatch: 'full' },
            ], { useHash: true }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _create_bug_create_bug_component__WEBPACK_IMPORTED_MODULE_4__["CreateBugComponent"],
        _show_bugs_show_bugs_component__WEBPACK_IMPORTED_MODULE_5__["ShowBugsComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__["SidenavComponent"],
        _update_bug_update_bug_component__WEBPACK_IMPORTED_MODULE_9__["UpdateBugComponent"],
        _bug_form_bug_form_component__WEBPACK_IMPORTED_MODULE_10__["BugFormComponent"],
        _select_bug_select_bug_component__WEBPACK_IMPORTED_MODULE_11__["SelectBugComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]] }); })();


/***/ }),

/***/ "blS2":
/*!************************************************!*\
  !*** ./src/app/bug-form/bug-form.component.ts ***!
  \************************************************/
/*! exports provided: BugFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugFormComponent", function() { return BugFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Bug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Bug */ "XGRQ");
/* harmony import */ var _bug_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bug.service */ "1YZ/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class BugFormComponent {
    constructor(bugService) {
        this.bugService = bugService;
        this.bug = new _Bug__WEBPACK_IMPORTED_MODULE_1__["Bug"]();
        this.bug1 = new _Bug__WEBPACK_IMPORTED_MODULE_1__["Bug"]();
        // @Output() getFieldData = new EventEmitter(Bug);
        this.name = '';
        this.sendBug = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.allMsgChangeLogs = [];
        this.allEmployeeChangeLogs = [];
    }
    getFieldData() {
        let takevalue = document.getElementById('takevalue').value;
        const observable = this.bugService.getBugs(takevalue);
        observable.subscribe(response => {
            this.tempbug = response;
            if (this.tempbug[0] == undefined) {
                return alert("No Resposne for this input");
            }
            this.bug = this.tempbug;
        }, error => {
            return alert("No Resposne for this input");
        });
    }
    postBugParent() {
        this.sendBug.emit(this.bug);
    }
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
    textCounter(field, countfield, maxlimit) {
        let dsize = document.getElementById(field);
        if (dsize.value.length > maxlimit) {
            dsize.value = dsize.value.substring(0, maxlimit);
            dsize.blur();
            dsize.focus();
            return false;
        }
        else {
            document.getElementById(countfield).innerHTML = "<i>* " + (maxlimit - dsize.value.length) + " characters remaining</i>";
        }
    }
    ngOnChanges(changes) {
        for (let propName in changes) {
            let change = changes[propName];
            this.bug = change.currentValue;
            this.bug.etaString = this.bug.eta.toString().split('T')[0];
        }
    }
    ngOnInit() {
    }
}
BugFormComponent.ɵfac = function BugFormComponent_Factory(t) { return new (t || BugFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bug_service__WEBPACK_IMPORTED_MODULE_2__["BugService"])); };
BugFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BugFormComponent, selectors: [["app-bug-form"]], inputs: { bug: "bug" }, outputs: { sendBug: "sendBug" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 143, vars: 13, consts: [["id", "column1", 1, "col-sm-10", "text-left", 2, "background-color", "#f8f9fa"], ["id", "bugFields", 1, "column", "form-group"], [2, "color", "red"], ["type", "text", "placeholder", "", "id", "bugname", "required", "", 1, "form-control", 2, "margin-bottom", "1px", 3, "ngModel", "ngModelChange"], ["id", "status", 1, "form-control", 2, "margin-bottom", "5px", 3, "ngModel", "ngModelChange"], ["value", "NEW"], ["value", "ASSIGNED"], ["value", "OPEN"], ["value", "FIXED"], ["value", "PENDING_RETEST"], ["value", "RETEST"], ["value", "REOPEN"], ["value", "VERIFIED"], ["value", "CLOSED"], ["value", "REJECTED"], ["value", "DUPLICATED"], ["value", "DEFERRED"], ["value", "NOT_A_BUG"], ["id", "bugpriority", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "HIGH"], ["value", "MEDIUM"], ["value", "LOW"], ["id", "date", "type", "date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "module", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "buildversion", "placeholder", "Enter Build Version", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "type", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "LOGICAL"], ["value", "SYNTAX"], ["value", "GUI"], ["value", "API"], ["value", "RUNTIME"], ["id", "column2", 1, "column", "form-group", 2, "background-color", "#f8f9fa"], ["id", "severity", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "MINOR"], ["value", "MAJOR"], ["value", "CRITICAL"], ["value", "BLOCKER"], ["type", "text", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "developerid", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "testerid", "placeholder", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["name", "", "id", "synopsis", "cols", "30", "rows", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "syn", 1, "form-text", "text-muted", 2, "float", "right", "margin-right", "5%"], ["name", "", "id", "description", "cols", "30", "rows", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "desc", 1, "form-text", "text-muted", 2, "float", "right", "margin-right", "5%"], ["id", "buttonDiv", 2, "background-color", "#f8f9fb"], ["id", "buttonSave", 1, "submitButton", 2, "margin-top", "2%", 3, "click"]], template: function BugFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bug Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BugFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.bug.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Bug Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BugFormComponent_Template_select_ngModelChange_15_listener($event) { return ctx.bug.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "NEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "ASSIGNED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "OPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "FIXED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "PENDING_RETEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "RETEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "REOPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "VERIFIED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "CLOSED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "REJECTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "DUPLICATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "DEFERRED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "NOT_A_BUG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Bug Priority ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BugFormComponent_Template_select_ngModelChange_48_listener($event) { return ctx.bug.priority = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "HIGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "MEDIUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "LOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "ETA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BugFormComponent_Template_input_ngModelChange_58_listener($event) { return ctx.bug.etaString = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Module ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BugFormComponent_Template_input_ngModelChange_65_listener($event) { return ctx.bug.module = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Build Version ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BugFormComponent_Template_input_ngModelChange_72_listener($event) { return ctx.bug.buildVersion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BugFormComponent_Template_select_ngModelChange_76_listener($event) { return ctx.bug.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "LOGICAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "SYNTAX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "GUI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "RUNTIME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Severity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BugFormComponent_Template_select_ngModelChange_94_listener($event) { return ctx.bug.severity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "LOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "MINOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "MAJOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "CRITICAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "BLOCKER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Project ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BugFormComponent_Template_input_ngModelChange_111_listener($event) { return ctx.bug.projectId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Developer ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BugFormComponent_Template_input_ngModelChange_116_listener($event) { return ctx.bug.developerId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Tester ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BugFormComponent_Template_input_ngModelChange_121_listener($event) { return ctx.bug.testerId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Synopsis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "textarea", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BugFormComponent_Template_textarea_ngModelChange_129_listener() { return ctx.textCounter("synopsis", "syn", 200); })("ngModelChange", function BugFormComponent_Template_textarea_ngModelChange_129_listener($event) { return ctx.bug.synopsis = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "small", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "textarea", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BugFormComponent_Template_textarea_ngModelChange_137_listener() { return ctx.textCounter("description", "desc", 500); })("ngModelChange", function BugFormComponent_Template_textarea_ngModelChange_137_listener($event) { return ctx.bug.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "small", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BugFormComponent_Template_button_click_140_listener() { return ctx.postBugParent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bug.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bug.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bug.priority);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bug.etaString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bug.module);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bug.buildVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bug.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bug.severity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bug.projectId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bug.developerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bug.testerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bug.synopsis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bug.description);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"]], styles: ["select[_ngcontent-%COMP%] {\r\n  margin-bottom: 2%;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  margin-top: 1%;\r\n}\r\ntextarea[_ngcontent-%COMP%] {\r\n  margin-top: 3%;\r\n  margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1Zy1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckIiLCJmaWxlIjoiYnVnLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */", ".navbar[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    border-radius: 0;\r\n}\r\n  \r\n.row.content[_ngcontent-%COMP%] {\r\n      height: 450px\r\n}\r\n  \r\n.sidenav[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    background-color: #f1f1f1;\r\n    height: 100%;\r\n}\r\n  \r\nfooter[_ngcontent-%COMP%] {\r\n    background-color: #555;\r\n    color: white;\r\n    padding: 15px;\r\n}\r\n  \r\n@media screen and (max-width: 767px) {\r\n    .sidenav[_ngcontent-%COMP%] {\r\n      height: auto;\r\n      padding: 15px;\r\n    }\r\n    .row.content[_ngcontent-%COMP%] {height:auto;} \r\n}\r\n  \r\np[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n}\r\n  \r\nimg[_ngcontent-%COMP%]{\r\n    height: 100px;\r\n    width: 150px;\r\n}\r\n  \r\n.well[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    align-content: center;\r\n    padding: 2px;\r\n}\r\n  \r\n#logo[_ngcontent-%COMP%]{\r\n    height: 35px;\r\n    width: 180px;\r\n}\r\n  \r\n.jumbotron[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n  \r\n.buttonStyling[_ngcontent-%COMP%]{\r\n    border-color: #008CBA;\r\n    width: 100%;\r\n    margin-bottom: 5px;\r\n}\r\n  \r\n.buttonStyling[_ngcontent-%COMP%]:hover {\r\n    background-color: #008CBA;\r\n    color: white;\r\n  }\r\n  \r\n#updateDetails[_ngcontent-%COMP%]{\r\n    visibility: hidden;\r\n}\r\n  \r\n.submitButton[_ngcontent-%COMP%]{\r\n    width:50%;\r\n    align-self:center;\r\n    padding: 10px;\r\n    border-color: seagreen;\r\n}\r\n  \r\n.submitButton[_ngcontent-%COMP%]:hover {\r\n    background-color: seagreen;\r\n    color: white;\r\n  }\r\n  \r\n.column[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 50%;\r\n    padding: 10px;\r\n}\r\n  \r\nlabel[_ngcontent-%COMP%]{\r\n    display:inline-block;\r\n    width:200px;\r\n    margin-right:5px;\r\n    text-align:left;\r\n    }\r\n  \r\ninput[_ngcontent-%COMP%]{\r\n    margin-bottom: 15px;\r\n    }\r\n  \r\nfieldset[_ngcontent-%COMP%]{\r\n    border:none;\r\n    width:500px;\r\n    margin:0px auto;\r\n    }\r\n  \r\n#column1[_ngcontent-%COMP%], #column2[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\r\n    background-color: silver;\r\n}\r\n  \r\n#bugDetails[_ngcontent-%COMP%]{\r\n    visibility: visible;   \r\n}\r\n  \r\n#updateBugDetails[_ngcontent-%COMP%]{\r\n    visibility: hidden;\r\n}\r\n  \r\n#toast[_ngcontent-%COMP%] {\r\n  visibility: hidden; \r\n  min-width: 250px; \r\n  margin-left: -125px; \r\n  background-color: mediumaquamarine;\r\n  color: black; \r\n  text-align: center; \r\n  border-radius: 2px; \r\n  padding: 16px;\r\n  position: fixed; \r\n  z-index: 1;\r\n  left: 50%; \r\n  bottom: 30px; \r\n}\r\n  \r\n#toast.show[_ngcontent-%COMP%] {\r\n  visibility: visible;\r\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n  \r\n\r\n  \r\n@keyframes fadein {\r\n  from {bottom: 0; opacity: 0;}\r\n  to {bottom: 20px; opacity: 1;}\r\n}\r\n  \r\n@keyframes fadeout {\r\n  from {bottom: 20px; opacity: 1;}\r\n  to {bottom: 0; opacity: 0;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7TUFDTTtBQUNOOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7TUFDRSxZQUFZO01BQ1osYUFBYTtJQUNmO0lBQ0EsY0FBYyxXQUFXLENBQUM7QUFDOUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztBQUVGO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7RUFDZDs7QUFDRjtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZjs7QUFFSjtJQUNJLG1CQUFtQjtJQUNuQjs7QUFFQTtJQUNBLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmOztBQUVKO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFFbkIseUNBQXlDO0FBQzNDOztBQUVBLG1CQUFtQjs7QUFNbkI7RUFDRSxNQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7RUFDNUIsSUFBSSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQy9COztBQU9BO0VBQ0UsTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0VBQy9CLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUM1QiIsImZpbGUiOiJzdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbiAgXHJcbi5yb3cuY29udGVudCB7XHJcbiAgICAgIGhlaWdodDogNDUwcHhcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiAgXHJcbmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG4gIFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLnNpZGVuYXYge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAucm93LmNvbnRlbnQge2hlaWdodDphdXRvO30gXHJcbn1cclxuXHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4ud2VsbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4jbG9nb3tcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxufVxyXG5cclxuLmp1bWJvdHJvbntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b25TdHlsaW5ne1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA4Q0JBO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b25TdHlsaW5nOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhDQkE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuI3VwZGF0ZURldGFpbHN7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zdWJtaXRCdXR0b257XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBhbGlnbi1zZWxmOmNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHNlYWdyZWVuO1xyXG59XHJcbi5zdWJtaXRCdXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2VhZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4uY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDoyMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxuaW5wdXR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmaWVsZHNldHtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgd2lkdGg6NTAwcHg7XHJcbiAgICBtYXJnaW46MHB4IGF1dG87XHJcbiAgICB9XHJcblxyXG4jY29sdW1uMSwjY29sdW1uMixib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xyXG59XHJcblxyXG4jYnVnRGV0YWlsc3tcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7ICAgXHJcbn1cclxuXHJcbiN1cGRhdGVCdWdEZXRhaWxze1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4jdG9hc3Qge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjsgXHJcbiAgbWluLXdpZHRoOiAyNTBweDsgXHJcbiAgbWFyZ2luLWxlZnQ6IC0xMjVweDsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtYXF1YW1hcmluZTtcclxuICBjb2xvcjogYmxhY2s7IFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgYm9yZGVyLXJhZGl1czogMnB4OyBcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgei1pbmRleDogMTtcclxuICBsZWZ0OiA1MCU7IFxyXG4gIGJvdHRvbTogMzBweDsgXHJcbn1cclxuXHJcbiN0b2FzdC5zaG93IHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlOyBcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG59XHJcblxyXG4vKiBmb3IgYW5pbWF0aW9ucyAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcclxuICBmcm9tIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxyXG4gIHRvIHtib3R0b206IDIwcHg7IG9wYWNpdHk6IDE7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgZnJvbSB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxuICB0byB7Ym90dG9tOiAyMHB4OyBvcGFjaXR5OiAxO31cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xyXG4gIGZyb20ge2JvdHRvbTogMjBweDsgb3BhY2l0eTogMTt9XHJcbiAgdG8ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgZnJvbSB7Ym90dG9tOiAyMHB4OyBvcGFjaXR5OiAxO31cclxuICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxufSJdfQ== */"] });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() {
        this.ImgPath = "./assets/bughawk.jpeg";
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 29, vars: 1, consts: [[1, "navbar", "navbar-inverse"], [1, "container-fluid"], [1, "content"], [1, "navbar-header"], [1, "col-sm-2"], ["type", "button", "data-toggle", "collapse", "data-target", "#myNavbar", 1, "navbar-toggle"], [1, "icon-bar"], ["href", "index.html", 1, "navbar-brand"], ["alt", "Image", "id", "logo", 2, "width", "150px", "height", "28px", "align-self", "center", "margin-right", "10%", 3, "src"], ["id", "myNavbar", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", 2, "align-content", "center"], [1, "disabled"], [1, "active"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Bugs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.ImgPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "nZSf":
/*!****************************************************!*\
  !*** ./src/app/select-bug/select-bug.component.ts ***!
  \****************************************************/
/*! exports provided: SelectBugComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBugComponent", function() { return SelectBugComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SelectBugComponent {
    constructor() { }
    ngOnInit() {
    }
}
SelectBugComponent.ɵfac = function SelectBugComponent_Factory(t) { return new (t || SelectBugComponent)(); };
SelectBugComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectBugComponent, selectors: [["app-select-bug"]], decls: 2, vars: 0, template: function SelectBugComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "select-bug works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtYnVnLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map