webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_animations/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slide_in_out_animations__ = __webpack_require__("../../../../../src/app/_animations/slide_in_out_animations.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__slide_in_out_animations__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slide_up_down_animations__ = __webpack_require__("../../../../../src/app/_animations/slide-up-down.animations.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__slide_up_down_animations__["a"]; });




/***/ }),

/***/ "../../../../../src/app/_animations/slide-up-down.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideUpDownAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var slideUpDownAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('slideUpDownAnimation', [
    // end state styles for route container (host)
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('* => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* stagger */])('300ms', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.6s ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
            ]))
        ]), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* stagger */])('300ms', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.6s ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 1 }),
            ]))
        ]), { optional: true })
    ])
]);


/***/ }),

/***/ "../../../../../src/app/_animations/slide_in_out_animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideInOutAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var slideInOutAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('slideInOutAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('* <=> *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ position: 'fixed', opacity: 0 }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.6s ease', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ position: 'fixed', width: '100%', opacity: 1, transform: 'translateX(0)', offset: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: .5, transform: 'translateY(55px)', offset: .3 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: 0, transform: 'translateX(-75%)', offset: 1 }),
        ])), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.6s ease', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* keyframes */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ position: 'fixed', width: '100%', opacity: 0, transform: 'translateX(-75%)', offset: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: .5, transform: 'translateX(35px)', offset: .3 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
        ])), { optional: true }),
    ]),
]);


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_default_component__ = __webpack_require__("../../../../../src/app/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_index__ = __webpack_require__("../../../../../src/app/_animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { pathMatch: 'full', path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__default_default_component__["a" /* DefaultComponent */], data: { animation: 'default' } },
    { pathMatch: 'full', path: "home",
        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], data: { animation: 'home' }
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            animations: [__WEBPACK_IMPORTED_MODULE_4__animations_index__["a" /* slideInOutAnimation */]],
            // attach the fade in animation to the host (root) element of this component
            host: { '[@slideInOutAnimation]': '' }
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<mat-toolbar color=\"primary\" style=\"margin-top:-3%\">\n  <mat-toolbar-row class=\"spans\">\n    <span>Book Library</span>\n      <span class=\"example-spacer\"></span> \n        <button mat-button routerLink=\"\" style=\"font-size: 0.7em; \">Home</button>\n      <button mat-button routerLink=\"home\" style=\"font-size: 0.7em; \">Add New Book</button>   \n    </mat-toolbar-row>\n </mat-toolbar>\n\n  <div  [@slideInOutAnimation]=\"getRouteAnimation(route)\">\n    <router-outlet #route=\"outlet\"></router-outlet>\n       </div>   \n         <div class= \"container color-light\" >  \n       <div class=\"col\">\n    </div>\n </div>\n     <div class= \"container2 color-light\" > \n    \n        \n       \n          <div class=\"col2\"  [@slideUpDownAnimation]=\"contactsArr.length\" >\n        <mat-accordion >\n           <mat-expansion-panel  (closed)=\"panelCloseState(i)\"  [disabled]=\"isDisabled\" class=\"life-container\" *ngFor=\"let contact of contactsArr; let i = index\">\n              <mat-expansion-panel-header  >  \n                <mat-panel-title class=\"spans\">\n                   <span>Tilte : {{ contact.title | capitalizePipe}}</span>    \n                       </mat-panel-title>\n                         <mat-panel-description >\n                            <span class=\"example-spacer\"></span>\n                              <mat-icon style=\"color:#4DB6AC\">edit</mat-icon> \n                            <mat-icon style=\"color:#4DB6AC\">delete</mat-icon>\n                          </mat-panel-description>      \n                        </mat-expansion-panel-header >\n                      <div style=\"padding-top:1em\" class=\"spans\">\n                    <span  >Autuor :  {{contact.autuor| capitalizePipe}}</span>\n                  </div>\n                <div style=\"padding-top:2.1em;padding-bottom: 2.1em\">\n             <span  class=\"spans\">Date : {{ contact.date | date}}</span>                   \n          </div>\n                 \n            <mat-accordion>\n              <mat-expansion-panel [expanded]=\"panelOpenState \" class=\"life-container\"(opened)=\"panelOpenStateFunck()\"\n                (closed)=\"panelCloseState(i)\" (click)=\"changeCtrlName(i)\"  >\n                   <mat-expansion-panel-header>\n                     <mat-panel-title>\n                    <span>Update</span> \n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n                       \n<mat-horizontal-stepper  *ngIf=\"panelOpenState &&  i == ctrlChange\"  [linear]=\"true\" color=\"accent\" >\n  <mat-step [stepControl]=\"titleFormGroup\" >\n    <form [formGroup]=\"titleFormGroup\"  >\n      <ng-template matStepLabel>Update Title</ng-template> \n        <mat-form-field>\n           <input matInput    #input minlength=\"4\"  pattern=\"[a-zA-Z ]*\"  [formControl]=\"titlePattern\"\n              [(ngModel)]=\"contact.title\"  placeholder=\"Update The Title\"\n                 formControlName=\"titleCtrl\" required>\n                    <mat-error  style=\"font-size:1.2em\" *ngIf=\"titlePattern.invalid\">{{titleFilter(i)}}</mat-error>\n                 </mat-form-field>\n              <div style=\"padding-top: 1em\">\n            <button mat-raised-button color=\"accent\" matStepperNext  >Next</button>\n        </div>\n     </form>\n  </mat-step> \n\n <mat-step [stepControl]=\"autourFormGroup\">\n    <form [formGroup]=\"autourFormGroup\">\n      <ng-template matStepLabel>Update Autuor</ng-template>\n        <mat-form-field>\n          <input matInput #input minlength=\"4\" pattern=\"[a-zA-Z ]*\"\n            [formControl]=\"patterns\" [(ngModel)]=\"contact.autuor\" placeholder=\"Autuor\" formControlName=\"autourCtrl\" required>\n              <mat-error  *ngIf=\"patterns.invalid\">{{getErrorMessage()}}</mat-error>\n                </mat-form-field>\n              <div style=\"padding-top: 1em\">\n            <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\n         <button mat-raised-button color=\"accent\" matStepperNext >Next</button>\n       </div> \n    </form>\n  </mat-step>\n\n <mat-step [stepControl]=\"dateFormGroup\">\n      <form [formGroup]=\"dateFormGroup\">\n        <ng-template matStepLabel>Update Date</ng-template>\n           <mat-form-field class=\"example-full-width\">\n               <input matInput [min]=\"minDate\" [max]=\"maxDate\" [(ngModel)]=\"contact.date\" formControlName=\"dateCtrl\"\n                  [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\" \n                    required>\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                  <mat-error>This field is required</mat-error>\n               </mat-form-field>\n             <div style=\"padding-top: 1em\">\n           <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n     </div>\n   </form>\n</mat-step>\n\n<mat-step>\n   <ng-template matStepLabel>Done</ng-template>\n      You are now done.\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n        <button type=\"submit\" mat-button (click)=\"updateBook(i)\">Save</button>\n     </div>\n   </mat-step>\n</mat-horizontal-stepper>\n                 \n              </mat-expansion-panel>\n            \n            </mat-accordion>\n            <br>\n            <button mat-raised-button style=\"background-color:#FF6B6B; \" (click)=\"removeContact(i)\" >Delete Book</button>\n                            \n          </mat-expansion-panel>\n        </mat-accordion>\n        <br>\n      \n     \n    </div>\n    </div>\n   \n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  background: #1B1B1B;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 50% auto;\n      grid-template-columns: 50% auto; }\n\n.col {\n  padding: .4em 1.3em; }\n\n.container2 {\n  background: #1B1B1B;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 90% auto;\n      grid-template-columns: 90% auto; }\n\n.col2 {\n  padding: .4em 1.3em;\n  padding-left: 8em; }\n\n.color-dark {\n  /* background: #2885C4; */ }\n\n.color-light {\n  /*  background: #57B3F1; */ }\n\ninput.txt {\n  border: 0;\n  padding: 1em;\n  width: 80%;\n  margin-bottom: 2em; }\n\ninput.btn {\n  border: 0;\n  display: block;\n  padding: 1em 3em;\n  background: #A5F883;\n  color: #FFFFFF;\n  margin-bottom: 1em;\n  cursor: pointer; }\n\n.life-container {\n  background: #ebebeb;\n  color: #2E2E2E;\n  padding: .5em;\n  font-weight: bold;\n  cursor: row-resize; }\n\n.book-panel {\n  min-height: 200px; }\n\n.images {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remove_book_remove_book_component__ = __webpack_require__("../../../../../src/app/remove-book/remove-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forbidden_validator_directive_directive__ = __webpack_require__("../../../../../src/app/forbidden-validator-directive.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animations_index__ = __webpack_require__("../../../../../src/app/_animations/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(_data, _formBuilder, dialog) {
        this._data = _data;
        this._formBuilder = _formBuilder;
        this.dialog = dialog;
        this.isDisabled = false;
        this.isLinear = false;
        this.ok = false;
        this.saveUpdate = false;
        this.contactsArr = [];
        this.panelOpenState = false;
        this.fvd = new __WEBPACK_IMPORTED_MODULE_5__forbidden_validator_directive_directive__["a" /* ForbiddenValidatorDirective */];
        this.myFilter = function (d) {
            var day = d.getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
        this.patterns = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].pattern("[a-zA-Z ]*")]);
        this.validNum = 4;
        this.counter = 0;
        this.minDate = new Date();
        this.maxDate = new Date(2020, 0, 1);
    }
    AppComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData.animation;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.contact.subscribe(function (res) { return _this.contactsArr = res; });
        this.titleFormGroup = this._formBuilder.group({
            titleCtrl: ['', this.valid]
        });
        this.autourFormGroup = this._formBuilder.group({
            autourCtrl: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required]
        });
        this.dateFormGroup = this._formBuilder.group({
            dateCtrl: [this.date, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required]
        });
        this._data.contact.subscribe(function (res) { return _this.contactsArr = res; });
    };
    AppComponent.prototype.getErrorMessage = function () {
        return this.patterns.hasError('required') ? 'You must enter a value' :
            this.patterns.hasError('minlength') ? 'You must enter at least 4 letters' :
                this.patterns.hasError('pattern') ? 'You must enter an english letters only' :
                    '';
    };
    AppComponent.prototype.titleFilter = function (i) {
        return this.titlePattern.hasError('forbiddenName') ? 'This book is already exsist' :
            this.titlePattern.hasError('required') ? 'You must enter a value' :
                this.titlePattern.hasError('minlength') ? 'You must enter at least 4 letters' :
                    this.titlePattern.hasError('pattern') ? 'You must enter an english letters only' :
                        '';
    };
    AppComponent.prototype.changeCtrlName = function (i) {
        console.log("change clicked " + i);
        if (this.counter == 0) {
            //saving the fealdes values in case the user won't save the chainges
            this.title = this.contactsArr[i].title;
            this.autuor = this.contactsArr[i].autuor;
            this.contactsArr[i].date = new Date(this.contactsArr[i].date);
            this.date = new Date(this.contactsArr[i].date);
            //preppare the validations for the specific title
            this.initTitleValidations(i);
            console.log("change clicked " + this.title + " , " + this.date);
            this.ctrlChange = i;
            this.counter++;
        }
        if (this.panelOpenState == false && this.saveUpdate == false && this.counter == 33) {
            this.contactsArr[i].title = this.title;
            this.contactsArr[i].autuor = this.autuor;
            this.contactsArr[i].date = new Date(this.date);
            console.log("abbort changes");
        }
    };
    AppComponent.prototype.initTitleValidations = function (i) {
        this.fvd.validTitle(i, this.contactsArr);
        this.needleRegExp = new RegExp(this.fvd.validValue(), "i");
        this.valid = Object(__WEBPACK_IMPORTED_MODULE_5__forbidden_validator_directive_directive__["b" /* forbiddenNameValidator */])(this.needleRegExp);
        this.titlePattern = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */](this.title, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required, this.valid,
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].minLength(this.validNum),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].pattern("[a-zA-Z ]*"),]);
        this.titleFormGroup = this._formBuilder.group({
            titleCtrl: [this.title, this.valid]
        });
    };
    AppComponent.prototype.panelCloseState = function (i) {
        this.panelOpenState = false;
        this.isDisabled = false;
        if (this.counter != 0) {
            this.counter = 33;
            console.log("closing the pannel counter is = " + this.counter);
        }
        this.panelOpenState = false;
    };
    AppComponent.prototype.panelOpenStateFunck = function () {
        this.counter = 0;
        this.panelOpenState = true;
        this.isDisabled = true;
    };
    AppComponent.prototype.removeContact = function (i) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__remove_book_remove_book_component__["a" /* RemoveBookComponent */], {
            width: '500px',
            data: { ok: this.ok, title: this.contactsArr[i].title }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed' + _this.ok);
            _this.ok = result;
            if (_this.ok) {
                _this.contactsArr.splice(i, 1);
                _this.ok = false;
            }
        });
    };
    AppComponent.prototype.getContact = function () {
        var _this = this;
        this._data.getContactArr();
        this._data.contact.subscribe(function (res) { return _this.contactsArr = res; });
        console.log("get contact!");
    };
    AppComponent.prototype.updateBook = function (index) {
        this.saveUpdate = true;
        this._data.updateBook(this.contactsArr[index].autuor, this.contactsArr[index].title, this.contactsArr[index].date, index);
        console.log(this.contactsArr[index].autuor + " " + this.contactsArr[index].title + " " + this.contactsArr[index].date);
        this.counter = 0;
        this.panelOpenState = false;
        this.saveUpdate = false;
    };
    AppComponent.prototype.initBookValues = function (i) {
        this.title = this.contactsArr[i].title;
        this.autuor = this.contactsArr[i].autuor;
        this.date = this.contactsArr[i].date;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_6__animations_index__["b" /* slideUpDownAnimation */], __WEBPACK_IMPORTED_MODULE_6__animations_index__["a" /* slideInOutAnimation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__http_request_iterceptor__ = __webpack_require__("../../../../../src/app/http-request-iterceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__default_default_component__ = __webpack_require__("../../../../../src/app/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__capitalize_pipe_pipe__ = __webpack_require__("../../../../../src/app/capitalize-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__remove_book_remove_book_component__ = __webpack_require__("../../../../../src/app/remove-book/remove-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__forbidden_validator_directive_directive__ = __webpack_require__("../../../../../src/app/forbidden-validator-directive.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__carousel_handler_directive_directive__ = __webpack_require__("../../../../../src/app/carousel-handler-directive.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__carousel_service_service__ = __webpack_require__("../../../../../src/app/carousel-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__window_width_service_service__ = __webpack_require__("../../../../../src/app/window-width-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pins_component_pins_component_component__ = __webpack_require__("../../../../../src/app/pins-component/pins-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__slide_slide_component__ = __webpack_require__("../../../../../src/app/slide/slide.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__arrows_arrows_component__ = __webpack_require__("../../../../../src/app/arrows/arrows.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__default_default_component__["a" /* DefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_12__capitalize_pipe_pipe__["a" /* CapitalizePipePipe */],
                __WEBPACK_IMPORTED_MODULE_13__remove_book_remove_book_component__["a" /* RemoveBookComponent */],
                __WEBPACK_IMPORTED_MODULE_14__forbidden_validator_directive_directive__["a" /* ForbiddenValidatorDirective */],
                __WEBPACK_IMPORTED_MODULE_16__carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_17__carousel_handler_directive_directive__["a" /* CarouselHandlerDirective */],
                __WEBPACK_IMPORTED_MODULE_20__pins_component_pins_component_component__["a" /* PinsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__slide_slide_component__["a" /* SlideComponent */],
                __WEBPACK_IMPORTED_MODULE_22__arrows_arrows_component__["a" /* CarouselArrowsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__http_request_iterceptor__["a" /* InterceptorModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_router__["c" /* RouterModule */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_13__remove_book_remove_book_component__["a" /* RemoveBookComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_18__carousel_service_service__["a" /* CarouselService */], __WEBPACK_IMPORTED_MODULE_19__window_width_service_service__["a" /* WindowWidthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_15__angular_material_core__["d" /* ErrorStateMatcher */], useClass: __WEBPACK_IMPORTED_MODULE_15__angular_material_core__["u" /* ShowOnDirtyErrorStateMatcher */], }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/arrows/arrows.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-nav\">\n  <div (click)=\"onChangeSlide('prev')\"\n       [class.carousel-nav__btn--disabled]=\"disableElement\">\n    <div class=\"carousel-nav__clickable-area carousel-nav__clickable-area--left\">\n      <i class=\"fa fa-angle-left carousel-nav__btn carousel-nav__btn--left\" aria-hidden=\"true\"></i>\n    </div>\n  </div>\n  <div (click)=\"onChangeSlide('next')\"\n       [class.carousel-nav__btn--disabled]=\"disableElement\">\n    <div class=\"carousel-nav__clickable-area carousel-nav__clickable-area--right\">\n      <i class=\"fa fa-angle-right carousel-nav__btn carousel-nav__btn--right\" aria-hidden=\"true\"></i>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/arrows/arrows.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel-nav__clickable-area {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 50px; }\n  .carousel-nav__clickable-area:hover {\n    cursor: pointer; }\n  .carousel-nav__clickable-area--left {\n    right: auto;\n    left: 0; }\n    .carousel-nav__clickable-area--left:hover .carousel-nav__btn--left {\n      color: rgba(255, 255, 255, 0.8); }\n  .carousel-nav__clickable-area--right {\n    left: auto;\n    right: 0; }\n    .carousel-nav__clickable-area--right:hover .carousel-nav__btn--right {\n      color: rgba(255, 255, 255, 0.8); }\n\n.carousel-nav__btn {\n  position: absolute;\n  top: 50%;\n  font-size: 46px;\n  -webkit-transform: scaleX(0.8) translateY(-50%);\n          transform: scaleX(0.8) translateY(-50%);\n  text-shadow: rgba(0, 0, 0, 0.8) 0 0 7px;\n  color: rgba(255, 255, 255, 0.6);\n  cursor: pointer; }\n  .carousel-nav__btn:hover {\n    color: rgba(255, 255, 255, 0.8); }\n  .carousel-nav__btn--left {\n    left: 15px; }\n  .carousel-nav__btn--right {\n    right: 15px; }\n  .carousel-nav__btn--disabled {\n    pointer-events: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/arrows/arrows.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselArrowsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselArrowsComponent = (function () {
    function CarouselArrowsComponent() {
        this.DISABLE_ELEMENT_TIME = 750;
        this.changeSlide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    CarouselArrowsComponent.prototype.onChangeSlide = function (direction) {
        this.changeSlide.emit(direction);
    };
    CarouselArrowsComponent.prototype.disableNavButtons = function () {
        var _this = this;
        this.disableElement = true;
        setTimeout(function () { return _this.disableElement = false; }, this.DISABLE_ELEMENT_TIME);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], CarouselArrowsComponent.prototype, "changeSlide", void 0);
    CarouselArrowsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'carousel-arrows',
            template: __webpack_require__("../../../../../src/app/arrows/arrows.component.html"),
            styles: [__webpack_require__("../../../../../src/app/arrows/arrows.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselArrowsComponent);
    return CarouselArrowsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/capitalize-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipePipe = (function () {
    function CapitalizePipePipe() {
    }
    CapitalizePipePipe.prototype.transform = function (value, args) {
        value = value.replace('  ', ' ');
        if (value) {
            var w_1 = '';
            if (value.split(' ').length > 0) {
                value.split(' ').forEach(function (word) {
                    w_1 += word.charAt(0).toUpperCase() + word.toString().substr(1, word.length).toLowerCase() + ' ';
                });
            }
            else {
                w_1 = value.charAt(0).toUpperCase() + value.toString().substr(1, value.length).toLowerCase();
            }
            return w_1;
        }
        return value;
    };
    CapitalizePipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'capitalizePipe'
        })
    ], CapitalizePipePipe);
    return CapitalizePipePipe;
}());



/***/ }),

/***/ "../../../../../src/app/carousel-handler-directive.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselHandlerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_service_service__ = __webpack_require__("../../../../../src/app/carousel-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselHandlerDirective = (function () {
    function CarouselHandlerDirective(el, carouselService) {
        this.el = el;
        this.carouselService = carouselService;
        this.handleAutoplay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.currentSlide = 0;
    }
    CarouselHandlerDirective.prototype.setNewSlide = function (newSlide, direction) {
        var currentSlide = this.el.nativeElement.querySelector("[data-slide=\"" + this.currentSlide + "\"]");
        var nextSlide = this.el.nativeElement.querySelector("[data-slide=\"" + newSlide + "\"]");
        this.animate(currentSlide, nextSlide, direction);
        this.currentSlide = newSlide;
    };
    CarouselHandlerDirective.prototype.animate = function (currentSlide, nextSlide, direction) {
        if (!this.config.animation) {
            this.toggleClass('slide--hidden-initial', currentSlide, nextSlide);
            return;
        }
        var animationType = this.config.animationType;
        currentSlide.className = nextSlide.className = 'slide';
        this.toggleClass("slide--hidden-" + animationType + "-" + direction, currentSlide);
        this.toggleClass("slide--show-" + animationType + "-" + direction, nextSlide);
    };
    CarouselHandlerDirective.prototype.toggleClass = function (className) {
        var elements = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            elements[_i - 1] = arguments[_i];
        }
        elements.forEach(function (element) {
            element.classList.toggle(className);
        });
    };
    CarouselHandlerDirective.prototype.ngOnInit = function () {
        this.config = this.carouselService.getConfig();
        if (this.config.autoplay) {
            this.autoplayHandler();
        }
    };
    CarouselHandlerDirective.prototype.autoplayHandler = function () {
        var _this = this;
        this.el.nativeElement.addEventListener('mouseenter', function () {
            _this.handleAutoplay.emit(true);
        });
        this.el.nativeElement.addEventListener('mouseleave', function () {
            _this.handleAutoplay.emit(false);
        });
        document.addEventListener('visibilitychange', function () {
            _this.handleAutoplay.emit(document.hidden);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], CarouselHandlerDirective.prototype, "handleAutoplay", void 0);
    CarouselHandlerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appCarouselHandler]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__carousel_service_service__["a" /* CarouselService */]])
    ], CarouselHandlerDirective);
    return CarouselHandlerDirective;
}());



/***/ }),

/***/ "../../../../../src/app/carousel-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselService = (function () {
    function CarouselService() {
        this.imageLoadedCount = 0;
    }
    CarouselService.prototype.init = function (imageSources, config) {
        this.imageLoadedCount = 0;
        this.imageLoad = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        config.autoplayDelay = config.autoplayDelay < 1000 ? 1000 : config.autoplayDelay;
        this.config = config;
        if (!this.config.verifyBeforeLoad) {
            return;
        }
        this.loadImages(imageSources);
    };
    CarouselService.prototype.onImageLoad = function () {
        return this.imageLoad.asObservable();
    };
    CarouselService.prototype.getConfig = function () {
        return Object.assign({}, this.config);
    };
    CarouselService.prototype.loadImages = function (imageSources) {
        var _this = this;
        var createImageElement = function (image) {
            var imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.onload = _this.onImageElementLoad.bind(_this, imageSources, image);
            imgElement.onerror = _this.onImageElementLoadError.bind(_this, imageSources, image);
        };
        imageSources.forEach(createImageElement);
    };
    CarouselService.prototype.onImageElementLoad = function (imageSources, image) {
        this.imageLoadedCount++;
        this.imageLoad.next(image);
        this.carouselTinyLogger(image, true);
        this.emitIfAllImagesLoaded(imageSources);
    };
    CarouselService.prototype.onImageElementLoadError = function (imageSources, image) {
        imageSources.splice(imageSources.indexOf(image), 1);
        this.carouselTinyLogger(image, false);
        this.emitIfAllImagesLoaded(imageSources);
    };
    CarouselService.prototype.emitIfAllImagesLoaded = function (imageSources) {
        if (this.imageLoadedCount === imageSources.length) {
            this.imageLoad.complete();
        }
    };
    CarouselService.prototype.carouselTinyLogger = function (image, isLoaded) {
        if (!this.config.log) {
            return;
        }
        if (isLoaded) {
            console.log("Carousel module: image loaded: " + image);
            return;
        }
        console.error("Carousel module: image load error: " + image);
    };
    CarouselService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CarouselService);
    return CarouselService;
}());



/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"carousel-wrapper\" appCarouselHandler (handleAutoplay)=\"onHandleAutoplay($event)\">\n\n  <carousel-slide\n       *ngFor=\"let img of loadedImages; let i = index\"\n       [src]=\"img\"\n       [slideNo]=\"i\"\n       [isHidden]=\"i !== 0\">\n  </carousel-slide>\n\n  <carousel-pins\n    *ngIf=\"galleryLength > 1\"\n    [images]=\"loadedImages\"\n    [currentSlide]=\"currentSlide\"\n    (changeSlide)=\"onChangeSlideIndex($event);\">\n  </carousel-pins>\n\n  <carousel-arrows\n    *ngIf=\"galleryLength > 1\"\n    (changeSlide)=\"onChangeSlide($event);\"></carousel-arrows>\n</div>"

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel-wrapper {\n  position: relative;\n  height: 100%;\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_service_service__ = __webpack_require__("../../../../../src/app/carousel-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__window_width_service_service__ = __webpack_require__("../../../../../src/app/window-width-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider__ = __webpack_require__("../../../../../src/app/provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { PinsComponent } from '../pins-component/pins-component.component';
// import { CarouselArrowsComponent } from '../arrows/arrows.component';
// import { CarouselHandlerDirective } from '../carousel-handler-directive.directive';

var CarouselComponent = (function () {
    function CarouselComponent(carouselService, windowWidthService) {
        this.carouselService = carouselService;
        this.windowWidthService = windowWidthService;
        this.currentSlide = 0;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        this.initData();
    };
    CarouselComponent.prototype.initData = function () {
        var _this = this;
        this.galleryLength = this.sources.length;
        var _a = this.sources, showImmediate = _a[0], showWhenLoad = _a.slice(1);
        this.loadedImages = this.config.verifyBeforeLoad ? [showImmediate] : this.sources;
        if (this.galleryLength < 2) {
            return;
        }
        this.carouselService.init(showWhenLoad, this.config);
        this.carouselService.onImageLoad()
            .takeWhile(function () { return !!_this.galleryLength; })
            .subscribe(function (image) { return _this.loadedImages.push(image); });
        if (this.config.autoplay) {
            this.config.autoplayDelay = this.config.autoplayDelay < 1000 ? 1000 : this.config.autoplayDelay;
            var minWidth = this.config.stopAutoplayMinWidth;
            this.windowWidthService.onResize(minWidth, true)
                .takeWhile(function () { return !!_this.galleryLength; })
                .subscribe(function (isMinWidth) {
                _this.preventAutoplay = !isMinWidth;
                _this.onHandleAutoplay(!_this.config.autoplay);
            });
        }
    };
    CarouselComponent.prototype.onChangeSlide = function (direction) {
        if (direction === 'prev') {
            this.currentSlide = this.currentSlide === 0 ? this.loadedImages.length - 1 : --this.currentSlide;
        }
        else {
            this.currentSlide = this.currentSlide === this.loadedImages.length - 1 ? 0 : ++this.currentSlide;
        }
        this.carouselHandlerDirective.setNewSlide(this.currentSlide, direction);
        this.disableCarouselNavBtns();
    };
    CarouselComponent.prototype.onChangeSlideIndex = function (index) {
        if (index === this.currentSlide) {
            return;
        }
        var direction = index > this.currentSlide ? 'next' : 'prev';
        this.currentSlide = index;
        this.carouselHandlerDirective.setNewSlide(this.currentSlide, direction);
        this.disableCarouselNavBtns();
    };
    CarouselComponent.prototype.onHandleAutoplay = function (stopAutoplay) {
        if (stopAutoplay || this.preventAutoplay) {
            clearInterval(this.autoplayIntervalId);
            return;
        }
        this.startAutoplay(this.config.autoplayDelay);
    };
    CarouselComponent.prototype.startAutoplay = function (delay) {
        var _this = this;
        this.autoplayIntervalId = setInterval(function () {
            _this.onChangeSlide('next');
            _this.pinsComponent.disableNavButtons();
            _this.carouselArrowsComponent.disableNavButtons();
        }, delay);
    };
    CarouselComponent.prototype.disableCarouselNavBtns = function () {
        if (!this.config.animation) {
            return;
        }
        this.carouselArrowsComponent.disableNavButtons();
        this.pinsComponent.disableNavButtons();
    };
    CarouselComponent.prototype.ngOnDestroy = function () {
        if (this.autoplayIntervalId) {
            clearInterval(this.autoplayIntervalId);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CarouselComponent.prototype, "sources", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_4__provider__["b" /* CarouselHandlerDirective */]; })),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__provider__["b" /* CarouselHandlerDirective */])
    ], CarouselComponent.prototype, "carouselHandlerDirective", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__provider__["a" /* CarouselArrowsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__provider__["a" /* CarouselArrowsComponent */])
    ], CarouselComponent.prototype, "carouselArrowsComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__provider__["c" /* PinsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__provider__["c" /* PinsComponent */])
    ], CarouselComponent.prototype, "pinsComponent", void 0);
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'carousel',
            template: __webpack_require__("../../../../../src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/carousel/carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__carousel_service_service__["a" /* CarouselService */], __WEBPACK_IMPORTED_MODULE_3__window_width_service_service__["a" /* WindowWidthService */]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.contactsArr = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.contact = this.contactsArr.asObservable();
        console.log("constractor service");
        this.httpClient.get("https://my-json-server.typicode.com/orenAzuz/Books/bookList/")
            .subscribe(function (data) {
            if (data.length) {
                _this.contactsArr.next(data);
                console.log(_this.contactsArr.value[0].author);
            }
        });
    }
    DataService.prototype.ngOnInit = function () {
    };
    DataService.prototype.getContactArr = function () {
        var _this = this;
        this.httpClient.get("https://my-json-server.typicode.com/orenAzuz/Books/bookList/")
            .subscribe(function (data) {
            if (data.length) {
                _this.contactsArr.next(data);
            }
        });
    };
    DataService.prototype.createProfile = function (autuor, title, newDate) {
        var _this = this;
        this.httpClient.post("https://my-json-server.typicode.com/orenAzuz/Books/bookList/", {
            autuor: autuor,
            title: title,
            date: newDate
        })
            .subscribe(function (data) {
            _this.contactsArr.next(_this.contactsArr.getValue().concat([data]));
            console.log(_this.contactsArr);
        });
    };
    DataService.prototype.updateBook = function (autuor, title, newDate, index) {
        console.log(" this is the autuor from the service  " + autuor);
        this.contactsArr.value[index].autuor = autuor;
        this.contactsArr.value[index].title = title;
        this.contactsArr.value[index].date = newDate;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/default/default.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<link href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n<div >\r\n\r\n  <div style=\"width: 100%; height: 360px;margin-right: 700%;\" >\r\n    <carousel [sources]=\"imageSources\" [config]=\"config\"></carousel>\r\n  </div> \r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/default/default.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/default/default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icarousel_config_app__ = __webpack_require__("../../../../../src/app/icarousel-config.app.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DefaultComponent = (function () {
    function DefaultComponent(router) {
        this.router = router;
        this.imageSources = [
            'http://samswicegood.com/wp-content/uploads/2014/05/cropped-free-book-_-free-Novel-_-books-for-exchange.jpg',
            'https://c1.staticflickr.com/5/4018/4408981718_350fee29e1.jpg',
            'https://www.arts.gov/sites/default/files/styles/large-620/public/Books_0.jpg?itok=j7dQ-kbm',
            'https://static.pexels.com/photos/159872/book-open-pages-literature-159872.jpeg'
        ];
        this.generateWidgets = function (num) {
            var result = [];
            for (var i = 0; i < num; i++) {
                result.push({ title: 'Widget' + i });
            }
            return result;
        };
        // example config
        this.config = {
            verifyBeforeLoad: true,
            log: true,
            animation: true,
            animationType: __WEBPACK_IMPORTED_MODULE_1__icarousel_config_app__["a" /* AnimationConfig */].SLIDE,
            autoplay: true,
            autoplayDelay: 5000,
            stopAutoplayMinWidth: 768
        };
    }
    DefaultComponent.prototype.ngOnInit = function () {
        this.widgets = this.generateWidgets(10);
    };
    DefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-default',
            template: __webpack_require__("../../../../../src/app/default/default.component.html"),
            styles: [__webpack_require__("../../../../../src/app/default/default.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/forbidden-validator-directive.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = forbiddenNameValidator;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForbiddenValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



function forbiddenNameValidator(nameRe) {
    var obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */];
    return function (control) {
        var forbidden = nameRe.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}
var ForbiddenValidatorDirective = (function () {
    function ForbiddenValidatorDirective() {
        this.books = [];
    }
    ForbiddenValidatorDirective_1 = ForbiddenValidatorDirective;
    ForbiddenValidatorDirective.prototype.validate = function (control) {
        console.log(this.forbiddenName);
        return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
            : null;
    };
    ForbiddenValidatorDirective.prototype.validValue = function () {
        var w = '\b|';
        var n = 1;
        if (this.index == this.books.length - 1) {
            n = 2;
        }
        for (var i = 0; this.books.length > i; i++) {
            if (i != this.index) {
                w += this.books[i].title;
                if (i < this.books.length - n) {
                    w += "|";
                }
            }
        }
        w += '|\b';
        console.log(w);
        return w;
    };
    ForbiddenValidatorDirective.prototype.validTitle = function (index, books) {
        this.books = books;
        this.index = index;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ForbiddenValidatorDirective.prototype, "forbiddenName", void 0);
    ForbiddenValidatorDirective = ForbiddenValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appForbiddenName]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALIDATORS */], useExisting: ForbiddenValidatorDirective_1, multi: true }]
        })
    ], ForbiddenValidatorDirective);
    return ForbiddenValidatorDirective;
    var ForbiddenValidatorDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div  >\n<!--style=\"background: #ebebeb;\" -->\n<mat-card >\n  \n  \n\n      <form (ngSubmit)=\"createProfile()\" #contactForm=\"ngForm\">\n        <div class=\"e-container\">\n        <mat-form-field>\n      <input matInput required forbiddenName  pattern=\"[a-zA-Z ]*\"  [formControl]=\"patterns\" #input minlength=\"4\" [(ngModel)]=\"autuor\" name=\"something\"\n       placeholder=\"Autuor\"  >\n      <mat-error *ngIf=\"patterns.invalid\">{{getErrorMessage()}}</mat-error>\n    </mat-form-field>\n  </div>\n   \n   <div class=\"e-container\">\n      <mat-form-field>\n       <input matInput type=\"text\" #input minlength=\"4\" forbiddenName=\"Book\" [formControl]=\"titlePattern\" [(ngModel)]=\"title\" name=\"something1\" placeholder=\"Title\"\n       required >\n       <mat-error *ngIf=\"titlePattern.invalid\">{{titleFilter(i)}}</mat-error>\n      </mat-form-field>\n      </div>\n \n  <div class=\"e-container\">\n  <mat-form-field class=\"example-full-width \">\n    <input matInput [(ngModel)]=\"date\" name=\"date\" [min]=\"minDate\" [max]=\"maxDate\"  [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\" \n     required>\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n    <mat-error>This field is required</mat-error>\n  </mat-form-field>\n  </div>\n \n  <button  type=\"submit\" mat-raised-button color=\"accent\"[disabled]=\"!contactForm.form.valid || titlePattern.invalid || patterns.invalid\">add Book</button>\n  <button  type=\"button\" mat-raised-button color=\"accent\" (click)=\"cancel()\">Cancel</button>\n  <br>\n</form>\n</mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forbidden_validator_directive_directive__ = __webpack_require__("../../../../../src/app/forbidden-validator-directive.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_index__ = __webpack_require__("../../../../../src/app/_animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(_data, route, router) {
        var _this = this;
        this._data = _data;
        this.route = route;
        this.router = router;
        this.valid = Object(__WEBPACK_IMPORTED_MODULE_3__forbidden_validator_directive_directive__["b" /* forbiddenNameValidator */])(this.needleRegExp);
        this.date = new Date();
        this.title = '';
        this.autuor = '';
        this.contactsArr = [];
        this.found = false;
        this.answerDisplay = "";
        this.showSpinner = false;
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].email]);
        this.boo = true;
        this.fvd = new __WEBPACK_IMPORTED_MODULE_3__forbidden_validator_directive_directive__["a" /* ForbiddenValidatorDirective */];
        this.myFilter = function (d) {
            var day = d.getDay();
            // Prevent Saturday from being selected.
            return day !== 6;
        };
        this.minDate = new Date();
        this.maxDate = new Date(2020, 0, 1);
        this.patterns = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern("[a-zA-Z ]*")]);
        this.validNum = 4;
        this._data.contact.subscribe(function (res) { return _this.contactsArr = res; });
        if (this.contactsArr.length === 0) {
            setTimeout(function () {
                _this.setTitleValidations();
            }, 2000);
        }
        this.setTitleValidations();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.setTitleValidations = function () {
        this.fvd.validTitle(-1, this.contactsArr);
        this.needleRegExp = new RegExp(this.fvd.validValue(), "i");
        this.valid = Object(__WEBPACK_IMPORTED_MODULE_3__forbidden_validator_directive_directive__["b" /* forbiddenNameValidator */])(this.needleRegExp);
        this.titlePattern = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, this.valid,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(4),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern("[a-zA-Z ]*"),]);
        this.titlePattern.setErrors(__WEBPACK_IMPORTED_MODULE_3__forbidden_validator_directive_directive__["b" /* forbiddenNameValidator */]);
    };
    HomeComponent.prototype.showAnswer = function () {
        var _this = this;
        this.showSpinner = true;
        setTimeout(function () {
            _this.showSpinner = false;
        }, 2000);
    };
    HomeComponent.prototype.onNameKeyUp = function (event) {
        this.autuor = event.target.value;
    };
    HomeComponent.prototype.createProfile = function () {
        var _this = this;
        this._data.createProfile(this.autuor, this.title, this.date);
        this._data.contact.subscribe(function (res) { return _this.contactsArr = res; });
        this.router.navigate(['']);
    };
    HomeComponent.prototype.getErrorMessage = function () {
        return this.patterns.hasError('required') ? 'You must enter a value' :
            this.patterns.hasError('minlength') ? 'You must enter at least 4 letters' :
                this.patterns.hasError('pattern') ? 'You must enter an english letters only' :
                    '';
    };
    HomeComponent.prototype.titleFilter = function (i) {
        if (this.titlePattern.hasError('forbiddenName')) {
            console.log("we have a custom error! ");
        }
        return this.titlePattern.hasError('forbiddenName') ? 'This book is already exsist' :
            this.titlePattern.hasError('required') ? 'You must enter a value' :
                this.titlePattern.hasError('minlength') ? 'You must enter at least 4 letters' :
                    this.titlePattern.hasError('pattern') ? 'You must enter an english letters only' :
                        '';
    };
    HomeComponent.prototype.cancel = function () {
        this.router.navigate(['']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
            // make slide in/out animation available to this component
            animations: [__WEBPACK_IMPORTED_MODULE_4__animations_index__["a" /* slideInOutAnimation */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/http-request-iterceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpsRequestInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HttpsRequestInterceptor = (function () {
    function HttpsRequestInterceptor() {
    }
    HttpsRequestInterceptor.prototype.intercept = function (req, next) {
        var dupReq = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', 'https://my-json-server.typicode.com') });
        return next.handle(dupReq);
    };
    HttpsRequestInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], HttpsRequestInterceptor);
    return HttpsRequestInterceptor;
}());

;
var InterceptorModule = (function () {
    function InterceptorModule() {
    }
    InterceptorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: HttpsRequestInterceptor, multi: true }
            ]
        })
    ], InterceptorModule);
    return InterceptorModule;
}());



/***/ }),

/***/ "../../../../../src/app/icarousel-config.app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationConfig; });
var AnimationConfig;
(function (AnimationConfig) {
    AnimationConfig[AnimationConfig["APPEAR"] = 0] = "APPEAR";
    AnimationConfig[AnimationConfig["SLIDE_OVERLAP"] = 1] = "SLIDE_OVERLAP";
    AnimationConfig[AnimationConfig["SLIDE"] = 2] = "SLIDE";
})(AnimationConfig || (AnimationConfig = {}));


/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatIconModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatIconModule */]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/pins-component/pins-component.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<ul class=\"carousel-nav-list\">\n  <li class=\"carousel-nav-list__item\"\n      *ngFor=\"let counter of images; let i = index\"\n      (click)=\"onChangeSlide(i)\"\n      [class.carousel-nav-list__item--current]=\"currentSlide === i\"\n      [class.carousel-nav-list__item--disabled]=\"disableElement\">\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "../../../../../src/app/pins-component/pins-component.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel-nav-list {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 5%;\n  margin: 0;\n  text-align: center; }\n  .carousel-nav-list__item {\n    display: inline-block;\n    margin: 0 6px;\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    background-color: #ffffff;\n    cursor: pointer;\n    opacity: 0.6; }\n    .carousel-nav-list__item:hover {\n      opacity: 0.9; }\n    .carousel-nav-list__item--active {\n      opacity: 0.9; }\n  .carousel-nav-list__item--current {\n    background-color: #4DB6AC;\n    opacity: 1; }\n  .carousel-nav-list__item--disabled {\n    pointer-events: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pins-component/pins-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PinsComponent = (function () {
    function PinsComponent() {
        this.DISABLE_ELEMENT_TIME = 750;
        this.changeSlide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    PinsComponent.prototype.onChangeSlide = function (slideIndex) {
        this.changeSlide.emit(slideIndex);
    };
    PinsComponent.prototype.disableNavButtons = function () {
        var _this = this;
        this.disableElement = true;
        setTimeout(function () { return _this.disableElement = false; }, this.DISABLE_ELEMENT_TIME);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], PinsComponent.prototype, "images", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PinsComponent.prototype, "currentSlide", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PinsComponent.prototype, "changeSlide", void 0);
    PinsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'carousel-pins',
            template: __webpack_require__("../../../../../src/app/pins-component/pins-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pins-component/pins-component.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PinsComponent);
    return PinsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pins_component_pins_component_component__ = __webpack_require__("../../../../../src/app/pins-component/pins-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arrows_arrows_component__ = __webpack_require__("../../../../../src/app/arrows/arrows.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_handler_directive_directive__ = __webpack_require__("../../../../../src/app/carousel-handler-directive.directive.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__pins_component_pins_component_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__arrows_arrows_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__carousel_handler_directive_directive__["a"]; });






/***/ }),

/***/ "../../../../../src/app/remove-book/remove-book.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1 mat-dialog-title style=\"color: #FF6B6B\">Warning !</h1>\n<div mat-dialog-content style=\"color: #FF6B6B\">\n  <p>Are you sure you want to delete the book {{data.title}} ?</p>\n</div>\n<div mat-dialog-actions >\n\t<button type=\"button\" mat-raised-button style=\"background-color: #FF6B6B\" [mat-dialog-close]=\"true\" tabindex=\"2\">Ok</button>\n\t<button mat-raised-button color=\"accent\" (click)=\"onNoClick()\" tabindex=\"-1\">No Thanks</button>\n</div>\n  \n\n\n"

/***/ }),

/***/ "../../../../../src/app/remove-book/remove-book.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background: #2E9CE6;\n  padding: 3em;\n  font-family: 'Raleway' , 'Arial';\n  color: #4B1111; }\n\nbutton {\n  font-family: 'Raleway' , 'Arial';\n  color: #003A61;\n  cursor: pointer; }\n\n.btn {\n  color: #003A61;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/remove-book/remove-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var RemoveBookComponent = (function () {
    function RemoveBookComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    RemoveBookComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    RemoveBookComponent.prototype.ngOnInit = function () {
    };
    RemoveBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-remove-book',
            template: __webpack_require__("../../../../../src/app/remove-book/remove-book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/remove-book/remove-book.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object])
    ], RemoveBookComponent);
    return RemoveBookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/slide/slide.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<img class=\"slide\" [src]=\"src\"\n[class.slide--hidden-initial]=\"isHidden\"\n[attr.data-slide]=\"slideNo\">\n"

/***/ }),

/***/ "../../../../../src/app/slide/slide.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slide {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  min-height: 400px;\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translateZ(0) scale(1, 1); }\n  .slide--hidden-initial {\n    display: none; }\n  .slide--hidden-1-next {\n    left: -100%;\n    transition: left 0.7s linear; }\n  .slide--hidden-1-prev {\n    left: 100%;\n    transition: left 0.7s linear; }\n\n@-webkit-keyframes next {\n  0% {\n    left: 99%; }\n  100% {\n    left: 0; } }\n\n@keyframes next {\n  0% {\n    left: 99%; }\n  100% {\n    left: 0; } }\n\n@-webkit-keyframes prev {\n  0% {\n    left: -99%; }\n  100% {\n    left: 0; } }\n\n@keyframes prev {\n  0% {\n    left: -99%; }\n  100% {\n    left: 0; } }\n  .slide--show-1-next {\n    -webkit-animation: next 0.7s 1 ease-out;\n            animation: next 0.7s 1 ease-out; }\n  .slide--show-1-prev {\n    -webkit-animation: prev 0.7s 1 ease-out;\n            animation: prev 0.7s 1 ease-out; }\n  .slide--hidden-2-next {\n    left: -100%;\n    transition: left 0.7s ease-out; }\n  .slide--hidden-2-prev {\n    left: 100%;\n    transition: left 0.7s ease-out; }\n\n@-webkit-keyframes next-overlap {\n  0% {\n    left: 99%; }\n  100% {\n    left: 0; } }\n\n@keyframes next-overlap {\n  0% {\n    left: 99%; }\n  100% {\n    left: 0; } }\n\n@-webkit-keyframes prev-overlap {\n  0% {\n    left: -99%; }\n  100% {\n    left: 0; } }\n\n@keyframes prev-overlap {\n  0% {\n    left: -99%; }\n  100% {\n    left: 0; } }\n  .slide--show-2-next {\n    -webkit-animation: next-overlap 0.7s 1 ease-out;\n            animation: next-overlap 0.7s 1 ease-out; }\n  .slide--show-2-prev {\n    -webkit-animation: prev-overlap 0.7s 1 ease-out;\n            animation: prev-overlap 0.7s 1 ease-out; }\n  .slide--hidden-0-next {\n    transition: opacity 0.7s ease-in;\n    opacity: 0; }\n  .slide--hidden-0-prev {\n    transition: opacity 0.7s ease-in;\n    opacity: 0; }\n\n@-webkit-keyframes next-appear {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes next-appear {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes prev-appear {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes prev-appear {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n  .slide--show-0-next {\n    -webkit-animation: next-appear 0.7s 1 ease-out;\n            animation: next-appear 0.7s 1 ease-out; }\n  .slide--show-0-prev {\n    -webkit-animation: prev-appear 0.7s 1 ease-out;\n            animation: prev-appear 0.7s 1 ease-out; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/slide/slide.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlideComponent = (function () {
    function SlideComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], SlideComponent.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], SlideComponent.prototype, "slideNo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SlideComponent.prototype, "isHidden", void 0);
    SlideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'carousel-slide',
            template: __webpack_require__("../../../../../src/app/slide/slide.component.html"),
            styles: [__webpack_require__("../../../../../src/app/slide/slide.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SlideComponent);
    return SlideComponent;
}());



/***/ }),

/***/ "../../../../../src/app/window-width-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowWidthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WindowWidthService = (function () {
    function WindowWidthService() {
    }
    WindowWidthService.prototype.onResize = function (minWidthBreakpoint, scrollBar) {
        var _this = this;
        this.minWidthBreakpoint = minWidthBreakpoint;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].fromEvent(window, 'resize')
            .map(function () { return _this.assertSize(scrollBar); })
            .startWith(this.assertSize(scrollBar))
            .distinctUntilChanged();
    };
    ;
    WindowWidthService.prototype.assertSize = function (scrollBar) {
        var area = scrollBar ? window.innerWidth : document.documentElement.clientWidth;
        return this.minWidthBreakpoint <= area;
    };
    WindowWidthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], WindowWidthService);
    return WindowWidthService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map