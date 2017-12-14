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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button (click)=\"changeTheme('Default')\">Default</button>\n<button (click)=\"changeTheme('Darkly')\">Darkly</button> -->\n<div id=\"header\">\n  <app-menu></app-menu>\n</div>\n<div id=\"content\">\n  <app-content></app-content>\n</div>\n<div id=\"footer\">\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
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


var AppComponent = (function () {
    function AppComponent(document) {
        this.document = document;
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.currentTheme = 'Default';
        //console.log(this.document.head.innerHTML);
    };
    AppComponent.prototype.changeTheme = function (themeName) {
        alert(this.document);
        if (themeName === 'Default') {
        }
        else {
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__content_content_component__ = __webpack_require__("../../../../../src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__content_technology_technology_component__ = __webpack_require__("../../../../../src/app/content/technology/technology.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__content_concept_concept_component__ = __webpack_require__("../../../../../src/app/content/concept/concept.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__not_found_component__ = __webpack_require__("../../../../../src/app/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_route__ = __webpack_require__("../../../../../src/app/app.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__content_technology_add_technology_add_technology_component__ = __webpack_require__("../../../../../src/app/content/technology/add-technology/add-technology.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__content_learning_learning_component__ = __webpack_require__("../../../../../src/app/content/learning/learning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__content_concept_add_concept_add_concept_component__ = __webpack_require__("../../../../../src/app/content/concept/add-concept/add-concept.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__content_home_home_component__ = __webpack_require__("../../../../../src/app/content/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__content_learning_ecmascript_ecmascript_component__ = __webpack_require__("../../../../../src/app/content/learning/ecmascript/ecmascript.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__content_technology_technology_component__["a" /* TechnologyComponent */],
                __WEBPACK_IMPORTED_MODULE_14__content_concept_concept_component__["a" /* ConceptComponent */],
                __WEBPACK_IMPORTED_MODULE_15__not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_17__content_technology_add_technology_add_technology_component__["a" /* AddTechnologyComponent */],
                __WEBPACK_IMPORTED_MODULE_18__content_learning_learning_component__["a" /* LearningComponent */],
                __WEBPACK_IMPORTED_MODULE_19__content_concept_add_concept_add_concept_component__["a" /* AddConceptComponent */],
                __WEBPACK_IMPORTED_MODULE_20__content_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_21__content_learning_ecmascript_ecmascript_component__["a" /* EcmascriptComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase, 'angularfs'),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_route__["a" /* Technology_Routes */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Technology_Routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__content_technology_technology_component__ = __webpack_require__("../../../../../src/app/content/technology/technology.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_concept_concept_component__ = __webpack_require__("../../../../../src/app/content/concept/concept.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_learning_learning_component__ = __webpack_require__("../../../../../src/app/content/learning/learning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content_home_home_component__ = __webpack_require__("../../../../../src/app/content/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_learning_ecmascript_ecmascript_component__ = __webpack_require__("../../../../../src/app/content/learning/ecmascript/ecmascript.component.ts");





var Technology_Routes = [
    { pathMatch: "full", path: "", component: __WEBPACK_IMPORTED_MODULE_3__content_home_home_component__["a" /* HomeComponent */] },
    { pathMatch: "full", path: "technology", component: __WEBPACK_IMPORTED_MODULE_0__content_technology_technology_component__["a" /* TechnologyComponent */] },
    { pathMatch: "full", path: "concept", component: __WEBPACK_IMPORTED_MODULE_1__content_concept_concept_component__["a" /* ConceptComponent */] },
    { pathMatch: "full", path: "learning", component: __WEBPACK_IMPORTED_MODULE_2__content_learning_learning_component__["a" /* LearningComponent */] },
    { pathMatch: "full", path: "ecmascript", component: __WEBPACK_IMPORTED_MODULE_4__content_learning_ecmascript_ecmascript_component__["a" /* EcmascriptComponent */] },
];


/***/ }),

/***/ "../../../../../src/app/content/concept/add-concept/add-concept.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/concept/add-concept/add-concept.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-link amber darken-3 white-text\" data-toggle=\"modal\" data-target=\"#addNewConcept\" >\n  <i class=\"fa fa-plus\"></i> Add\n</button>\n\n<br>\n<div class=\"modal fade\" id=\"addNewConcept\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary text-white\">\n        <b><i class=\"fa fa-plus\"></i> Add new question ?</b>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n          <select class=\"form-control\" id=\"exampleSelect1\" [(ngModel)]=\"newConcept.TechnologyId\" \n          (change)=\"techChange(newConcept.TechnologyId)\" class=\"form-control\" >\n              <option>Select Technology</option>\n              <option *ngFor=\"let tech of technologies\" [ngValue]=\"tech.Id\">{{tech.Name}}</option>\n          </select>\n          <br>\n        <input type=\"text\" [(ngModel)]=\"newConcept.ConceptQuestion.Question\" placeholder=\"Question\" class=\"form-control\" >\n        <br>\n        <textarea [(ngModel)]=\"newConcept.ConceptQuestion.Answer\" placeholder=\"Answer\" \n        class=\"form-control\" ></textarea>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-primary\" (click)=\"AddConecpt()\" data-dismiss=\"modal\">Add</button>\n        <button class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- \n\n<i class=\"fa fa-plus fa-pull-right faSpace\" data-toggle=\"modal\" data-target=\"#addNewConcept\" title=\"Add\"> Add</i>\n<div class=\"modal fade\" id=\"addNewConcept\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header bg-success text-white\">\n                <h5 class=\"modal-title\">\n                    <i class=\"fa fa-plus\"></i>  Add new question ?</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <input type=\"text\" [(ngModel)]=\"newConcept.ConceptQuestion.Question\" placeholder=\"Question\">\n                <br>\n                <textarea [(ngModel)]=\"newConcept.ConceptQuestion.Answer\" placeholder=\"Answer\"></textarea>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-primary\" (click)=\"this.fbConceptService.AddConcept(newConcept)\" data-dismiss=\"modal\">Add</button>\n                <button class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n            </div>\n        </div>\n    </div>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/content/concept/add-concept/add-concept.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddConceptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fb_technology_service__ = __webpack_require__("../../../../../src/app/services/fb-technology.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fb_concept_service__ = __webpack_require__("../../../../../src/app/services/fb-concept.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddConceptComponent = (function () {
    function AddConceptComponent(fbTechnologyService, fbConceptService) {
        this.fbTechnologyService = fbTechnologyService;
        this.fbConceptService = fbConceptService;
        this.newConcept = {
            ConceptQuestion: {
                Question: "",
                Answer: ""
            }
        };
    }
    AddConceptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fbTechnologyService.getTechnologies().subscribe(function (techs) { return _this.technologies = techs; });
    };
    AddConceptComponent.prototype.techChange = function (id) {
        //alert(id);
        this.newConcept.TechnologyId = id;
    };
    AddConceptComponent.prototype.AddConecpt = function () {
        if (this.newConcept.TechnologyId != "" && this.newConcept.ConceptQuestion.Question != "" && this.newConcept.ConceptQuestion.Answer != "") {
            this.fbConceptService.AddConcept(this.newConcept);
        }
    };
    AddConceptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-concept',
            template: __webpack_require__("../../../../../src/app/content/concept/add-concept/add-concept.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content/concept/add-concept/add-concept.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_fb_technology_service__["a" /* FbTechnologyService */], __WEBPACK_IMPORTED_MODULE_2__services_fb_concept_service__["a" /* FbConceptService */]])
    ], AddConceptComponent);
    return AddConceptComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content/concept/concept.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/concept/concept.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <br>\n    \n        <app-add-concept ></app-add-concept>\n    \n        <select  class=\"form-control\" id=\"exampleSelect1\" [(ngModel)]=\"this.newConcept.TechnologyId\" (change)=\"techChange()\">\n            <option>Select Technology</option>\n            <option *ngFor=\"let tech of technologies\" [ngValue]=\"tech.Id\">{{tech.Name}}</option>\n        </select>\n    <br>\n\n    <!-- <div *ngFor=\"let concept of concepts; let idx = index\" class=\"card text-white bg-success mb-3\" style=\"max-width: 100%;\">\n        <div class=\"card-header text-middle\">{{idx + 1 +'. '+ concept.ConceptQuestion.Question}}\n            <span>\n                <i class=\"fa fa-minus fa-pull-right faSpace\" (click)=\"this.fbConceptService.DeleteConcept(concept)\" title=\"Delete\"></i>\n                <i class=\"fa fa-pencil fa-pull-right faSpace\" (click)=\"editConceptItem(concept)\" title=\"Edit\"></i>\n                <i class=\"fa fa-plus fa-pull-right faSpace\" data-toggle=\"modal\" data-target=\"#addNewConcept\" title=\"Add\"></i>\n            </span>\n        </div>\n        <div class=\"card-body\">\n            \n            <p class=\"card-text\">{{concept.ConceptQuestion.Answer}}</p>\n            <div *ngIf=\"isEditConcept == true && editConcept.ConceptQuestion.Question == concept.ConceptQuestion.Question\">\n                <textarea name=\"conceptQuestion\" [(ngModel)]=\"concept.ConceptQuestion.Question\"></textarea>\n                <textarea name=\"conceptQuestion\" [(ngModel)]=\"concept.ConceptQuestion.Answer\"></textarea>\n                <br>\n                <button class=\"btn btn-warning\" (click)=\"updateConceptItem(concept)\">Update</button>\n                <button class=\"btn btn-secondary\" (click)=\"cancelConceptItem(concept)\">Cancel</button>\n            </div>\n        </div>\n    </div> -->\n\n    <div class=\"list-group\">\n        <div class=\"list-group-item list-group-item-action flex-column align-items-start\" style=\"border-radius:3px;\"\n        *ngFor=\"let concept of concepts; let idx = index;\"\n        (mousedown)=\"onSelected(idx)\"\n        [ngClass]=\"this.selectedId == idx && this.isSelected ? 'active' : ''\">\n            <div class=\"d-flex w-100 justify-content-between\">\n                <h5 class=\"mb-1\">{{idx + 1 +'. '+ concept.ConceptQuestion.Question}}</h5>\n                <small>\n                    <i class=\"fa fa-trash fa-pull-right faSpace\" (click)=\"this.fbConceptService.DeleteConcept(concept)\" title=\"Delete\"></i>\n                    <i class=\"fa fa-pencil fa-pull-right faSpace\" (click)=\"editConceptItem(concept)\" title=\"Edit\"></i>\n                </small>\n            </div>\n            <p class=\"mb-1\">{{concept.ConceptQuestion.Answer}}</p>\n            <small>\n                <div *ngIf=\"isEditConcept == true && editConcept.ConceptQuestion.Question == concept.ConceptQuestion.Question\">\n                    <input type=\"text\" name=\"conceptQuestion\" [(ngModel)]=\"concept.ConceptQuestion.Question\" class=\"form-control\" >\n                    <br>\n                    <textarea name=\"conceptQuestion\" [(ngModel)]=\"concept.ConceptQuestion.Answer\" class=\"form-control\" ></textarea>\n                    <br>\n                    <button class=\"btn btn-warning\" (click)=\"updateConceptItem(concept)\">Update</button>\n                    <button class=\"btn btn-secondary\" (click)=\"cancelConceptItem(concept)\">Cancel</button>\n                </div>\n            </small>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/content/concept/concept.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConceptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fb_concept_service__ = __webpack_require__("../../../../../src/app/services/fb-concept.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fb_technology_service__ = __webpack_require__("../../../../../src/app/services/fb-technology.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConceptComponent = (function () {
    function ConceptComponent(fbConceptService, fbTechnologyService) {
        this.fbConceptService = fbConceptService;
        this.fbTechnologyService = fbTechnologyService;
        this.newConcept = {
            ConceptQuestion: {
                Question: "",
                Answer: ""
            }
        };
        this.isEditConcept = false;
        this.editConcept = {};
        this.isSelected = false;
    }
    ConceptComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.fbConceptService.GetConcepts().subscribe(concetList => this.concepts = concetList);
        this.fbTechnologyService.getTechnologies().subscribe(function (techs) { return _this.technologies = techs; });
        //this.fbConceptService.GetConcepts().subscribe(conceptList => this.concepts = conceptList);
    };
    ConceptComponent.prototype.editConceptItem = function (concept) {
        this.isEditConcept = true;
        this.editConcept = concept;
    };
    ConceptComponent.prototype.updateConceptItem = function (concept) {
        this.isEditConcept = false;
        this.fbConceptService.UpdateConcept(concept);
    };
    ConceptComponent.prototype.cancelConceptItem = function (concept) {
        this.isEditConcept = false;
    };
    ConceptComponent.prototype.techChange = function () {
        var _this = this;
        //alert(this.newConcept.TechnologyId);
        this.concepts = null;
        //console.log(this.newConcept.TechnologyId);
        //  this.fbConceptService.GetConcepts().subscribe(conceptList => {
        //   this.concepts = conceptList.filter(
        //     c =>  (c.TechnologyId == this.newConcept.TechnologyId))
        // });
        this.fbConceptService.GetConceptsByTechnology(this.newConcept.TechnologyId).subscribe(function (conceptList) { return _this.concepts = conceptList; });
        // console.log(list);
        //.subscribe(concetList => this.concepts = concetList.filter(c => c.TechnologyId == this.newConcept.TechnologyId));
    };
    ConceptComponent.prototype.onSelected = function (idx) {
        this.selectedId = idx;
        this.isSelected = true;
    };
    ConceptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-concept',
            template: __webpack_require__("../../../../../src/app/content/concept/concept.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content/concept/concept.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_fb_concept_service__["a" /* FbConceptService */], __WEBPACK_IMPORTED_MODULE_2__services_fb_technology_service__["a" /* FbTechnologyService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_fb_concept_service__["a" /* FbConceptService */],
            __WEBPACK_IMPORTED_MODULE_2__services_fb_technology_service__["a" /* FbTechnologyService */]])
    ], ConceptComponent);
    return ConceptComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content/content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
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

var ContentComponent = (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content',
            template: __webpack_require__("../../../../../src/app/content/content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <div>\n    <h4 class=\"display-4\">Welcome to Technology</h4>\n    <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n    <hr class=\"my-4\">\n    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n    <p class=\"lead\">\n      <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n    </p>\n  </div>\n  <div class=\"row\">\n    <div class=\"card text-white bg-primary mb-3\">\n      <div class=\"card-header\">Header</div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Primary card title</h4>\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      </div>\n    </div>\n    <div class=\"card text-white bg-secondary mb-3\">\n      <div class=\"card-header\">Header</div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Secondary card title</h4>\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      </div>\n    </div>\n    <div class=\"card text-white bg-success mb-3\">\n      <div class=\"card-header\">Header</div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Success card title</h4>\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      </div>\n    </div>\n    <div class=\"card text-white bg-danger mb-3\">\n      <div class=\"card-header\">Header</div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Danger card title</h4>\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      </div>\n    </div>\n    <div class=\"card text-white bg-warning mb-3\">\n      <div class=\"card-header\">Header</div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Warning card title</h4>\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      </div>\n    </div>\n    <div class=\"card text-white bg-info mb-3\">\n      <div class=\"card-header\">Header</div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Info card title</h4>\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      </div>\n    </div>\n    <div class=\"card bg-light mb-3\">\n      <div class=\"card-header\">Header</div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Light card title</h4>\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      </div>\n    </div>\n    <div class=\"card text-white bg-dark mb-3\">\n      <div class=\"card-header\">Header</div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Dark card title</h4>\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/content/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/content/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content/learning/ecmascript/ecmascript.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/learning/ecmascript/ecmascript.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <h3>Leassion 1 - What is Ecma Script</h3>\n  Ecma means European Computer Manufacturers Assocation. It creates the standard for Javascript language\n  <br>\n  <h3>Lession 2 - Let and Var keywords</h3>\n  let values will be changed outside the scope \n  But Var values vont change.\n  <br>\n  <h3>Lession 4 - Spread operator values</h3>\n  Hi How are you in the array.\n  [HI],[How],[are],[you] after used spread.\n</div>"

/***/ }),

/***/ "../../../../../src/app/content/learning/ecmascript/ecmascript.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcmascriptComponent; });
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

var EcmascriptComponent = (function () {
    function EcmascriptComponent() {
        this.spreadResult = "";
    }
    EcmascriptComponent.prototype.ngOnInit = function () {
    };
    EcmascriptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ecmascript',
            template: __webpack_require__("../../../../../src/app/content/learning/ecmascript/ecmascript.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content/learning/ecmascript/ecmascript.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EcmascriptComponent);
    return EcmascriptComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content/learning/learning.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/learning/learning.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table class=\"table\">\n      <tr>\n          <td>First Name :</td>\n          <td>{{FirstName}}</td>\n      </tr>\n      <tr>\n          <td>Last Name :</td>\n          <td>{{LastName}}</td>\n      </tr>\n      <tr>\n          <td>Age :</td>\n          <td>{{Age}}</td>\n      </tr>\n      <tr>\n          <td>Date of Birth :</td>\n          <td>{{DateOfBirth}}</td>\n      </tr>\n  </table>\n  <div>\n      <h2>Interpolation</h2>\n      interpolation property binding specified by the (OpenParanthesis CloseParanthesis) method <br />\n      Display full name of the above employee : {{GetFullName()}}\n  </div>\n  <div>\n      <h2>Property Binding</h2>\n      Property binding will be achived by the \"<b>[ ]</b>\" squar brackets.<br />\n      Canonical Property binding will be achived by the <b>bind-</b> with property name.<br />\n      <span [innerHTML]=\"MyHTML\"></span><br />\n      <span bind-innerHTML=\"MyHTML\"></span>\n  </div>\n  <div>\n      <h2>Attribute Binding</h2>\n      Attribute binding with <b>[ ] with attr.</b><br />\n      <table class=\"table\">\n          <tr>\n              <th [attr.colspan]=\"ColumnSpan\">\n                  Column Span 3\n              </th>\n          </tr>\n          <tr>\n              <td>Col 1</td>\n              <td>Col 2</td>\n              <td>Col 3</td>\n          </tr>\n      </table>\n      Attribute binding with <b>attr.property</b> and value paranthesis method<br />\n      <table class=\"table\">\n          <tr>\n              <th attr.colspan=\"{{ColumnSpan}}\">\n                  Column Span 3\n              </th>\n          </tr>\n          <tr>\n              <td>Col 1</td>\n              <td>Col 2</td>\n              <td>Col 3</td>\n          </tr>\n      </table>\n  </div> \n  <div width=\"200px\">\n      <h2>Class Binding</h2>\n      <div [class]=\"ClassesToApply\">Red Bold Italic class method</div><br />\n      <div [class.boldClass]=\"ApplyBoldClass\">Bold classes by boolean</div><br />\n      <div [ngClass]=\"addClasses()\">component method to apply classes</div>\n  </div><div>\n      <h2>Style Binding</h2>\n      <div [style.font-weight]=\"IsBold ? 'bold' : 'normal'\">style isbold boolean</div><br />\n      <div [style.font-size.px]=\"FontSize\">style FontSize boolean</div><br />\n      <div [ngStyle]=\"setStyles()\">style setStyles method</div><br />\n  </div>\n\n  <div>\n      <h2>Event</h2>\n      <table class=\"table\">\n          <thead>\n              <tr>\n                  <th attr.colspan=\"{{ColumnSpan}}\">\n                      Employee Details\n                  </th>\n              </tr>\n          </thead>\n          <tbody>\n              <tr>\n                  <td>First Name</td>\n                  <td>{{FirstName}}</td>\n              </tr>\n              <tr>\n                  <td>Last Name</td>\n                  <td>{{LastName}}</td>\n              </tr>\n              <tr *ngIf='ShowDetails'>\n                  <td>DateOfBirth</td>\n                  <td>{{DateOfBirth}}</td>\n              </tr>\n              <tr *ngIf='ShowDetails'>\n                  <td>Age</td>\n                  <td>{{Age}}</td>\n              </tr>\n          </tbody>\n      </table>\n\n      <input type=\"checkbox\" [checked]=\"ShowDetails\" (click)=\"btnOnClick()\" />\n      <button (click)=\"btnOnClick()\">\n      {{ShowDetails == false ? 'Show' : 'Hide'}}</button>\n  </div>\n\n  <div>\n      <h2>Two way data binding in Angular2 event targer value method</h2>\n      Input First Name  : <input type=\"text\" [value]=\"FirstName\" (input)=\"FirstName=$event.target.value\" /><br />\n      Output First Name : {{FirstName}}\n      <br />\n      <h2>Two way data binding in Angular2 import the forms module and using the ngModel property</h2>\n      Input First Name  : <input type=\"text\" [(ngModel)]=\"FirstName\" /><br />\n      Output First Name : {{FirstName}}\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/content/learning/learning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearningComponent; });
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

var LearningComponent = (function () {
    function LearningComponent() {
    }
    LearningComponent.prototype.ngOnInit = function () {
    };
    LearningComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-learning',
            template: __webpack_require__("../../../../../src/app/content/learning/learning.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content/learning/learning.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LearningComponent);
    return LearningComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content/technology/add-technology/add-technology.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/technology/add-technology/add-technology.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-link amber darken-3 white-text\" data-toggle=\"modal\" data-target=\"#addNewTech\">\n  <i class=\"fa fa-plus\"></i> Add\n</button>\n\n<br>\n<div class=\"modal fade\" id=\"addNewTech\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-primary text-white\">\n        <b>Add New Technology</b>\n        <button type=\"button\" class=\"close text-white\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <input type=\"text\" [(ngModel)]=\"tech.Name\" placeholder=\"Techology Name\" class=\"form-control\" name=\"name\" />\n        <br>\n        <textarea [(ngModel)]=\"tech.Description\" placeholder=\"Techology Description\" class=\"form-control\" name=\"description\"></textarea>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit()\">\n          <i class=\"fa fa-plus-square-o\"></i> Add</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/content/technology/add-technology/add-technology.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTechnologyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fb_technology_service__ = __webpack_require__("../../../../../src/app/services/fb-technology.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTechnologyComponent = (function () {
    function AddTechnologyComponent(fbTechnologyService) {
        this.fbTechnologyService = fbTechnologyService;
        this.tech = {
            Name: "",
            Description: ""
        };
        this.isAddNewEnabled = false;
    }
    AddTechnologyComponent.prototype.ngOnInit = function () {
    };
    AddTechnologyComponent.prototype.onSubmit = function () {
        if (this.tech.Name != '' && this.tech.Description != '') {
            this.fbTechnologyService.AddTechnology(this.tech);
            this.tech.Name = this.tech.Description = "";
            this.isAddNewEnabled = false;
        }
    };
    AddTechnologyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-technology',
            template: __webpack_require__("../../../../../src/app/content/technology/add-technology/add-technology.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content/technology/add-technology/add-technology.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_fb_technology_service__["a" /* FbTechnologyService */]])
    ], AddTechnologyComponent);
    return AddTechnologyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content/technology/technology.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container\n{\n    padding: 10px;\n}\n\n/* \n.header\n{\n  font-weight: bold;\n  color: #000000;\n}\n\n#tech-listing li{\n    padding: 5px;\n    border-bottom: 1px solid #e4e4e4;\n    list-style: none;\n  }\n  \n  .single-tech span{\n    display: inline-block;\n    border-radius: 0px;\n    text-transform: none;\n    min-width: 32%;\n    \n  }\n  \n  .single-tech h3{\n    padding: 4px;\n    margin-left: 20px;\n    display: inline-block;\n  }\n  \n  .single-tech div{\n    float: right;\n    margin-right: 10px;\n    line-height: 20px;\n    cursor: pointer;\n  }\n  textarea\n  {\n      width: 100%;\n      min-height: 100px;\n      \n  }\n\ntable\n{\n  margin-top: 5px;\n  border-radius: 2px;\n  font-size: 10px;\n  border: 1px solid rgb(28, 145, 131);\n}\n  table thead tr th,\n  table tbody tr td\n  {\n    \n    padding: 5px;\n    text-align: left;\n  }\n\n  th\n  {\n    font-size: 12px;\n    color:black;\n  }\n  td\n  {\n    border-top: 1px solid rgb(28, 145, 131);\n    vertical-align: text-top;\n    \n  } */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/technology/technology.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<br>\n  <app-add-technology></app-add-technology>\n  <table class=\"table table-striped table-hover table-bordered\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th>Id</th>\n        <th>Name</th>\n        <th>Description</th>\n        <th>Edit</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let technology of technologies;let idx = index\" (dblclick)=\"deleteTechnology($event, technology)\">\n        <td>{{idx + 1}}</td>\n        <td>{{technology.Name}}</td>\n        <td>{{technology.Description}}</td>\n        <td>\n          <button class=\"btn btn-link fa fa-pencil\" data-toggle=\"modal\" [attr.data-target]=\"'#'+technology.Id + '_myModel'\"> Edit</button>\n        </td>\n        <div class=\"modal fade\" id=\"{{technology.Id + '_myModel'}}\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\">\n                  <i class=\"fa fa-file-text\"></i> {{'Edit ' + technology.Name + ' technology'}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <div>\n                  <input type=\"text\" [(ngModel)]=\"technology.Name\" placeholder=\"Techology Name\" class=\"form-control\" name=\"name\" />\n                </div>\n                <br>\n                <div>\n                  <textarea [(ngModel)]=\"technology.Description\" placeholder=\"Techology Description\" class=\"form-control\" name=\"description\"></textarea>\n                </div>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-warning\" (click)=\"updateTechnology($event, technology)\" data-dismiss=\"modal\">\n                  <i class=\"fa fa-pencil-square-o\"></i> Update</button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteTechnology($event, technology)\" data-dismiss=\"modal\">\n                  <i class=\"fa fa-trash\"></i> Delete</button>\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n                  <i class=\"fa fa-window-close\"></i> Close</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/content/technology/technology.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnologyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__technology_service__ = __webpack_require__("../../../../../src/app/technology.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fb_technology_service__ = __webpack_require__("../../../../../src/app/services/fb-technology.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// declare var firebase: any;
var TechnologyComponent = (function () {
    function TechnologyComponent(technologyService, fbTechnologyService) {
        this.technologyService = technologyService;
        this.fbTechnologyService = fbTechnologyService;
        //technologyName = "";
        this.output = "";
        this.isEdit = false;
        //this.items = this.afs.collection("Technology").valueChanges();
        //this.items = this.afs.collection("/").snapshotChanges();
        //alert(this.items);
    }
    TechnologyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fbTechnologyService.getTechnologies().subscribe(function (techs) {
            _this.technologies = techs;
        });
    };
    TechnologyComponent.prototype.deleteTechnology = function (event, tech) {
        this.fbTechnologyService.DeleteTechnology(tech);
    };
    TechnologyComponent.prototype.updateTechnology = function (event, tech) {
        this.fbTechnologyService.UpdateTechnology(tech);
    };
    // GetTechnology()
    // {
    //   this.technologyService.ReadTechnologies().subscribe(
    //     data => this.technologies = data
    //   );
    // }
    // AddTechnology()
    // {
    //   this.technologyService.CreateTechnology(this.tech).subscribe
    //   (
    //     (technology: Technology) => this.technologies.push(technology)
    //   );
    //  this.tech = new Technology();
    // }
    // DeleteTechnology(id)
    // {
    //   //alert(id);
    //   this.technologyService.DeleteTechnology(id).subscribe(
    //     (technology: Technology) => this.technologies = this.technologies.filter(
    //       function(t)
    //       {
    //         return t["Id"] != technology.Id;
    //       })
    //   );
    // }
    TechnologyComponent.prototype.GetTechnology = function () {
        //   firebase.database().ref("/").on("child_added", (snapshot) => 
        // {
        //   this.technologies.push(snapshot.val());
        //   console.log(snapshot.val());
        //   //alert(this.technologies.length);
        // })
    };
    TechnologyComponent.prototype.AddTechnology = function () {
        // this.tech.Id = this.technologies.length + 1;
        // firebase.database().ref("/").push(this.tech).then(_ => alert(_ + " Added !!!"));
    };
    TechnologyComponent.prototype.DeleteTechnology = function (selectedTech) {
        // firebase.database().ref("/").remove(selectedTech.Name).then(_ => alert(selectedTech.Name + " Deleted !!!"));;
    };
    TechnologyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-technology',
            template: __webpack_require__("../../../../../src/app/content/technology/technology.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content/technology/technology.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__technology_service__["a" /* TechnologyService */], __WEBPACK_IMPORTED_MODULE_2__services_fb_technology_service__["a" /* FbTechnologyService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__technology_service__["a" /* TechnologyService */],
            __WEBPACK_IMPORTED_MODULE_2__services_fb_technology_service__["a" /* FbTechnologyService */]])
    ], TechnologyComponent);
    return TechnologyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#footer-main\n{\n    min-height: 25px;\n    border-radius: 5px;\n    margin-top: 5px;\n    background: #0288d1;\n    vertical-align: middle;\n    line-height: 25px;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\n<p class=\"text-info text-center\">\n    ©  {{currentYear}} Copyrights\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
        this.currentYear = (new Date()).getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menu/menu-custom.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <style>\n    \n    .menuRoot\n    {\n        min-height: 50px;\n        \n    }\n    .techBar {\n        float: right;\n        padding: 7px;\n        cursor: pointer;\n        display: none;\n        font-size: x-large;\n    }\n    .techmenu {\n        display: block;\n        background-color:inherit;\n    }\n    .techLogo {\n        float: left;\n        margin-left: -40px;\n        font-size: x-large;\n    }\n\n    .techmenu>ul>li,\n    .techLogo>ul>li {\n        display: inline;\n    }\n\n    .techmenu>ul>li>a,\n    .techLogo>ul>li>a\n    {\n        padding: 15px;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    .closebtn {\n        position: absolute;\n        top: 0;\n        right: 25px;\n        font-size: 36px;\n        margin-left: 50px;\n        text-decoration: none;\n        color: #fff;\n        display: none;\n    }\n\n    @media screen and (max-width: 768px) {\n        .techmenu {\n            height: 100%;\n            width: 200px;\n            position: fixed;\n            z-index: 1;\n            top: 0;\n            left: -200px;\n            overflow-x: hidden;\n            padding-top: 60px;\n        }\n        .showMenu {\n            /* width:200px; \n            display:none;*/\n            left: 0px;\n            transition: 0.5s;\n        }\n        .hideMenu {\n            /* display:none; */\n            left: -200px;\n            transition: 0.5s;\n        }\n        .closebtn,\n        .techBar {\n            display: block;\n        }\n    }\n</style> -->\n<nav class=\"bg-primary menuRoot\">\n    <div class=\"techLogo\">\n        <ul>\n            <li>\n                <a class=\"text-white\" routerLink=\"/\">\n                    <i class=\"fa fa-laptop\"></i> Technology</a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"techBar\">\n            <i class=\"fa fa-bars text-white\" (click)=\"DisplayMenu()\"></i>\n        </div>\n    <div class=\"techAuth\">\n            <a   *ngIf=\"isUserLoggedIn\" class=\"text-white\" (click)=\"SignOut()\">\n                    <i class=\"fa fa-user-circle\"></i> Sign Out\n                    <!-- <img [src]=\"photoURL\" class=\"margin-right-5px\" height=\"30px\" style=\"border-radius:15px;border:1px solid #fff;\" /> -->\n                </a>\n                <a *ngIf=\"!isUserLoggedIn\" class=\"text-white\" (click)=\"SignIn()\">\n                        <i class=\"fa fa-user-circle-o\"></i> Sign In</a>\n        \n    </div>\n\n   \n    <div class=\"techmenu\" [ngClass]=\"isMenuEnabled ? 'showMenu' : 'hideMenu'\">\n        <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"DisplayMenu()\">&times;</a>\n        <ul>\n            <li *ngIf=\"isUserLoggedIn\">\n                <a class=\"text-white\" routerLink=\"/\" (click)=\"DisplayMenu()\">\n                    <i class=\"fa fa-home faSpace\"></i> Home</a>\n            </li>\n            <li *ngIf=\"isUserLoggedIn\">\n                <a class=\"text-white\" routerLink=\"/technology\" (click)=\"DisplayMenu()\">\n                    <i class=\"fa fa-list faSpace\"></i> Technologies</a>\n            </li>\n            <li *ngIf=\"isUserLoggedIn\">\n                <a class=\"text-white\" routerLink=\"/concept\" (click)=\"DisplayMenu()\">\n                    <i class=\"fa fa-book faSpace\"></i> Concepts</a>\n            </li>\n            <li *ngIf=\"isUserLoggedIn\">\n                <!-- <a class=\"text-white\" routerLink=\"/learning\" (click)=\"DisplayMenu()\">\n                    <i class=\"fa fa-language faSpace\"></i> Learnings</a> -->\n                    <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                        <a class=\"nav-link text-white\" routerLink=\"/learning\" (click)=\"DisplayMenu()\"><i class=\"fa fa-language\"></i> Learnings</a>\n                        <div class=\"btn-group\" role=\"group\">\n                            <a id=\"btnGroupDrop1\" class=\"nav-link dropdown-toggle text-white\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"></a>\n                            <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">\n                              <a class=\"dropdown-item\" routerLink=\"/ecmascript\" (click)=\"DisplayMenu()\">Ecma Script</a>\n                              <a class=\"dropdown-item\" href=\"#\">Dropdown link</a>\n                            </div>\n                          </div>\n                      </div>\n            </li>\n\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .menuRoot\n    {\n        min-height: 50px;\n        \n    }\n    .techBar {\n        float: right;\n        padding: 7px;\n        cursor: pointer;\n        display: none;\n        font-size: x-large;\n        margin-right: 10px;\n    }\n    .techmenu {\n        display: block;\n        background-color:inherit;\n    }\n    .techLogo {\n        float: left;\n        margin-left: -40px;\n        padding: 10px;\n        font-size: large;\n        text-decoration: none;\n        font-weight: bold;\n    }\n    .techLogo>ul>li>a\n    {\n        text-decoration: none;\n    }\n    .techAuth\n    {\n        float: right;\n        padding:12px;\n        cursor: pointer;\n    }\n    .techmenu>ul\n    {\n        padding-left:10px;\n    }\n    .techmenu>ul>li{\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n    }\n\n    .techmenu>ul>li>a\n    {\n        padding: 10px;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    .closebtn {\n        position: absolute;\n        top: 0;\n        right: 25px;\n        font-size: 36px;\n        margin-left: 50px;\n        text-decoration: none;\n        color: #fff;\n        display: none;\n    }\n\n    @media screen and (max-width: 768px) {\n        .techmenu {\n            height: 100%;\n            width: 200px;\n            position: fixed;\n            z-index: 1;\n            top: 0;\n            left: -200px;\n            overflow-x: hidden;\n            padding-top: 60px;\n        }\n        .showMenu {\n            \n            left: 0px;\n            transition: 0.5s;\n        }\n        .hideMenu {\n            \n            left: -200px;\n            transition: 0.5s;\n        }\n        .closebtn,\n        .techBar {\n            display: block;\n        }\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(authService) {
        var _this = this;
        this.authService = authService;
        this.isMenuEnabled = false;
        this.userDisplayName = "";
        this.isUserLoggedIn = false;
        this.photoURL = "";
        if (authService.user) {
            authService.user.subscribe(function (user) {
                if (user) {
                    //console.log(user);
                    _this.userDisplayName = user.email;
                    _this.photoURL = user.photoURL;
                    _this.isUserLoggedIn = true;
                }
                else {
                    //console.log("User Null");
                }
            });
        }
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.SignIn = function () {
        //console.log(
        this.authService.googleLogIn();
    };
    MenuComponent.prototype.SignOut = function () {
        this.authService.signOut();
        this.userDisplayName = "";
        this.photoURL = "";
        this.isUserLoggedIn = false;
    };
    MenuComponent.prototype.DisplayMenu = function () {
        this.isMenuEnabled = this.isMenuEnabled ? false : true;
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/menu/menu-custom.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: '<h2>Page not found</h2>'
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(afAuth, afs, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.user = this.afAuth.authState.switchMap(function (user) {
            if (user) {
                var usr = _this.afs.doc("Users/" + user.uid).valueChanges();
                return usr;
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(null);
            }
        });
    }
    AuthService.prototype.googleLogIn = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider).then(function (credential) {
            _this.updateUserData(credential.user);
        });
    };
    AuthService.prototype.updateUserData = function (user) {
        var userRef = this.afs.doc("Users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL,
            displayName: user.displayName
        };
        userRef.set(data);
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/fb-concept.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbConceptService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FbConceptService = (function () {
    function FbConceptService(afs) {
        this.afs = afs;
        this.conceptCollection = this.afs.collection("Concept");
        this.concepts = this.conceptCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.Id = a.payload.doc.id;
                return data;
            });
        });
    }
    FbConceptService.prototype.GetConcepts = function () {
        return this.concepts;
    };
    FbConceptService.prototype.GetConceptsByTechnology = function (technologyId) {
        this.concepts = this.conceptCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.Id = a.payload.doc.id;
                return data;
            });
        });
        return this.concepts;
    };
    FbConceptService.prototype.AddConcept = function (concept) {
        this.conceptCollection.add(concept);
    };
    FbConceptService.prototype.UpdateConcept = function (concept) {
        this.conceptDoc = this.afs.doc("Concept/" + concept.Id);
        this.conceptDoc.update(concept);
    };
    FbConceptService.prototype.DeleteConcept = function (concept) {
        this.conceptDoc = this.afs.doc("Concept/" + concept.Id);
        this.conceptDoc.delete();
    };
    FbConceptService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], FbConceptService);
    return FbConceptService;
}());



/***/ }),

/***/ "../../../../../src/app/services/fb-technology.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbTechnologyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FbTechnologyService = (function () {
    function FbTechnologyService(afs) {
        this.afs = afs;
        this.technologyCollection = this.afs.collection("Technology", function (ref) { return ref.orderBy('Name', 'asc'); });
        this.technologies = this.technologyCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.Id = a.payload.doc.id;
                return data;
            });
        });
    }
    FbTechnologyService.prototype.getTechnologies = function () {
        return this.technologies;
    };
    FbTechnologyService.prototype.AddTechnology = function (technology) {
        this.technologyCollection.add(technology);
    };
    FbTechnologyService.prototype.DeleteTechnology = function (technology) {
        this.technologyDoc = this.afs.doc("Technology/" + technology.Id);
        this.technologyDoc.delete();
    };
    FbTechnologyService.prototype.UpdateTechnology = function (technology) {
        this.technologyDoc = this.afs.doc("Technology/" + technology.Id);
        this.technologyDoc.update(technology);
    };
    FbTechnologyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], FbTechnologyService);
    return FbTechnologyService;
}());



/***/ }),

/***/ "../../../../../src/app/technology.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnologyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var TechnologyService = (function () {
    function TechnologyService(http) {
        this.http = http;
        this.technologyURL = "http://192.168.1.100:97/api/Technologies";
    }
    TechnologyService.prototype.CreateTechnology = function (technology) {
        return this.http.post(this.technologyURL, technology, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (tech) { return console.log("Added new Item Id"); }));
    };
    TechnologyService.prototype.ReadTechnologies = function () {
        return this.http.get(this.technologyURL).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (technologies) { return console.log("Technologies Fetched"); }));
    };
    TechnologyService.prototype.DeleteTechnology = function (id) {
        //alert(this.technologyURL+"/"+ id)
        return this.http.delete(this.technologyURL + "/" + id).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (tech) { return console.log("Technology Deleted Id=" + tech.Id); }));
    };
    TechnologyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TechnologyService);
    return TechnologyService;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyDuZGg13FVZfCm5vV1BgsyJoxx3_cjIA-o",
        authDomain: "haji-technology.firebaseapp.com",
        databaseURL: "https://haji-technology.firebaseio.com",
        projectId: "haji-technology",
        storageBucket: "haji-technology.appspot.com",
        messagingSenderId: "191027223965"
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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