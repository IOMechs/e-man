(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/events.component */ "./src/app/admin/events/events.component.ts");
/* harmony import */ var _organizations_organizations_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organizations/organizations.component */ "./src/app/admin/organizations/organizations.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/guard/auth.guard */ "./src/app/core/guard/auth.guard.ts");
/* harmony import */ var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-gallery/image-gallery.component */ "./src/app/admin/image-gallery/image-gallery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            {
                path: '',
                redirectTo: 'organizations',
            },
            {
                path: 'organizations',
                component: _organizations_organizations_component__WEBPACK_IMPORTED_MODULE_1__["OrganizationsComponent"],
            },
            {
                path: 'organization/:id/events',
                component: _events_events_component__WEBPACK_IMPORTED_MODULE_0__["EventsComponent"],
            },
            {
                path: 'organization/:id/event/:eventId/images',
                component: _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_6__["ImageGalleryComponent"],
            }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"nav\">\r\n    <mat-sidenav #sidenav mode=\"over\" class=\"nav__side-nav\">\r\n        <div class=\"nav__side-nav__navbar-header\">\r\n            <div class=\"nav__side-nav__navbar-header__top-contianer\">\r\n                <div class=\"nav__side-nav__navbar-header__top-contianer__logo\">\r\n                    <img src=\"../../assets/images/logo1.jpg\" class=\"nav__side-nav__navbar-header__top-contianer__logo__logo-icon\">\r\n                    <span class=\"nav__side-nav__navbar-header__top-contianer__logo__logo-text\">MANAGER</span>\r\n                </div>\r\n                <button mat-icon-button  class=\"nav__side-nav__navbar-header__top-contianer__logo__back-button\" (click)=\"sidenav.toggle()\">\r\n                    <mat-icon >arrow_back</mat-icon>\r\n                </button>\r\n            </div>\r\n            <div class=\"nav__side-nav__navbar-header__profile-container\">\r\n                <div class=\"nav__side-nav__navbar-header__profile-container-name\">\r\n                    {{user?.firstName}} {{user?.lastName}}\r\n                </div>\r\n                <div class=\"nav__side-nav__navbar-header__profile-container-email\">\r\n                    {{user?.email}}\r\n                </div>\r\n                <div class=\"nav__side-nav__navbar-header__profile-container__image-container\">\r\n                    <img src=\"../../assets/images/user.png\" class=\"nav__side-nav__navbar-header__profile-container__image-container-image\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"nav__side-nav__side-menu\">\r\n          <div class=\"nav__side-nav__side-menu__list-item\" [routerLink]=\"['/admin/organizations']\" (click) =\"sidenav.toggle()\">\r\n              <mat-icon class=\"nav__side-nav__side-menu__list-item__item-icon\">group</mat-icon>\r\n              <span class=\"nav__side-nav__side-menu__list-item__item-title\">Organizations</span>\r\n              <mat-icon class=\"nav__side-nav__side-menu__list-item__item-collapse-arrow-icon\">keyboard_arrow_right</mat-icon>\r\n          </div>\r\n          <!-- TODO:can use it later.\r\n            <div class=\"nav__side-nav__side-menu__list-item\" (click) =\"sidenav.toggle()\">\r\n              <mat-icon class=\"nav__side-nav__side-menu__list-item__item-icon\">event</mat-icon>\r\n              <span class=\"nav__side-nav__side-menu__list-item__item-title\">Events</span>\r\n              <mat-icon class=\"nav__side-nav__side-menu__list-item__item-collapse-arrow-icon\">keyboard_arrow_right</mat-icon>\r\n          </div> -->\r\n        </div>\r\n      </mat-sidenav>\r\n    <mat-sidenav-content class=\"content-outer-container\">\r\n        <em-header (toggleMenuBar)=\"sidenav.toggle()\"></em-header>\r\n        <router-outlet></router-outlet>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  height: 100%;\n  width: 100%;\n  display: block; }\n  .nav .content-outer-container {\n    background-color: #efefef; }\n  .nav__side-nav {\n    background-color: #2d323e;\n    color: white;\n    width: 280px; }\n  .nav__side-nav__navbar-header {\n      display: flex;\n      align-items: center;\n      height: 195px;\n      flex-direction: column;\n      justify-content: center;\n      min-height: 195px;\n      padding: 0 16px 0 16px;\n      transition: padding .2s ease;\n      background-color: #673ab7;\n      box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2); }\n  .nav__side-nav__navbar-header__top-contianer {\n        display: flex;\n        height: 64px;\n        position: absolute;\n        top: 0;\n        align-items: center;\n        width: 90%;\n        min-width: 90%;\n        justify-content: space-between; }\n  .nav__side-nav__navbar-header__top-contianer__logo {\n          display: flex;\n          align-items: center;\n          margin-right: 90px; }\n  .nav__side-nav__navbar-header__top-contianer__logo__logo-icon {\n            width: 30px;\n            height: 30px; }\n  .nav__side-nav__navbar-header__top-contianer__logo__logo-text {\n            margin-left: 8px;\n            font-size: 15px;\n            font-weight: 300;\n            letter-spacing: .4px; }\n  .nav__side-nav__navbar-header__profile-container {\n        height: 150px;\n        min-width: 150px;\n        position: absolute;\n        top: 75px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center; }\n  .nav__side-nav__navbar-header__profile-container-name {\n          font-size: 16px;\n          margin-bottom: 10px;\n          color: #efefef; }\n  .nav__side-nav__navbar-header__profile-container-email {\n          font-size: 13px;\n          margin-bottom: 20px;\n          color: #c8c8c8; }\n  .nav__side-nav__navbar-header__profile-container__image-container {\n          width: 100px;\n          min-width: 100px;\n          display: flex;\n          justify-content: center; }\n  .nav__side-nav__navbar-header__profile-container__image-container-image {\n            width: 80px;\n            height: 80px;\n            border-radius: 50%;\n            border: 8px solid #2d323e; }\n  .nav__side-nav__side-menu {\n      margin-top: 80px;\n      font-size: 15px;\n      color: #c8c8c8; }\n  .nav__side-nav__side-menu__list-item {\n        text-decoration: none;\n        display: flex;\n        align-items: center;\n        height: 48px;\n        padding: 0 24px;\n        outline: none;\n        cursor: pointer; }\n  .nav__side-nav__side-menu__list-item:hover {\n          background-color: #673ab7;\n          outline: none; }\n  .nav__side-nav__side-menu__list-item__item-icon {\n          font-size: 16px;\n          width: 16px;\n          height: 16px;\n          min-width: 16px;\n          min-height: 16px;\n          line-height: 16px;\n          margin-right: 16px; }\n  .nav__side-nav__side-menu__list-item__item-title {\n          flex: 1;\n          white-space: nowrap; }\n  .nav__side-nav__side-menu__list-item__item-collapse-arrow-icon {\n          font-size: 16px;\n          width: 16px;\n          height: 16px;\n          min-width: 16px;\n          min-height: 16px;\n          line-height: 16px; }\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/user/user.service */ "./src/app/core/services/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(userService) {
        this.userService = userService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    AdminComponent.prototype.getUser = function () {
        this.user = this.userService.getUser();
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'em-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _shared_components_delete_warning_dialog_delete_warning_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/components/delete-warning-dialog/delete-warning-dialog.component */ "./src/app/shared/components/delete-warning-dialog/delete-warning-dialog.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _organizations_organizations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organizations/organizations.component */ "./src/app/admin/organizations/organizations.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events/events.component */ "./src/app/admin/events/events.component.ts");
/* harmony import */ var _shared_components_entity_dialog_entity_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/entity-dialog/entity-dialog.component */ "./src/app/shared/components/entity-dialog/entity-dialog.component.ts");
/* harmony import */ var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./image-gallery/image-gallery.component */ "./src/app/admin/image-gallery/image-gallery.component.ts");
/* harmony import */ var _shared_components_upload_images_dialog_upload_images_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/components/upload-images-dialog/upload-images-dialog.component */ "./src/app/shared/components/upload-images-dialog/upload-images-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ],
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"],
                _organizations_organizations_component__WEBPACK_IMPORTED_MODULE_5__["OrganizationsComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_8__["EventsComponent"],
                _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_10__["ImageGalleryComponent"],
            ],
            entryComponents: [
                _shared_components_delete_warning_dialog_delete_warning_dialog_component__WEBPACK_IMPORTED_MODULE_0__["DeleteWarningDialogComponent"],
                _shared_components_entity_dialog_entity_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EntityDialogComponent"],
                _shared_components_upload_images_dialog_upload_images_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UploadImagesDialogComponent"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"dashboard-container\">\r\n  <ng-container *ngIf = \"organizations.length > 0\">\r\n      <mat-card *ngFor=\"let organization of organizations\" class=\"dashboard-container__list-container\">\r\n          <div class=\"dashboard-container__list-container__image-container\" [ngStyle]=\"{'background-image': 'url(../../../assets/images/image-placeholder.png)'}\">\r\n              <!-- <img src=\"../../../assets/images/image-placeholder.png\"> -->\r\n          </div>\r\n          <div class=\"dashboard-container__list-container__desc-container\">\r\n              <p>{{ organization.name }}</p>\r\n          </div>\r\n      </mat-card>\r\n  </ng-container>\r\n\r\n  <div class=\"error-container\" *ngIf =\"organizations.length === 0\">\r\n    <p>No Organization Avaliable.. </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-container {\n  padding: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 30px; }\n  .dashboard-container__list-container {\n    max-width: 300px;\n    width: 300px;\n    height: 250px;\n    display: flex;\n    flex-direction: column;\n    padding: 5px 5px 0px 5px;\n    margin: 0px 30px 25px 0px; }\n  .dashboard-container__list-container__image-container {\n      display: flex;\n      flex: 1;\n      background-position: center;\n      background-repeat: none;\n      background-size: cover; }\n  .dashboard-container__list-container__desc-container {\n      text-transform: capitalize;\n      height: 45px;\n      margin: -5px;\n      text-align: center;\n      padding-bottom: 7px;\n      background-color: #fafafa;\n      font-size: 16px;\n      color: black; }\n  @media (max-width: 767.98px) {\n  .dashboard-container__list-container {\n    max-width: 280px;\n    width: 280px; } }\n  @media (max-width: 575.98px) {\n  .dashboard-container {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap; }\n    .dashboard-container__list-container {\n      max-width: 350px;\n      width: 350px;\n      margin-right: 0px; } }\n"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _core_services_organizations_organization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/services/organizations/organization.service */ "./src/app/core/services/organizations/organization.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(organizationService, snackBar) {
        this.organizationService = organizationService;
        this.snackBar = snackBar;
        this.organizations = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getOrganization();
    };
    DashboardComponent.prototype.getOrganization = function () {
        var _this = this;
        this.organizationService.get()
            .subscribe(function (data) {
            _this.organizations = data['organizations'].length > 0 ? data['organizations'] : [];
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'em-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/admin/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_organizations_organization_service__WEBPACK_IMPORTED_MODULE_0__["OrganizationService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/events/events.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/events/events.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"entity-container\">\r\n  <em-entity-header [btnText]=\"'Event'\" [heading]=\"'Events'\" (filterString)=\"applyFilter($event)\" (openModal)=\"openDialog($event)\"></em-entity-header>\r\n  <em-entity-list [entityList]=\"events\" [applyFilter]=\"filterValue\" [type]=\"'event'\" (updateList)=\"resendList($event)\" class=\"entity-container__bottom-container\" *ngIf =\"events.length > 0\"></em-entity-list>\r\n\r\n  <div class=\"error-container\" *ngIf =\"events.length === 0\">\r\n    <p>No Event Avaliable.. You Can Add New Event.</p>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/events/events.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/events/events.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entity-container {\n  padding: 30px;\n  margin-top: 30px; }\n  .entity-container .error-container {\n    font-size: 20px;\n    color: black;\n    letter-spacing: 2px;\n    margin-top: 50px;\n    margin-left: 20px; }\n  .entity-container .error-container p {\n      text-transform: capitalize; }\n  .entity-container__top-container {\n    padding: 80px 40px 80px 40px;\n    background-color: #673ab7;\n    display: flex;\n    flex-direction: row;\n    max-width: 100%;\n    justify-content: space-between;\n    align-items: center; }\n  .entity-container__top-container__title {\n      color: #fafafa;\n      letter-spacing: 2.9px;\n      font-weight: 100;\n      font-size: 30px;\n      flex: 1; }\n  .entity-container__top-container__search {\n      color: #fafafa;\n      width: 300px; }\n  .entity-container__top-container__search mat-form-field {\n        letter-spacing: 2px;\n        width: 100%;\n        font-size: 15px; }\n  .entity-container__top-container__search mat-form-field .search-icon {\n          position: relative;\n          top: 6px;\n          font-size: 14px; }\n  .entity-container__top-container__search mat-form-field.mat-focused ::ng-deep .mat-form-field-ripple {\n          background-color: #fafafa;\n          -webkit-transform: none;\n                  transform: none; }\n  .entity-container__top-container__search mat-form-field ::ng-deep .mat-form-field-wrapper .mat-form-field-underline {\n          background-color: #fafafa; }\n  .entity-container__top-container__search mat-form-field ::ng-deep .mat-form-field-wrapper .mat-form-field-label {\n          color: #fafafa; }\n  .entity-container__top-container__actions-container {\n      display: flex;\n      flex: 1;\n      justify-content: flex-end; }\n  .entity-container__bottom-container {\n    display: flex;\n    justify-content: center; }\n  @media (max-width: 575.98px) {\n  .entity-container__top-container {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 40px 0px 40px 0px; }\n    .entity-container__top-container__search {\n      margin-bottom: 20px; }\n    .entity-container__top-container__actions-container {\n      margin-bottom: 20px; }\n  .entity-container__bottom-container__table {\n    position: relative;\n    top: -22px; } }\n  @media (max-width: 1160px) {\n  .entity-container__top-container__title {\n    letter-spacing: 1.9px;\n    font-size: 23px; }\n  .entity-container__top-container__search {\n    width: 190px; } }\n  @media (max-width: 767.98px) {\n  .entity-container__top-container {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 40px 0px 40px 0px; }\n    .entity-container__top-container__search {\n      margin-bottom: 20px;\n      width: 300px; }\n    .entity-container__top-container__actions-container {\n      margin-bottom: 20px; }\n  .entity-container__bottom-container__table {\n    position: relative;\n    top: -22px; } }\n"

/***/ }),

/***/ "./src/app/admin/events/events.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/events/events.component.ts ***!
  \**************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_events_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/services/events/events.service */ "./src/app/core/services/events/events.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_entity_dialog_entity_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/entity-dialog/entity-dialog.component */ "./src/app/shared/components/entity-dialog/entity-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventsComponent = /** @class */ (function () {
    function EventsComponent(route, eventService, dialog, snackBar) {
        this.route = route;
        this.eventService = eventService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.events = [];
        this.filterValue = '';
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.orgId = params['id'];
        });
        this.getEvents();
    };
    EventsComponent.prototype.resendList = function (list) {
        this.events = [].concat(list);
    };
    EventsComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getEvents(this.orgId)
            .subscribe(function (data) {
            _this.events = (data['events'] && data['events'].length > 0) ? data['events'] : [];
        }, function (err) {
            _this.showToast('Internal server Error');
        });
    };
    EventsComponent.prototype.openDialog = function (title, data, index, event) {
        var _this = this;
        if (event) {
            event.stopPropagation();
        }
        var dialogRef = this.dialog.open(_shared_components_entity_dialog_entity_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EntityDialogComponent"], {
            data: {
                header: "Add Event",
                entityData: data ? data : null,
                entityType: 'Event'
            },
            width: '500px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== '') {
                if (title === 'add') {
                    result['data']['createdAt'] = Date();
                    result['data']['organizationId'] = _this.orgId;
                    result['data']['imageUrl'] = result['file'];
                    _this.createOrganization(result['data']);
                }
            }
        });
    };
    EventsComponent.prototype.createOrganization = function (formData) {
        var _this = this;
        this.eventService.create(formData)
            .subscribe(function (data) {
            _this.showToast('Event Create Sucessfully');
            _this.events.unshift(data['event']);
            _this.events = [].concat(_this.events);
        }, function (err) {
            _this.showToast('Internal server Error');
        });
    };
    EventsComponent.prototype.showToast = function (message) {
        this.snackBar.open(message, '', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
        });
    };
    EventsComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue.trim().toLowerCase();
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'em-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/admin/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.scss */ "./src/app/admin/events/events.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _core_services_events_events_service__WEBPACK_IMPORTED_MODULE_1__["EventsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/admin/image-gallery/image-gallery.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/image-gallery/image-gallery.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-container\">\r\n  <div class=\"gallery-container__header-container\">\r\n    <h1>\r\n      <!-- <mat-icon>photo_library</mat-icon> -->\r\n      <span>{{event?.name }}</span> image gallery\r\n    </h1>\r\n    <div class=\"gallery-container__header-container__btn\">\r\n      <button class=\"button--state-add\" mat-raised-button color=\"primary\" (click)=\"openDialog()\">\r\n        Add Images\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"gallery-container__body-container\">\r\n    <ng-container *ngIf=\"images.length > 0\">\r\n      <mat-card class=\"gallery-container__body-container__image-container-image-card\" *ngFor=\"let image of images\">\r\n        <img mat-card-image src=\"{{apiBaseUrl}}/{{ image.path }}\" alt=\"{{event.name}}\">\r\n      </mat-card>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"images.length == 0\">\r\n      No Images for this Event\r\n    </ng-container>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/image-gallery/image-gallery.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/image-gallery/image-gallery.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gallery-container {\n  padding: 30px;\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column; }\n  .gallery-container__header-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: row; }\n  .gallery-container__header-container h1 {\n      color: black;\n      letter-spacing: 2.9px;\n      font-weight: 100;\n      font-size: 30px;\n      text-transform: capitalize; }\n  .gallery-container__header-container h1 span {\n        color: #673ab7;\n        text-transform: capitalize; }\n  .gallery-container__body-container {\n    display: flex;\n    flex-wrap: wrap;\n    padding: 20px 20px 0px 20px; }\n  .gallery-container__body-container .mat-card {\n      width: 360px;\n      height: 187px;\n      margin: 10px; }\n  .gallery-container__body-container .mat-card img {\n        width: 410px;\n        height: 236px; }\n  @media (max-width: 575.98px) {\n  .gallery-container__header-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column; }\n  .gallery-container__body-container {\n    justify-content: center; }\n    .gallery-container__body-container .mat-card {\n      width: 400px;\n      height: 200px;\n      margin-bottom: 30px; }\n      .gallery-container__body-container .mat-card img {\n        width: 450px;\n        height: 250px; } }\n"

/***/ }),

/***/ "./src/app/admin/image-gallery/image-gallery.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/image-gallery/image-gallery.component.ts ***!
  \****************************************************************/
/*! exports provided: ImageGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryComponent", function() { return ImageGalleryComponent; });
/* harmony import */ var _core_services_image_image_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/services/image/image.service */ "./src/app/core/services/image/image.service.ts");
/* harmony import */ var _shared_components_upload_images_dialog_upload_images_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/components/upload-images-dialog/upload-images-dialog.component */ "./src/app/shared/components/upload-images-dialog/upload-images-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_events_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/events/events.service */ "./src/app/core/services/events/events.service.ts");
/* harmony import */ var _core_config_eman_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/config/eman-config */ "./src/app/core/config/eman-config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ImageGalleryComponent = /** @class */ (function () {
    function ImageGalleryComponent(route, dialog, eventService, snackBar, imageService) {
        this.route = route;
        this.dialog = dialog;
        this.eventService = eventService;
        this.snackBar = snackBar;
        this.imageService = imageService;
        this.apiBaseUrl = _core_config_eman_config__WEBPACK_IMPORTED_MODULE_6__["EmanConfig"].apiBaseUrl;
        this.images = [];
    }
    ImageGalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventSubscriber = this.route.params.subscribe(function (params) {
            _this.eventId = params['eventId'];
        });
        this.getEvent();
        this.getImages();
    };
    ImageGalleryComponent.prototype.ngOnDestroy = function () {
        this.eventSubscriber.unsubscribe();
    };
    ImageGalleryComponent.prototype.getEvent = function () {
        var _this = this;
        this.eventService.getEventById(this.eventId)
            .subscribe(function (data) {
            _this.event = (data) ? data : {};
        }, function (err) {
            _this.showToast(err);
        });
    };
    ImageGalleryComponent.prototype.getImages = function () {
        var _this = this;
        this.imageService.get(this.eventId)
            .subscribe(function (data) {
            _this.images = (data) ? data : [];
        }, function (err) {
            _this.showToast(err);
        });
    };
    ImageGalleryComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_components_upload_images_dialog_upload_images_dialog_component__WEBPACK_IMPORTED_MODULE_1__["UploadImagesDialogComponent"], {
            data: {
                entityId: this.eventId
            },
            width: '500px'
        });
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe(function (result) {
            if (result && result.upload) {
                console.log(result);
                _this.images = result.upload.concat(_this.images);
            }
        });
    };
    ImageGalleryComponent.prototype.showToast = function (message) {
        this.snackBar.open(message, '', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
        });
    };
    ImageGalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'em-image-gallery',
            template: __webpack_require__(/*! ./image-gallery.component.html */ "./src/app/admin/image-gallery/image-gallery.component.html"),
            styles: [__webpack_require__(/*! ./image-gallery.component.scss */ "./src/app/admin/image-gallery/image-gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _core_services_events_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _core_services_image_image_service__WEBPACK_IMPORTED_MODULE_0__["ImageService"]])
    ], ImageGalleryComponent);
    return ImageGalleryComponent;
}());



/***/ }),

/***/ "./src/app/admin/organizations/organizations.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/organizations/organizations.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"entity-container\">\r\n  <em-entity-header [btnText]=\"'Organization'\" [heading]=\"'Organizations'\" (filterString)=\"applyFilter($event)\" (openModal)=\"openDialog($event)\"></em-entity-header>\r\n  <em-entity-list class=\"entity-container__bottom-container\" [applyFilter]=\"filterValue\" [entityList]=\"organizations\" (updateList)=\"resendList($event)\"  [type]=\"'organization'\" *ngIf =\"organizations.length > 0\"></em-entity-list>\r\n\r\n  <div class=\"error-container\" *ngIf =\"organizations.length === 0\">\r\n    <p>No Organization Avaliable.. You Can Add New Organizations.</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/organizations/organizations.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/organizations/organizations.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entity-container {\n  padding: 30px;\n  margin-top: 30px; }\n  .entity-container .error-container {\n    font-size: 20px;\n    color: black;\n    letter-spacing: 2px;\n    margin-top: 50px;\n    margin-left: 20px; }\n  .entity-container .error-container p {\n      text-transform: capitalize; }\n  .entity-container__top-container {\n    padding: 80px 40px 80px 40px;\n    background-color: #673ab7;\n    display: flex;\n    flex-direction: row;\n    max-width: 100%;\n    justify-content: space-between;\n    align-items: center; }\n  .entity-container__top-container__title {\n      color: #fafafa;\n      letter-spacing: 2.9px;\n      font-weight: 100;\n      font-size: 30px;\n      flex: 1; }\n  .entity-container__top-container__search {\n      color: #fafafa;\n      width: 300px; }\n  .entity-container__top-container__search mat-form-field {\n        letter-spacing: 2px;\n        width: 100%;\n        font-size: 15px; }\n  .entity-container__top-container__search mat-form-field .search-icon {\n          position: relative;\n          top: 6px;\n          font-size: 14px; }\n  .entity-container__top-container__search mat-form-field.mat-focused ::ng-deep .mat-form-field-ripple {\n          background-color: #fafafa;\n          -webkit-transform: none;\n                  transform: none; }\n  .entity-container__top-container__search mat-form-field ::ng-deep .mat-form-field-wrapper .mat-form-field-underline {\n          background-color: #fafafa; }\n  .entity-container__top-container__search mat-form-field ::ng-deep .mat-form-field-wrapper .mat-form-field-label {\n          color: #fafafa; }\n  .entity-container__top-container__actions-container {\n      display: flex;\n      flex: 1;\n      justify-content: flex-end; }\n  .entity-container__bottom-container {\n    display: flex;\n    justify-content: center; }\n  @media (max-width: 575.98px) {\n  .entity-container__top-container {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 40px 0px 40px 0px; }\n    .entity-container__top-container__search {\n      margin-bottom: 20px; }\n    .entity-container__top-container__actions-container {\n      margin-bottom: 20px; }\n  .entity-container__bottom-container__table {\n    position: relative;\n    top: -22px; } }\n  @media (max-width: 1160px) {\n  .entity-container__top-container__title {\n    letter-spacing: 1.9px;\n    font-size: 23px; }\n  .entity-container__top-container__search {\n    width: 190px; } }\n  @media (max-width: 767.98px) {\n  .entity-container__top-container {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 40px 0px 40px 0px; }\n    .entity-container__top-container__search {\n      margin-bottom: 20px;\n      width: 300px; }\n    .entity-container__top-container__actions-container {\n      margin-bottom: 20px; }\n  .entity-container__bottom-container__table {\n    position: relative;\n    top: -22px; } }\n"

/***/ }),

/***/ "./src/app/admin/organizations/organizations.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/organizations/organizations.component.ts ***!
  \****************************************************************/
/*! exports provided: OrganizationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsComponent", function() { return OrganizationsComponent; });
/* harmony import */ var _shared_components_entity_dialog_entity_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/components/entity-dialog/entity-dialog.component */ "./src/app/shared/components/entity-dialog/entity-dialog.component.ts");
/* harmony import */ var _core_services_organizations_organization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/services/organizations/organization.service */ "./src/app/core/services/organizations/organization.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrganizationsComponent = /** @class */ (function () {
    function OrganizationsComponent(organizationService, snackBar, dialog) {
        this.organizationService = organizationService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.organizations = [];
        this.filterValue = '';
    }
    OrganizationsComponent.prototype.ngOnInit = function () {
        this.getOrganization();
    };
    OrganizationsComponent.prototype.getOrganization = function () {
        var _this = this;
        this.organizationService.get()
            .subscribe(function (data) {
            _this.organizations = data['organizations'] && data['organizations'].length > 0 ? data['organizations'] : [];
        }, function (err) {
            _this.showToast("Internal Server Error");
        });
    };
    OrganizationsComponent.prototype.resendList = function (list) {
        this.organizations = [].concat(list);
    };
    OrganizationsComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue.trim().toLowerCase();
    };
    OrganizationsComponent.prototype.openDialog = function (title, data, index, event) {
        var _this = this;
        if (event) {
            event.stopPropagation();
        }
        var dialogRef = this.dialog.open(_shared_components_entity_dialog_entity_dialog_component__WEBPACK_IMPORTED_MODULE_0__["EntityDialogComponent"], {
            data: {
                header: "Add Organization",
                entityData: data ? data : null,
                entityType: 'Organization'
            },
            width: '500px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== '') {
                result['data']['createdAt'] = Date();
                result['data']['imageUrl'] = result['file'];
                _this.createOrganization(result['data']);
            }
        });
    };
    OrganizationsComponent.prototype.createOrganization = function (formData) {
        var _this = this;
        this.organizationService.create(formData)
            .subscribe(function (data) {
            _this.showToast('Organization Create Sucessfully');
            _this.organizations.unshift(data['organization']);
            _this.organizations = [].concat(_this.organizations);
        }, function (err) {
            _this.showToast("Internal Server Error");
        });
    };
    OrganizationsComponent.prototype.showToast = function (message) {
        this.snackBar.open(message, '', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
        });
    };
    OrganizationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'em-organizations',
            template: __webpack_require__(/*! ./organizations.component.html */ "./src/app/admin/organizations/organizations.component.html"),
            styles: [__webpack_require__(/*! ./organizations.component.scss */ "./src/app/admin/organizations/organizations.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_organizations_organization_service__WEBPACK_IMPORTED_MODULE_1__["OrganizationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], OrganizationsComponent);
    return OrganizationsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map