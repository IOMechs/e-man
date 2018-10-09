(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"admin-admin-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    },
    {
        path: 'register',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\r\nbdColor = \"rgba(51, 51, 51, 0.8)\"\r\nsize = \"large\"\r\ncolor = \"#fff\"\r\ntype = \"timer\"\r\n></ngx-spinner>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'eman';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'em-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/guard/auth.guard */ "./src/app/core/guard/auth.guard.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
            ],
            providers: [
                _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/config/eman-config.ts":
/*!********************************************!*\
  !*** ./src/app/core/config/eman-config.ts ***!
  \********************************************/
/*! exports provided: EmanConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmanConfig", function() { return EmanConfig; });
var EmanConfig = /** @class */ (function () {
    function EmanConfig() {
    }
    EmanConfig.baseUrl = '';
    EmanConfig.apiBaseUrl = 'http://localhost:5000';
    EmanConfig.assetsBaseUrl = '';
    return EmanConfig;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _services_events_events_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/events/events.service */ "./src/app/core/services/events/events.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_organizations_organization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/organizations/organization.service */ "./src/app/core/services/organizations/organization.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/core/guard/auth.guard.ts");
/* harmony import */ var _interceptor_http_token_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptor/http-token-interceptor */ "./src/app/core/interceptor/http-token-interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            ],
            declarations: [],
            providers: [
                _guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
                _services_organizations_organization_service__WEBPACK_IMPORTED_MODULE_2__["OrganizationService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor_http_token_interceptor__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptor"],
                    multi: true
                },
                _services_events_events_service__WEBPACK_IMPORTED_MODULE_0__["EventsService"],
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/guard/auth.guard.ts":
/*!******************************************!*\
  !*** ./src/app/core/guard/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isLoggednIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/interceptor/http-token-interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/core/interceptor/http-token-interceptor.ts ***!
  \************************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth, spinner) {
        this.auth = auth;
        this.spinner = spinner;
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.spinner.show();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        var token = this.auth.getToken();
        if (token) {
            headers = headers.set('Authorization', token);
        }
        var request = req.clone({
            headers: headers
        });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                _this.spinner.hide();
            }
        }, function (err) {
            _this.spinner.hide();
        }));
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/core/services/auth/auth.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/auth/auth.service.ts ***!
  \****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_eman_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/eman-config */ "./src/app/core/config/eman-config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _constant_eman_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../constant/eman-constant */ "./src/constant/eman-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.apiBaseUrl = _config_eman_config__WEBPACK_IMPORTED_MODULE_1__["EmanConfig"].apiBaseUrl;
    }
    AuthService.prototype.isLoggednIn = function () {
        var key = localStorage.getItem(_constant_eman_constant__WEBPACK_IMPORTED_MODULE_4__["EmanConstant"].eman_user) ? true : false;
        return key;
    };
    AuthService.prototype.getToken = function () {
        var token = localStorage.getItem(_constant_eman_constant__WEBPACK_IMPORTED_MODULE_4__["EmanConstant"].eman_token);
        return token;
    };
    AuthService.prototype.login = function (loginData) {
        return this.http.post(this.apiBaseUrl + "/login", loginData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data['token']) {
                localStorage.setItem(_constant_eman_constant__WEBPACK_IMPORTED_MODULE_4__["EmanConstant"].eman_token, data['token']);
                localStorage.setItem(_constant_eman_constant__WEBPACK_IMPORTED_MODULE_4__["EmanConstant"].eman_user, JSON.stringify(data['user']));
                return data['user'];
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            throw (err);
        }));
    };
    AuthService.prototype.signup = function (signupData) {
        return this.http.post(this.apiBaseUrl + "/signup", signupData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data['token']) {
                localStorage.setItem(_constant_eman_constant__WEBPACK_IMPORTED_MODULE_4__["EmanConstant"].eman_token, data['token']);
                localStorage.setItem(_constant_eman_constant__WEBPACK_IMPORTED_MODULE_4__["EmanConstant"].eman_user, JSON.stringify(data['user']));
                return data['user'];
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            throw (err);
        }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/events/events.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/events/events.service.ts ***!
  \********************************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var _config_eman_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../config/eman-config */ "./src/app/core/config/eman-config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable/of */ "./node_modules/rxjs-compat/_esm5/Observable/of.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventsService = /** @class */ (function () {
    function EventsService(http) {
        this.http = http;
        this.apiBaseUrl = _config_eman_config__WEBPACK_IMPORTED_MODULE_0__["EmanConfig"].apiBaseUrl;
        this.events = [];
    }
    EventsService.prototype.getEvents = function (data, title) {
        var _this = this;
        return this.http.get(this.apiBaseUrl + "/event/all-events?_id=" + data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            _this.events = res['events'];
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            throw (err);
        }));
    };
    EventsService.prototype.create = function (data) {
        return this.http.post(this.apiBaseUrl + "/event", data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            throw (err);
        }));
    };
    EventsService.prototype.update = function (data) {
        return this.http.put(this.apiBaseUrl + "/event", data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            throw (err);
        }));
    };
    EventsService.prototype.delete = function (data) {
        return this.http.delete(this.apiBaseUrl + "/event/" + data._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            throw (err);
        }));
    };
    EventsService.prototype.getEventById = function (eventId) {
        if (this.events.length > 0) {
            var filterEvent = void 0;
            for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
                var event_1 = _a[_i];
                if (event_1._id === eventId) {
                    filterEvent = event_1;
                    break;
                }
            }
            return Object(rxjs_Observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])(filterEvent);
        }
        else if (this.events.length === 0) {
            return this.http.get(this.apiBaseUrl + "/event?_id=" + eventId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
                return res.event;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
                throw (err);
            }));
        }
    };
    EventsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EventsService);
    return EventsService;
}());



/***/ }),

/***/ "./src/app/core/services/image/image.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/image/image.service.ts ***!
  \******************************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _config_eman_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../config/eman-config */ "./src/app/core/config/eman-config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
        this.images = [];
        this.apiBaseUrl = _config_eman_config__WEBPACK_IMPORTED_MODULE_0__["EmanConfig"].apiBaseUrl;
    }
    ImageService.prototype.get = function (entityId) {
        var _this = this;
        return this.http.get(this.apiBaseUrl + "/images/all/" + entityId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            _this.images = res.images;
            return res.images;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            throw (err);
        }));
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/app/core/services/organizations/organization.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/services/organizations/organization.service.ts ***!
  \*********************************************************************/
/*! exports provided: OrganizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationService", function() { return OrganizationService; });
/* harmony import */ var _config_eman_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../config/eman-config */ "./src/app/core/config/eman-config.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../user/user.service */ "./src/app/core/services/user/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrganizationService = /** @class */ (function () {
    function OrganizationService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.apiBaseUrl = _config_eman_config__WEBPACK_IMPORTED_MODULE_0__["EmanConfig"].apiBaseUrl;
    }
    OrganizationService.prototype.get = function () {
        this.user = this.userService.getUser();
        return this.http.get(this.apiBaseUrl + "/organizations?_id=" + this.user._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            throw (err);
        }));
    };
    OrganizationService.prototype.create = function (data) {
        data['userId'] = this.userService.getUser()._id;
        return this.http.post(this.apiBaseUrl + "/organization", data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            throw (err);
        }));
    };
    OrganizationService.prototype.update = function (data) {
        return this.http.put(this.apiBaseUrl + "/organization", data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            throw (err);
        }));
    };
    OrganizationService.prototype.delete = function (data) {
        return this.http.delete(this.apiBaseUrl + "/organization/" + data._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            throw (err);
        }));
    };
    OrganizationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], OrganizationService);
    return OrganizationService;
}());



/***/ }),

/***/ "./src/app/core/services/user/user.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/user/user.service.ts ***!
  \****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _constant_eman_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../constant/eman-constant */ "./src/constant/eman-constant.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.getUser = function () {
        var user = JSON.parse(localStorage.getItem(_constant_eman_constant__WEBPACK_IMPORTED_MODULE_0__["EmanConstant"].eman_user));
        return user;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"auth-outer-container\">\r\n  <div class=\"row\">\r\n    <div class=\"auth-intro-container\" >\r\n\r\n    </div>\r\n    <div class=\"auth-form-container\">\r\n      <mat-card>\r\n        <div class=\"card-container\">\r\n\r\n            <div class=\"auth-header\">\r\n                <mat-card-header>\r\n                    <mat-card-title>\r\n                      <h2>LOGIN TO YOUR ACCOUNT</h2>\r\n                    </mat-card-title>\r\n                </mat-card-header>\r\n            </div>\r\n            <div class=\"auth-content\">\r\n              <form [formGroup]=\"loginForm\" (submit)=\"onSubmit()\">\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" name=\"email\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"loginControls.email.hasError('required')\">\r\n                      Email is <strong>required</strong>.\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"loginControls.email.hasError('email')\">\r\n                        Invalid <strong>Email address</strong>.\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n                      <mat-error *ngIf=\"loginControls.password.hasError('required')\">\r\n                        Password is <strong>required</strong>.\r\n                      </mat-error>\r\n                </mat-form-field>\r\n                <div class=\"auth__checkbox__forgot\">\r\n                    <mat-checkbox\r\n                      [labelPosition]=\"after\">\r\n                      Remember Me\r\n                    </mat-checkbox>\r\n                    <a class=\"forgot__password\" href=\"javascript:void(0)\">Forgot Password?</a>\r\n                </div>\r\n                <div class=\"auth__button\">\r\n                    <button class=\"button--state-submit\" mat-raised-button color=\"primary\" [disabled]=\"loginForm.invalid\">LOGIN</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <div class=\"auth-footer\">\r\n              <span>Don't have account?</span>\r\n                <a routerLink=\"/register\">Create Account</a>\r\n            </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-outer-container .row {\n  margin: 0px;\n  height: 100vh;\n  display: flex; }\n\n.auth-outer-container .auth-intro-container {\n  background: #8a8a8a;\n  display: flex;\n  flex: 1;\n  height: 100%; }\n\n.auth-outer-container .auth-form-container {\n  width: 350px;\n  min-width: 350px;\n  max-width: 350px;\n  height: 100%;\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.auth-outer-container .auth-form-container mat-card {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-top: 0px;\n    padding-bottom: 0px; }\n\n.auth-outer-container .auth-form-container mat-card .auth-header {\n      display: flex;\n      justify-content: flex-start; }\n\n.auth-outer-container .auth-form-container mat-card .auth-header h2 {\n        font-size: 18px;\n        font-weight: 500; }\n\n.auth-outer-container .auth-form-container .card-container {\n    display: flex;\n    flex-direction: column; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content {\n      margin-top: 10px;\n      padding: 10px; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content input.-webkit-autofill {\n        background-color: white; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content mat-form-field {\n        width: 100%; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content mat-form-field.mat-form-field {\n          font-size: 15px; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content .auth__checkbox__forgot {\n        display: flex;\n        justify-content: space-between;\n        font-size: 13px;\n        margin-top: 20px;\n        font-weight: bold; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content .auth__checkbox__forgot .forgot__password {\n          font-size: 12px;\n          text-decoration: none;\n          color: #673ab7; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content .auth__checkbox {\n        display: flex;\n        justify-content: center;\n        font-size: 13px;\n        margin-top: 20px;\n        font-weight: bold; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content .auth__checkbox .forgot__password {\n          font-size: 12px; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content .auth__button {\n        display: flex;\n        justify-content: center;\n        margin-top: 25px; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content .auth__button .button--state-submit {\n          width: 100%; }\n\n.auth-outer-container .auth-form-container .card-container .auth-footer {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      margin-top: 25px;\n      font-size: 13px;\n      font-weight: bold; }\n\n.auth-outer-container .auth-form-container .card-container .auth-footer a {\n        color: #673ab7;\n        text-decoration: none; }\n\n@media (max-width: 767.98px) {\n  .auth-form-container .auth-form-container {\n    width: 300px;\n    min-width: 300px;\n    max-width: 300px; } }\n\n@media (max-width: 575.98px) {\n  .auth-outer-container .auth-form-container {\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%; }\n    .auth-outer-container .auth-form-container mat-card {\n      padding: 0px 20px;\n      width: 100%; }\n      .auth-outer-container .auth-form-container mat-card .auth-header {\n        display: flex;\n        justify-content: center; }\n        .auth-outer-container .auth-form-container mat-card .auth-header h2 {\n          font-size: 21px; }\n    .auth-outer-container .auth-form-container .card-container .auth-content {\n      padding: 0px 40px; }\n      .auth-outer-container .auth-form-container .card-container .auth-content .auth__checkbox__forgot {\n        display: flex;\n        flex-direction: column;\n        align-items: center; }\n        .auth-outer-container .auth-form-container .card-container .auth-content .auth__checkbox__forgot .forgot__password {\n          margin-top: 16px; }\n  .auth-outer-container .auth-intro-container {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, route, formBuilder) {
        this.authService = authService;
        this.route = route;
        this.formBuilder = formBuilder;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
                ]
            ],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ]
            ]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "loginControls", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.loginForm.invalid) {
            var formData = this.loginForm.value;
            this.authService
                .login(formData)
                .subscribe(function (data) {
                _this.route.navigate(['/admin']);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            console.log('Please Provide Valid Inputs');
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'em-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/delete-warning-dialog/delete-warning-dialog.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/delete-warning-dialog/delete-warning-dialog.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"warning-dialog-container\">\r\n  <h2 mat-dialog-title class=\"warning-dialog-heading\">Are you sure you want to delete?</h2>\r\n  <mat-dialog-actions class=\"warning-dialog-actions\">\r\n    <button mat-button mat-dialog-close>No</button>\r\n    <button mat-button color=\"warn\" [mat-dialog-close]=\"true\">Yes</button>\r\n  </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/delete-warning-dialog/delete-warning-dialog.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/delete-warning-dialog/delete-warning-dialog.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".warning-dialog-container .warning-dialog-heading {\n  display: flex;\n  justify-content: center; }\n\n.warning-dialog-container .warning-dialog-actions {\n  display: flex;\n  justify-content: flex-end; }\n"

/***/ }),

/***/ "./src/app/shared/components/delete-warning-dialog/delete-warning-dialog.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/delete-warning-dialog/delete-warning-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DeleteWarningDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteWarningDialogComponent", function() { return DeleteWarningDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeleteWarningDialogComponent = /** @class */ (function () {
    function DeleteWarningDialogComponent() {
    }
    DeleteWarningDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteWarningDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'em-delete-warning-dialog',
            template: __webpack_require__(/*! ./delete-warning-dialog.component.html */ "./src/app/shared/components/delete-warning-dialog/delete-warning-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-warning-dialog.component.scss */ "./src/app/shared/components/delete-warning-dialog/delete-warning-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DeleteWarningDialogComponent);
    return DeleteWarningDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/entity-dialog/entity-dialog.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/entity-dialog/entity-dialog.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container\">\r\n    <div class=\"dialog-container__header-container\">\r\n        <h1 class=\"dialog-container__header-container--heading\" mat-dialog-title>{{data.header}}</h1>\r\n    </div>\r\n    <div class=\"dialog-container__content-container\">\r\n        <mat-dialog-content>\r\n            <form class=\"dialog-container__content-container__entity-form\" [formGroup]=\"entityDialogForm\">\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"{{data.entityType}} Name\" formControlName=\"name\">\r\n                    <mat-error *ngIf=\"entityControls.name.hasError('required')\">\r\n                      Name is <strong>required</strong>.\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"{{data.entityType}}'s Description\" formControlName=\"description\">\r\n                  <mat-error *ngIf=\"entityControls.description.hasError('required')\">\r\n                      Description is <strong>required</strong>.\r\n                  </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field *ngIf= \"!isOrganization\">\r\n                  <input matInput [matDatepicker]=\"picker\" placeholder=\"Select {{data.entityType}} Date\" formControlName=\"eventDate\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker></mat-datepicker>\r\n                  <mat-error *ngIf=\"entityControls.eventDate.hasError('required')\">\r\n                      Date is <strong>required</strong>.\r\n                  </mat-error>\r\n                </mat-form-field>\r\n\r\n                <div class=\"dialog-container__content-container__entity-form__uploadImage\">\r\n                  <label for=\"singleFile\" class=\"dialog-container__content-container__entity-form__uploadImage-label\">Upload Image</label>\r\n                  <input id=\"singleFile\" class=\"dialog-container__content-container__entity-form__uploadImage-input\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\r\n                  <br>\r\n\r\n                  <mat-file-upload-queue #fileUploadQueue [fileAlias]=\"'file'\" [httpUrl]=\"'http://localhost:3000/file/upload'\">\r\n                    <mat-file-upload (onUpload)=\"uploadDone($event)\" class=\"dialog-container__content-container__entity-form__uploadImage-upload\" [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\r\n                  </mat-file-upload-queue>\r\n                </div>\r\n            </form>\r\n        </mat-dialog-content>\r\n        <mat-dialog-actions class =\"dialog-container__content-container__footer-container\">\r\n          <button mat-raised-button color=\"warn\" mat-dialog-close>Close</button>\r\n          <button mat-raised-button color=\"primary\" (click)=\"submitEntity(fileUploadQueue.fileUploads)\" [disabled]=\"entityDialogForm.invalid\">Submit</button>\r\n        </mat-dialog-actions>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/entity-dialog/entity-dialog.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/entity-dialog/entity-dialog.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%; }\n  .dialog-container__header-container--heading {\n    text-transform: capitalize; }\n  .dialog-container__content-container {\n    margin-top: 10px; }\n  .dialog-container__content-container__entity-form {\n      display: flex;\n      flex-direction: column;\n      height: 100%; }\n  .dialog-container__content-container__entity-form__uploadImage {\n        margin-top: 10px; }\n  .dialog-container__content-container__entity-form__uploadImage ::ng-deep .mat-raised-button {\n          display: none; }\n  .dialog-container__content-container__entity-form__uploadImage-label {\n          font-size: 15px;\n          margin-right: 20px;\n          color: #673ab7; }\n  .dialog-container__content-container__entity-form__uploadImage-upload ::ng-deep .mat-card {\n          display: flex;\n          justify-content: space-between;\n          margin-top: 20px;\n          padding: 20px;\n          color: #8a8a8a; }\n  .dialog-container__content-container__entity-form__uploadImage-upload ::ng-deep .mat-card span:first-child {\n            display: block;\n            font-size: 14px; }\n  .dialog-container__content-container__entity-form__uploadImage-upload ::ng-deep .mat-card span {\n            display: none; }\n  .dialog-container__content-container__entity-form__uploadImage-upload ::ng-deep .mat-card .example-section a, .dialog-container__content-container__entity-form__uploadImage-upload ::ng-deep .mat-card .example-section .mat-progress-bar {\n            display: none; }\n  .dialog-container__content-container__entity-form__uploadImage-upload ::ng-deep .mat-card .example-section .mat-icon {\n            margin-top: 14px;\n            font-size: 18px; }\n  .dialog-container__content-container__entity-form mat-form-field {\n        font-size: 15px; }\n  .dialog-container__content-container__footer-container {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-end; }\n"

/***/ }),

/***/ "./src/app/shared/components/entity-dialog/entity-dialog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/entity-dialog/entity-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: EntityDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityDialogComponent", function() { return EntityDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EntityDialogComponent = /** @class */ (function () {
    function EntityDialogComponent(data, formBuilder, dialogRef) {
        this.data = data;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.isOrganization = this.data.entityType === 'Organization' ? true : false;
    }
    EntityDialogComponent.prototype.ngOnInit = function () {
        this.entityDialogForm = this.formBuilder.group({
            name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]
            ],
            description: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]
            ],
            eventDate: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]
            ]
        });
        this.resettValidators();
        this.setEntityValue();
    };
    Object.defineProperty(EntityDialogComponent.prototype, "entityControls", {
        get: function () { return this.entityDialogForm.controls; },
        enumerable: true,
        configurable: true
    });
    EntityDialogComponent.prototype.resettValidators = function () {
        if (this.data.entityType === 'Organization') {
            this.entityDialogForm.controls['eventDate'].setValidators(null);
        }
    };
    EntityDialogComponent.prototype.setEntityValue = function () {
        if (this.data.entityData) {
            this.entityDialogForm.patchValue(this.data.entityData);
        }
    };
    EntityDialogComponent.prototype.submitEntity = function (queue) {
        var files = queue['_results'];
        if (files && files[0]) {
            files[0].upload();
        }
        else {
            this.dialogRef.close({
                file: '',
                data: this.entityDialogForm.value
            });
        }
    };
    EntityDialogComponent.prototype.uploadDone = function (response) {
        console.log(response);
        if (response.event.type === 4) {
            this.dialogRef.close({
                file: response.event.body.path,
                data: this.entityDialogForm.value
            });
        }
    };
    EntityDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'em-entity-dialog',
            template: __webpack_require__(/*! ./entity-dialog.component.html */ "./src/app/shared/components/entity-dialog/entity-dialog.component.html"),
            styles: [__webpack_require__(/*! ./entity-dialog.component.scss */ "./src/app/shared/components/entity-dialog/entity-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], EntityDialogComponent);
    return EntityDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/entity-header/entity-header.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/entity-header/entity-header.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"entity-container__top-container\">\r\n  <h1 class=\"entity-container__top-container__title\">\r\n    <mat-icon>{{ heading == 'Organizations'? 'group': 'event' }}</mat-icon>\r\n    {{ heading }}\r\n </h1>\r\n <div class=\"entity-container__top-container__search\">\r\n    <mat-form-field color=\"white\">\r\n      <span matPrefix class=\"search-icon\"><mat-icon matPreffix>search</mat-icon> &nbsp;</span>\r\n      <input matInput type=\"text\" placeholder=\"Search\" (keyup)=\"applyFilter($event.target.value)\">\r\n    </mat-form-field>\r\n </div>\r\n <div class=\"entity-container__top-container__actions-container\">\r\n    <button class=\"entity-container__top-container__actions-container--state-submit\" mat-raised-button (click)=\"openDialog('add')\">\r\n      Add {{ btnText }}\r\n    </button>\r\n </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/entity-header/entity-header.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/entity-header/entity-header.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entity-container {\n  padding: 30px;\n  margin-top: 30px; }\n  .entity-container .error-container {\n    font-size: 20px;\n    color: black;\n    letter-spacing: 2px;\n    margin-top: 50px;\n    margin-left: 20px; }\n  .entity-container .error-container p {\n      text-transform: capitalize; }\n  .entity-container__top-container {\n    padding: 80px 40px 80px 40px;\n    background-color: #673ab7;\n    display: flex;\n    flex-direction: row;\n    max-width: 100%;\n    justify-content: space-between;\n    align-items: center; }\n  .entity-container__top-container__title {\n      color: #fafafa;\n      letter-spacing: 2.9px;\n      font-weight: 100;\n      font-size: 30px;\n      flex: 1; }\n  .entity-container__top-container__search {\n      color: #fafafa;\n      width: 300px; }\n  .entity-container__top-container__search mat-form-field {\n        letter-spacing: 2px;\n        width: 100%;\n        font-size: 15px; }\n  .entity-container__top-container__search mat-form-field .search-icon {\n          position: relative;\n          top: 6px;\n          font-size: 14px; }\n  .entity-container__top-container__search mat-form-field.mat-focused ::ng-deep .mat-form-field-ripple {\n          background-color: #fafafa;\n          -webkit-transform: none;\n                  transform: none; }\n  .entity-container__top-container__search mat-form-field ::ng-deep .mat-form-field-wrapper .mat-form-field-underline {\n          background-color: #fafafa; }\n  .entity-container__top-container__search mat-form-field ::ng-deep .mat-form-field-wrapper .mat-form-field-label {\n          color: #fafafa; }\n  .entity-container__top-container__actions-container {\n      display: flex;\n      flex: 1;\n      justify-content: flex-end; }\n  .entity-container__bottom-container {\n    display: flex;\n    justify-content: center; }\n  @media (max-width: 575.98px) {\n  .entity-container__top-container {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 40px 0px 40px 0px; }\n    .entity-container__top-container__search {\n      margin-bottom: 20px; }\n    .entity-container__top-container__actions-container {\n      margin-bottom: 20px; }\n  .entity-container__bottom-container__table {\n    position: relative;\n    top: -22px; } }\n  @media (max-width: 1160px) {\n  .entity-container__top-container__title {\n    letter-spacing: 1.9px;\n    font-size: 23px; }\n  .entity-container__top-container__search {\n    width: 190px; } }\n  @media (max-width: 767.98px) {\n  .entity-container__top-container {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 40px 0px 40px 0px; }\n    .entity-container__top-container__search {\n      margin-bottom: 20px;\n      width: 300px; }\n    .entity-container__top-container__actions-container {\n      margin-bottom: 20px; }\n  .entity-container__bottom-container__table {\n    position: relative;\n    top: -22px; } }\n"

/***/ }),

/***/ "./src/app/shared/components/entity-header/entity-header.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/entity-header/entity-header.component.ts ***!
  \****************************************************************************/
/*! exports provided: EntityHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityHeaderComponent", function() { return EntityHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EntityHeaderComponent = /** @class */ (function () {
    function EntityHeaderComponent() {
        this.filterString = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EntityHeaderComponent.prototype.ngOnInit = function () {
    };
    EntityHeaderComponent.prototype.applyFilter = function (value) {
        this.filterString.emit(value.trim().toLowerCase());
    };
    EntityHeaderComponent.prototype.openDialog = function (type) {
        this.openModal.emit(type);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EntityHeaderComponent.prototype, "heading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EntityHeaderComponent.prototype, "btnText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EntityHeaderComponent.prototype, "filterString", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EntityHeaderComponent.prototype, "openModal", void 0);
    EntityHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'em-entity-header',
            template: __webpack_require__(/*! ./entity-header.component.html */ "./src/app/shared/components/entity-header/entity-header.component.html"),
            styles: [__webpack_require__(/*! ./entity-header.component.scss */ "./src/app/shared/components/entity-header/entity-header.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], EntityHeaderComponent);
    return EntityHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/entity-list/entity-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/entity-list/entity-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 table-container\">\r\n  <ng-container matColumnDef=\"no.\">\r\n    <th mat-header-cell *matHeaderCellDef> No. </th>\r\n    <td mat-cell *matCellDef=\"let i = index\"> {{ i +1 }} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"image\">\r\n    <th mat-header-cell *matHeaderCellDef></th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <img src= \"{{element.imageUrl && element.imageUrl !== '' ? apiBaseUrl + element.imageUrl : '../../../assets/images/image-placeholder.png'}}\" />\r\n    </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"description\">\r\n    <th mat-header-cell *matHeaderCellDef> Description </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"createAt\" *ngIf=\"entityType != 'event'\">\r\n    <th mat-header-cell *matHeaderCellDef> Created at </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.createdAt | date: 'EEEE, dd MMM yyyy' }} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"eventDate\" *ngIf=\"entityType == 'event'\">\r\n    <th mat-header-cell *matHeaderCellDef> Event Date </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.eventDate | date: 'EEEE, dd MMM yyyy' }} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"action\">\r\n    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n    <td mat-cell *matCellDef=\"let element; let i = index\">\r\n      <button class=\"table-container__row--btn\" mat-mini-fab color=\"primary\" (click)=\"openDialog('edit', element, i, $event)\">\r\n        Edit\r\n      </button>\r\n      <button class=\"table-container__row--btn\" mat-mini-fab color=\"warn\" (click)=\"openWarningDialog(element,i, $event)\">\r\n        Delete\r\n      </button>\r\n      <button mat-mini-fab color=\"basic\" *ngIf=\"entityType == 'event'\" (click)=\"moveToPhotos(element)\">\r\n        Photos\r\n      </button>\r\n    </td>\r\n  </ng-container>\r\n\r\n  <tr class=\"table-container__row\" mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n  <tr class=\"table-container__row\" mat-row *matRowDef=\"let row; columns: displayedColumns; let element;\" (click)=\"moveToEvent(element)\"></tr>\r\n</table>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/components/entity-list/entity-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/entity-list/entity-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-container {\n  width: 95%;\n  position: relative;\n  padding-bottom: 20px;\n  top: -40px; }\n  .table-container__row {\n    height: 90px;\n    cursor: pointer; }\n  .table-container__row--btn {\n      margin-right: 10px; }\n  .table-container__row td {\n      color: #8a8a8a;\n      text-transform: capitalize; }\n  .table-container__row td img {\n        width: 70px;\n        height: 70px;\n        background-position: center;\n        background-repeat: none;\n        background-size: cover; }\n  @media (max-width: 575.98px) {\n  .table-container__row td {\n    padding-left: 5px; } }\n  @media (max-width: 767.98px) {\n  .table-container__row td {\n    padding-left: 5px; } }\n"

/***/ }),

/***/ "./src/app/shared/components/entity-list/entity-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/entity-list/entity-list.component.ts ***!
  \************************************************************************/
/*! exports provided: EntityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityListComponent", function() { return EntityListComponent; });
/* harmony import */ var _delete_warning_dialog_delete_warning_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../delete-warning-dialog/delete-warning-dialog.component */ "./src/app/shared/components/delete-warning-dialog/delete-warning-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entity_dialog_entity_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../entity-dialog/entity-dialog.component */ "./src/app/shared/components/entity-dialog/entity-dialog.component.ts");
/* harmony import */ var _core_services_organizations_organization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/services/organizations/organization.service */ "./src/app/core/services/organizations/organization.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_events_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/events/events.service */ "./src/app/core/services/events/events.service.ts");
/* harmony import */ var _core_config_eman_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/config/eman-config */ "./src/app/core/config/eman-config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EntityListComponent = /** @class */ (function () {
    function EntityListComponent(organizationService, dialog, router, snackBar, eventService) {
        this.organizationService = organizationService;
        this.dialog = dialog;
        this.router = router;
        this.snackBar = snackBar;
        this.eventService = eventService;
        this.dataSource = [];
        this.list = [];
        this.displayedColumns = ['no.', 'image', 'name', 'description'];
        this.apiBaseUrl = _core_config_eman_config__WEBPACK_IMPORTED_MODULE_7__["EmanConfig"].apiBaseUrl;
        this.updateList = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    }
    Object.defineProperty(EntityListComponent.prototype, "entityList", {
        set: function (list) {
            this.list = list;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.list);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityListComponent.prototype, "type", {
        set: function (type) {
            this.entityType = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityListComponent.prototype, "applyFilter", {
        set: function (filterValue) {
            this.dataSource.filter = filterValue.trim().toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    EntityListComponent.prototype.ngOnInit = function () {
        this.setDisplayedColumns();
    };
    EntityListComponent.prototype.setDisplayedColumns = function () {
        if (this.entityType === 'event') {
            this.displayedColumns.push('eventDate');
        }
        else {
            this.displayedColumns.push('createAt');
        }
        this.displayedColumns.push('action');
    };
    EntityListComponent.prototype.openDialog = function (title, data, index, event) {
        var _this = this;
        if (event) {
            event.stopPropagation();
        }
        var dialogRef = this.dialog.open(_entity_dialog_entity_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EntityDialogComponent"], {
            // tslint:disable-next-line:max-line-length
            data: {
                header: title === 'add' ? "Add " + this.entityType : "Edit " + this.entityType,
                entityData: data ? data : null,
                entityType: this.entityType === 'organization' ? 'Organization' : 'Event'
            },
            width: '500px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result !== '') {
                result['createdAt'] = Date();
                if (result.file !== '') {
                    result.data['imageUrl'] = result.file;
                }
                var res = Object.assign(data, result['data']);
                _this.updateEntity(res, index);
            }
        });
    };
    EntityListComponent.prototype.openWarningDialog = function (data, index, event) {
        var _this = this;
        if (event) {
            event.stopPropagation();
        }
        var dialogRef = this.dialog.open(_delete_warning_dialog_delete_warning_dialog_component__WEBPACK_IMPORTED_MODULE_0__["DeleteWarningDialogComponent"], {
            height: '150px',
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result && result === true) {
                _this.deleteEntity(data, index);
            }
        });
    };
    EntityListComponent.prototype.updateEntity = function (formData, index) {
        var _this = this;
        var entityService = this.entityType === 'event' ? this.eventService : this.organizationService;
        entityService.update(formData)
            .subscribe(function (data) {
            _this.list[index] = data[_this.entityType];
            _this.updateList.emit(_this.list);
            _this.showToast('Updated');
        }, function (err) {
            console.log(err);
        });
    };
    EntityListComponent.prototype.deleteEntity = function (formData, index) {
        var _this = this;
        if (formData) {
            var entityService = this.entityType === 'event' ? this.eventService : this.organizationService;
            entityService.delete(formData)
                .subscribe(function (data) {
                _this.removeElement(index);
                _this.showToast('Delete');
            }, function (err) {
                console.log(err);
            });
        }
    };
    EntityListComponent.prototype.showToast = function (title) {
        this.snackBar.open((this.entityType === 'event' ? 'Event' : 'Organization') + " " + title + " Sucessfully", '', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
        });
    };
    EntityListComponent.prototype.moveToEvent = function (data) {
        if (this.entityType === 'organization') {
            this.router.navigateByUrl("admin/organization/" + data._id + "/events", data);
        }
    };
    EntityListComponent.prototype.moveToPhotos = function (data) {
        this.router.navigateByUrl("admin/organization/" + data.organizationId + "/event/" + data._id + "/images");
    };
    EntityListComponent.prototype.removeElement = function (index) {
        var list = this.list.splice(index, 1);
        this.updateList.emit(this.list);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], EntityListComponent.prototype, "entityList", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], EntityListComponent.prototype, "type", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], EntityListComponent.prototype, "applyFilter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"])(),
        __metadata("design:type", Object)
    ], EntityListComponent.prototype, "updateList", void 0);
    EntityListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'em-entity-list',
            template: __webpack_require__(/*! ./entity-list.component.html */ "./src/app/shared/components/entity-list/entity-list.component.html"),
            styles: [__webpack_require__(/*! ./entity-list.component.scss */ "./src/app/shared/components/entity-list/entity-list.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_core_services_organizations_organization_service__WEBPACK_IMPORTED_MODULE_3__["OrganizationService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _core_services_events_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"]])
    ], EntityListComponent);
    return EntityListComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"header-navbar\">\r\n    <button mat-icon-button (click)=\"toggleMenu()\">\r\n        <mat-icon >menu</mat-icon>\r\n    </button>\r\n    <span class=\"header-sidenav-content\"></span>\r\n    <button mat-raised-button color=\"warn\" (click)=\"logOut()\">Log Out</button>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-navbar {\n  background-color: #6b6969;\n  color: white; }\n  .header-navbar .header-sidenav-content {\n    flex: 1%; }\n  .header-navbar button {\n    margin: 10px; }\n"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.toggleMenuBar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.toggleMenuBar.emit();
    };
    HeaderComponent.prototype.logOut = function () {
        localStorage.clear();
        this.router.navigateByUrl('login');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "toggleMenuBar", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'em-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
    { path: '/table-list', title: 'Table List', icon: 'content_paste', class: '' },
    { path: '/typography', title: 'Typography', icon: 'library_books', class: '' }
];
var SidebarComponent = /** @class */ (function () {
    // menuItems: any[];
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        // this.menuItems = ROUTES.filter(menuItem => menuItem);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'em-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/shared/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/upload-images-dialog/upload-images-dialog.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/upload-images-dialog/upload-images-dialog.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container\">\r\n  <div class=\"dialog-container__header-container\">\r\n      <h1 class=\"dialog-container__header-container--heading\" mat-dialog-title>Upload Event Images</h1>\r\n  </div>\r\n  <div class=\"dialog-container__content-container\">\r\n      <mat-dialog-content>\r\n          <div class=\"dialog-container__content-container__uploadImage\">\r\n              <!-- <label for=\"singleFile\" class=\"dialog-container__content-container__uploadImage-label\">Upload Image: </label> -->\r\n              <button class=\"dialog-container__content-container__uploadImage-btn\" mat-raised-button color=\"primary\">\r\n                Upload Images\r\n                <input class=\"dialog-container__content-container__uploadImage-btn-input\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\r\n              </button>\r\n              <br>\r\n              <!-- <button mat-button> Upload Image</button> -->\r\n              <mat-file-upload-queue #fileUploadQueue [fileAlias]=\"'file'\" [httpUrl]=\"'http://localhost:3000/file/upload?entityId=' +id\" class=\"dialog-container__content-container__uploadImage-queue\">\r\n                <mat-file-upload (onUpload)=\"uploadDone($event)\" class=\"dialog-container__content-container__uploadImage-upload\" [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\r\n              </mat-file-upload-queue>\r\n            </div>\r\n      </mat-dialog-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/upload-images-dialog/upload-images-dialog.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/upload-images-dialog/upload-images-dialog.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%; }\n  .dialog-container__header-container--heading {\n    text-transform: capitalize; }\n  .dialog-container__content-container__uploadImage-btn {\n    width: 104px;\n    padding: 0px;\n    padding-left: 4px; }\n  ::ng-deep .dialog-container__content-container__uploadImage-btn-input {\n      position: relative;\n      left: -94px;\n      opacity: 0;\n      width: 0px; }\n  ::ng-deep .dialog-container__content-container__uploadImage-upload mat-card {\n    height: 50px;\n    padding: 5px;\n    margin-top: 10px; }\n  ::ng-deep ::ng-deep .dialog-container__content-container__uploadImage-upload mat-card .file-info {\n      font-size: 14px; }\n  ::ng-deep ::ng-deep .dialog-container__content-container__uploadImage-upload mat-card span {\n      font-size: 13px; }\n  ::ng-deep .dialog-container__content-container__uploadImage-queue button {\n    margin-right: 10px; }\n  .dialog-container__footer-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end; }\n"

/***/ }),

/***/ "./src/app/shared/components/upload-images-dialog/upload-images-dialog.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/upload-images-dialog/upload-images-dialog.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UploadImagesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImagesDialogComponent", function() { return UploadImagesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_image_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/image/image.service */ "./src/app/core/services/image/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var UploadImagesDialogComponent = /** @class */ (function () {
    function UploadImagesDialogComponent(data, dialogRef, imageService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.imageService = imageService;
        this.imageList = [];
    }
    UploadImagesDialogComponent.prototype.ngOnInit = function () {
        this.id = this.data.entityId;
    };
    UploadImagesDialogComponent.prototype.uploadDone = function (response) {
        if (response.event.type === 4 && response.event.body.status === 'success') {
            var uploaddImage = response.event.body.image;
            this.imageList.push(uploaddImage);
            this.dialogRef.close({
                upload: this.imageList
            });
        }
    };
    UploadImagesDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'em-upload-images-dialog',
            template: __webpack_require__(/*! ./upload-images-dialog.component.html */ "./src/app/shared/components/upload-images-dialog/upload-images-dialog.component.html"),
            styles: [__webpack_require__(/*! ./upload-images-dialog.component.scss */ "./src/app/shared/components/upload-images-dialog/upload-images-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _core_services_image_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"]])
    ], UploadImagesDialogComponent);
    return UploadImagesDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/material-custom/material-custom.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/material-custom/material-custom.module.ts ***!
  \******************************************************************/
/*! exports provided: MaterialCustomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialCustomModule", function() { return MaterialCustomModule; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_material_fileupload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-material-fileupload */ "./node_modules/angular-material-fileupload/matFileUpload.esm.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MaterialCustomModule = /** @class */ (function () {
    function MaterialCustomModule() {
    }
    MaterialCustomModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                angular_material_fileupload__WEBPACK_IMPORTED_MODULE_3__["MatFileUploadModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"]
            ],
            declarations: [],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                angular_material_fileupload__WEBPACK_IMPORTED_MODULE_3__["MatFileUploadModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"]
            ]
        })
    ], MaterialCustomModule);
    return MaterialCustomModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_custom_material_custom_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-custom/material-custom.module */ "./src/app/shared/material-custom/material-custom.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_delete_warning_dialog_delete_warning_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/delete-warning-dialog/delete-warning-dialog.component */ "./src/app/shared/components/delete-warning-dialog/delete-warning-dialog.component.ts");
/* harmony import */ var _components_entity_dialog_entity_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/entity-dialog/entity-dialog.component */ "./src/app/shared/components/entity-dialog/entity-dialog.component.ts");
/* harmony import */ var _components_entity_list_entity_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/entity-list/entity-list.component */ "./src/app/shared/components/entity-list/entity-list.component.ts");
/* harmony import */ var _components_upload_images_dialog_upload_images_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/upload-images-dialog/upload-images-dialog.component */ "./src/app/shared/components/upload-images-dialog/upload-images-dialog.component.ts");
/* harmony import */ var _components_entity_header_entity_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/entity-header/entity-header.component */ "./src/app/shared/components/entity-header/entity-header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_custom_material_custom_module__WEBPACK_IMPORTED_MODULE_2__["MaterialCustomModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ],
            declarations: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                _components_delete_warning_dialog_delete_warning_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteWarningDialogComponent"],
                _components_entity_dialog_entity_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EntityDialogComponent"],
                _components_entity_list_entity_list_component__WEBPACK_IMPORTED_MODULE_10__["EntityListComponent"],
                _components_upload_images_dialog_upload_images_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UploadImagesDialogComponent"],
                _components_entity_header_entity_header_component__WEBPACK_IMPORTED_MODULE_12__["EntityHeaderComponent"]
            ],
            exports: [
                _material_custom_material_custom_module__WEBPACK_IMPORTED_MODULE_2__["MaterialCustomModule"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _components_entity_list_entity_list_component__WEBPACK_IMPORTED_MODULE_10__["EntityListComponent"],
                _components_entity_header_entity_header_component__WEBPACK_IMPORTED_MODULE_12__["EntityHeaderComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"auth-outer-container\">\r\n  <div class=\"row\">\r\n    <div class=\"auth-intro-container\" >\r\n\r\n    </div>\r\n    <div class=\"auth-form-container\">\r\n      <mat-card>\r\n        <div class=\"card-container\">\r\n\r\n            <div class=\"auth-header\">\r\n                <mat-card-header>\r\n                    <mat-card-title>\r\n                      <h2>CREATE AN ACCOUNT</h2>\r\n                    </mat-card-title>\r\n                </mat-card-header>\r\n            </div>\r\n            <!-- form -->\r\n            <div class=\"auth-content\">\r\n              <form [formGroup]=\"signupForm\" (submit)=\"onSubmit()\">\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"First Name\" name=\"firstName\" formControlName=\"firstName\">\r\n                  <mat-error *ngIf=\"signupControls.firstName.hasError('required')\">\r\n                    First Name is <strong>required</strong>\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"signupControls.firstName.hasError('pattern')\">\r\n                    Provide Valid <strong>First Name e.g John</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Last Name\" name=\"lastName\" formControlName=\"lastName\">\r\n                  <mat-error *ngIf=\"signupControls.lastName.hasError('required')\">\r\n                    Last Name is <strong>required</strong>\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"signupControls.lastName.hasError('pattern')\">\r\n                    Provide Valid <strong>Last Name e.g doe</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" name=\"email\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"signupControls.email.hasError('required')\">\r\n                      Email is <strong>required</strong>.\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"signupControls.email.hasError('email')\">\r\n                        Invalid <strong>Email address</strong>.\r\n                    </mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Input\" type=\"password\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n                      <mat-error *ngIf=\"signupControls.password.hasError('required')\">\r\n                        Password is <strong>required</strong>.\r\n                      </mat-error>\r\n                </mat-form-field>\r\n                <div class=\"auth__checkbox\">\r\n                    <mat-checkbox\r\n                      [labelPosition]=\"after\">\r\n                      Accept terms and condition\r\n                    </mat-checkbox>\r\n                </div>\r\n                <div class=\"auth__button\">\r\n                    <button class=\"button--state-submit\" mat-raised-button color=\"primary\" [disabled]=\"signupForm.invalid\">CREATE AN ACCOUNT</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <div class=\"auth-footer\">\r\n              <span>Already have an account?</span>\r\n                <a routerLink=\"/login\">Login</a>\r\n            </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-outer-container .row {\n  margin: 0px;\n  height: 100vh;\n  display: flex; }\n\n.auth-outer-container .auth-intro-container {\n  background: #8a8a8a;\n  display: flex;\n  flex: 1;\n  height: 100%; }\n\n.auth-outer-container .auth-form-container {\n  width: 350px;\n  min-width: 350px;\n  max-width: 350px;\n  height: 100%;\n  padding: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.auth-outer-container .auth-form-container mat-card {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-top: 0px;\n    padding-bottom: 0px; }\n\n.auth-outer-container .auth-form-container mat-card .auth-header {\n      display: flex;\n      justify-content: flex-start; }\n\n.auth-outer-container .auth-form-container mat-card .auth-header h2 {\n        font-size: 18px;\n        font-weight: 500; }\n\n.auth-outer-container .auth-form-container .card-container {\n    display: flex;\n    flex-direction: column; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content {\n      margin-top: 10px;\n      padding: 10px; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content input.-webkit-autofill {\n        background-color: white; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content mat-form-field {\n        width: 100%; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content mat-form-field.mat-form-field {\n          font-size: 15px; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content .auth__checkbox__forgot {\n        display: flex;\n        justify-content: space-between;\n        font-size: 13px;\n        margin-top: 20px;\n        font-weight: bold; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content .auth__checkbox__forgot .forgot__password {\n          font-size: 12px;\n          text-decoration: none;\n          color: #673ab7; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content .auth__checkbox {\n        display: flex;\n        justify-content: center;\n        font-size: 13px;\n        margin-top: 20px;\n        font-weight: bold; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content .auth__checkbox .forgot__password {\n          font-size: 12px; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content .auth__button {\n        display: flex;\n        justify-content: center;\n        margin-top: 25px; }\n\n.auth-outer-container .auth-form-container .card-container .auth-content .auth__button .button--state-submit {\n          width: 100%; }\n\n.auth-outer-container .auth-form-container .card-container .auth-footer {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      margin-top: 25px;\n      font-size: 13px;\n      font-weight: bold; }\n\n.auth-outer-container .auth-form-container .card-container .auth-footer a {\n        color: #673ab7;\n        text-decoration: none; }\n\n@media (max-width: 767.98px) {\n  .auth-form-container .auth-form-container {\n    width: 300px;\n    min-width: 300px;\n    max-width: 300px; } }\n\n@media (max-width: 575.98px) {\n  .auth-outer-container .auth-form-container {\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%; }\n    .auth-outer-container .auth-form-container mat-card {\n      padding: 0px 20px;\n      width: 100%; }\n      .auth-outer-container .auth-form-container mat-card .auth-header {\n        display: flex;\n        justify-content: center; }\n        .auth-outer-container .auth-form-container mat-card .auth-header h2 {\n          font-size: 21px; }\n    .auth-outer-container .auth-form-container .card-container .auth-content {\n      padding: 0px 40px; }\n      .auth-outer-container .auth-form-container .card-container .auth-content .auth__checkbox__forgot {\n        display: flex;\n        flex-direction: column;\n        align-items: center; }\n        .auth-outer-container .auth-form-container .card-container .auth-content .auth__checkbox__forgot .forgot__password {\n          margin-top: 16px; }\n  .auth-outer-container .auth-intro-container {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../core/services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, formBuilder, route, snackBar) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.snackBar = snackBar;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            firstName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z ,.'-]+$")
                ]
            ],
            lastName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z ,.'-]+$"),
                ]
            ],
            username: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]
            ],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email
                ]
            ],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ]
            ]
        });
    };
    Object.defineProperty(SignupComponent.prototype, "signupControls", {
        get: function () {
            return this.signupForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.signupForm.invalid) {
            var formData = this.signupForm.value;
            this.authService
                .signup(formData)
                .subscribe(function (data) {
                _this.route.navigate(['/admin']);
            }, function (err) {
                _this.snackBar.open(String(err.error), '', {
                    duration: 5000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
                console.log(err);
            });
        }
        else {
            console.log('Please Provide Valid Inputs');
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'em-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/constant/eman-constant.ts":
/*!***************************************!*\
  !*** ./src/constant/eman-constant.ts ***!
  \***************************************/
/*! exports provided: EmanConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmanConstant", function() { return EmanConstant; });
var EmanConstant = /** @class */ (function () {
    function EmanConstant() {
    }
    EmanConstant.eman_user = 'eman_user';
    EmanConstant.eman_token = 'eman_token';
    return EmanConstant;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\office-project\new-eman\e-man\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map