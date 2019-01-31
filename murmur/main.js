(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/AuthGuard/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/AuthGuard/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
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
    function AuthGuard(mur, router) {
        this.mur = mur;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.mur.Check_scatter().then(function (result) {
            console.log("Guard Result " + result);
            if (result) {
                return true;
            }
            else {
                _this.router.navigate([{ outlets: { primary: ['login'], feed: ['login'] } }]);
                return false;
            }
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_2__["MurmurService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mainapp></app-mainapp>"

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
        this.title = 'webapp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _mainapp_mainapp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mainapp/mainapp.component */ "./src/app/mainapp/mainapp.component.ts");
/* harmony import */ var _mainappone_mainappone_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mainappone/mainappone.component */ "./src/app/mainappone/mainappone.component.ts");
/* harmony import */ var _mainapptwo_mainapptwo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mainapptwo/mainapptwo.component */ "./src/app/mainapptwo/mainapptwo.component.ts");
/* harmony import */ var _wisperchatlist_wisperchatlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wisperchatlist/wisperchatlist.component */ "./src/app/wisperchatlist/wisperchatlist.component.ts");
/* harmony import */ var _userprofilelist_userprofilelist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./userprofilelist/userprofilelist.component */ "./src/app/userprofilelist/userprofilelist.component.ts");
/* harmony import */ var _sharepost_sharepost_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sharepost/sharepost.component */ "./src/app/sharepost/sharepost.component.ts");
/* harmony import */ var _commentpost_commentpost_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./commentpost/commentpost.component */ "./src/app/commentpost/commentpost.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _userchat_userchat_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./userchat/userchat.component */ "./src/app/userchat/userchat.component.ts");
/* harmony import */ var _userpersonalfeed_userpersonalfeed_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./userpersonalfeed/userpersonalfeed.component */ "./src/app/userpersonalfeed/userpersonalfeed.component.ts");
/* harmony import */ var _postmurmur_postmurmur_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./postmurmur/postmurmur.component */ "./src/app/postmurmur/postmurmur.component.ts");
/* harmony import */ var _editmyprofile_editmyprofile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./editmyprofile/editmyprofile.component */ "./src/app/editmyprofile/editmyprofile.component.ts");
/* harmony import */ var _logincontent_logincontent_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./logincontent/logincontent.component */ "./src/app/logincontent/logincontent.component.ts");
/* harmony import */ var _followers_followers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./followers/followers.component */ "./src/app/followers/followers.component.ts");
/* harmony import */ var _following_following_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./following/following.component */ "./src/app/following/following.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/notifications/notifications.component.ts");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var _AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./AuthGuard/auth.guard */ "./src/app/AuthGuard/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























// import { MurmurdsbpnlComponent } from './murmurdsbpnl/murmurdsbpnl.component';
// import { MurmurdsbgblComponent } from './murmurdsbgbl/murmurdsbgbl.component';


var routes = [
    { path: '', component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_15__["FeedComponent"], canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: '', component: _userprofilelist_userprofilelist_component__WEBPACK_IMPORTED_MODULE_12__["UserprofilelistComponent"], outlet: 'feed', canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'login', component: _logincontent_logincontent_component__WEBPACK_IMPORTED_MODULE_20__["LogincontentComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], outlet: 'feed' },
    { path: 'userprofilelist', component: _userprofilelist_userprofilelist_component__WEBPACK_IMPORTED_MODULE_12__["UserprofilelistComponent"], outlet: 'feed', canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'user', component: _userprofilelist_userprofilelist_component__WEBPACK_IMPORTED_MODULE_12__["UserprofilelistComponent"], outlet: 'feed', canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'chat', component: _wisperchatlist_wisperchatlist_component__WEBPACK_IMPORTED_MODULE_11__["WisperchatlistComponent"], outlet: 'feed', canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'userchat', component: _userchat_userchat_component__WEBPACK_IMPORTED_MODULE_16__["UserchatComponent"], canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'share', component: _sharepost_sharepost_component__WEBPACK_IMPORTED_MODULE_13__["SharepostComponent"], canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'comment', component: _commentpost_commentpost_component__WEBPACK_IMPORTED_MODULE_14__["CommentpostComponent"], canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'create', component: _postmurmur_postmurmur_component__WEBPACK_IMPORTED_MODULE_18__["PostmurmurComponent"], canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'userpost', component: _userpersonalfeed_userpersonalfeed_component__WEBPACK_IMPORTED_MODULE_17__["UserpersonalfeedComponent"], canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'editprofile', component: _editmyprofile_editmyprofile_component__WEBPACK_IMPORTED_MODULE_19__["EditmyprofileComponent"], canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'followers', component: _followers_followers_component__WEBPACK_IMPORTED_MODULE_21__["FollowersComponent"], canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'following', component: _following_following_component__WEBPACK_IMPORTED_MODULE_22__["FollowingComponent"], canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'notification', component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_23__["NotificationsComponent"], outlet: 'feed', canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _mainapp_mainapp_component__WEBPACK_IMPORTED_MODULE_8__["MainappComponent"],
                _mainappone_mainappone_component__WEBPACK_IMPORTED_MODULE_9__["MainapponeComponent"],
                _mainapptwo_mainapptwo_component__WEBPACK_IMPORTED_MODULE_10__["MainapptwoComponent"],
                _wisperchatlist_wisperchatlist_component__WEBPACK_IMPORTED_MODULE_11__["WisperchatlistComponent"],
                _userprofilelist_userprofilelist_component__WEBPACK_IMPORTED_MODULE_12__["UserprofilelistComponent"],
                _sharepost_sharepost_component__WEBPACK_IMPORTED_MODULE_13__["SharepostComponent"],
                _commentpost_commentpost_component__WEBPACK_IMPORTED_MODULE_14__["CommentpostComponent"],
                _feed_feed_component__WEBPACK_IMPORTED_MODULE_15__["FeedComponent"],
                _userchat_userchat_component__WEBPACK_IMPORTED_MODULE_16__["UserchatComponent"],
                _userpersonalfeed_userpersonalfeed_component__WEBPACK_IMPORTED_MODULE_17__["UserpersonalfeedComponent"],
                _postmurmur_postmurmur_component__WEBPACK_IMPORTED_MODULE_18__["PostmurmurComponent"],
                _editmyprofile_editmyprofile_component__WEBPACK_IMPORTED_MODULE_19__["EditmyprofileComponent"],
                _logincontent_logincontent_component__WEBPACK_IMPORTED_MODULE_20__["LogincontentComponent"],
                _followers_followers_component__WEBPACK_IMPORTED_MODULE_21__["FollowersComponent"],
                _following_following_component__WEBPACK_IMPORTED_MODULE_22__["FollowingComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_23__["NotificationsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [_murmur_service__WEBPACK_IMPORTED_MODULE_24__["MurmurService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/commentpost/commentpost.component.css":
/*!*******************************************************!*\
  !*** ./src/app/commentpost/commentpost.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n    /*display: flex;*/\n    /*flex-direction: column;*/\n    height: 100%;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n.headerone{\n    background-color: #ffffff;\n    padding: 10px 16px;\n    height: 6%;\n    width: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n}\n.userimage {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n.userimage1 {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n.footerone {\n    background-color: #dcdcdc;\n    position: absolute;\n    bottom: 0;\n    min-height: 80px;\n    width: 100%;\n}\n.formcolor{\n    background-color: #f7f8fa;\n    border: 1px solid #f7f8fa;\n}\n.threeicons {\n    font-size: 20px;\n}\n.threeicons:hover {\n    color: #a09fed;\n}\n.icon {\n    max-width: 70%;\n}\n.countdiv {\n    padding: 0;\n    margin: auto;\n    text-align: left;\n}\n.countdivp{\n    margin: 0;\n}\n.icondiv {\n    padding-right: 0;\n}\n.countselected {\n    color: #a09fed;\n}\n.cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHBvc3QvY29tbWVudHBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7Q0FDYjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDRFQUE0RTtJQUM1RSxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksVUFBVTtDQUNiO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRwb3N0L2NvbW1lbnRwb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R5bGVvbmV7XG4gICAgLypkaXNwbGF5OiBmbGV4OyovXG4gICAgLypmbGV4LWRpcmVjdGlvbjogY29sdW1uOyovXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbn1cbi5oZWFkZXJvbmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgaGVpZ2h0OiA2JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi51c2VyaW1hZ2Uge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udXNlcmltYWdlMSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5mb290ZXJvbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2RjZGM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmZvcm1jb2xvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmN2Y4ZmE7XG59XG4udGhyZWVpY29ucyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLnRocmVlaWNvbnM6aG92ZXIge1xuICAgIGNvbG9yOiAjYTA5ZmVkO1xufVxuLmljb24ge1xuICAgIG1heC13aWR0aDogNzAlO1xufVxuLmNvdW50ZGl2IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvdW50ZGl2cHtcbiAgICBtYXJnaW46IDA7XG59XG4uaWNvbmRpdiB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5jb3VudHNlbGVjdGVkIHtcbiAgICBjb2xvcjogI2EwOWZlZDtcbn1cbi5jdXJzb3J7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/commentpost/commentpost.component.html":
/*!********************************************************!*\
  !*** ./src/app/commentpost/commentpost.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- This sesction is for Detailed User Feed of people. Starts Here -->\n\n<div class=\"styleone\">\n\t<!-- This header is open header for User psersonal Profile. Starts Here -->\n\t<header class=\"headerone\">\n\t\t<a class=\"cursor\" (click)=\"goBack()\"><i class=\"material-icons mt-2\">keyboard_backspace</i></a>\n\t</header>\n\t<!-- This header is open header for User psersonal Profile. Ends Here -->\n\n\t<div style=\"display: block;height: 94%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;padding-bottom: 20px;\">\n\n\t\t<div class=\"card mt-0\" *ngFor=\"let mur of Murmur_Posts; let i = index\">\n\t\t\t<div class=\"card-body\" *ngIf = \"mur.action_type == 'murmur'\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t<a class=\"cursor\" (click)=\"otherUser(mur.Acc_id)\"><img class=\"userimage\" src={{mur.image}}></a>\n\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t<a><h5 class=\"mb-1\" style=\"font-weight: 600;\">{{mur.account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.Acc_id}}</span></h5></a>\n\t\t\t\t\t\t\t<a><p>{{mur.murmur.message}}</p></a>\n\t\t\t\t\t\t\t<a *ngIf = \" mur.murmur.attached_url !== ''\" ><img alt=\"\" style=\"width: 100%;border-radius: 10px;\" class=\"mb-4\" src={{mur.murmur.attached_url}}></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\" *ngIf=\"!mur.murmur.snooped\"><a class=\"cursor\" (click)=\"snoop()\"><img class=\"icon\" src=\"assets/img/like.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\" *ngIf=\"mur.murmur.snooped\"><a class=\"cursor\" (click)=\"snooped()\"><img class=\"icon\" src=\"assets/img/like_color.png\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.snoop_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a class=\"cursor\" ><img class=\"icon\" src=\"assets/img/comment.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.comment_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a routerLink=\"/share\" ><img class=\"icon\" src=\"assets/img/share.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.yell_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"card-body\" *ngIf = \"mur.action_type == 'yell'\">\n\t\t\t\t<div class=\"row\">\n                    <div class=\"col-1\">\n                        <a class=\"cursor\" (click)=\"otherUser(mur.Acc_id)\"><img class=\"userimage\" src={{mur.image}}></a>\n                    </div>            \n\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{mur.account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.Acc_id}}</span></h6></a>\n\t\t\t\t\t\t\t<a><p>{{mur.yell.extra_comment}}</p></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-12 mb-4\">\n\t\t\t\t\t\t\t<div class=\"card mt-0\" style=\"border-radius: 10px;\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"cursor\" (click)=\"otherUser(mur.yell.mur_acc_id)\"><img class=\"userimage\" src={{mur.yell.mur_acc_image}}></a>\n\t\t\t\t\t\t\t\t\t</div>            \n\t\t\t\t\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{mur.yell.mur_account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.yell.mur_acc_id}}</span></h6></a>\n\t\t\t\t\t\t\t\t\t\t\t<a><p>{{mur.yell.message}}</p></a>\n\t\t\t\t\t\t\t\t\t\t\t<a *ngIf = \" mur.yell.attached_url !== ''\" ><img alt=\"\" style=\"width: 100%;border-radius: 10px;\" class=\"mb-4\" src={{mur.yell.attached_url}}></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\" *ngIf=\"!mur.yell.snooped\"><a class=\"cursor\" (click)=\"snoop()\"><img class=\"icon\" src=\"assets/img/like.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\" *ngIf=\"mur.yell.snooped\"><a class=\"cursor\" (click)=\"snooped()\"><img class=\"icon\" src=\"assets/img/like_color.png\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.yell.snoop_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a routerLink=\"/comment\" (click)=\"cmt_ID(i)\"><img class=\"icon\" src=\"assets/img/comment.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.yell.comment_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n                </div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card mt-0\">\n\t\t  <div class=\"card-body\" style=\"background-color: #dcdcdc;\">\n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col-1\" style=\"margin: auto;text-align: right;padding: 0;\">\n\t\t    \t\t<a><img class=\"userimage1\" src={{My_Profile.profile_pic}}></a>\n\t\t    \t</div>\t\t\t\n\t\t\t\t<div class=\"col-9\" style=\"margin: auto;\">\n\t\t\t\t\t<input class=\"form-control form-control-lg formcolor\" type=\"text\" (ngModelChange)=\"check_length()\" [(ngModel)]=\"cmt\" placeholder=\"Type a message here\">\n\t\t\t\t\t<div *ngIf=\"errormsg\">\n\t\t\t\t\t\t<span style=\"color:red\"><i>{{ errorcomments }} </i></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2\" style=\"margin: auto;\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" [disabled] = \"errormsg\" (click)=\"comment()\" style=\"background-color: #a09fed;border-color: #a09fed;\">Comment</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\n\t\t<div *ngFor=\"let cmt of Murmur_Commetnts; let i = index\">\n\t\t\t<div class=\"card mt-0\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t\t<a class=\"cursor\" (click)=\"otherUser(cmt.Acc_id)\"><img class=\"userimage\" src={{cmt.image}}></a>\n\t\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t\t<div class=\"col-10\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{cmt.account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{cmt.Acc_id}}</span></h6></a>\n\t\t\t\t\t\t\t\t<a><p>{{cmt.comment}}</p></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-1\" style=\"margin: auto;\" >\n\t\t\t\t\t\t\t<a *ngIf=\"cmt.status\" class=\"cursor\" (click)=\"uncomment(i)\"><i class=\"material-icons mt-2\">delete</i></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>\n\n<!-- This sesction is for Detailed User Feed of people. Ends Here -->\n\n<button id=\"openModalButton\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Open Modal</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\"   tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" #closeBtn>\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t<div class=\"modal-body\" style=\"font-size: 20px;margin: auto;\">\n\t\t\t{{resMes}}\n\t\t</div>\n\t\t<div class=\"modal-footer\" style=\"margin: auto;\">\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>  "

/***/ }),

/***/ "./src/app/commentpost/commentpost.component.ts":
/*!******************************************************!*\
  !*** ./src/app/commentpost/commentpost.component.ts ***!
  \******************************************************/
/*! exports provided: CommentpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentpostComponent", function() { return CommentpostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentpostComponent = /** @class */ (function () {
    function CommentpostComponent(ms, router, spin) {
        this.ms = ms;
        this.router = router;
        this.spin = spin;
        this.Murmur_Commetnts = [];
        this.Murmur_Posts = [];
        this.My_Profile = {};
        this.cmt = '';
        this.errormsg = false;
        this.errorcomments = "Max 256 charecters only allowed";
    }
    CommentpostComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.ms.Acc_Profile.length == 0) {
            this.ms.getAccountProfile(localStorage.getItem(this.ms.Scatter_account_name).split('-')[0]).then(function (res) {
                _this.My_Profile = res[0];
            });
        }
        else {
            this.My_Profile = this.ms.Acc_Profile[0];
        }
        this.ms.getCommentData().then(function (res) {
            if (res['id'] != undefined) {
                if (res['type'] == 'murmur') {
                    // console.log("mur")
                    _this.ms.getMurmurByIndex(res['id']).then(function (mur) {
                        _this.Murmur_Posts.push(mur);
                        // console.log(this.Murmur_Posts)
                        if (_this.Murmur_Posts[0].action_type == 'murmur') {
                            _this.ms.getMurmurComments(_this.Murmur_Posts[0].murmur.murmur_id).then(function (resp) {
                                _this.Murmur_Commetnts = resp;
                                // console.log(res)
                            });
                        }
                        else {
                            _this.ms.getYellComments(_this.Murmur_Posts[0].yell.yell_id).then(function (resp) {
                                _this.Murmur_Commetnts = resp;
                                // console.log(res)
                            });
                        }
                    });
                }
                else {
                    // console.log("mymur")
                    _this.ms.getMyMurmurByIndex(res['id']).then(function (mur) {
                        _this.Murmur_Posts.push(mur);
                        // console.log(this.Murmur_Posts)
                        if (_this.Murmur_Posts[0].action_type == 'murmur') {
                            _this.ms.getMurmurComments(_this.Murmur_Posts[0].murmur.murmur_id).then(function (resp) {
                                _this.Murmur_Commetnts = resp;
                                // console.log(res)
                            });
                        }
                        else {
                            _this.ms.getYellComments(_this.Murmur_Posts[0].yell.yell_id).then(function (resp) {
                                _this.Murmur_Commetnts = resp;
                                // console.log(res)
                            });
                        }
                    });
                }
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    CommentpostComponent.prototype.cmt_ID = function (id) {
        var _this = this;
        this.ms.getCommentData().then(function (res) {
            _this.ms.setCommentData(id, res['type']);
        });
    };
    CommentpostComponent.prototype.snoop = function () {
        var _this = this;
        this.ms.getCommentData().then(function (res) {
            _this.ms.Snoop(res['id'], res['type']).then(function (res) {
                console.log(res);
                if (res['Error']) {
                    if (res['errMesg'] == undefined)
                        res['errMesg'] = 'Internal Server Error';
                    console.log(res['errMesg']);
                    _this.resMes = 'Error Message: ' + res['errMesg'];
                    document.getElementById("openModalButton").click();
                }
                else {
                    console.log(res['transId']);
                    _this.resMes = 'Your Snoop is submitted into blockchain'; // 'Transaction ID: '+res['transId']
                    document.getElementById("openModalButton").click();
                    if (_this.Murmur_Posts[0].action_type == 'murmur') {
                        _this.Murmur_Posts[0].murmur.snooped = 1;
                        _this.Murmur_Posts[0].murmur.snoop_count += 1;
                        // this.ms.setSnoopedMurmur(res['id'], res['type'])
                    }
                    else {
                        _this.Murmur_Posts[0].yell.snooped = 1;
                        _this.Murmur_Posts[0].yell.snoop_count += 1;
                        // this.ms.setSnoopedMurmur(res['id'], res['type'])
                    }
                }
            });
        });
    };
    CommentpostComponent.prototype.snooped = function () {
        var _this = this;
        this.ms.getCommentData().then(function (res) {
            _this.ms.unSnoop(res['id'], res['type']).then(function (res) {
                console.log(res);
                if (res['Error']) {
                    if (res['errMesg'] == undefined)
                        res['errMesg'] = 'Internal Server Error';
                    console.log(res['errMesg']);
                    _this.resMes = 'Error Message: ' + res['errMesg'];
                    document.getElementById("openModalButton").click();
                }
                else {
                    console.log(res['transId']);
                    _this.resMes = 'Your UnSnoop is submitted into blockchain'; // 'Transaction ID: '+res['transId']
                    document.getElementById("openModalButton").click();
                    if (_this.Murmur_Posts[0].action_type == 'murmur') {
                        _this.Murmur_Posts[0].murmur.snooped = 0;
                        _this.Murmur_Posts[0].murmur.snoop_count -= 1;
                    }
                    else {
                        _this.Murmur_Posts[0].yell.snooped = 0;
                        _this.Murmur_Posts[0].yell.snoop_count -= 1;
                    }
                }
            });
        });
    };
    CommentpostComponent.prototype.otherUser = function (name) {
        this.ms.setOtherUserName(name.split('@')[1]);
        this.router.navigate([{ outlets: { primary: ['userpost'], feed: ['userprofilelist'] } }]);
    };
    CommentpostComponent.prototype.comment_murmur = function () {
        var _this = this;
        this.spin.show();
        this.ms.getCommentData().then(function (res) {
            if (res['id'] != undefined) {
                var mur_1 = [];
                if (res['type'] == 'murmur') {
                    // console.log("mur")
                    _this.ms.getMurmurByIndex(res['id']).then(function (resp) {
                        mur_1.push(resp);
                        // console.log(mur)
                        if (mur_1[0].action_type == 'murmur') {
                            _this.ms.commentmurmur(mur_1[0].murmur.murmur_id, _this.cmt).then(function (res) {
                                console.log(res);
                                if (res['Error']) {
                                    if (res['errMesg'] == undefined)
                                        res['errMesg'] = 'Internal Server Error';
                                    console.log(res['errMesg']);
                                    _this.resMes = 'Error Message: ' + res['errMesg'];
                                    document.getElementById("openModalButton").click();
                                }
                                else {
                                    console.log(res['transId']);
                                    _this.resMes = 'Your Comment is submitted into blockchain'; // 'Transaction ID: '+res['transId']
                                    document.getElementById("openModalButton").click();
                                    _this.cmt = '';
                                }
                            });
                        }
                        else {
                            _this.ms.commentyell(mur_1[0].yell.yell_id, _this.cmt).then(function (res) {
                                console.log(res);
                                if (res['Error']) {
                                    if (res['errMesg'] == undefined)
                                        res['errMesg'] = 'Internal Server Error';
                                    console.log(res['errMesg']);
                                    _this.resMes = 'Error Message: ' + res['errMesg'];
                                    document.getElementById("openModalButton").click();
                                }
                                else {
                                    console.log(res['transId']);
                                    _this.resMes = 'Your Comment is submitted into blockchain'; // 'Transaction ID: '+res['transId']
                                    document.getElementById("openModalButton").click();
                                    _this.cmt = '';
                                }
                            });
                        }
                    });
                }
                else {
                    // console.log("mur")
                    _this.ms.getMyMurmurByIndex(res['id']).then(function (resp) {
                        mur_1.push(resp);
                        // console.log(mur)
                        if (mur_1[0].action_type == 'murmur') {
                            _this.ms.commentmurmur(mur_1[0].murmur.murmur_id, _this.cmt).then(function (res) {
                                console.log(res);
                                if (res['Error']) {
                                    if (res['errMesg'] == undefined)
                                        res['errMesg'] = 'Internal Server Error';
                                    console.log(res['errMesg']);
                                    _this.resMes = 'Error Message: ' + res['errMesg'];
                                    document.getElementById("openModalButton").click();
                                }
                                else {
                                    console.log(res['transId']);
                                    _this.resMes = 'Your Comment is submitted into blockchain'; // 'Transaction ID: '+res['transId']
                                    document.getElementById("openModalButton").click();
                                    _this.cmt = '';
                                }
                            });
                        }
                        else {
                            _this.ms.commentyell(mur_1[0].yell.yell_id, _this.cmt).then(function (res) {
                                console.log(res);
                                if (res['Error']) {
                                    if (res['errMesg'] == undefined)
                                        res['errMesg'] = 'Internal Server Error';
                                    console.log(res['errMesg']);
                                    _this.resMes = 'Error Message: ' + res['errMesg'];
                                    document.getElementById("openModalButton").click();
                                }
                                else {
                                    console.log(res['transId']);
                                    _this.resMes = 'Your Comment is submitted into blockchain'; // 'Transaction ID: '+res['transId']
                                    document.getElementById("openModalButton").click();
                                    _this.cmt = '';
                                }
                            });
                        }
                    });
                }
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    CommentpostComponent.prototype.uncomment = function (id) {
        var _this = this;
        console.log(this.Murmur_Commetnts[id].comment_id);
        this.ms.getCommentData().then(function (res) {
            if (res['id'] != undefined) {
                var mur_2 = [];
                if (res['type'] == 'murmur') {
                    _this.ms.getMurmurByIndex(res['id']).then(function (resp) {
                        mur_2.push(resp);
                        if (mur_2[0].action_type == 'murmur') {
                            _this.ms.uncommentmurmur(_this.Murmur_Commetnts[id].comment_id).then(function (res) {
                                console.log(res);
                                if (res['Error']) {
                                    if (res['errMesg'] == undefined)
                                        res['errMesg'] = 'Internal Server Error';
                                    console.log(res['errMesg']);
                                    _this.resMes = 'Error Message: ' + res['errMesg'];
                                    document.getElementById("openModalButton").click();
                                }
                                else {
                                    console.log(res['transId']);
                                    _this.resMes = 'Your UnComment is submitted into blockchain';
                                    document.getElementById("openModalButton").click();
                                    _this.cmt = '';
                                }
                            });
                        }
                        else {
                            _this.ms.uncommentyell(_this.Murmur_Commetnts[id].comment_id).then(function (res) {
                                console.log(res);
                                if (res['Error']) {
                                    if (res['errMesg'] == undefined)
                                        res['errMesg'] = 'Internal Server Error';
                                    console.log(res['errMesg']);
                                    _this.resMes = 'Error Message: ' + res['errMesg'];
                                    document.getElementById("openModalButton").click();
                                }
                                else {
                                    console.log(res['transId']);
                                    _this.resMes = 'Your UnComment is submitted into blockchain';
                                    document.getElementById("openModalButton").click();
                                    _this.cmt = '';
                                }
                            });
                        }
                    });
                }
                else {
                    // console.log("mymur")
                    _this.ms.getMyMurmurByIndex(res['id']).then(function (resp) {
                        mur_2.push(resp);
                        console.log(mur_2);
                        _this.ms.uncommentmurmur(_this.Murmur_Commetnts[id].comment_id).then(function (res) {
                            console.log(res);
                            if (res['Error']) {
                                if (res['errMesg'] == undefined)
                                    res['errMesg'] = 'Internal Server Error';
                                console.log(res['errMesg']);
                                _this.resMes = 'Error Message: ' + res['errMesg'];
                                document.getElementById("openModalButton").click();
                            }
                            else {
                                console.log(res['transId']);
                                _this.resMes = 'Your UnComment is submitted into blockchain';
                                document.getElementById("openModalButton").click();
                                _this.cmt = '';
                            }
                        });
                    });
                }
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    CommentpostComponent.prototype.comment = function () {
        if (this.cmt.toString().length <= 256)
            this.comment_murmur();
        else
            this.check_length();
    };
    CommentpostComponent.prototype.check_length = function () {
        if (this.cmt.toString().length > 256)
            this.errormsg = true;
        else
            this.errormsg = false;
    };
    CommentpostComponent.prototype.goBack = function () {
        this.ms.goBack();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeBtn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CommentpostComponent.prototype, "closeBtn", void 0);
    CommentpostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commentpost',
            template: __webpack_require__(/*! ./commentpost.component.html */ "./src/app/commentpost/commentpost.component.html"),
            styles: [__webpack_require__(/*! ./commentpost.component.css */ "./src/app/commentpost/commentpost.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], CommentpostComponent);
    return CommentpostComponent;
}());



/***/ }),

/***/ "./src/app/editmyprofile/editmyprofile.component.css":
/*!***********************************************************!*\
  !*** ./src/app/editmyprofile/editmyprofile.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: 100%;\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n\n.headerone{\n\n\tbackground-color: #ffffff;\n\tpadding: 10px 16px;\n\theight: 6%;\n\twidth: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n}\n\n.footerone {\n\n\tbackground-color: #ffffff;\n\tposition: absolute;\n\tbottom: 0;\n\tmin-height: 80px;\n    width: 100%;\n}\n\n.formcolor{\n\n\tbackground-color: #f7f8fa;\n\tborder: 1px solid #f7f8fa;\n}\n\n.threeicons {\n\tfont-size: 20px;\n}\n\n.threeicons:hover {\n\tcolor: #a09fed;\n}\n\n.cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG15cHJvZmlsZS9lZGl0bXlwcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsa0JBQWtCO0NBQ2xCLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2IsY0FBYztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtDQUNiOztBQUVEOztDQUVDLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFlBQVk7SUFDVCw0RUFBNEU7SUFDNUUsb0JBQW9COztDQUV2Qjs7QUFFRDs7Q0FFQyxZQUFZO0lBQ1QsYUFBYTtDQUNoQjs7QUFFRDs7Q0FFQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixpQkFBaUI7SUFDZCxZQUFZO0NBQ2Y7O0FBRUQ7O0NBRUMsMEJBQTBCO0NBQzFCLDBCQUEwQjtDQUMxQjs7QUFHRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2VkaXRteXByb2ZpbGUvZWRpdG15cHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0eWxlb25le1xuXG5cdC8qZGlzcGxheTogZmxleDsqL1xuXHQvKmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Ki9cblx0aGVpZ2h0OiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG59XG5cbi5oZWFkZXJvbmV7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0cGFkZGluZzogMTBweCAxNnB4O1xuXHRoZWlnaHQ6IDYlO1xuXHR3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxufVxuXG4udXNlcmltYWdlIHtcblxuXHR3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5mb290ZXJvbmUge1xuXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAwO1xuXHRtaW4taGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybWNvbG9ye1xuXG5cdGJhY2tncm91bmQtY29sb3I6ICNmN2Y4ZmE7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNmN2Y4ZmE7XG59XG5cblxuLnRocmVlaWNvbnMge1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbi50aHJlZWljb25zOmhvdmVyIHtcblx0Y29sb3I6ICNhMDlmZWQ7XG59XG5cbi5jdXJzb3J7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/editmyprofile/editmyprofile.component.html":
/*!************************************************************!*\
  !*** ./src/app/editmyprofile/editmyprofile.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"styleone\">\n\n  <!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n  <header class=\"headerone\">\n    <a class=\"cursor\" (click)=\"goBack()\"><i class=\"material-icons mt-2\">keyboard_backspace</i></a>\n  </header>\n  <!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\n  <div style=\"display: block;height: 94%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;padding: 20px;\">\n    \n    <div class=\"card mt-0 mb-3\">\n      <div class=\"card-body\">\n        <h5>My Profile</h5>\n        <hr>\n        <br>\n        <form>\n        <div class=\"form-row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n            <label for=\"formGroupExampleInput\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder={{My_Profile.account_name}} readonly>\n          </div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n            <label for=\"formGroupExampleInput\">Bio</label>\n            <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" readonly>{{My_Profile.bio}}</textarea>\n          </div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"col\">\n            <div class=\"form-group\">\n            <label for=\"formGroupExampleInput\">Gender</label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder={{My_Profile.sex}} readonly>\n          </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n            <label for=\"formGroupExampleInput\">Date of birth</label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder={{My_Profile.dob}} readonly>\n          </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n            <label for=\"formGroupExampleInput\">Location</label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder={{My_Profile.location}} readonly>\n          </div>\n          </div>\n        </div>\n      </form>\n      </div>\n    </div>\n\n    <div class=\"card mt-0\">\n      <div class=\"card-body\">\n        <h5>Edit Profile</h5>\n        <hr>\n        <br>\n        <form>\n        <div class=\"form-group row\">\n          <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Name</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Change your name\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Bio</label>\n          <div class=\"col-sm-10\">\n            <textarea class=\"form-control\" id=\"userbio\" rows=\"3\"></textarea>\n          </div>\n        </div>\n        <fieldset class=\"form-group\">\n          <div class=\"row\">\n            <legend class=\"col-form-label col-sm-2 pt-0\">Gender</legend>\n            <div class=\"col-sm-10\">\n              <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"Male\">\n                <label class=\"form-check-label\" for=\"gridRadios1\">\n                  Male\n                </label>\n              </div>\n              <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"Female\">\n                <label class=\"form-check-label\" for=\"gridRadios2\">\n                  Female\n                </label>\n              </div>\n            </div>\n          </div>\n        </fieldset>\n        <div class=\"form-group row\">\n          <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">DOB</label>\n          <div class=\"col-sm-10\">\n            <input type=\"date\" class=\"form-control\" id=\"date1\" placeholder=\"Change your name\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Location</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" id=\"location\" placeholder=\"Enter your location\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Upload Image</label>\n          <div class=\"col-sm-10\">\n            <input type=\"file\" class=\"form-control-file\" (change)=\"onFileChanged($event)\" id=\"exampleFormControlFile1\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-sm-10\">\n            <button (click)=\"update()\" class=\"btn btn-primary\" style=\"background-color: #a09fed;border-color: #a09fed;\">Update</button>\n          </div>\n        </div>\n      </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- This sesction is for Detailed User Feed of people. Ends Here -->\n<button id=\"openModalButton\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Open Modal</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\"   tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" #closeBtn>\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t<div class=\"modal-body\" style=\"font-size: 20px;margin: auto;\">\n\t\t\t{{resMes}}\n\t\t</div>\n\t\t<div class=\"modal-footer\" style=\"margin: auto;\">\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>  \n"

/***/ }),

/***/ "./src/app/editmyprofile/editmyprofile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/editmyprofile/editmyprofile.component.ts ***!
  \**********************************************************/
/*! exports provided: EditmyprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditmyprofileComponent", function() { return EditmyprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditmyprofileComponent = /** @class */ (function () {
    function EditmyprofileComponent(ms, router) {
        this.ms = ms;
        this.router = router;
        this.My_Profile = {};
        this.resMes = '';
    }
    EditmyprofileComponent.prototype.ngOnInit = function () {
        this.getAccountDetail();
    };
    EditmyprofileComponent.prototype.getAccountDetail = function () {
        var _this = this;
        if (localStorage.getItem(this.ms.Scatter_account_name) != null) {
            this.name = localStorage.getItem(this.ms.Scatter_account_name).split('-')[0];
            this.ms.getAccountDetail(localStorage.getItem(this.ms.Scatter_account_name).split('-')[0]).then(function (res) {
                _this.My_Profile = res[0];
                if (_this.My_Profile.sex == 'Male')
                    document.getElementById("gridRadios1").checked = true;
                else
                    document.getElementById("gridRadios2").checked = true;
            });
        }
        else
            this.router.navigate(['/']);
    };
    EditmyprofileComponent.prototype.onFileChanged = function (event) {
        this.profile_image = event.target.files[0];
    };
    EditmyprofileComponent.prototype.update_profile = function () {
        var _this = this;
        this.profile_details = {
            name: this.My_Profile.account_name,
            bio: this.My_Profile.bio,
            dob: this.My_Profile.dob,
            sex: this.My_Profile.sex,
            location: this.My_Profile.location
        };
        if (document.getElementById("inputEmail3").value != '')
            this.profile_details.name = document.getElementById("inputEmail3").value;
        if (document.getElementById("userbio").value != '')
            this.profile_details.bio = document.getElementById("userbio").value;
        if (document.getElementById("location").value != '')
            this.profile_details.location = document.getElementById("location").value;
        if (document.getElementById("date1").valueAsDate != null)
            this.profile_details.dob = document.getElementById("date1").value;
        if (document.querySelector('input[name="gridRadios"]:checked').value != this.My_Profile.sex)
            this.profile_details.sex = document.querySelector('input[name="gridRadios"]:checked').value;
        if (this.profile_image == undefined)
            this.profile_image = this.My_Profile.profile_pic;
        console.log(this.profile_details);
        var objJsonForm = JSON.stringify(this.profile_details);
        var objJsonB64 = buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"].from(objJsonForm).toString("base64");
        // console.log(objJsonB64)
        var fd = new FormData();
        this.ms.sign_data(objJsonB64).then(function (res) {
            Object.keys(res).forEach(function (key) {
                return fd.append(key, res[key]);
            });
            fd.append("account_name", _this.name);
            fd.append("encoded_data", objJsonB64);
            fd.append("profile_pic", _this.profile_image);
            _this.ms.Post_user_profile(fd).then(function (res) {
                if (res) {
                    _this.resMes = 'Your profile updated successfully';
                    document.getElementById("openModalButton").click();
                    _this.getAccountDetail();
                    _this.clear_data();
                }
            });
        });
    };
    EditmyprofileComponent.prototype.update = function () {
        if (document.getElementById("inputEmail3").value != '' ||
            document.getElementById("userbio").value != '' ||
            document.getElementById("location").value != '' ||
            document.getElementById("date1").valueAsDate != null ||
            document.querySelector('input[name="gridRadios"]:checked').value != this.My_Profile.sex
            || this.profile_image != undefined)
            this.update_profile();
    };
    EditmyprofileComponent.prototype.clear_data = function () {
        document.getElementById("inputEmail3").value = "";
        document.getElementById("userbio").value = "";
        document.getElementById("date1").valueAsDate = null;
        document.getElementById("location").value = "";
        this.profile_image = undefined;
    };
    EditmyprofileComponent.prototype.goBack = function () {
        this.ms.goBack();
    };
    EditmyprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editmyprofile',
            template: __webpack_require__(/*! ./editmyprofile.component.html */ "./src/app/editmyprofile/editmyprofile.component.html"),
            styles: [__webpack_require__(/*! ./editmyprofile.component.css */ "./src/app/editmyprofile/editmyprofile.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditmyprofileComponent);
    return EditmyprofileComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed.component.css":
/*!*****************************************!*\
  !*** ./src/app/feed/feed.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n    /*display: flex;*/\n    /*flex-direction: column;*/\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    bottom: 0;\n    height: 100%;\n}\n\n.headerone{\n\n\tbackground-color: #ffffff;\n\tpadding: 10px 16px;\n\theight: 6%;\n\twidth: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.footerone {\n\n\tbackground-color: #ffffff;\n\tposition: absolute;\n\tbottom: 0;\n\tmin-height: 80px;\n    width: 100%;\n}\n\n.formcolor{\n\n\tbackground-color: #f7f8fa;\n\tborder: 1px solid #f7f8fa;\n}\n\n.threeicons {\n\tfont-size: 20px;\n}\n\n.threeicons:hover {\n\tcolor: #a09fed;\n}\n\n.countdiv {\n\n\tpadding: 0;\n    margin: auto;\n    text-align: left;\n}\n\n.countdivp{\n\n\tmargin: 0;\n}\n\n.icon {\n\n\tmax-width: 70%;\n}\n\n.icondiv {\n\n\tpadding-right: 0;\n}\n\n.countselected {\n\tcolor: #a09fed;\n}\n\n.cursor{\n    cursor: pointer;\n}\n\n.modal-body {\n    max-height: calc(100vh - 500px);\n\toverflow-y: auto; \n}\n\n.appendMovingDots:after {\n    content: ' .';\n    -webkit-animation: dots 3s steps(1, end) infinite;\n            animation: dots 3s steps(1, end) infinite;\n}\n\n@-webkit-keyframes dots {\n    0%, 12.5% {\n        opacity: 0;\n    }\n    25% {\n        opacity: 1;\n    }\n    37.5% {\n        text-shadow: .5em 0;\n    }\n    50% {\n        text-shadow: .5em 0, 1em 0;\n    }\n    62.5% {\n        text-shadow: .5em 0, 1em 0, 1.5em 0;\n    }\n    75% {\n        text-shadow: .5em 0, 1em 0, 1.5em 0, 2em 0;\n    }\n    87.5%, 100%{\n        text-shadow: .5em 0, 1em 0, 1.5em 0, 2em 0, 2.5em;\n    }\n}\n\n@keyframes dots {\n    0%, 12.5% {\n        opacity: 0;\n    }\n    25% {\n        opacity: 1;\n    }\n    37.5% {\n        text-shadow: .5em 0;\n    }\n    50% {\n        text-shadow: .5em 0, 1em 0;\n    }\n    62.5% {\n        text-shadow: .5em 0, 1em 0, 1.5em 0;\n    }\n    75% {\n        text-shadow: .5em 0, 1em 0, 1.5em 0, 2em 0;\n    }\n    87.5%, 100%{\n        text-shadow: .5em 0, 1em 0, 1.5em 0, 2em 0, 2.5em;\n    }\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0lBQ1YsYUFBYTtDQUNoQjs7QUFFRDs7Q0FFQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxZQUFZO0lBQ1QsNEVBQTRFO0lBQzVFLG9CQUFvQjs7Q0FFdkI7O0FBRUQ7O0NBRUMsWUFBWTtJQUNULGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7O0FBRUQ7O0NBRUMsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQixVQUFVO0NBQ1YsaUJBQWlCO0lBQ2QsWUFBWTtDQUNmOztBQUVEOztDQUVDLDBCQUEwQjtDQUMxQiwwQkFBMEI7Q0FDMUI7O0FBR0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7O0FBRUQ7O0NBRUMsV0FBVztJQUNSLGFBQWE7SUFDYixpQkFBaUI7Q0FDcEI7O0FBRUQ7O0NBRUMsVUFBVTtDQUNWOztBQUVEOztDQUVDLGVBQWU7Q0FDZjs7QUFFRDs7Q0FFQyxpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxnQ0FBZ0M7Q0FDbkMsaUJBQWlCO0NBQ2pCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGtEQUEwQztZQUExQywwQ0FBMEM7Q0FDN0M7O0FBQ0Q7SUFDSTtRQUNJLFdBQVc7S0FDZDtJQUNEO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxvQkFBb0I7S0FDdkI7SUFDRDtRQUNJLDJCQUEyQjtLQUM5QjtJQUNEO1FBQ0ksb0NBQW9DO0tBQ3ZDO0lBQ0Q7UUFDSSwyQ0FBMkM7S0FDOUM7SUFDRDtRQUNJLGtEQUFrRDtLQUNyRDtDQUNKOztBQXRCRDtJQUNJO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxXQUFXO0tBQ2Q7SUFDRDtRQUNJLG9CQUFvQjtLQUN2QjtJQUNEO1FBQ0ksMkJBQTJCO0tBQzlCO0lBQ0Q7UUFDSSxvQ0FBb0M7S0FDdkM7SUFDRDtRQUNJLDJDQUEyQztLQUM5QztJQUNEO1FBQ0ksa0RBQWtEO0tBQ3JEO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9mZWVkL2ZlZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHlsZW9uZXtcbiAgICAvKmRpc3BsYXk6IGZsZXg7Ki9cbiAgICAvKmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Ki9cbiAgICBmb250OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRlcm9uZXtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHRwYWRkaW5nOiAxMHB4IDE2cHg7XG5cdGhlaWdodDogNiU7XG5cdHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG59XG5cbi51c2VyaW1hZ2Uge1xuXG5cdHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5mb290ZXJvbmUge1xuXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAwO1xuXHRtaW4taGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybWNvbG9ye1xuXG5cdGJhY2tncm91bmQtY29sb3I6ICNmN2Y4ZmE7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNmN2Y4ZmE7XG59XG5cblxuLnRocmVlaWNvbnMge1xuXHRmb250LXNpemU6IDIwcHg7XG59XG5cbi50aHJlZWljb25zOmhvdmVyIHtcblx0Y29sb3I6ICNhMDlmZWQ7XG59XG5cbi5jb3VudGRpdiB7XG5cblx0cGFkZGluZzogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvdW50ZGl2cHtcblxuXHRtYXJnaW46IDA7XG59XG5cbi5pY29uIHtcblxuXHRtYXgtd2lkdGg6IDcwJTtcbn1cblxuLmljb25kaXYge1xuXG5cdHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5jb3VudHNlbGVjdGVkIHtcblx0Y29sb3I6ICNhMDlmZWQ7XG59XG5cbi5jdXJzb3J7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDUwMHB4KTtcblx0b3ZlcmZsb3cteTogYXV0bzsgXG59XG5cbi5hcHBlbmRNb3ZpbmdEb3RzOmFmdGVyIHtcbiAgICBjb250ZW50OiAnIC4nO1xuICAgIGFuaW1hdGlvbjogZG90cyAzcyBzdGVwcygxLCBlbmQpIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBkb3RzIHtcbiAgICAwJSwgMTIuNSUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAyNSUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAzNy41JSB7XG4gICAgICAgIHRleHQtc2hhZG93OiAuNWVtIDA7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRleHQtc2hhZG93OiAuNWVtIDAsIDFlbSAwO1xuICAgIH1cbiAgICA2Mi41JSB7XG4gICAgICAgIHRleHQtc2hhZG93OiAuNWVtIDAsIDFlbSAwLCAxLjVlbSAwO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgICB0ZXh0LXNoYWRvdzogLjVlbSAwLCAxZW0gMCwgMS41ZW0gMCwgMmVtIDA7XG4gICAgfVxuICAgIDg3LjUlLCAxMDAle1xuICAgICAgICB0ZXh0LXNoYWRvdzogLjVlbSAwLCAxZW0gMCwgMS41ZW0gMCwgMmVtIDAsIDIuNWVtO1xuICAgIH1cbn0gIl19 */"

/***/ }),

/***/ "./src/app/feed/feed.component.html":
/*!******************************************!*\
  !*** ./src/app/feed/feed.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This sesction is for Detailed User Feed of people. Starts Here -->\n\n<div class=\"styleone\">\n\t<!-- This header is open header for User psersonal Profile. Starts Here -->\n\t<header class=\"headerone\">\n\t\t<div class=\"row mt-1\" style=\"float: right;\">\n\t\t\t<div class=\"mr-3\">\n\t\t\t\t<i class=\"material-icons cursor\" data-toggle=\"modal\" (click)=\"search('')\" data-target=\"#searchModalCenter\">search</i>\n\t\t\t</div>\n\t\t\t<div class=\"mr-3\">\n\t\t\t\t<button type=\"button\" routerLink=\"/create\" class=\"btn btn-secondary\" style=\"background-color: #a09fed;border-color: #a09fed;\">murmur</button>\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\t<!-- This header is open header for User psersonal Profile. Ends Here -->\n\n\t<div id = \"divscroll\" style=\"display: block;height: 94%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;padding-bottom: 20px;\" >\n\n\t\t<div class=\"card mt-0\" *ngFor=\"let mur of Murmur_Posts; let i = index\" >\n\t\t\t<div class=\"card-body\" *ngIf = \"mur.action_type == 'murmur'\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t<a class=\"cursor\" (click)=\"otherUser(mur.Acc_id)\"><img class=\"userimage\" src={{mur.image}}></a>\n\t\t\t\t\t\t \n\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{mur.account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.Acc_id}}</span>\n\t\t\t\t\t\t\t\t<!-- <a *ngIf=\"mur.status\" style=\"float:right;\" class=\"cursor\" (click)=\"deletePost(i)\"><i class=\"material-icons mt-2\">delete</i></a> -->\n\t\t\t\t\t\t\t</h6></a>\n\t\t\t\t\t\t\t<a><p>{{mur.murmur.message}}</p></a>\n\t\t\t\t\t\t\t<a *ngIf = \" mur.murmur.attached_url !== ''\" ><img style=\"width: 100%;border-radius: 10px;\" alt=\"\" class=\"mb-4\" src={{mur.murmur.attached_url}}></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\" *ngIf=\"!mur.murmur.snooped\"><a class=\"cursor\" (click)=\"snoop(i)\"><img class=\"icon\" src=\"assets/img/like.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\" *ngIf=\"mur.murmur.snooped\"><a class=\"cursor\" (click)=\"snooped(i)\"><img class=\"icon\" src=\"assets/img/like_color.png\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.snoop_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a class=\"cursor\" routerLink=\"/comment\" (click)=\"cmt_Data(i)\"><img class=\"icon\" src=\"assets/img/comment.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.comment_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a class=\"cursor\" routerLink=\"/share\" (click)=\"cmt_Data(i)\"><img class=\"icon\" src=\"assets/img/share.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.yell_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"card-body\" *ngIf = \"mur.action_type == 'yell'\">\n\t\t\t\t<div class=\"row\">\n                    <div class=\"col-1\">\n\t\t\t\t\t\t<a class=\"cursor\" (click)=\"otherUser(mur.Acc_id)\"><img class=\"userimage\" src={{mur.image}}></a>\n\t\t\t\t\t\t<!-- <a *ngIf=\"mur.status\" class=\"cursor\" (click)=\"deletePost(i)\"><i class=\"material-icons mt-2\">delete</i></a> -->\n                    </div>            \n\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{mur.account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.Acc_id}}</span>\n\t\t\t\t\t\t\t\t<!-- <a *ngIf=\"mur.status\" style=\"float:right;\" class=\"cursor\" (click)=\"deletePost(i)\"><i class=\"material-icons mt-2\">delete</i></a> -->\n\t\t\t\t\t\t\t</h6></a>\n\t\t\t\t\t\t\t<a><p>{{mur.yell.extra_comment}}</p></a>\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-12 mb-4\">\n\t\t\t\t\t\t\t<div class=\"card mt-0\" style=\"border-radius: 10px;\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"cursor\" (click)=\"otherUser(mur.yell.mur_acc_id)\"><img alt=\"\" class=\"userimage\" src={{mur.yell.mur_acc_image}}></a>\n\t\t\t\t\t\t\t\t\t</div>            \n\t\t\t\t\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{mur.yell.mur_account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.yell.mur_acc_id}}</span></h6></a>\n\t\t\t\t\t\t\t\t\t\t\t<a><p>{{mur.yell.message}}</p></a>\n\t\t\t\t\t\t\t\t\t\t\t<a *ngIf = \" mur.yell.attached_url !== ''\" ><img alt=\"\" style=\"width: 100%;border-radius: 10px;\" class=\"mb-4\" src={{mur.yell.attached_url}}></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\" *ngIf=\"!mur.yell.snooped\"><a class=\"cursor\" (click)=\"snoop(i)\"><img class=\"icon\" src=\"assets/img/like.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\" *ngIf=\"mur.yell.snooped\"><a class=\"cursor\" (click)=\"snooped(i)\"><img class=\"icon\" src=\"assets/img/like_color.png\"></a></div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.yell.snoop_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a class=\"cursor\" routerLink=\"/comment\" (click)=\"cmt_Data(i)\"><img class=\"icon\" src=\"assets/img/comment.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.yell.comment_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n                </div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"load\" style=\"text-align: center;padding-top: 5px;padding-bottom: 5px;\">\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"LoadFeeds()\" style=\"border-radius: 30px;background-color: #a09fed;border-color: #a09fed;\">{{ notificationMessage }}</button>\n\t\t</div>\n\t\t<ngx-spinner\n\t\t\tbdColor=\"rgba(51,51,51,0.8)\"\n\t\t\tsize=\"medium\"\n\t\t\tcolor=\"#fff\"\n\t\t\tloadingText=\"Loading...\"\n\t\t\ttype=\"ball-scale-multiple\">\n\t\t</ngx-spinner>\n\t</div>\n\t<router-outlet></router-outlet>\n</div>\n\n<!-- This sesction is for Detailed User Feed of people. Ends Here -->\n\n<button id=\"openModalButton\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Open Modal</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"searchModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"searchModalCenterTitle\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<input class=\"form-control inputone\" type=\"search\" placeholder=\"Search here to find people\" aria-label=\"Search\"\t(input)=\"search($event.target.value);\" >\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div style=\"display: block;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;padding-bottom: 20px;\">\n\t\t\t\t\t<div class=\"card mt-0\">\n\t\t\t\t\t\t<div class=\"card-body\" *ngFor=\"let acc of search_people; let i = index\">\n\t\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t\t\t\t<a class=\"cursor\" data-dismiss=\"modal\" (click)=\"otherUser(acc.Acc_id)\"><img class=\"userimage\" alt=\"\" src={{acc.profile_pic}}></a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-11 row\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{acc.Acc_name}}</h6></a>\n\t\t\t\t\t\t\t\t\t\t<a><h6><span style=\"color: #a09fed;\">{{acc.Acc_id}}</span></h6></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-3\" style=\"margin: auto;text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"acc.status\" (click)=\"following(acc.Acc_id, i)\" type=\"button\" class=\"btn btn-secondary\" style=\"background-color: #a09fed;border-color: #a09fed;width: 110%\">Following</button>\n\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"!acc.status\" (click)=\"follow(acc.Acc_id, i)\" type=\"button\" class=\"btn btn-secondary\" style=\"background-color: #a09fed00;border-color: #a09fed;color: #a09fed;width: 110%\">Follow</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\" style=\"margin: auto\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t</div>\n\t\t</div>\t  \n\t</div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\"   tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" #closeBtn>\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t<div class=\"modal-body\" style=\"font-size: 20px;margin: auto;\">\n\t\t\t{{resMes}}\n\t\t</div>\n\t\t<div class=\"modal-footer\" style=\"margin: auto;\">\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>  "

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedComponent = /** @class */ (function () {
    function FeedComponent(ms, router) {
        this.ms = ms;
        this.router = router;
        this.murmur = '';
        this.selectedFile = {};
        this.load = false;
        this.Murmur_Posts = [];
        this.flag = 0;
        this.last_resp = 1;
        this.notificationMessage = "Load Feed";
    }
    FeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.load = false;
        if (this.ms.Followers.length == 0)
            this.ms.getFollowersDetail();
        if (this.ms.Murmur_Posts.length == 0) {
            this.Murmur_Posts = [];
            this.ms.getMurmurs().then(function (res) {
                _this.Murmur_Posts = res;
                ++_this.ms.page_count;
                _this.load = true;
                if (res["length"] < 10) {
                    _this.notificationMessage = "No more feeds found";
                }
            });
        }
        else {
            this.Murmur_Posts = this.ms.Murmur_Posts;
            this.load = true;
        }
    };
    FeedComponent.prototype.snoop = function (id) {
        var _this = this;
        this.ms.Snoop(id, 'murmur').then(function (res) {
            console.log(res);
            if (res['Error']) {
                if (res['errMesg'] == undefined)
                    res['errMesg'] = 'Internal Server Error';
                console.log(res['errMesg']);
                _this.resMes = 'Error Message: ' + res['errMesg'];
                document.getElementById("openModalButton").click();
            }
            else {
                console.log(res['transId']);
                _this.resMes = 'Your Snoop is submitted into blockchain';
                document.getElementById("openModalButton").click();
                if (_this.Murmur_Posts[id].action_type == 'murmur') {
                    _this.Murmur_Posts[id].murmur.snooped = 1;
                    _this.Murmur_Posts[id].murmur.snoop_count += 1;
                }
                else {
                    _this.Murmur_Posts[id].yell.snooped = 1;
                    _this.Murmur_Posts[id].yell.snoop_count += 1;
                }
            }
        });
    };
    FeedComponent.prototype.snooped = function (id) {
        var _this = this;
        this.ms.unSnoop(id, 'murmur').then(function (res) {
            console.log(res);
            if (res['Error']) {
                if (res['errMesg'] == undefined)
                    res['errMesg'] = 'Internal Server Error';
                console.log(res['errMesg']);
                _this.resMes = 'Error Message: ' + res['errMesg'];
                document.getElementById("openModalButton").click();
            }
            else {
                console.log(res['transId']);
                _this.resMes = 'Your UnSnoop is submitted into blockchain';
                document.getElementById("openModalButton").click();
                if (_this.Murmur_Posts[id].action_type == 'murmur') {
                    _this.Murmur_Posts[id].murmur.snooped = 0;
                    _this.Murmur_Posts[id].murmur.snoop_count -= 1;
                }
                else {
                    _this.Murmur_Posts[id].yell.snooped = 0;
                    _this.Murmur_Posts[id].yell.snoop_count -= 1;
                }
            }
        });
        // this.resMes = 'You are already snooped'
        // document.getElementById("openModalButton").click();
    };
    FeedComponent.prototype.cmt_Data = function (id) {
        this.ms.setCommentData(id, 'murmur');
    };
    FeedComponent.prototype.otherUser = function (name) {
        this.ms.setOtherUserName(name.split('@')[1]);
        this.router.navigate([{ outlets: { primary: ['userpost'], feed: ['userprofilelist'] } }]);
    };
    FeedComponent.prototype.search = function (text) {
        var _this = this;
        this.ms.SearchPeople(text).then(function (res) {
            _this.search_people = res;
        });
    };
    FeedComponent.prototype.follow = function (id, index) {
        var _this = this;
        id = id.split('@')[1];
        this.ms.follow(id).then(function (res) {
            console.log(res);
            if (res['Error']) {
                if (res['errMesg'] == undefined)
                    res['errMesg'] = 'Internal Server Error';
                console.log(res['errMesg']);
                _this.resMes = 'Error Message: ' + res['errMesg'];
                document.getElementById("openModalButton").click();
            }
            else {
                console.log(res['transId']);
                _this.resMes = 'Your Follow data is submitted into blockchain';
                document.getElementById("openModalButton").click();
                _this.search_people[index].status = true;
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    FeedComponent.prototype.following = function (id, index) {
        var _this = this;
        id = id.split('@')[1];
        this.ms.unfollow(id).then(function (res) {
            console.log(res);
            if (res['Error']) {
                if (res['errMesg'] == undefined)
                    res['errMesg'] = 'Internal Server Error';
                console.log(res['errMesg']);
                _this.resMes = 'Error Message: ' + res['errMesg'];
                document.getElementById("openModalButton").click();
            }
            else {
                console.log(res['transId']);
                _this.resMes = 'Your Unfollow data is submitted into blockchain';
                document.getElementById("openModalButton").click();
                _this.search_people[index].status = false;
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    FeedComponent.prototype.LoadFeeds = function () {
        var _this = this;
        if (this.notificationMessage != "No more feeds found") {
            var meta = this;
            meta.ms.getOtherPageMurmurs().then(function (res) {
                meta.last_resp = res['length'];
                if (res['length'] !== 0) {
                    ++meta.ms.page_count;
                    for (var i = 0; i < res['length']; i++) {
                        meta.Murmur_Posts.push(res[i]);
                    }
                }
                else if (res['length'] === 0) {
                    _this.notificationMessage = "No Feeds Found";
                    _this.interval = setInterval(function () {
                        if (meta.last_resp == 0)
                            meta.load = false;
                    }, 50);
                }
            });
        }
        // else
        // {
        //   this.resMes = 'Sorry there is no more feeds!'
        //   document.getElementById("openModalButton").click();
        // }
    };
    FeedComponent.prototype.deletePost = function (id) {
        var _this = this;
        if (this.Murmur_Posts[id].action_type == "murmur") {
            // console.log(this.Murmur_Posts[id].murmur.murmur_id);
            this.ms.deleteMurmur(this.Murmur_Posts[id].murmur.murmur_id).then(function (res) {
                console.log(res);
                if (res['Error']) {
                    if (res['errMesg'] == undefined)
                        res['errMesg'] = 'Internal Server Error';
                    console.log(res['errMesg']);
                    _this.resMes = 'Error Message: ' + res['errMesg'];
                    document.getElementById("openModalButton").click();
                }
                else {
                    console.log(res['transId']);
                    _this.resMes = 'Your Delete Murmur is submitted to blockchain';
                    document.getElementById("openModalButton").click();
                }
            });
        }
        else {
            // console.log(this.Murmur_Posts[id].yell.yell_id);
            this.ms.unyell(this.Murmur_Posts[id].yell.yell_id).then(function (res) {
                console.log(res);
                if (res['Error']) {
                    if (res['errMesg'] == undefined)
                        res['errMesg'] = 'Internal Server Error';
                    console.log(res['errMesg']);
                    _this.resMes = 'Error Message: ' + res['errMesg'];
                    document.getElementById("openModalButton").click();
                }
                else {
                    console.log(res['transId']);
                    _this.resMes = 'Your Unyell is submitted to blockchain';
                    document.getElementById("openModalButton").click();
                }
            });
        }
    };
    FeedComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    FeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/followers/followers.component.css":
/*!***************************************************!*\
  !*** ./src/app/followers/followers.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: 100%;\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n\tborder: 0;\n\tbottom: 0;\n}\n\n.headerone{\n\n\tbackground-color: #ffffff;\n\tpadding: 10px 16px;\n\theight: 6%;\n\twidth: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.footerone {\n\n\tbackground-color: #ffffff;\n\tposition: absolute;\n\tbottom: 0;\n\tmin-height: 80px;\n    width: 100%;\n}\n\n.formcolor{\n\n\tbackground-color: #f7f8fa;\n\tborder: 1px solid #f7f8fa;\n}\n\n.threeicons {\n\tfont-size: 20px;\n}\n\n.threeicons:hover {\n\tcolor: #2c9aff;\n}\n\n.countdiv {\n\n\tpadding: 0;\n    margin: auto;\n    text-align: left;\n}\n\n.countdivp{\n\n\tmargin: 0;\n}\n\n.icon {\n\n\tmax-width: 80%;\n}\n\n.icon:hover {\n\tcolor: #2c9aff;\n}\n\n.icondiv {\n\n\tpadding-right: 0;\n}\n\n.countselected {\n\tcolor: #a09fed;\n}\n\n.modal-body {\n    max-height: calc(100vh - 500px);\n\toverflow-y: auto; \n}\n\n.cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sbG93ZXJzL2ZvbGxvd2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGtCQUFrQjtDQUNsQiwyQkFBMkI7Q0FDM0IsYUFBYTtDQUNiLGNBQWM7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztDQUNkLFVBQVU7Q0FDVixVQUFVO0NBQ1Y7O0FBRUQ7O0NBRUMsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsWUFBWTtJQUNULDRFQUE0RTtJQUM1RSxvQkFBb0I7O0NBRXZCOztBQUVEOztDQUVDLFlBQVk7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCOztBQUVEOztDQUVDLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLGlCQUFpQjtJQUNkLFlBQVk7Q0FDZjs7QUFFRDs7Q0FFQywwQkFBMEI7Q0FDMUIsMEJBQTBCO0NBQzFCOztBQUdEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUVEO0NBQ0MsZUFBZTtDQUNmOztBQUlEOztDQUVDLFdBQVc7SUFDUixhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCOztBQUVEOztDQUVDLFVBQVU7Q0FDVjs7QUFFRDs7Q0FFQyxlQUFlO0NBQ2Y7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7O0FBRUQ7O0NBRUMsaUJBQWlCO0NBQ2pCOztBQUVEO0NBQ0MsZUFBZTtDQUNmOztBQUVEO0lBQ0ksZ0NBQWdDO0NBQ25DLGlCQUFpQjtDQUNqQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2ZvbGxvd2Vycy9mb2xsb3dlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHlsZW9uZXtcblxuXHQvKmRpc3BsYXk6IGZsZXg7Ki9cblx0LypmbGV4LWRpcmVjdGlvbjogY29sdW1uOyovXG5cdGhlaWdodDogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Ym90dG9tOiAwO1xufVxuXG4uaGVhZGVyb25le1xuXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdHBhZGRpbmc6IDEwcHggMTZweDtcblx0aGVpZ2h0OiA2JTtcblx0d2lkdGg6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbn1cblxuLnVzZXJpbWFnZSB7XG5cblx0d2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmZvb3Rlcm9uZSB7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDA7XG5cdG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtY29sb3J7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y3ZjhmYTtcbn1cblxuXG4udGhyZWVpY29ucyB7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRocmVlaWNvbnM6aG92ZXIge1xuXHRjb2xvcjogIzJjOWFmZjtcbn1cblxuXG5cbi5jb3VudGRpdiB7XG5cblx0cGFkZGluZzogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvdW50ZGl2cHtcblxuXHRtYXJnaW46IDA7XG59XG5cbi5pY29uIHtcblxuXHRtYXgtd2lkdGg6IDgwJTtcbn1cblxuLmljb246aG92ZXIge1xuXHRjb2xvcjogIzJjOWFmZjtcbn1cblxuLmljb25kaXYge1xuXG5cdHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5jb3VudHNlbGVjdGVkIHtcblx0Y29sb3I6ICNhMDlmZWQ7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTAwcHgpO1xuXHRvdmVyZmxvdy15OiBhdXRvOyBcbn1cblxuLmN1cnNvcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/followers/followers.component.html":
/*!****************************************************!*\
  !*** ./src/app/followers/followers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- This sesction is for Detailed User Feed of people. Starts Here -->\n\n<div class=\"styleone\">\n\t<!-- This header is open header for User psersonal Profile. Starts Here -->\n\t<header class=\"headerone\">\n\t\t<a class=\"cursor\" (click)=\"goBack()\"><i class=\"material-icons mt-2\">keyboard_backspace</i></a>\t\n\t\t<div class=\"row mt-1\" style=\"float: right;\">\n\t\t\t<div class=\"mr-3\">\n\t\t\t\t<i class=\"material-icons cursor\" data-toggle=\"modal\" (click)=\"search('')\" data-target=\"#searchModalCenter\">search</i>\n\t\t\t</div>\n\t\t\t<div class=\"mr-3\">\n\t\t\t\t<button type=\"button\" routerLink=\"/create\" class=\"btn btn-secondary\" style=\"background-color: #a09fed;border-color: #a09fed;\">murmur</button>\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\t<!-- This header is open header for User psersonal Profile. Ends Here -->\n\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\t<!-- <header class=\"headerone\">\n\t\t<a><i class=\"material-icons mt-2\">keyboard_backspace</i></a>\n\t</header> -->\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\n\t<div style=\"display: block;height: 94%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;padding-bottom: 20px;\">\n\t\t<div class=\"card mt-0\">\n\t\t  <div class=\"card-body\" *ngFor=\"let acc of Followers; let i = index\">\n\t\t    <div class=\"row mb-3\">\n\t\t    \t<div class=\"col-1\">\n\t\t    \t\t<a class=\"cursor\" (click)=\"otherUser(acc.Acc_id)\"><img class=\"userimage\" alt=\"\" src={{acc.profile_pic}}></a>\n\t\t    \t</div>\t\t\t\n\t\t\t\t<div class=\"col-11 row\" style=\"margin: auto;\">\n\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{acc.Acc_name}}</h6></a>\n\t\t\t\t\t\t<a><h6><span style=\"color: #a09fed;\">{{acc.Acc_id}}</span></h6></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-3\" style=\"margin: auto;text-align: center;\">\n\t\t\t\t\t\t<button *ngIf=\"acc.status\" (click)=\"following(acc.Acc_id, i, 1)\" type=\"button\" class=\"btn btn-secondary\" style=\"background-color: #a09fed;border-color: #a09fed;width: 100%\">Following</button>\n\t\t\t\t\t\t<button *ngIf=\"!acc.status\" (click)=\"follow(acc.Acc_id, i, 1)\" type=\"button\" class=\"btn btn-secondary\" style=\"background-color: #a09fed00;border-color: #a09fed;color: #a09fed;width: 100%\">Follow</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- <hr> -->\n\t\t  </div>\n\t\t</div>\n\t\t<div *ngIf=\"load\" style=\"text-align: center;padding-top: 5px;padding-bottom: 5px;\">\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" disabled style=\"border-radius: 30px;background-color: #a09fed;border-color: #a09fed;\">No followers found</button>\n\t\t</div>\n\t</div>\n\t<ngx-spinner\n\t\t\tbdColor=\"rgba(51,51,51,0.8)\"\n\t\t\tsize=\"medium\"\n\t\t\tcolor=\"#fff\"\n\t\t\tloadingText=\"Loading...\"\n\t\t\ttype=\"ball-scale-multiple\">\n\t\t</ngx-spinner>\n</div>\n\n<!-- This sesction is for Detailed User Feed of people. Ends Here -->\n\n<button id=\"openModalButton\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Open Modal</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"searchModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"searchModalCenterTitle\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<input class=\"form-control inputone\" type=\"search\" placeholder=\"Search here to find people\" aria-label=\"Search\"\t(input)=\"search($event.target.value);\" >\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div style=\"display: block;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;padding-bottom: 20px;\">\n\t\t\t\t\t<div class=\"card mt-0\">\n\t\t\t\t\t\t<div class=\"card-body\" *ngFor=\"let acc of search_people; let i = index\">\n\t\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t\t\t\t<a class=\"cursor\" data-dismiss=\"modal\" (click)=\"otherUser(acc.Acc_id)\"><img class=\"userimage\" alt=\"\" src={{acc.profile_pic}}></a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-11 row\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{acc.Acc_name}}</h6></a>\n\t\t\t\t\t\t\t\t\t\t<a><h6><span style=\"color: #a09fed;\">{{acc.Acc_id}}</span></h6></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-3\" style=\"margin: auto;text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"acc.status\" (click)=\"following(acc.Acc_id, i, 0)\" type=\"button\" class=\"btn btn-secondary\" style=\"background-color: #a09fed;border-color: #a09fed;width: 110%\">Following</button>\n\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"!acc.status\" (click)=\"follow(acc.Acc_id, i, 0)\" type=\"button\" class=\"btn btn-secondary\" style=\"background-color: #a09fed00;border-color: #a09fed;color: #a09fed;width: 110%\">Follow</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\" style=\"margin: auto\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t</div>\n\t\t</div>\t  \n\t</div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\"   tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" #closeBtn>\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t<div class=\"modal-body\" style=\"font-size: 20px;margin: auto;\">\n\t\t\t{{resMes}}\n\t\t</div>\n\t\t<div class=\"modal-footer\" style=\"margin: auto;\">\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>  "

/***/ }),

/***/ "./src/app/followers/followers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/followers/followers.component.ts ***!
  \**************************************************/
/*! exports provided: FollowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersComponent", function() { return FollowersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FollowersComponent = /** @class */ (function () {
    function FollowersComponent(ms, router, spin) {
        this.ms = ms;
        this.router = router;
        this.spin = spin;
        this.load = false;
    }
    FollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spin.show();
        this.ms.getFollowersDetail().then(function (res) {
            if (res != undefined) {
                _this.Followers = res;
                _this.spin.hide();
                _this.load = false;
            }
            else {
                _this.load = true;
                _this.spin.hide();
                // this.resMes = 'There is no Followers found!'
                // document.getElementById("openModalButton").click();
            }
        });
    };
    FollowersComponent.prototype.follow = function (id, index, type) {
        var _this = this;
        id = id.split('@')[1];
        this.ms.follow(id).then(function (res) {
            console.log(res);
            if (res['Error']) {
                if (res['errMesg'] == undefined)
                    res['errMesg'] = 'Internal Server Error';
                console.log(res['errMesg']);
                _this.resMes = 'Error Message: ' + res['errMesg'];
                document.getElementById("openModalButton").click();
            }
            else {
                console.log(res['transId']);
                _this.resMes = 'Your Follow data is submitted into blockchain';
                document.getElementById("openModalButton").click();
                if (type == 1)
                    _this.Followers[index].status = true;
                else {
                    _this.search_people[index].status = true;
                    for (var i = 0; i < _this.Followers.length; i++) {
                        if (_this.Followers[i].Acc_id == _this.search_people[index].Acc_id)
                            _this.Followers[i].status = true;
                    }
                }
                _this.ms.Acc_Profile[0].following += 1;
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    FollowersComponent.prototype.following = function (id, index, type) {
        var _this = this;
        id = id.split('@')[1];
        this.ms.unfollow(id).then(function (res) {
            console.log(res);
            if (res['Error']) {
                if (res['errMesg'] == undefined)
                    res['errMesg'] = 'Internal Server Error';
                console.log(res['errMesg']);
                _this.resMes = 'Error Message: ' + res['errMesg'];
                document.getElementById("openModalButton").click();
            }
            else {
                console.log(res['transId']);
                _this.resMes = 'Your Unfollow data is submitted into blockchain';
                document.getElementById("openModalButton").click();
                if (type == 1)
                    _this.Followers[index].status = false;
                else {
                    _this.search_people[index].status = false;
                    for (var i = 0; i < _this.Followers.length; i++) {
                        if (_this.Followers[i].Acc_id == _this.search_people[index].Acc_id)
                            _this.Followers[i].status = false;
                    }
                }
                _this.ms.Acc_Profile[0].following -= 1;
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    FollowersComponent.prototype.search = function (text) {
        var _this = this;
        this.ms.SearchPeople(text).then(function (res) {
            _this.search_people = res;
        });
    };
    FollowersComponent.prototype.otherUser = function (name) {
        this.ms.setOtherUserName(name.split('@')[1]);
        this.router.navigate([{ outlets: { primary: ['userpost'], feed: ['userprofilelist'] } }]);
    };
    FollowersComponent.prototype.goBack = function () {
        this.ms.goBack();
    };
    FollowersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-followers',
            template: __webpack_require__(/*! ./followers.component.html */ "./src/app/followers/followers.component.html"),
            styles: [__webpack_require__(/*! ./followers.component.css */ "./src/app/followers/followers.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], FollowersComponent);
    return FollowersComponent;
}());



/***/ }),

/***/ "./src/app/following/following.component.css":
/*!***************************************************!*\
  !*** ./src/app/following/following.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: 100%;\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n\n.headerone{\n\n\tbackground-color: #ffffff;\n\tpadding: 10px 16px;\n\theight: 6%;\n\twidth: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.footerone {\n\n\tbackground-color: #ffffff;\n\tposition: absolute;\n\tbottom: 0;\n\tmin-height: 80px;\n    width: 100%;\n}\n\n.formcolor{\n\n\tbackground-color: #f7f8fa;\n\tborder: 1px solid #f7f8fa;\n}\n\n.threeicons {\n\tfont-size: 20px;\n}\n\n.threeicons:hover {\n\tcolor: #2c9aff;\n}\n\n.countdiv {\n\n\tpadding: 0;\n    margin: auto;\n    text-align: left;\n}\n\n.countdivp{\n\n\tmargin: 0;\n}\n\n.icon {\n\n\tmax-width: 80%;\n}\n\n.icon:hover {\n\tcolor: #2c9aff;\n}\n\n.icondiv {\n\n\tpadding-right: 0;\n}\n\n.countselected {\n\tcolor: #a09fed;\n}\n\n.modal-body {\n    max-height: calc(100vh - 500px);\n\toverflow-y: auto; \n}\n\n.cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sbG93aW5nL2ZvbGxvd2luZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGtCQUFrQjtDQUNsQiwyQkFBMkI7Q0FDM0IsYUFBYTtDQUNiLGNBQWM7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7Q0FDYjs7QUFFRDs7Q0FFQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxZQUFZO0lBQ1QsNEVBQTRFO0lBQzVFLG9CQUFvQjs7Q0FFdkI7O0FBRUQ7O0NBRUMsWUFBWTtJQUNULGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7O0FBRUQ7O0NBRUMsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQixVQUFVO0NBQ1YsaUJBQWlCO0lBQ2QsWUFBWTtDQUNmOztBQUVEOztDQUVDLDBCQUEwQjtDQUMxQiwwQkFBMEI7Q0FDMUI7O0FBR0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7O0FBSUQ7O0NBRUMsV0FBVztJQUNSLGFBQWE7SUFDYixpQkFBaUI7Q0FDcEI7O0FBRUQ7O0NBRUMsVUFBVTtDQUNWOztBQUVEOztDQUVDLGVBQWU7Q0FDZjs7QUFFRDtDQUNDLGVBQWU7Q0FDZjs7QUFFRDs7Q0FFQyxpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7O0FBRUQ7SUFDSSxnQ0FBZ0M7Q0FDbkMsaUJBQWlCO0NBQ2pCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvZm9sbG93aW5nL2ZvbGxvd2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0eWxlb25le1xuXG5cdC8qZGlzcGxheTogZmxleDsqL1xuXHQvKmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Ki9cblx0aGVpZ2h0OiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG59XG5cbi5oZWFkZXJvbmV7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0cGFkZGluZzogMTBweCAxNnB4O1xuXHRoZWlnaHQ6IDYlO1xuXHR3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxufVxuXG4udXNlcmltYWdlIHtcblxuXHR3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZm9vdGVyb25lIHtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMDtcblx0bWluLWhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm1jb2xvcntcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZjdmOGZhO1xufVxuXG5cbi50aHJlZWljb25zIHtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4udGhyZWVpY29uczpob3ZlciB7XG5cdGNvbG9yOiAjMmM5YWZmO1xufVxuXG5cblxuLmNvdW50ZGl2IHtcblxuXHRwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY291bnRkaXZwe1xuXG5cdG1hcmdpbjogMDtcbn1cblxuLmljb24ge1xuXG5cdG1heC13aWR0aDogODAlO1xufVxuXG4uaWNvbjpob3ZlciB7XG5cdGNvbG9yOiAjMmM5YWZmO1xufVxuXG4uaWNvbmRpdiB7XG5cblx0cGFkZGluZy1yaWdodDogMDtcbn1cblxuLmNvdW50c2VsZWN0ZWQge1xuXHRjb2xvcjogI2EwOWZlZDtcbn1cblxuLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MDBweCk7XG5cdG92ZXJmbG93LXk6IGF1dG87IFxufVxuXG4uY3Vyc29ye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/following/following.component.html":
/*!****************************************************!*\
  !*** ./src/app/following/following.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- This sesction is for Detailed User Feed of people. Starts Here -->\n\n<div class=\"styleone\">\n\t<!-- This header is open header for User psersonal Profile. Starts Here -->\n\t<header class=\"headerone\">\n\t\t<a class=\"cursor\" (click)=\"goBack()\"><i class=\"material-icons mt-2\">keyboard_backspace</i></a>\n\t\t<div class=\"row mt-1\" style=\"float: right;\">\n\t\t\t<div class=\"mr-3\">\n\t\t\t\t<i class=\"material-icons cursor\" data-toggle=\"modal\" (click)=\"search('')\" data-target=\"#searchModalCenter\">search</i>\n\t\t\t</div>\n\t\t\t<div class=\"mr-3\">\n\t\t\t\t<button type=\"button\" routerLink=\"/create\" class=\"btn btn-secondary\" style=\"background-color: #a09fed;border-color: #a09fed;\">murmur</button>\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\t<!-- This header is open header for User psersonal Profile. Ends Here -->\n\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\t<!-- <header class=\"headerone\">\n\t\t<a><i class=\"material-icons mt-2\">keyboard_backspace</i></a>\n\t</header> -->\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\n\t<div style=\"display: block;height: 94%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;padding-bottom: 20px;\">\n\t\t<div class=\"card mt-0\">\n\t\t\t<div class=\"card-body\" *ngFor=\"let acc of Following; let i = index\">\n\t\t\t<div class=\"row mb-3\">\n\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t<a class=\"cursor\" (click)=\"otherUser(acc.Acc_id)\"><img class=\"userimage\" alt=\"\" src={{acc.profile_pic}}></a>\n\t\t\t\t</div>\t\t\t\n\t\t\t\t<div class=\"col-11 row\" style=\"margin: auto;\">\n\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{acc.Acc_name}}</h6></a>\n\t\t\t\t\t\t<a><h6><span style=\"color: #a09fed;\">{{acc.Acc_id}}</span></h6></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-3\" style=\"margin: auto;text-align: center;\">\n\t\t\t\t\t\t<button *ngIf=\"acc.status\" (click)=\"following(acc.Acc_id, i, 1)\" type=\"button\" class=\"btn btn-secondary\" style=\"background-color: #a09fed;border-color: #a09fed;width: 100%\">Following</button>\n\t\t\t\t\t\t<button *ngIf=\"!acc.status\" (click)=\"follow(acc.Acc_id, i, 1)\" type=\"button\" class=\"btn btn-secondary\" style=\"background-color: #a09fed00;border-color: #a09fed;color: #a09fed;width: 100%\">Follow</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- <hr> -->\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"load\" style=\"text-align: center;padding-top: 5px;padding-bottom: 5px;\">\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" disabled style=\"border-radius: 30px;background-color: #a09fed;border-color: #a09fed;\">You can't follow others</button>\n\t\t</div>\n\t</div>\n\t<ngx-spinner\n\t\tbdColor=\"rgba(51,51,51,0.8)\"\n\t\tsize=\"medium\"\n\t\tcolor=\"#fff\"\n\t\tloadingText=\"Loading...\"\n\t\ttype=\"ball-scale-multiple\">\n\t</ngx-spinner>\n</div>\n\n<!-- This sesction is for Detailed User Feed of people. Ends Here -->\n\n\n<button id=\"openModalButton\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Open Modal</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"searchModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"searchModalCenterTitle\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<input class=\"form-control inputone\" type=\"search\" placeholder=\"Search here to find people\" aria-label=\"Search\"\t(input)=\"search($event.target.value);\" >\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div style=\"display: block;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;padding-bottom: 20px;\">\n\t\t\t\t\t<div class=\"card mt-0\">\n\t\t\t\t\t\t<div class=\"card-body\" *ngFor=\"let acc of search_people; let i = index\">\n\t\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t\t\t\t<a class=\"cursor\" data-dismiss=\"modal\" (click)=\"otherUser(acc.Acc_id)\"><img class=\"userimage\" alt=\"\" src={{acc.profile_pic}}></a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-11 row\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{acc.Acc_name}}</h6></a>\n\t\t\t\t\t\t\t\t\t\t<a><h6><span style=\"color: #a09fed;\">{{acc.Acc_id}}</span></h6></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-3\" style=\"margin: auto;text-align: center;\">\n\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"acc.status\" (click)=\"following(acc.Acc_id, i, 0)\" type=\"button\" class=\"btn btn-secondary\" style=\"background-color: #a09fed;border-color: #a09fed;width: 110%\">Following</button>\n\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"!acc.status\" (click)=\"follow(acc.Acc_id, i, 0)\" type=\"button\" class=\"btn btn-secondary\" style=\"background-color: #a09fed00;border-color: #a09fed;color: #a09fed;width: 110%\">Follow</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\" style=\"margin: auto\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t</div>\n\t\t</div>\t  \n\t</div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\"   tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" #closeBtn>\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t<div class=\"modal-body\" style=\"font-size: 20px;margin: auto;\">\n\t\t\t{{resMes}}\n\t\t</div>\n\t\t<div class=\"modal-footer\" style=\"margin: auto;\">\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>  "

/***/ }),

/***/ "./src/app/following/following.component.ts":
/*!**************************************************!*\
  !*** ./src/app/following/following.component.ts ***!
  \**************************************************/
/*! exports provided: FollowingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowingComponent", function() { return FollowingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FollowingComponent = /** @class */ (function () {
    function FollowingComponent(ms, router, spin) {
        this.ms = ms;
        this.router = router;
        this.spin = spin;
        this.load = false;
    }
    FollowingComponent.prototype.ngOnInit = function () {
        this.fetch_Data();
    };
    FollowingComponent.prototype.fetch_Data = function () {
        var _this = this;
        this.spin.show();
        this.ms.getFollwing(localStorage.getItem(this.ms.Scatter_account_name).split('-')[0]).then(function (res) {
            if (res != undefined) {
                var arr_1 = [];
                for (var i = 0; i < res['length']; i++) {
                    _this.ms.getAccountProfile(res[i]).then(function (res) {
                        if (res[0].profile_pic == "undefined") {
                            res[0].profile_pic = "assets/img/pic1.png";
                        }
                        if (res[0].account_name == "") {
                            res[0].account_name = res[0].Acc_id.split('@')[1];
                        }
                        arr_1.push({
                            Acc_name: res[0].account_name,
                            Acc_id: res[0].Acc_id,
                            profile_pic: res[0].profile_pic,
                            status: true,
                        });
                    });
                }
                _this.Following = arr_1;
                _this.spin.hide();
                _this.load = false;
            }
            else {
                _this.load = true;
                _this.spin.hide();
                // this.resMes = 'There is no Following persons! Please search and follow any others!'
                // document.getElementById("openModalButton").click();
            }
        });
    };
    FollowingComponent.prototype.following = function (id, index, type) {
        var _this = this;
        id = id.split('@')[1];
        this.ms.unfollow(id).then(function (res) {
            console.log(res);
            if (res['Error']) {
                if (res['errMesg'] == undefined)
                    res['errMesg'] = 'Internal Server Error';
                console.log(res['errMesg']);
                _this.resMes = 'Error Message: ' + res['errMesg'];
                document.getElementById("openModalButton").click();
            }
            else {
                console.log(res['transId']);
                _this.resMes = 'Your Unfollow data is submitted into blockchain'; // 'Transaction ID: '+res['transId']
                document.getElementById("openModalButton").click();
                if (type == 1)
                    _this.Following[index].status = false;
                else {
                    _this.search_people[index].status = false;
                    for (var i = 0; i < _this.Following.length; i++) {
                        if (_this.Following[i].Acc_id == _this.search_people[index].Acc_id)
                            _this.Following[i].status = false;
                    }
                }
                _this.ms.Acc_Profile[0].following -= 1;
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    FollowingComponent.prototype.follow = function (id, index, type) {
        var _this = this;
        id = id.split('@')[1];
        this.ms.follow(id).then(function (res) {
            console.log(res);
            if (res['Error']) {
                if (res['errMesg'] == undefined)
                    res['errMesg'] = 'Internal Server Error';
                console.log(res['errMesg']);
                _this.resMes = 'Error Message: ' + res['errMesg'];
                document.getElementById("openModalButton").click();
            }
            else {
                console.log(res['transId']);
                _this.resMes = 'Your Follow data is submitted into blockchain'; // 'Transaction ID: '+res['transId']
                document.getElementById("openModalButton").click();
                if (type == 1)
                    _this.Following[index].status = true;
                else {
                    _this.search_people[index].status = true;
                    var flag = 0;
                    for (var i = 0; i < _this.Following.length; i++) {
                        if (_this.Following[i].Acc_id == _this.search_people[index].Acc_id) {
                            flag = 1;
                            _this.Following[i].status = true;
                        }
                    }
                    if (flag == 0)
                        _this.Following.push(_this.search_people[index]);
                }
                _this.ms.Acc_Profile[0].following += 1;
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    FollowingComponent.prototype.search = function (text) {
        var _this = this;
        this.ms.SearchPeople(text).then(function (res) {
            _this.search_people = res;
        });
    };
    FollowingComponent.prototype.otherUser = function (name) {
        this.ms.setOtherUserName(name.split('@')[1]);
        this.router.navigate([{ outlets: { primary: ['userpost'], feed: ['userprofilelist'] } }]);
    };
    FollowingComponent.prototype.goBack = function () {
        this.ms.goBack();
    };
    FollowingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-following',
            template: __webpack_require__(/*! ./following.component.html */ "./src/app/following/following.component.html"),
            styles: [__webpack_require__(/*! ./following.component.css */ "./src/app/following/following.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], FollowingComponent);
    return FollowingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userimage {\n\n\tmax-width: 150px;\n    max-height: 150px;\n    border-radius: 10%;\n}\n\n\n.imagecontainer {\n\ttext-align: center;\n}\n\n\n.info {\n\n\tcolor: white;\n\ttext-align: center;\n}\n\n\n.handle {\n\ttext-align: center;\n\tcolor: black;\n}\n\n\n.righttext {\n\ttext-align: center;\n\tcolor: white;\n}\n\n\n.righttextblue {\n\tcolor: #a09fed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxpQkFBaUI7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3RCOzs7QUFHRDtDQUNDLG1CQUFtQjtDQUNuQjs7O0FBRUQ7O0NBRUMsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQjs7O0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiOzs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2I7OztBQUVEO0NBQ0MsZUFBZTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyaW1hZ2Uge1xuXG5cdG1heC13aWR0aDogMTUwcHg7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuXG5cbi5pbWFnZWNvbnRhaW5lciB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluZm8ge1xuXG5cdGNvbG9yOiB3aGl0ZTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGFuZGxlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogYmxhY2s7XG59XG5cbi5yaWdodHRleHQge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJpZ2h0dGV4dGJsdWUge1xuXHRjb2xvcjogI2EwOWZlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display: block;height: 100%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;background: #ffffff;padding-top: 50%;\">\n\t<div class=\"container imagecontainer mt-5\">\n\t\t<img class=\"userimage\" src=\"assets/img/graphic1.svg\">\n\t</div>\n\t<hr>\n</div>\n\t"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function LoginComponent(ms, router) {
        this.ms = ms;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Scat_login = function () {
        var _this = this;
        this.ms.Scater_login().then(function (res) {
            if (res) {
                _this.interval1 = setInterval(function () {
                    if (localStorage.getItem(_this.ms.Scatter_account_name) != null) {
                        // console.log("Login Acc "+localStorage.getItem(this.ms.Scatter_account_name))
                        clearInterval(_this.interval1);
                        _this.ms.getFollowersDetail();
                        _this.router.navigate(['/']);
                    }
                    else
                        _this.ms.Scater_login();
                }, 50);
            }
        });
    };
    LoginComponent.prototype.PriKey_login = function () {
        var _this = this;
        var Pri_key = (document.getElementById("privateKey").value);
        var Acc_name = (document.getElementById("accountname").value);
        if (Acc_name != '') {
            this.ms.isPri_Valid(Pri_key).then(function (res) {
                if (res) {
                    _this.ms.PKey_login(Acc_name, Pri_key).then(function (res) {
                        _this.interval2 = setInterval(function () {
                            if (localStorage.getItem(_this.ms.Scatter_account_name) != null) {
                                clearInterval(_this.interval2);
                                // console.log("Acc "+ localStorage.getItem(this.ms.Scatter_account_name))
                                _this.ms.getFollowersDetail();
                                _this.router.navigate(['/']);
                            }
                        }, 50);
                    });
                }
                else {
                    alert("Enter the valid private key");
                }
            });
        }
        else
            alert("Please Enter the account name");
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval1);
        clearInterval(this.interval2);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logincontent/logincontent.component.css":
/*!*********************************************************!*\
  !*** ./src/app/logincontent/logincontent.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*------------------------------------------------------------------\n * Theme Name: iofrm - theme\n * Theme URI: http://www.brandio.io/envato/iofrm\n * Author: Brandio\n * Author URI: http://www.brandio.io/\n * Copyright 2018 Brandio.\n -------------------------------------------------------------------*/\n/*------------------------------------------------------------------\n[Table of contents]\n\n1. General Styles.\n2. Responsive Styles.\n-------------------------------------------------------------------*/\n/* -----------------------------------\n    1 - General Styles\n------------------------------------*/\n#ig{\n\twidth: 100%;\n\theight: 50px;\n}\n.form-body {\n    background-color: #fff;\n    widows: 100%;\n}\n.website-logo {\n    display: inline-block;\n    top: 50px;\n    left: initial;\n    right: 50px;\n    bottom: initial;\n}\n.website-logo img {\n    width: 100px;\n}\n.website-logo .logo {\n    background-image: url(\"/assets/img/murmur.svg\");\n}\n.website-logo .logo img {\n    width: 100px;\n}\n.website-logo-inside img {\n    width: 100px;\n}\n.website-logo-inside .logo {\n    background-image: url(\"/assets/img/murmur.svg\");\n}\n.website-logo-inside .logo img {\n    width: 100px;\n}\n.img-holder {\n    width: 550px;\n    background-color: #FAFAFA;\n}\n.img-holder .info-holder h3 {\n    color: #000;\n}\n.img-holder .info-holder p {\n    color: #000;\n}\n.img-holder .bg {\n    opacity: 1;\n    background-image: none;\n}\n.form-holder {\n    margin-left: 550px;\n}\n.form-holder .form-content ::-webkit-input-placeholder {\n    color: #000000;\n}\n.form-holder .form-content :-moz-placeholder {\n    color: #000000;\n}\n.form-holder .form-content ::-moz-placeholder {\n    color: #000000;\n}\n.form-holder .form-content :-ms-input-placeholder {\n    color: #000000;\n}\n.form-control ::-webkit-input-placeholder {\n    color: #000000;\n}\n.form-control :-moz-placeholder {\n    color: #000000;\n}\n.form-control ::-moz-placeholder {\n    color: #000000;\n}\n.form-control :-ms-input-placeholder {\n    color: #000000;\n}\n.form-content {\n    background-color: #fff;\n}\n.form-content .form-group {\n    color: #000;\n}\n.form-content .form-items {\n    max-width: 500px;\n    text-align: left;\n}\n.form-content h3 {\n    color: #000;\n    text-align: left;\n}\n.form-content p {\n    color: #000;\n    text-align: left;\n}\n.form-content label {\n    color: #000;\n    text-align: left;\n}\n.form-content .page-links a {\n    color: #000;\n}\n.form-content .page-links a:after {\n    background-color: rgba(222, 222, 222, 0.7);\n}\n.form-content .page-links a.active:after {\n    background-color: #0092FE;\n}\n.form-content .page-links a:hover:after, .form-content .page-links a:focus:after {\n    background-color: #0092FE;\n}\n.form-content input, .form-content .dropdown-toggle.btn-default {\n    border: 1px solid rgba(0, 149, 255, 0);\n    background-color: #F7F7F7;\n    color: #000000;\n}\n.form-content input:hover, .form-content input:focus, .form-content .dropdown-toggle.btn-default:hover, .form-content .dropdown-toggle.btn-default:focus {\n    border: 1px solid #0093FF;\n    background-color: #fff;\n    color: #000000;\n}\n.form-content textarea {\n    background-color: #F7F7F7;\n    border: 1px solid rgba(0, 149, 255, 0);\n    color: #000000;\n}\n.form-content textarea:hover, .form-content textarea:focus {\n    border: 1px solid #0093FF;\n    background-color: #fff;\n    color: #000000;\n}\n.form-content input[type=\"checkbox\"]:not(:checked) + label, .form-content input[type=\"checkbox\"]:checked + label, .form-content input[type=\"radio\"]:not(:checked) + label, .form-content input[type=\"radio\"]:checked + label {\n    color: #000;\n}\n.form-content input[type=\"checkbox\"]:checked + label, .form-content input[type=\"radio\"]:checked + label {\n    color: #000;\n}\n.form-content input[type=\"checkbox\"]:checked + label:before, .form-content input[type=\"radio\"]:checked + label:before {\n    background: #000;\n    border: 0px solid #000;\n}\n.form-content input[type=\"checkbox\"]:not(:checked) + label:before, .form-content input[type=\"radio\"]:not(:checked) + label:before {\n    background: transparent;\n    border: 2px solid #000;\n}\n.form-content input[type=\"checkbox\"]:checked + label:after, .form-content input[type=\"checkbox\"]:not(:checked) + label:after {\n    color: #fff;\n}\n.form-content input[type=\"radio\"]:checked + label:after, .form-content input[type=\"radio\"]:not(:checked) + label:after {\n    background-color: #fff;\n}\n.form-content .custom-options input[type=\"checkbox\"]:not(:checked) + label, .form-content .custom-options input[type=\"checkbox\"]:checked + label, .form-content .custom-options input[type=\"radio\"]:not(:checked) + label, .form-content .custom-options input[type=\"radio\"]:checked + label {\n    color: #606060;\n    background-color: #F7F7F7;\n}\n.form-content .custom-options input[type=\"checkbox\"]:checked + label, .form-content .custom-options input[type=\"radio\"]:checked + label {\n    color: #fff;\n    background-color: #57D38C;\n    box-shadow: 0 3px 8px rgba(74, 230, 142, 0.35);\n}\n.form-content .form-button .ibtn {\n    background-color: #0093FF;\n    color: #fff;\n    box-shadow: 0 0 0 rgba(80, 182, 255, 0.31);\n}\n.form-content .form-button .ibtn:hover, .form-content .form-button .ibtn:focus {\n    box-shadow: 0 5px 6px rgba(80, 182, 255, 0.31);\n}\n.form-content .form-button a {\n    color: #000;\n}\n.form-content .other-links span {\n    color: #000;\n}\n.form-content .other-links a {\n    color: #000;\n}\n.form-content .form-sent .tick-holder .tick-icon {\n    background-color: rgba(233, 253, 214, 0);\n}\n.form-content .form-sent .tick-holder .tick-icon:before {\n    background-color: #8CCB57;\n}\n.form-content .form-sent .tick-holder .tick-icon:after {\n    background-color: #8CCB57;\n}\n.form-content .form-sent h3 {\n    color: #000;\n}\n.form-content .form-sent p {\n    color: #000;\n}\n.form-content .form-sent .info-holder {\n    color: #000;\n    border-top: 1px solid rgba(0, 0, 0, 0.5);\n}\n.form-content .form-sent .info-holder span {\n    color: #000;\n}\n.form-content .form-sent .info-holder a {\n    color: #000;\n}\n@-webkit-keyframes tick-anime3 {\n    0% {\n        background-color: rgba(233, 253, 214, 0);\n        -webkit-transform: rotate(35deg) scale(2);\n        transform: rotate(35deg) scale(2);\n    }\n\n    100% {\n        background-color: #E9FDD6;\n        -webkit-transform: rotate(45deg) scale(1);\n        transform: rotate(45deg) scale(1);\n    }\n}\n@keyframes tick-anime3 {\n    0% {\n        background-color: rgba(233, 253, 214, 0);\n        -webkit-transform: rotate(35deg) scale(2);\n        transform: rotate(35deg) scale(2);\n    }\n\n    100% {\n        background-color: #E9FDD6;\n        -webkit-transform: rotate(45deg) scale(1);\n        transform: rotate(45deg) scale(1);\n    }\n}\n.alert {\n    color: #000000;\n}\n.alert.alert-primary {\n    background-color: #e2f0ff;\n    border-color: #3a86d6;\n}\n.alert.alert-primary hr {\n    border-top-color: #3a86d6;\n}\n.alert.alert-secondary {\n    background-color: #f0f0f0;\n    border-color: #8e9396;\n}\n.alert.alert-secondary hr {\n    border-top-color: #8e9396;\n}\n.alert.alert-success {\n    background-color: #F7FFF0;\n    border-color: #8CCB57;\n}\n.alert.alert-success hr {\n    border-top-color: #8CCB57;\n}\n.alert.alert-danger {\n    background-color: #FFFAFA;\n    border-color: #F55050;\n}\n.alert.alert-danger hr {\n    border-top-color: #F55050;\n}\n.alert.alert-warning {\n    background-color: #fff8e1;\n    border-color: #f1cb4b;\n}\n.alert.alert-warning hr {\n    border-top-color: #f1cb4b;\n}\n.alert.alert-info {\n    background-color: #dcedf1;\n    border-color: #42bfdb;\n}\n.alert.alert-info hr {\n    border-top-color: #42bfdb;\n}\n.alert.alert-light {\n    background-color: #fefefe;\n    border-color: #a7a4a4;\n}\n.alert.alert-light hr {\n    border-top-color: #a7a4a4;\n}\n.alert.alert-dark {\n    background-color: #d6d8d9;\n    border-color: #525557;\n}\n.alert.alert-dark hr {\n    border-top-color: #525557;\n}\n.alert.with-icon.alert-primary:before {\n    color: #3a86d6;\n}\n.alert.with-icon.alert-secondary:before {\n    color: #8e9396;\n}\n.alert.with-icon.alert-success:before {\n    color: #8CCB57;\n}\n.alert.with-icon.alert-danger:before {\n    color: #F55050;\n}\n.alert.with-icon.alert-warning:before {\n    color: #f1cb4b;\n}\n.alert.with-icon.alert-info:before {\n    color: #42bfdb;\n}\n.alert.with-icon.alert-light:before {\n    color: #a7a4a4;\n}\n.alert.with-icon.alert-dark:before {\n    color: #525557;\n}\n.alert a.alert-link, .alert a {\n    color: #000000;\n}\n.alert .close {\n    color: #727272;\n}\n.alert .close span {\n    color: #727272;\n}\n.form-body.without-side .img-holder .info-holder img {\n    display: inline-block;\n}\n.form-body.without-side .form-content .page-links a:after {\n    background-color: rgba(222, 222, 222, 0.7);\n}\n.form-body.without-side .form-content .page-links a.active:after {\n    background-color: #0093FF;\n}\n.form-body.without-side .form-content .page-links a:hover:after, .form-body.without-side .form-content .page-links a:focus:after {\n    background-color: #0093FF;\n}\n.form-body.without-side .form-content .form-button .ibtn {\n    background-color: #0093FF;\n    color: #fff;\n    box-shadow: 0 0 0 rgba(80, 182, 255, 0.31);\n}\n.form-body.without-side .form-content .form-button .ibtn:hover, .form-body.without-side .form-content .form-button .ibtn:focus {\n    box-shadow: 0 5px 6px rgba(80, 182, 255, 0.31);\n}\n/* -----------------------------------\n    2 - Responsive Styles\n------------------------------------*/\n@media (max-width: 992px) {\n    .form-holder {\n        margin-left: 0;\n    }\n\n    .website-logo {\n        top: 50px;\n        left: 50px;\n        right: initial;\n        bottom: initial;\n    }\n\n    .website-logo .logo {\n        background-image: url(\"/assets/img/murmur.svg\");\n    }\n\n    .form-body.without-side .website-logo .logo {\n        background-image: url(\"/assets/img/murmur.svg\");\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5jb250ZW50L2xvZ2luY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7c0VBTXNFO0FBQ3RFOzs7OztxRUFLcUU7QUFDckU7O3NDQUVzQztBQUV0QztDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2I7QUFDRDtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0NBQ25CO0FBRUQ7SUFDSSxhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxnREFBZ0Q7Q0FDbkQ7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7QUFFRDtJQUNJLGdEQUFnRDtDQUNuRDtBQUVEO0lBQ0ksYUFBYTtDQUNoQjtBQUVEO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksWUFBWTtDQUNmO0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7QUFFRDtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7Q0FDMUI7QUFFRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksdUJBQXVCO0NBQzFCO0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7Q0FDcEI7QUFFRDtJQUNJLFlBQVk7SUFDWixpQkFBaUI7Q0FDcEI7QUFFRDtJQUNJLFlBQVk7SUFDWixpQkFBaUI7Q0FDcEI7QUFFRDtJQUNJLFlBQVk7SUFDWixpQkFBaUI7Q0FDcEI7QUFFRDtJQUNJLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksMkNBQTJDO0NBQzlDO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksdUNBQXVDO0lBQ3ZDLDBCQUEwQjtJQUMxQixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQix1Q0FBdUM7SUFDdkMsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7QUFFRDtJQUNJLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtDQUMxQjtBQUVEO0lBQ0ksd0JBQXdCO0lBQ3hCLHVCQUF1QjtDQUMxQjtBQUVEO0lBQ0ksWUFBWTtDQUNmO0FBRUQ7SUFDSSx1QkFBdUI7Q0FDMUI7QUFFRDtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7SUFFMUIsK0NBQStDO0NBQ2xEO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUVaLDJDQUEyQztDQUM5QztBQUVEO0lBRUksK0NBQStDO0NBQ2xEO0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7QUFFRDtJQUNJLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksWUFBWTtDQUNmO0FBRUQ7SUFDSSx5Q0FBeUM7Q0FDNUM7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7QUFFRDtJQUNJLFlBQVk7Q0FDZjtBQUVEO0lBQ0ksWUFBWTtJQUNaLHlDQUF5QztDQUM1QztBQUVEO0lBQ0ksWUFBWTtDQUNmO0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7QUFFRDtJQUNJO1FBQ0kseUNBQXlDO1FBQ3pDLDBDQUEwQztRQUcxQyxrQ0FBa0M7S0FDckM7O0lBRUQ7UUFDSSwwQkFBMEI7UUFDMUIsMENBQTBDO1FBRzFDLGtDQUFrQztLQUNyQztDQUNKO0FBaEJEO0lBQ0k7UUFDSSx5Q0FBeUM7UUFDekMsMENBQTBDO1FBRzFDLGtDQUFrQztLQUNyQzs7SUFFRDtRQUNJLDBCQUEwQjtRQUMxQiwwQ0FBMEM7UUFHMUMsa0NBQWtDO0tBQ3JDO0NBQ0o7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLHNCQUFzQjtDQUN6QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLHNCQUFzQjtDQUN6QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0NBQ3pCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLHNCQUFzQjtDQUN6QjtBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxlQUFlO0NBQ2xCO0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLDJDQUEyQztDQUM5QztBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBRVosMkNBQTJDO0NBQzlDO0FBRUQ7SUFFSSwrQ0FBK0M7Q0FDbEQ7QUFFRDs7c0NBRXNDO0FBQ3RDO0lBQ0k7UUFDSSxlQUFlO0tBQ2xCOztJQUVEO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxlQUFlO1FBQ2YsZ0JBQWdCO0tBQ25COztJQUVEO1FBQ0ksZ0RBQWdEO0tBQ25EOztJQUVEO1FBQ0ksZ0RBQWdEO0tBQ25EO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbmNvbnRlbnQvbG9naW5jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVGhlbWUgTmFtZTogaW9mcm0gLSB0aGVtZVxuICogVGhlbWUgVVJJOiBodHRwOi8vd3d3LmJyYW5kaW8uaW8vZW52YXRvL2lvZnJtXG4gKiBBdXRob3I6IEJyYW5kaW9cbiAqIEF1dGhvciBVUkk6IGh0dHA6Ly93d3cuYnJhbmRpby5pby9cbiAqIENvcHlyaWdodCAyMDE4IEJyYW5kaW8uXG4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuW1RhYmxlIG9mIGNvbnRlbnRzXVxuXG4xLiBHZW5lcmFsIFN0eWxlcy5cbjIuIFJlc3BvbnNpdmUgU3R5bGVzLlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIDEgLSBHZW5lcmFsIFN0eWxlc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuI2lne1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiA1MHB4O1xufVxuLmZvcm0tYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWRvd3M6IDEwMCU7XG59XG5cbi53ZWJzaXRlLWxvZ28ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0b3A6IDUwcHg7XG4gICAgbGVmdDogaW5pdGlhbDtcbiAgICByaWdodDogNTBweDtcbiAgICBib3R0b206IGluaXRpYWw7XG59XG5cbi53ZWJzaXRlLWxvZ28gaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi53ZWJzaXRlLWxvZ28gLmxvZ28ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL211cm11ci5zdmdcIik7XG59XG5cbi53ZWJzaXRlLWxvZ28gLmxvZ28gaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi53ZWJzaXRlLWxvZ28taW5zaWRlIGltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG4ud2Vic2l0ZS1sb2dvLWluc2lkZSAubG9nbyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvbXVybXVyLnN2Z1wiKTtcbn1cblxuLndlYnNpdGUtbG9nby1pbnNpZGUgLmxvZ28gaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi5pbWctaG9sZGVyIHtcbiAgICB3aWR0aDogNTUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cblxuLmltZy1ob2xkZXIgLmluZm8taG9sZGVyIGgzIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmltZy1ob2xkZXIgLmluZm8taG9sZGVyIHAge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uaW1nLWhvbGRlciAuYmcge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuLmZvcm0taG9sZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogNTUwcHg7XG59XG5cbi5mb3JtLWhvbGRlciAuZm9ybS1jb250ZW50IDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5mb3JtLWhvbGRlciAuZm9ybS1jb250ZW50IDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZvcm0taG9sZGVyIC5mb3JtLWNvbnRlbnQgOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZvcm0taG9sZGVyIC5mb3JtLWNvbnRlbnQgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5mb3JtLWNvbnRyb2wgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZvcm0tY29udHJvbCA6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5mb3JtLWNvbnRyb2wgOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZvcm0tY29udHJvbCA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZvcm0tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmZvcm0tY29udGVudCAuZm9ybS1ncm91cCB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5mb3JtLWNvbnRlbnQgLmZvcm0taXRlbXMge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmZvcm0tY29udGVudCBoMyB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmZvcm0tY29udGVudCBwIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZm9ybS1jb250ZW50IGxhYmVsIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZm9ybS1jb250ZW50IC5wYWdlLWxpbmtzIGEge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uZm9ybS1jb250ZW50IC5wYWdlLWxpbmtzIGE6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLCAyMjIsIDIyMiwgMC43KTtcbn1cblxuLmZvcm0tY29udGVudCAucGFnZS1saW5rcyBhLmFjdGl2ZTphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTJGRTtcbn1cblxuLmZvcm0tY29udGVudCAucGFnZS1saW5rcyBhOmhvdmVyOmFmdGVyLCAuZm9ybS1jb250ZW50IC5wYWdlLWxpbmtzIGE6Zm9jdXM6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDkyRkU7XG59XG5cbi5mb3JtLWNvbnRlbnQgaW5wdXQsIC5mb3JtLWNvbnRlbnQgLmRyb3Bkb3duLXRvZ2dsZS5idG4tZGVmYXVsdCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAxNDksIDI1NSwgMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZvcm0tY29udGVudCBpbnB1dDpob3ZlciwgLmZvcm0tY29udGVudCBpbnB1dDpmb2N1cywgLmZvcm0tY29udGVudCAuZHJvcGRvd24tdG9nZ2xlLmJ0bi1kZWZhdWx0OmhvdmVyLCAuZm9ybS1jb250ZW50IC5kcm9wZG93bi10b2dnbGUuYnRuLWRlZmF1bHQ6Zm9jdXMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDkzRkY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZvcm0tY29udGVudCB0ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDE0OSwgMjU1LCAwKTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZvcm0tY29udGVudCB0ZXh0YXJlYTpob3ZlciwgLmZvcm0tY29udGVudCB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwOTNGRjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpICsgbGFiZWwsIC5mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbCwgLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsLCAuZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwsIC5mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsIC5mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgYm9yZGVyOiAwcHggc29saWQgIzAwMDtcbn1cblxuLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmJlZm9yZSwgLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbn1cblxuLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyLCAuZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIsIC5mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmZvcm0tY29udGVudCAuY3VzdG9tLW9wdGlvbnMgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCwgLmZvcm0tY29udGVudCAuY3VzdG9tLW9wdGlvbnMgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbCwgLmZvcm0tY29udGVudCAuY3VzdG9tLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCwgLmZvcm0tY29udGVudCAuY3VzdG9tLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgY29sb3I6ICM2MDYwNjA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcbn1cblxuLmZvcm0tY29udGVudCAuY3VzdG9tLW9wdGlvbnMgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbCwgLmZvcm0tY29udGVudCAuY3VzdG9tLW9wdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU3RDM4QztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDhweCByZ2JhKDc0LCAyMzAsIDE0MiwgMC4zNSk7XG4gICAgYm94LXNoYWRvdzogMCAzcHggOHB4IHJnYmEoNzQsIDIzMCwgMTQyLCAwLjM1KTtcbn1cblxuLmZvcm0tY29udGVudCAuZm9ybS1idXR0b24gLmlidG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDkzRkY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCByZ2JhKDgwLCAxODIsIDI1NSwgMC4zMSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgcmdiYSg4MCwgMTgyLCAyNTUsIDAuMzEpO1xufVxuXG4uZm9ybS1jb250ZW50IC5mb3JtLWJ1dHRvbiAuaWJ0bjpob3ZlciwgLmZvcm0tY29udGVudCAuZm9ybS1idXR0b24gLmlidG46Zm9jdXMge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggNnB4IHJnYmEoODAsIDE4MiwgMjU1LCAwLjMxKTtcbiAgICBib3gtc2hhZG93OiAwIDVweCA2cHggcmdiYSg4MCwgMTgyLCAyNTUsIDAuMzEpO1xufVxuXG4uZm9ybS1jb250ZW50IC5mb3JtLWJ1dHRvbiBhIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmZvcm0tY29udGVudCAub3RoZXItbGlua3Mgc3BhbiB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5mb3JtLWNvbnRlbnQgLm90aGVyLWxpbmtzIGEge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uZm9ybS1jb250ZW50IC5mb3JtLXNlbnQgLnRpY2staG9sZGVyIC50aWNrLWljb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCAyNTMsIDIxNCwgMCk7XG59XG5cbi5mb3JtLWNvbnRlbnQgLmZvcm0tc2VudCAudGljay1ob2xkZXIgLnRpY2staWNvbjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4Q0NCNTc7XG59XG5cbi5mb3JtLWNvbnRlbnQgLmZvcm0tc2VudCAudGljay1ob2xkZXIgLnRpY2staWNvbjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhDQ0I1Nztcbn1cblxuLmZvcm0tY29udGVudCAuZm9ybS1zZW50IGgzIHtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmZvcm0tY29udGVudCAuZm9ybS1zZW50IHAge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uZm9ybS1jb250ZW50IC5mb3JtLXNlbnQgLmluZm8taG9sZGVyIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uZm9ybS1jb250ZW50IC5mb3JtLXNlbnQgLmluZm8taG9sZGVyIHNwYW4ge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uZm9ybS1jb250ZW50IC5mb3JtLXNlbnQgLmluZm8taG9sZGVyIGEge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG5Aa2V5ZnJhbWVzIHRpY2stYW5pbWUzIHtcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCAyNTMsIDIxNCwgMCk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzVkZWcpIHNjYWxlKDIpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM1ZGVnKSBzY2FsZSgyKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM1ZGVnKSBzY2FsZSgyKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzVkZWcpIHNjYWxlKDIpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlGREQ2O1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgxKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgxKTtcbiAgICB9XG59XG5cbi5hbGVydCB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5hbGVydC5hbGVydC1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJmMGZmO1xuICAgIGJvcmRlci1jb2xvcjogIzNhODZkNjtcbn1cblxuLmFsZXJ0LmFsZXJ0LXByaW1hcnkgaHIge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICMzYTg2ZDY7XG59XG5cbi5hbGVydC5hbGVydC1zZWNvbmRhcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgYm9yZGVyLWNvbG9yOiAjOGU5Mzk2O1xufVxuXG4uYWxlcnQuYWxlcnQtc2Vjb25kYXJ5IGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjOGU5Mzk2O1xufVxuXG4uYWxlcnQuYWxlcnQtc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RkZGMDtcbiAgICBib3JkZXItY29sb3I6ICM4Q0NCNTc7XG59XG5cbi5hbGVydC5hbGVydC1zdWNjZXNzIGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjOENDQjU3O1xufVxuXG4uYWxlcnQuYWxlcnQtZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQUZBO1xuICAgIGJvcmRlci1jb2xvcjogI0Y1NTA1MDtcbn1cblxuLmFsZXJ0LmFsZXJ0LWRhbmdlciBociB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI0Y1NTA1MDtcbn1cblxuLmFsZXJ0LmFsZXJ0LXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY4ZTE7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjFjYjRiO1xufVxuXG4uYWxlcnQuYWxlcnQtd2FybmluZyBociB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2YxY2I0Yjtcbn1cblxuLmFsZXJ0LmFsZXJ0LWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2VkZjE7XG4gICAgYm9yZGVyLWNvbG9yOiAjNDJiZmRiO1xufVxuXG4uYWxlcnQuYWxlcnQtaW5mbyBociB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzQyYmZkYjtcbn1cblxuLmFsZXJ0LmFsZXJ0LWxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIGJvcmRlci1jb2xvcjogI2E3YTRhNDtcbn1cblxuLmFsZXJ0LmFsZXJ0LWxpZ2h0IGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjYTdhNGE0O1xufVxuXG4uYWxlcnQuYWxlcnQtZGFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDhkOTtcbiAgICBib3JkZXItY29sb3I6ICM1MjU1NTc7XG59XG5cbi5hbGVydC5hbGVydC1kYXJrIGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjNTI1NTU3O1xufVxuXG4uYWxlcnQud2l0aC1pY29uLmFsZXJ0LXByaW1hcnk6YmVmb3JlIHtcbiAgICBjb2xvcjogIzNhODZkNjtcbn1cblxuLmFsZXJ0LndpdGgtaWNvbi5hbGVydC1zZWNvbmRhcnk6YmVmb3JlIHtcbiAgICBjb2xvcjogIzhlOTM5Njtcbn1cblxuLmFsZXJ0LndpdGgtaWNvbi5hbGVydC1zdWNjZXNzOmJlZm9yZSB7XG4gICAgY29sb3I6ICM4Q0NCNTc7XG59XG5cbi5hbGVydC53aXRoLWljb24uYWxlcnQtZGFuZ2VyOmJlZm9yZSB7XG4gICAgY29sb3I6ICNGNTUwNTA7XG59XG5cbi5hbGVydC53aXRoLWljb24uYWxlcnQtd2FybmluZzpiZWZvcmUge1xuICAgIGNvbG9yOiAjZjFjYjRiO1xufVxuXG4uYWxlcnQud2l0aC1pY29uLmFsZXJ0LWluZm86YmVmb3JlIHtcbiAgICBjb2xvcjogIzQyYmZkYjtcbn1cblxuLmFsZXJ0LndpdGgtaWNvbi5hbGVydC1saWdodDpiZWZvcmUge1xuICAgIGNvbG9yOiAjYTdhNGE0O1xufVxuXG4uYWxlcnQud2l0aC1pY29uLmFsZXJ0LWRhcms6YmVmb3JlIHtcbiAgICBjb2xvcjogIzUyNTU1Nztcbn1cblxuLmFsZXJ0IGEuYWxlcnQtbGluaywgLmFsZXJ0IGEge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uYWxlcnQgLmNsb3NlIHtcbiAgICBjb2xvcjogIzcyNzI3Mjtcbn1cblxuLmFsZXJ0IC5jbG9zZSBzcGFuIHtcbiAgICBjb2xvcjogIzcyNzI3Mjtcbn1cblxuLmZvcm0tYm9keS53aXRob3V0LXNpZGUgLmltZy1ob2xkZXIgLmluZm8taG9sZGVyIGltZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZm9ybS1ib2R5LndpdGhvdXQtc2lkZSAuZm9ybS1jb250ZW50IC5wYWdlLWxpbmtzIGE6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLCAyMjIsIDIyMiwgMC43KTtcbn1cblxuLmZvcm0tYm9keS53aXRob3V0LXNpZGUgLmZvcm0tY29udGVudCAucGFnZS1saW5rcyBhLmFjdGl2ZTphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTNGRjtcbn1cblxuLmZvcm0tYm9keS53aXRob3V0LXNpZGUgLmZvcm0tY29udGVudCAucGFnZS1saW5rcyBhOmhvdmVyOmFmdGVyLCAuZm9ybS1ib2R5LndpdGhvdXQtc2lkZSAuZm9ybS1jb250ZW50IC5wYWdlLWxpbmtzIGE6Zm9jdXM6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDkzRkY7XG59XG5cbi5mb3JtLWJvZHkud2l0aG91dC1zaWRlIC5mb3JtLWNvbnRlbnQgLmZvcm0tYnV0dG9uIC5pYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5M0ZGO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgcmdiYSg4MCwgMTgyLCAyNTUsIDAuMzEpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoODAsIDE4MiwgMjU1LCAwLjMxKTtcbn1cblxuLmZvcm0tYm9keS53aXRob3V0LXNpZGUgLmZvcm0tY29udGVudCAuZm9ybS1idXR0b24gLmlidG46aG92ZXIsIC5mb3JtLWJvZHkud2l0aG91dC1zaWRlIC5mb3JtLWNvbnRlbnQgLmZvcm0tYnV0dG9uIC5pYnRuOmZvY3VzIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDZweCByZ2JhKDgwLCAxODIsIDI1NSwgMC4zMSk7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNnB4IHJnYmEoODAsIDE4MiwgMjU1LCAwLjMxKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAyIC0gUmVzcG9uc2l2ZSBTdHlsZXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuZm9ybS1ob2xkZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAud2Vic2l0ZS1sb2dvIHtcbiAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICBsZWZ0OiA1MHB4O1xuICAgICAgICByaWdodDogaW5pdGlhbDtcbiAgICAgICAgYm90dG9tOiBpbml0aWFsO1xuICAgIH1cblxuICAgIC53ZWJzaXRlLWxvZ28gLmxvZ28ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9tdXJtdXIuc3ZnXCIpO1xuICAgIH1cblxuICAgIC5mb3JtLWJvZHkud2l0aG91dC1zaWRlIC53ZWJzaXRlLWxvZ28gLmxvZ28ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9tdXJtdXIuc3ZnXCIpO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/logincontent/logincontent.component.html":
/*!**********************************************************!*\
  !*** ./src/app/logincontent/logincontent.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-body\">\n\t<div class=\"website-logo\">\n\t\t<a href=\"https://www.murmurdapp.com/\">\n\t\t\t<div>\n\t\t\t\t<img style=\"border-radius: 5px;\" src=\"assets/img/murmur full length.png\" id=\"ig\"> \n\t\t\t\t<!-- <h1 style=\"color: white;font-size: 70px;font-weight: 900;\">murmur</h1> -->\n\t\t\t</div>\n\t\t</a>\n\t</div>\n\n\t<div class=\"row\">\n\t\t\t<div class=\"img-holder\"  style=\"background-color: #fff\">\n\t\t\t\t<div class=\"bg\"></div>\n\t\t\t\t<div class=\"info-holder\">\n\t\t\t\t\t<img style=\"border-radius: 30px; width: 60% !important;\" src=\"assets/img/murmur_new.png\" >\n\t\t\t\t</div>\n\t\t\t\t<!-- <div class=\"info-holder\">\n\t\t\t\t\t<img style=\"width: 10%;height: 10%;\" src=\"assets/img/1.png\" id=\"ig\"> \n\t\t\t\t\t<h3>Control Your Data</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"info-holder\">\n\t\t\t\t\t<img style=\"width: 10%;height: 10%;\" src=\"assets/img/2.png\" id=\"ig\"> \n\t\t\t\t\t<h3>Avoid Fake News</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"info-holder\">\n\t\t\t\t\t<img style=\"width: 10%;height: 10%;\" src=\"assets/img/3.png\" id=\"ig\"> \n\t\t\t\t\t<h3>Earn Content Rewards</h3>\n\t\t\t\t</div> -->\n\t\t\t</div>\n\t\t\t<div class=\"form-holder\">\n\t\t\t\t<div class=\"form-content\" style=\"background-image: url(assets/img/main.png);background-repeat: no-repeat;background-size: cover;\">\n\t\t\t\t\t<div class=\"form-items\">\n\t\t\t\t\t\t<h1 style=\"color: white;font-size: 50px;\">Microblogging, reimagined.</h1>\n\t\t\t\t\t\t<p style=\"color: white;\">Murmur is a new-age decentralized micro-blogging platform that's entirely user-driven, user-controlled, and rewarding.</p>\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"page-links\">\n\t\t\t\t\t\t\t<a  class=\"active\" style=\"color: white;\">Import your EOS account to access free speech.</a>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"accountname\" #a  placeholder=\"Enter account Name\" required>\n\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" id=\"privateKey\" #b placeholder=\"Import Private Key\" required>\n\t\t\t\t\t\t<div class=\"form-button\">\n\t\t\t\t\t\t\t<button id=\"submit\"  class=\"ibtn\" (click)=\"PriKey_login(a.value,b.value)\">Import</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t</div>\n</div>\n\n\n<button id=\"openModalButton\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Open Modal</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\"   tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" #closeBtn>\n\t\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-body\" style=\"font-size: 20px;margin: auto;\">\n\t\t\t\t{{resMes}}\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\" style=\"margin: auto;\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>  "

/***/ }),

/***/ "./src/app/logincontent/logincontent.component.ts":
/*!********************************************************!*\
  !*** ./src/app/logincontent/logincontent.component.ts ***!
  \********************************************************/
/*! exports provided: LogincontentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogincontentComponent", function() { return LogincontentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogincontentComponent = /** @class */ (function () {
    function LogincontentComponent(ms, router) {
        this.ms = ms;
        this.router = router;
    }
    LogincontentComponent.prototype.ngOnInit = function () {
    };
    LogincontentComponent.prototype.PriKey_login = function (a, b) {
        var _this = this;
        var Pri_key = b;
        var Acc_name = a;
        if (Acc_name != '') {
            this.ms.isPri_Valid(Pri_key).then(function (res) {
                if (res) {
                    _this.ms.PKey_login(Acc_name, Pri_key).then(function (res) {
                        _this.router.navigate(['/']);
                        _this.ms.getFollowersDetail();
                    });
                }
                else {
                    console.log("a1");
                    _this.resMes = "Enter the valid private key";
                    document.getElementById("openModalButton").click();
                }
            });
        }
        else {
            console.log("a2");
            this.resMes = "Please Enter the account name";
            document.getElementById("openModalButton").click();
        }
    };
    LogincontentComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval2);
    };
    LogincontentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logincontent',
            template: __webpack_require__(/*! ./logincontent.component.html */ "./src/app/logincontent/logincontent.component.html"),
            styles: [__webpack_require__(/*! ./logincontent.component.css */ "./src/app/logincontent/logincontent.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogincontentComponent);
    return LogincontentComponent;
}());



/***/ }),

/***/ "./src/app/mainapp/mainapp.component.css":
/*!***********************************************!*\
  !*** ./src/app/mainapp/mainapp.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\tborder-radius: 3px;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin: 0 auto;\n    -webkit-animation: _104Un 0.3s cubic-bezier(0.1, 0.82, 0.25, 1);\n            animation: _104Un 0.3s cubic-bezier(0.1, 0.82, 0.25, 1);\n    background-position: top left;\n    left: 0;\n    background-color: #f7f8fa;\n    background-repeat: repeat-x;\n    /*transform-origin: center;*/\n    height: calc(100vh - 10px);\n    /*top: 19px;*/\n    /*display: -webkit-flex;*/\n    /*display: flex;*/\n    overflow: hidden;\n    position: relative;\n    /*width: 100%;*/\n}\n\n.styleleft{\n\n\t/*transform: translateZ(0);*/\n\t/*flex: 0 0 30%;*/\n\toverflow: hidden;\n    position: relative;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    /*border: 0;*/\n}\n\n.styleright{\n\n\t/*transform: translateZ(0);*/\n\t/*flex: 0 0 30%;*/\n\toverflow: hidden;\n    position: relative;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    /*border: 0;*/\n}\n\n.customcontainer {\n\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmFwcC9tYWluYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsbUJBQW1CO0lBQ2hCLDRFQUE0RTtJQUM1RSxlQUFlO0lBQ2YsZ0VBQXdEO1lBQXhELHdEQUF3RDtJQUN4RCw4QkFBOEI7SUFDOUIsUUFBUTtJQUNSLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjs7QUFFRDs7Q0FFQyw2QkFBNkI7Q0FDN0Isa0JBQWtCO0NBQ2xCLGlCQUFpQjtJQUNkLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0NBQ2pCOztBQUVEOztDQUVDLDZCQUE2QjtDQUM3QixrQkFBa0I7Q0FDbEIsaUJBQWlCO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7Q0FDakI7O0FBRUQ7O0lBRUksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9tYWluYXBwL21haW5hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHlsZW9uZXtcblxuXHRib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGFuaW1hdGlvbjogXzEwNFVuIDAuM3MgY3ViaWMtYmV6aWVyKDAuMSwgMC44MiwgMC4yNSwgMSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAvKnRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjsqL1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwcHgpO1xuICAgIC8qdG9wOiAxOXB4OyovXG4gICAgLypkaXNwbGF5OiAtd2Via2l0LWZsZXg7Ki9cbiAgICAvKmRpc3BsYXk6IGZsZXg7Ki9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKndpZHRoOiAxMDAlOyovXG59XG5cbi5zdHlsZWxlZnR7XG5cblx0Lyp0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7Ki9cblx0LypmbGV4OiAwIDAgMzAlOyovXG5cdG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC8qYm9yZGVyOiAwOyovXG59XG5cbi5zdHlsZXJpZ2h0e1xuXG5cdC8qdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApOyovXG5cdC8qZmxleDogMCAwIDMwJTsqL1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICAvKmJvcmRlcjogMDsqL1xufVxuXG4uY3VzdG9tY29udGFpbmVyIHtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/mainapp/mainapp.component.html":
/*!************************************************!*\
  !*** ./src/app/mainapp/mainapp.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"styleone\" id=\"logincont\" *ngIf=\"!login\" [style.display]=\"page ? 'block': 'none'\">\n\t<div class=\"row\" style=\"height: 100%\">\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12\">\t\n\t\t\t<app-logincontent></app-logincontent>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container customcontainer styleone\" *ngIf=\"login\">\n\t<div class=\"row\" style=\"height: 100%\">\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 styleleft\">\n\t\t\t<app-mainappone></app-mainappone>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 styleright\">\n\t\t\t<app-mainapptwo></app-mainapptwo>\n\t\t</div>\n\t\t<!-- <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 styleright\">\n\t\t\t<app-notifications></app-notifications>\n\t\t</div> -->\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/mainapp/mainapp.component.ts":
/*!**********************************************!*\
  !*** ./src/app/mainapp/mainapp.component.ts ***!
  \**********************************************/
/*! exports provided: MainappComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainappComponent", function() { return MainappComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainappComponent = /** @class */ (function () {
    function MainappComponent(ms) {
        this.ms = ms;
    }
    MainappComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.ms.Check_scatter().then(function (result) {
                if (_this.login != result) {
                    _this.login = result;
                    _this.page = true;
                    console.log("res: ", result);
                }
            });
        }, 50);
    };
    MainappComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainapp',
            template: __webpack_require__(/*! ./mainapp.component.html */ "./src/app/mainapp/mainapp.component.html"),
            styles: [__webpack_require__(/*! ./mainapp.component.css */ "./src/app/mainapp/mainapp.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"]])
    ], MainappComponent);
    return MainappComponent;
}());



/***/ }),

/***/ "./src/app/mainappone/mainappone.component.css":
/*!*****************************************************!*\
  !*** ./src/app/mainappone/mainappone.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: 100%;\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    /*background: #232937;*/\n    background: #333254;\n}\n\n.headerone{\n\n\t/*background-color: #000000;*/\n    background-color: #a09fed;\n\tpadding: 10px 16px;\n\theight: 6%;\n\twidth: 100%;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmFwcG9uZS9tYWluYXBwb25lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsa0JBQWtCO0NBQ2xCLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2IsY0FBYztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixvQkFBb0I7Q0FDdkI7O0FBRUQ7O0NBRUMsOEJBQThCO0lBQzNCLDBCQUEwQjtDQUM3QixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFlBQVk7O0NBRVo7O0FBRUQ7O0NBRUMsWUFBWTtJQUNULGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9tYWluYXBwb25lL21haW5hcHBvbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHlsZW9uZXtcblxuXHQvKmRpc3BsYXk6IGZsZXg7Ki9cblx0LypmbGV4LWRpcmVjdGlvbjogY29sdW1uOyovXG5cdGhlaWdodDogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIC8qYmFja2dyb3VuZDogIzIzMjkzNzsqL1xuICAgIGJhY2tncm91bmQ6ICMzMzMyNTQ7XG59XG5cbi5oZWFkZXJvbmV7XG5cblx0LypiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EwOWZlZDtcblx0cGFkZGluZzogMTBweCAxNnB4O1xuXHRoZWlnaHQ6IDYlO1xuXHR3aWR0aDogMTAwJTtcblxufVxuXG4udXNlcmltYWdlIHtcblxuXHR3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY3Vyc29ye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mainappone/mainappone.component.html":
/*!******************************************************!*\
  !*** ./src/app/mainappone/mainappone.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"styleone\">\n\t<header class=\"headerone\" *ngIf = \"login\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-6\">\n\t\t\t\t<a (click)=\"otherUser()\" [routerLink]=\"[{outlets: {feed: ['userprofilelist']}}]\"><img alt=\"\" class=\"userimage\" src={{My_Profile.profile_pic}}></a>\n\t\t\t</div>\n\t\t\t<div class=\"col-6\" style=\"margin: auto;text-align: right;\">\n\t\t\t\t<a routerLink=\"/\" (click)=\"otherUser()\" ><i class=\"material-icons mr-4\" style=\"color: white;\">timeline</i></a>\t\n\t\t\t\t<!-- <a id=\"chat\" [routerLink]=\"[{outlets: {feed: ['chat']}}]\"><i class=\"material-icons mr-4\" style=\"color: white;\">chat</i></a> -->\n\t\t\t\t<!-- <a class=\"cursor\" [routerLink]=\"[{outlets: {feed: ['notification']}}]\"><i class=\"material-icons mr-4\" style=\"color: white;\">notifications</i></a> -->\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\t<router-outlet name='feed'></router-outlet>\n\t\n\t</div>"

/***/ }),

/***/ "./src/app/mainappone/mainappone.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mainappone/mainappone.component.ts ***!
  \****************************************************/
/*! exports provided: MainapponeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainapponeComponent", function() { return MainapponeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainapponeComponent = /** @class */ (function () {
    function MainapponeComponent(ms) {
        this.ms = ms;
        this.My_Profile = {};
    }
    MainapponeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interval1 = setInterval(function () {
            _this.ms.Check_scatter().then(function (result) {
                if (_this.login != result) {
                    _this.login = result;
                    if (result) {
                        if (_this.ms.Acc_Profile.length == 0) {
                            _this.ms.getAccountProfile(localStorage.getItem(_this.ms.Scatter_account_name).split('-')[0]).then(function (res) {
                                _this.My_Profile = res[0];
                            });
                        }
                        else {
                            _this.My_Profile = _this.ms.Acc_Profile[0];
                        }
                        _this.check_profile();
                    }
                    else {
                        _this.My_Profile = [];
                        clearInterval(_this.interval2);
                    }
                }
            });
        }, 50);
    };
    MainapponeComponent.prototype.check_profile = function () {
        var _this = this;
        this.interval2 = setInterval(function () {
            if (JSON.stringify(_this.My_Profile) != JSON.stringify(_this.ms.Acc_Profile[0]) && JSON.stringify(_this.ms.Acc_Profile[0])) {
                // console.log(this.ms.Acc_Profile[0])
                _this.My_Profile = _this.ms.Acc_Profile[0];
            }
        }, 50);
    };
    MainapponeComponent.prototype.otherUser = function () {
        this.ms.setOtherUserName(undefined);
    };
    MainapponeComponent.prototype.logout = function () {
        this.ms.Scater_logout();
    };
    MainapponeComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval1);
        clearInterval(this.interval2);
    };
    MainapponeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainappone',
            template: __webpack_require__(/*! ./mainappone.component.html */ "./src/app/mainappone/mainappone.component.html"),
            styles: [__webpack_require__(/*! ./mainappone.component.css */ "./src/app/mainappone/mainappone.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"]])
    ], MainapponeComponent);
    return MainapponeComponent;
}());



/***/ }),

/***/ "./src/app/mainapptwo/mainapptwo.component.css":
/*!*****************************************************!*\
  !*** ./src/app/mainapptwo/mainapptwo.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: 100%;\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n\n.headerone{\n\n\tbackground-color: #ffffff;\n\tpadding: 10px 16px;\n\theight: 59px;\n\twidth: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n}\n\n.footerone {\n\n\tbackground-color: #ffffff;\n\tposition: absolute;\n\tbottom: 0;\n\tmin-height: 80px;\n    width: 100%;\n}\n\n.formcolor{\n\n\tbackground-color: #f7f8fa;\n\tborder: 1px solid #f7f8fa;\n}\n\n.threeicons {\n\tfont-size: 20px;\n}\n\n.threeicons:hover {\n\tcolor: #a09fed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmFwcHR3by9tYWluYXBwdHdvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsa0JBQWtCO0NBQ2xCLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2IsY0FBYztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtDQUNiOztBQUVEOztDQUVDLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLFlBQVk7SUFDVCw0RUFBNEU7SUFDNUUsb0JBQW9COztDQUV2Qjs7QUFFRDs7Q0FFQyxZQUFZO0lBQ1QsYUFBYTtDQUNoQjs7QUFFRDs7Q0FFQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixpQkFBaUI7SUFDZCxZQUFZO0NBQ2Y7O0FBRUQ7O0NBRUMsMEJBQTBCO0NBQzFCLDBCQUEwQjtDQUMxQjs7QUFHRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL21haW5hcHB0d28vbWFpbmFwcHR3by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0eWxlb25le1xuXG5cdC8qZGlzcGxheTogZmxleDsqL1xuXHQvKmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Ki9cblx0aGVpZ2h0OiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG59XG5cbi5oZWFkZXJvbmV7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0cGFkZGluZzogMTBweCAxNnB4O1xuXHRoZWlnaHQ6IDU5cHg7XG5cdHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG59XG5cbi51c2VyaW1hZ2Uge1xuXG5cdHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLmZvb3Rlcm9uZSB7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDA7XG5cdG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtY29sb3J7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y3ZjhmYTtcbn1cblxuXG4udGhyZWVpY29ucyB7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRocmVlaWNvbnM6aG92ZXIge1xuXHRjb2xvcjogI2EwOWZlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mainapptwo/mainapptwo.component.html":
/*!******************************************************!*\
  !*** ./src/app/mainapptwo/mainapptwo.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- This sesction is for Detailed Chat Info of people. Starts Here -->\n\n<!-- <app-userchat></app-userchat> -->\n\n<!-- This sesction is for Detailed Chat Info of people. Ends Here -->\n\n\n\n<!-- This sesction is for Main Feed. Starts Here -->\n\n\t<!-- <app-feed></app-feed> -->\n\n<!-- This sesction is for Main Feed. Ends Here -->\n\n\n<!-- This sesction is for Detailed Other User Feed. Starts Here -->\n\n\t<!-- <app-otheruserpersonalfeed></app-otheruserpersonalfeed> -->\n\n<!-- This sesction is for Detailed Other User Feed. Ends Here -->\n\n\n<!-- This sesction is for Detailed User Perosnal Feed. Starts Here -->\n\n\t<!-- <app-userpersonalfeed></app-userpersonalfeed> -->\n\n<!-- This sesction is for Detailed User Personal Feed. Ends Here -->\n\n<!-- This sesction is for Share a post. Starts Here -->\n\n\t<!-- <app-sharepost></app-sharepost> -->\n\n<!-- This sesction is for Share a post. Ends Here -->\n\n<!-- This sesction is for Share a post. Starts Here -->\n\n\t<!-- <app-commentpost></app-commentpost> -->\n\n<!-- This sesction is for Share a post. Ends Here -->\n\n<!-- This sesction is for Posting a murmue. Starts Here -->\n\n\t<!-- <app-postmurmur></app-postmurmur> -->\n\n<!-- This sesction is for Posting a murmue. Ends Here -->\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/mainapptwo/mainapptwo.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mainapptwo/mainapptwo.component.ts ***!
  \****************************************************/
/*! exports provided: MainapptwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainapptwoComponent", function() { return MainapptwoComponent; });
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

var MainapptwoComponent = /** @class */ (function () {
    function MainapptwoComponent() {
    }
    MainapptwoComponent.prototype.ngOnInit = function () {
    };
    MainapptwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainapptwo',
            template: __webpack_require__(/*! ./mainapptwo.component.html */ "./src/app/mainapptwo/mainapptwo.component.html"),
            styles: [__webpack_require__(/*! ./mainapptwo.component.css */ "./src/app/mainapptwo/mainapptwo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainapptwoComponent);
    return MainapptwoComponent;
}());



/***/ }),

/***/ "./src/app/murmur.service.ts":
/*!***********************************!*\
  !*** ./src/app/murmur.service.ts ***!
  \***********************************/
/*! exports provided: MurmurService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MurmurService", function() { return MurmurService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! eosjs */ "./node_modules/eosjs/lib/index.js");
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(eosjs__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var MurmurService = /** @class */ (function () {
    function MurmurService(http, spin, router, location) {
        this.http = http;
        this.spin = spin;
        this.router = router;
        this.location = location;
        this.image = "assets/img/pic1.png";
        this.Acc_Profile = [];
        this.Others_Profile = [];
        this.Others_Acc_Profile = [];
        this.Murmur_Posts = [];
        this.My_Murmur_Posts = [];
        this.Murmur_Commetnts = [];
        this.Followers = [];
        this.Search_accounts = [];
        this.User_both_list = [];
        this.ChatHomePage = [];
        this.chatName = {};
        this.Cmt_data = {};
        this.Scatter_account_name = '';
        this.page_count = 0;
        this.config = {};
        // network: any = {
        //   blockchain:'eos',
        //   protocol:'http',
        //   host: "dev.cryptolions.io", // jungle.cryptolions.io
        //   port: '38888', // '18888'
        //   chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca' 
        // };
        this.network = {
            blockchain: 'eos',
            protocol: 'http',
            host: "jungle2.cryptolions.io",
            port: '80',
            chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473'
        };
        this.config = {
            chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
            httpEndpoint: 'http://jungle2.cryptolions.io:80',
            broadcast: true,
            debug: true,
            sign: true
        };
        this.eos = eosjs__WEBPACK_IMPORTED_MODULE_5__(this.config);
    }
    MurmurService.prototype.SetConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ecc;
            var _this = this;
            return __generator(this, function (_a) {
                ecc = eosjs__WEBPACK_IMPORTED_MODULE_5__["modules"].ecc;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.config = {
                            chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
                            httpEndpoint: 'http://jungle2.cryptolions.io:80',
                            keyProvider: [localStorage.getItem(_this.Scatter_account_name).split('-')[1]],
                            authorization: localStorage.getItem(_this.Scatter_account_name).split('-')[0] + '@active',
                            sign: true,
                            broadcast: true,
                        };
                        _this.eos = eosjs__WEBPACK_IMPORTED_MODULE_5__(_this.config);
                        resolve(_this.eos);
                    })];
            });
        });
    };
    MurmurService.prototype.goBack = function () {
        this.location.back();
    };
    MurmurService.prototype.sign_data = function (buffer) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var private_key = localStorage.getItem(_this.Scatter_account_name).split('-')[1];
                        var public_key = eosjs__WEBPACK_IMPORTED_MODULE_5__["modules"].ecc.privateToPublic(private_key);
                        if (!private_key || !public_key) {
                            resolve(null);
                        }
                        try {
                            var signedData = {};
                            var buf = eosjs__WEBPACK_IMPORTED_MODULE_5__["modules"].ecc.sha256(buffer, "hex");
                            var sig = eosjs__WEBPACK_IMPORTED_MODULE_5__["modules"].ecc.signHash(buf, private_key);
                            signedData['buf'] = buf;
                            signedData['sig'] = sig;
                            signedData['public_key'] = public_key;
                            console.log(signedData);
                            resolve(signedData);
                        }
                        catch (e) {
                            console.log('error while signing data', e);
                            resolve(null);
                        }
                        resolve();
                    })];
            });
        });
    };
    // Using Private Key
    MurmurService.prototype.isPri_Valid = function (privKey) {
        return __awaiter(this, void 0, void 0, function () {
            var ecc;
            return __generator(this, function (_a) {
                ecc = eosjs__WEBPACK_IMPORTED_MODULE_5__["modules"].ecc;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (ecc.isValidPrivate(privKey))
                            resolve(true);
                        else
                            resolve(false);
                    })];
            });
        });
    };
    MurmurService.prototype.PriToPub = function (privKey) {
        return __awaiter(this, void 0, void 0, function () {
            var ecc;
            return __generator(this, function (_a) {
                ecc = eosjs__WEBPACK_IMPORTED_MODULE_5__["modules"].ecc;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var pubKey = ecc.privateToPublic(privKey);
                        resolve(pubKey);
                    })];
            });
        });
    };
    MurmurService.prototype.AccToPub = function (acc) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.eos.getAccount(acc).then(function (res) {
                            resolve(res.permissions[0].required_auth.keys[0].key);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.PKey_login = function (acc_name, privKey) {
        return __awaiter(this, void 0, void 0, function () {
            var flag;
            var _this = this;
            return __generator(this, function (_a) {
                console.log(acc_name);
                flag = 0;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.PriToPub(privKey).then(function (pubKey) {
                            _this.eos.getKeyAccounts(pubKey, function (error, result) {
                                if (error)
                                    reject("error");
                                for (var i = 0; i < result.account_names['length']; i++) {
                                    if (result.account_names[i] == acc_name) {
                                        localStorage.setItem(_this.Scatter_account_name, result.account_names[i] + '-' + privKey);
                                        flag = 1;
                                        _this.SetConfig().then(function (res) { return console.log("Configuration successed"); });
                                        resolve(true);
                                    }
                                }
                                if (flag == 0)
                                    alert("Enter the valid account name");
                            });
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.PKey_logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        localStorage.removeItem(_this.Scatter_account_name);
                        _this.Acc_Profile = [];
                        _this.Murmur_Posts = [];
                        _this.router.navigate([{ outlets: { primary: ['login'], feed: ['login'] } }]);
                        resolve(true);
                    })];
            });
        });
    };
    // Scatter
    MurmurService.prototype.Check_scatter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        resolve(localStorage.getItem(_this.Scatter_account_name) !== null);
                    })];
            });
        });
    };
    MurmurService.prototype.Scater_login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var my = _this;
                        my.scatter = window.scatter;
                        if (my.identity) {
                            my.scatter.useIdentity(my.identity.hash);
                        }
                        _this.scatter.getIdentity({ accounts: [my.network] }).then(function (identity) {
                            my.identity = identity;
                            localStorage.setItem(my.Scatter_account_name, my.identity.accounts[0].name);
                            my.Scatter_account_name = my.identity.accounts[0].name;
                            my.scatter.useIdentity(my.identity.hash);
                            resolve(true);
                        }).catch(function (error) {
                            console.log(error);
                            resolve(false);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.Scater_logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var my = _this;
                        my.scatter = window.scatter;
                        if (my.identity) {
                            my.scatter.useIdentity(my.identity.hash);
                        }
                        _this.scatter.getIdentity({ accounts: [my.network] }).then(function (identity) {
                            my.identity = identity;
                            my.scatter.forgetIdentity();
                            localStorage.removeItem(my.Scatter_account_name);
                            my.Acc_Profile = [];
                            my.Murmur_Posts = [];
                            my.router.navigate([{ outlets: { primary: ['login'], feed: ['login'] } }]);
                            resolve(true);
                        }).catch(function (error) {
                            console.log(error);
                            resolve(false);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.setdata = function (user) {
        this.chatName = user;
    };
    MurmurService.prototype.getdata = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.chatName;
                        resolve(_this.chatName);
                    })];
            });
        });
    };
    MurmurService.prototype.setCommentData = function (id, type) {
        this.Cmt_data = {
            id: id,
            type: type
        };
    };
    MurmurService.prototype.setOtherUserName = function (name) {
        this.Other_User_name = name;
    };
    MurmurService.prototype.getOtherUserName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        resolve(_this.Other_User_name);
                    })];
            });
        });
    };
    MurmurService.prototype.getCommentData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        resolve(_this.Cmt_data);
                    })];
            });
        });
    };
    MurmurService.prototype.getMurmurByIndex = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        resolve(_this.Murmur_Posts[index]);
                    })];
            });
        });
    };
    MurmurService.prototype.getMyMurmurByIndex = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var arr = _this.My_Murmur_Posts;
                        resolve(arr[index]);
                    })];
            });
        });
    };
    MurmurService.prototype.getFollowersDetail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var arr = [];
                        _this.getFollwers(localStorage.getItem(_this.Scatter_account_name).split('-')[0]).then(function (res) {
                            if (res) {
                                for (var i = 0; i < res['length']; i++) {
                                    _this.getAccountProfile(res[i]).then(function (res) {
                                        if (res[0].profile_pic == "undefined")
                                            res[0].profile_pic = "assets/img/pic1.png";
                                        if (res[0].account_name == "")
                                            res[0].account_name = res[0].Acc_id.split('@')[1];
                                        arr.push({
                                            Acc_name: res[0].account_name,
                                            Acc_id: res[0].Acc_id,
                                            profile_pic: res[0].profile_pic,
                                            status: false
                                        });
                                    });
                                }
                                _this.getFollwing(localStorage.getItem(_this.Scatter_account_name).split('-')[0]).then(function (resp) {
                                    for (var i = 0; i < resp['length']; i++)
                                        for (var j = 0; j < arr.length; j++)
                                            if (resp[i] == arr[j].Acc_id.split('@')[1])
                                                arr[j].status = true;
                                });
                                _this.Followers = arr;
                                resolve(arr);
                            }
                            else {
                                resolve(undefined);
                            }
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.SearchPeople = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var arr = [];
                        if (text != "") {
                            _this.getsearchProfile(text).then(function (res) {
                                // console.log(res)
                                for (var i = 0; i < res['length']; i++) {
                                    if (res[i].profile_pic == "undefined")
                                        res[i].profile_pic = "assets/img/pic1.png";
                                    arr.push({
                                        Acc_name: res[i].Name,
                                        Acc_id: '@' + res[i].account_name,
                                        profile_pic: res[i].profile_pic,
                                        status: false
                                    });
                                }
                                _this.getFollwing(localStorage.getItem(_this.Scatter_account_name).split('-')[0]).then(function (resp) {
                                    if (resp)
                                        for (var i = 0; i < resp['length']; i++)
                                            for (var j = 0; j < arr.length; j++)
                                                if (resp[i] == arr[j].Acc_id.split('@')[1])
                                                    arr[j].status = true;
                                });
                                resolve(arr);
                            });
                        }
                        else {
                            _this.getFollowRecommendation().then(function (res) {
                                for (var i = 0; i < res['length']; i++) {
                                    _this.getAccountProfile(res[i]).then(function (res) {
                                        if (res[0].profile_pic == "undefined")
                                            res[0].profile_pic = "assets/img/pic1.png";
                                        if (res[0].account_name == "")
                                            res[0].account_name = res[0].Acc_id.split('@')[1];
                                        arr.push({
                                            Acc_name: res[0].account_name,
                                            Acc_id: res[0].Acc_id,
                                            profile_pic: res[0].profile_pic,
                                            status: false
                                        });
                                    });
                                }
                                _this.getFollwing(localStorage.getItem(_this.Scatter_account_name).split('-')[0]).then(function (resp) {
                                    if (resp)
                                        for (var i = 0; i < resp['length']; i++)
                                            for (var j = 0; j < arr.length; j++)
                                                if (resp[i] == arr[j].Acc_id.split('@')[1])
                                                    arr[j].status = true;
                                });
                                resolve(arr);
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.setSnoopedMurmur = function (id, type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (type == 'murmur') {
                            if (_this.Murmur_Posts[id].action_type == 'murmur') {
                                _this.Murmur_Posts[id].murmur.snopped = 1;
                                _this.Murmur_Posts[id].murmur.snoop_count += 1;
                                // this.feed.Murmur_Posts[id].murmur.snopped = 1
                                // this.feed.Murmur_Posts[id].murmur.snoop_count += 1
                            }
                            else {
                                _this.Murmur_Posts[id].yell.snopped = 1;
                                _this.Murmur_Posts[id].yell.snoop_count += 1;
                                // this.feed.Murmur_Posts[id].yell.snopped = 1
                                // this.feed.Murmur_Posts[id].yell.snoop_count += 1
                            }
                        }
                    })];
            });
        });
    };
    // Get calls
    MurmurService.prototype.getMurmurs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.spin.show();
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/murmurTimeline?account_name=" + localStorage.getItem(_this.Scatter_account_name).split('-')[0])
                            .subscribe(function (postData) {
                            var mur = Object.values(postData)[1];
                            _this.Murmur_Posts = [];
                            var my = [];
                            for (var i = 0; i < mur.length; i++) {
                                var stus = void 0;
                                if (mur[i].account_name == localStorage.getItem(_this.Scatter_account_name).split('-')[0])
                                    stus = true;
                                else
                                    stus = false;
                                if (mur[i].action_type == 'murmur') {
                                    var mur_url = mur[i].murmur.attached_url;
                                    if (mur_url.split('.').length == 1 && mur_url !== '')
                                        mur[i].murmur.attached_url = 'https://ipfs.io/ipfs/' + mur_url;
                                    my.push({
                                        id: mur[i]._id,
                                        action_type: mur[i].action_type,
                                        account_name: mur[i].account_name,
                                        Acc_id: '@' + mur[i].account_name,
                                        image: _this.image,
                                        murmur: {
                                            id: mur[i].murmur._id,
                                            murmur_id: mur[i].murmur.murmur_id,
                                            message: mur[i].murmur.message,
                                            attached_url: mur[i].murmur.attached_url,
                                            visibility: mur[i].murmur.visibility,
                                            yell_count: mur[i].murmur.yell_count,
                                            comment_count: mur[i].murmur.comment_count,
                                            snoop_count: mur[i].murmur.snoop_count,
                                            snooped: mur[i].murmur.snooped,
                                        },
                                        createdAt: mur[i].createdAt,
                                        status: stus,
                                    });
                                }
                                else {
                                    var mur_url = mur[i].yell.murmur.attached_url;
                                    if (mur_url.split('.').length == 1 && mur_url !== '')
                                        mur[i].yell.murmur.attached_url = 'https://ipfs.io/ipfs/' + mur_url;
                                    my.push({
                                        id: mur[i]._id,
                                        action_type: mur[i].action_type,
                                        account_name: mur[i].account_name,
                                        Acc_id: '@' + mur[i].account_name,
                                        image: _this.image,
                                        yell: {
                                            id: mur[i].yell._id,
                                            yell_id: mur[i].yell.yell_id,
                                            extra_comment: mur[i].yell.extra_comment,
                                            murmur_id: mur[i].yell.murmur.murmur_id,
                                            mur_account_name: mur[i].yell.murmur.account_name,
                                            mur_acc_id: '@' + mur[i].yell.murmur.account_name,
                                            mur_acc_image: _this.image,
                                            message: mur[i].yell.murmur.message,
                                            attached_url: mur[i].yell.murmur.attached_url,
                                            visibility: mur[i].yell.visibility,
                                            comment_count: mur[i].yell.comment_count,
                                            snoop_count: mur[i].yell.snoop_count,
                                            snooped: mur[i].yell.snooped,
                                        },
                                        createdAt: mur[i].createdAt,
                                        status: stus,
                                    });
                                }
                            }
                            var _loop_1 = function (i_1) {
                                _this.getAccountProfile(my[i_1].account_name).then(function (res) {
                                    // console.log(res)
                                    my[i_1].account_name = res[0].account_name;
                                    if (res[0].profile_pic)
                                        my[i_1].image = res[0].profile_pic;
                                    if (my[i_1].action_type == 'yell') {
                                        _this.getAccountProfile(my[i_1].yell.mur_account_name).then(function (res) {
                                            // console.log(res)
                                            my[i_1].yell.mur_account_name = res[0].account_name;
                                            if (res[0].profile_pic)
                                                my[i_1].yell.mur_acc_image = res[0].profile_pic;
                                        });
                                        // console.log(my)
                                    }
                                });
                                // console.log(my)
                            };
                            // console.log(my)
                            for (var i_1 = 0; i_1 < my.length; i_1++) {
                                _loop_1(i_1);
                            }
                            _this.Murmur_Posts = my;
                            resolve(_this.Murmur_Posts);
                            _this.spin.hide();
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getOtherPageMurmurs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/murmurTimeline?account_name=" + localStorage.getItem(_this.Scatter_account_name).split('-')[0] + "&page=" + (_this.page_count))
                            .subscribe(function (postData) {
                            var mur = Object.values(postData)[1];
                            var my = [];
                            for (var i = 0; i < mur.length; i++) {
                                var stus = void 0;
                                if (mur[i].account_name == localStorage.getItem(_this.Scatter_account_name).split('-')[0])
                                    stus = true;
                                else
                                    stus = false;
                                if (mur[i].action_type == 'murmur') {
                                    var mur_url = mur[i].murmur.attached_url;
                                    if (mur_url.split('.').length == 1 && mur_url !== '')
                                        mur[i].murmur.attached_url = 'https://ipfs.io/ipfs/' + mur_url;
                                    my.push({
                                        id: mur[i]._id,
                                        action_type: mur[i].action_type,
                                        account_name: mur[i].account_name,
                                        Acc_id: '@' + mur[i].account_name,
                                        image: _this.image,
                                        murmur: {
                                            id: mur[i].murmur._id,
                                            murmur_id: mur[i].murmur.murmur_id,
                                            message: mur[i].murmur.message,
                                            attached_url: mur[i].murmur.attached_url,
                                            visibility: mur[i].murmur.visibility,
                                            yell_count: mur[i].murmur.yell_count,
                                            comment_count: mur[i].murmur.comment_count,
                                            snoop_count: mur[i].murmur.snoop_count,
                                            snooped: mur[i].murmur.snooped,
                                        },
                                        createdAt: mur[i].createdAt,
                                        status: stus,
                                    });
                                }
                                else {
                                    var mur_url = mur[i].yell.murmur.attached_url;
                                    if (mur_url.split('.').length == 1 && mur_url !== '')
                                        mur[i].yell.murmur.attached_url = 'https://ipfs.io/ipfs/' + mur_url;
                                    my.push({
                                        id: mur[i]._id,
                                        action_type: mur[i].action_type,
                                        account_name: mur[i].account_name,
                                        Acc_id: '@' + mur[i].account_name,
                                        image: _this.image,
                                        yell: {
                                            id: mur[i].yell._id,
                                            yell_id: mur[i].yell.yell_id,
                                            extra_comment: mur[i].yell.extra_comment,
                                            murmur_id: mur[i].yell.murmur.murmur_id,
                                            mur_account_name: mur[i].yell.murmur.account_name,
                                            mur_acc_id: '@' + mur[i].yell.murmur.account_name,
                                            mur_acc_image: _this.image,
                                            message: mur[i].yell.murmur.message,
                                            attached_url: mur[i].yell.murmur.attached_url,
                                            visibility: mur[i].yell.visibility,
                                            comment_count: mur[i].yell.comment_count,
                                            snoop_count: mur[i].yell.snoop_count,
                                            snooped: mur[i].yell.snooped,
                                        },
                                        createdAt: mur[i].createdAt,
                                        status: stus,
                                    });
                                }
                            }
                            console.log(_this.page_count);
                            var _loop_2 = function (i_2) {
                                _this.getAccountProfile(my[i_2].account_name).then(function (res) {
                                    // console.log(res)
                                    my[i_2].account_name = res[0].account_name;
                                    if (res[0].profile_pic)
                                        my[i_2].image = res[0].profile_pic;
                                    if (my[i_2].action_type == 'yell') {
                                        _this.getAccountProfile(my[i_2].yell.mur_account_name).then(function (res) {
                                            // console.log(res)
                                            my[i_2].yell.mur_account_name = res[0].account_name;
                                            if (res[0].profile_pic)
                                                my[i_2].yell.mur_acc_image = res[0].profile_pic;
                                        });
                                        // console.log(my)
                                    }
                                });
                                // console.log(my)
                            };
                            // console.log(my)
                            for (var i_2 = 0; i_2 < my.length; i_2++) {
                                _loop_2(i_2);
                            }
                            _this.Murmur_Posts.push(my);
                            resolve(my);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getMyMurmurs = function (acc_name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var temparray = [];
                        var name, img;
                        _this.spin.show();
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getMurmursByAccountName?account_name=" + acc_name)
                            .subscribe(function (postData) {
                            var mur = Object.values(postData)[1];
                            for (var i = 0; i < mur.length; i++) {
                                var mur_url = mur[i].attached_url;
                                if (mur_url.split('.').length == 1 && mur_url !== '')
                                    mur[i].attached_url = 'https://ipfs.io/ipfs/' + mur_url;
                                if (_this.Other_User_name) {
                                    if (_this.Others_Acc_Profile.length == 0) {
                                        _this.getAccountProfile(_this.Other_User_name).then(function (resp) {
                                            name = resp[0].account_name;
                                            img = resp[0].profile_pic;
                                        });
                                    }
                                    else {
                                        name = _this.Others_Acc_Profile[0].account_name;
                                        img = _this.Others_Acc_Profile[0].profile_pic;
                                    }
                                }
                                else {
                                    if (_this.Acc_Profile.length == 0) {
                                        _this.getAccountProfile(acc_name).then(function (resp) {
                                            name = resp[0].account_name;
                                            img = resp[0].profile_pic;
                                        });
                                    }
                                    else {
                                        name = _this.Acc_Profile[0].account_name;
                                        img = _this.Acc_Profile[0].profile_pic;
                                    }
                                }
                                var stus = void 0;
                                if (mur[i].account_name == localStorage.getItem(_this.Scatter_account_name).split('-')[0])
                                    stus = true;
                                else
                                    stus = false;
                                temparray.push({
                                    id: mur[i]._id,
                                    action_type: 'murmur',
                                    account_name: name,
                                    Acc_id: '@' + mur[i].account_name,
                                    image: img,
                                    murmur: {
                                        murmur_id: mur[i].murmur_id,
                                        message: mur[i].message,
                                        attached_url: mur[i].attached_url,
                                        visibility: mur[i].visibility,
                                        yell_count: mur[i].yell_count,
                                        comment_count: mur[i].comment_count,
                                        snoop_count: mur[i].snoop_count,
                                        snooped: 0 //mur[i].snooped,
                                    },
                                    createdAt: mur[i].createdAt,
                                    status: stus
                                });
                            }
                            _this.My_Murmur_Posts = temparray.reverse();
                            // console.log(this.My_Murmur_Posts)
                            resolve(_this.My_Murmur_Posts);
                            _this.spin.hide();
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getAccountActivity = function (acc_name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.spin.show();
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getAccountActivity?account_name=" + acc_name + "&my_account_name=" + localStorage.getItem(_this.Scatter_account_name).split('-')[0] + "&page=" + (_this.page_count))
                            .subscribe(function (postData) {
                            var mur = Object.values(postData)[1];
                            var my = [];
                            for (var i = 0; i < mur.length; i++) {
                                var stus = void 0;
                                if (mur[i].account_name == localStorage.getItem(_this.Scatter_account_name).split('-')[0])
                                    stus = true;
                                else
                                    stus = false;
                                if (mur[i].action_type == 'murmur') {
                                    var mur_url = mur[i].murmur.attached_url;
                                    if (mur_url.split('.').length == 1 && mur_url !== '')
                                        mur[i].murmur.attached_url = 'https://ipfs.io/ipfs/' + mur_url;
                                    my.push({
                                        id: mur[i]._id,
                                        action_type: mur[i].action_type,
                                        account_name: mur[i].account_name,
                                        Acc_id: '@' + mur[i].account_name,
                                        image: _this.image,
                                        murmur: {
                                            id: mur[i].murmur._id,
                                            murmur_id: mur[i].murmur.murmur_id,
                                            message: mur[i].murmur.message,
                                            attached_url: mur[i].murmur.attached_url,
                                            visibility: mur[i].murmur.visibility,
                                            yell_count: mur[i].murmur.yell_count,
                                            comment_count: mur[i].murmur.comment_count,
                                            snoop_count: mur[i].murmur.snoop_count,
                                            snooped: mur[i].murmur.snooped,
                                        },
                                        createdAt: mur[i].createdAt,
                                        status: stus,
                                    });
                                }
                                else {
                                    var mur_url = mur[i].yell.murmur.attached_url;
                                    if (mur_url.split('.').length == 1 && mur_url !== '')
                                        mur[i].yell.murmur.attached_url = 'https://ipfs.io/ipfs/' + mur_url;
                                    my.push({
                                        id: mur[i]._id,
                                        action_type: mur[i].action_type,
                                        account_name: mur[i].account_name,
                                        Acc_id: '@' + mur[i].account_name,
                                        image: _this.image,
                                        yell: {
                                            id: mur[i].yell._id,
                                            yell_id: mur[i].yell.yell_id,
                                            extra_comment: mur[i].yell.extra_comment,
                                            murmur_id: mur[i].yell.murmur.murmur_id,
                                            mur_account_name: mur[i].yell.murmur.account_name,
                                            mur_acc_id: '@' + mur[i].yell.murmur.account_name,
                                            mur_acc_image: _this.image,
                                            message: mur[i].yell.murmur.message,
                                            attached_url: mur[i].yell.murmur.attached_url,
                                            visibility: mur[i].yell.visibility,
                                            comment_count: mur[i].yell.comment_count,
                                            snoop_count: mur[i].yell.snoop_count,
                                            snooped: mur[i].yell.snooped,
                                        },
                                        createdAt: mur[i].createdAt,
                                        status: stus,
                                    });
                                }
                            }
                            var _loop_3 = function (i_3) {
                                _this.getAccountProfile(my[i_3].account_name).then(function (res) {
                                    // console.log(res)
                                    my[i_3].account_name = res[0].account_name;
                                    if (res[0].profile_pic)
                                        my[i_3].image = res[0].profile_pic;
                                    if (my[i_3].action_type == 'yell') {
                                        _this.getAccountProfile(my[i_3].yell.mur_account_name).then(function (res) {
                                            // console.log(res)
                                            my[i_3].yell.mur_account_name = res[0].account_name;
                                            if (res[0].profile_pic)
                                                my[i_3].yell.mur_acc_image = res[0].profile_pic;
                                        });
                                        // console.log(my)
                                    }
                                });
                                // console.log(my)
                            };
                            // console.log(this.page_count)
                            // console.log(my)
                            for (var i_3 = 0; i_3 < my.length; i_3++) {
                                _loop_3(i_3);
                            }
                            _this.My_Murmur_Posts = my;
                            resolve(my);
                            _this.spin.hide();
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getMurmurComments = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var my = [];
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getCommentsByMurmurId?murmur_id=" + id)
                            .subscribe(function (postData) {
                            var mur = Object.values(postData)[1].comments;
                            for (var i = 0; i < mur.length; i++) {
                                var stus = void 0;
                                if (mur[i].account_name == localStorage.getItem(_this.Scatter_account_name).split('-')[0])
                                    stus = true;
                                else
                                    stus = false;
                                my.push({
                                    id: mur[i]._id,
                                    comment_id: mur[i].comment_id,
                                    account_name: mur[i].account_name,
                                    Acc_id: '@' + mur[i].account_name,
                                    image: _this.image,
                                    comment: mur[i].comment,
                                    createdAt: mur[i].createdAt,
                                    status: stus,
                                });
                            }
                            var _loop_4 = function (i_4) {
                                _this.getAccountProfile(my[i_4].account_name).then(function (res) {
                                    // console.log(res)
                                    my[i_4].account_name = res[0].account_name;
                                    my[i_4].image = res[0].profile_pic;
                                });
                                // console.log(my)
                            };
                            // console.log(my)
                            for (var i_4 = 0; i_4 < my.length; i_4++) {
                                _loop_4(i_4);
                            }
                        });
                        // console.log(my)
                        _this.Murmur_Commetnts = my;
                        resolve(_this.Murmur_Commetnts);
                    })];
            });
        });
    };
    MurmurService.prototype.getYellComments = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var my = [];
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getCommentsByYellId?yell_id=" + id)
                            .subscribe(function (postData) {
                            var mur = Object.values(postData)[1].comments;
                            for (var i = 0; i < mur.length; i++) {
                                var stus = void 0;
                                if (mur[i].account_name == localStorage.getItem(_this.Scatter_account_name).split('-')[0])
                                    stus = true;
                                else
                                    stus = false;
                                my.push({
                                    id: mur[i]._id,
                                    comment_id: mur[i].comment_id,
                                    account_name: mur[i].account_name,
                                    Acc_id: '@' + mur[i].account_name,
                                    image: _this.image,
                                    comment: mur[i].comment,
                                    createdAt: mur[i].createdAt,
                                    status: stus,
                                });
                            }
                            var _loop_5 = function (i_5) {
                                _this.getAccountProfile(my[i_5].account_name).then(function (res) {
                                    // console.log(res)
                                    my[i_5].account_name = res[0].account_name;
                                    my[i_5].image = res[0].profile_pic;
                                });
                                // console.log(my)
                            };
                            // console.log(my)
                            for (var i_5 = 0; i_5 < my.length; i_5++) {
                                _loop_5(i_5);
                            }
                        });
                        // console.log(my)
                        _this.Murmur_Commetnts = my;
                        resolve(_this.Murmur_Commetnts);
                    })];
            });
        });
    };
    MurmurService.prototype.getFollwers = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getAccountFollowers?account_name=" + name)
                            .subscribe(function (postData) {
                            resolve(Object.values(postData)[1].followers);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getFollwing = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getAccountFollowings?account_name=" + name)
                            .subscribe(function (postData) {
                            resolve(Object.values(postData)[1].following);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getAccountSummary = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getAccountActivitySummary?account_name=" + name)
                            .subscribe(function (postData) {
                            resolve(Object.values(postData)[1]);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getAccountProfile = function (acc_name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var flag = 0;
                        for (var i = 0; i < _this.Others_Profile.length; i++) {
                            if ('@' + acc_name == _this.Others_Profile[i].Acc_id) {
                                flag = 1;
                                var temparr = [];
                                temparr.push(_this.Others_Profile[i]);
                                resolve(temparr);
                            }
                        }
                        if (flag == 0) {
                            _this.getAccountInfo(acc_name).then(function (res) {
                                resolve(res);
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.getAccountInfo = function (acc_name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var temparray = [];
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getAccountByID?account_name=" + acc_name)
                            .subscribe(function (postData) {
                            var mur = Object.values(postData)[1];
                            if (mur.account_name == undefined || (mur.name == undefined && mur.profile_pic == undefined)) {
                                mur.account_name = acc_name;
                                mur.name = acc_name;
                                mur.profile_pic = _this.image;
                            }
                            if (mur.profile_pic == '')
                                mur.profile_pic = _this.image;
                            if (mur.name == "")
                                mur.name = mur.account_name;
                            temparray.push({
                                account_name: mur.name,
                                Acc_id: '@' + mur.account_name,
                                profile_pic: mur.profile_pic,
                            });
                            _this.Others_Profile.push(temparray[0]);
                            resolve(temparray);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getAccountDetail = function (acc_name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var temparray = [];
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getAccountByID?account_name=" + acc_name)
                            .subscribe(function (postData) {
                            var mur = Object.values(postData)[1];
                            if (mur.account_name == undefined || (mur.name == undefined && mur.profile_pic == undefined)) {
                                mur.account_name = acc_name;
                                mur.name = acc_name;
                                mur.profile_pic = _this.image;
                            }
                            if (mur.profile_pic == '' || mur.profile_pic == undefined || mur.profile_pic == 'undefined')
                                mur.profile_pic = _this.image;
                            if (mur.name == "" || mur.name == undefined)
                                mur.name = mur.account_name;
                            temparray.push({
                                id: mur._id,
                                account_name: mur.name,
                                Acc_id: '@' + mur.account_name,
                                bio: mur.bio,
                                dob: mur.dob,
                                location: mur.location,
                                profile_pic: mur.profile_pic,
                                sex: mur.sex,
                                murmurs: 0,
                                followers: 0,
                                following: 0
                            });
                            _this.getAccountSummary(acc_name).then(function (resp) {
                                if (resp['length'] != 0) {
                                    temparray[0].murmurs = resp[0].murmurs;
                                    temparray[0].followers = resp[0].followers;
                                    temparray[0].following = resp[0].following;
                                }
                            });
                            if (localStorage.getItem(_this.Scatter_account_name))
                                if (acc_name == localStorage.getItem(_this.Scatter_account_name).split('-')[0])
                                    _this.Acc_Profile = temparray;
                                else
                                    _this.Others_Acc_Profile = temparray;
                            resolve(temparray);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getsearchProfile = function (acc_name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/searchAccount?hint=" + acc_name)
                            .subscribe(function (response) {
                            var testarray = [];
                            for (var i = 0; i < Object.values(response)[1].length; i++) {
                                if (!Object.values(response)[1][i].profile_pic) {
                                    Object.values(response)[1][i].profile_pic = 'assets/img/pic1.png';
                                }
                                if (!Object.values(response)[1][i].name) {
                                    Object.values(response)[1][i].name = Object.values(response)[1][i].account_name;
                                }
                                testarray.push({
                                    "account_name": Object.values(response)[1][i].account_name,
                                    "Name": Object.values(response)[1][i].name,
                                    "profile_pic": Object.values(response)[1][i].profile_pic,
                                });
                            }
                            _this.Search_accounts = testarray;
                            resolve(_this.Search_accounts);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getMostActiveAcc = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getMostActiveAccounts")
                            .subscribe(function (response) {
                            var testarray = [];
                            for (var i = 0; i < Object.values(response)[1].length; i++) {
                                testarray.push(Object.values(response)[1][i]._id);
                            }
                            resolve(testarray);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getFollowRecommendation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getFollowRecommendation?account_name=" + localStorage.getItem(_this.Scatter_account_name).split('-')[0])
                            .subscribe(function (response) {
                            var testarray = [];
                            for (var i = 0; i < Object.values(response)[1].length; i++) {
                                testarray.push(Object.values(response)[1][i].account_name);
                            }
                            resolve(testarray);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getWhisperHomePageList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.get("http://murmurjapi.wandx.co/api/getWhisperHomePage?account_name=" + localStorage.getItem(_this.Scatter_account_name).split('-')[0])
                            .subscribe(function (postData) {
                            postData['data'].sort(function (a, b) { return a.block_number - b.block_number; }).reverse();
                            resolve(postData);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getWhisperHomePage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.getWhisperHomePageList().then(function (response) {
                            var testarray = [];
                            var acc;
                            for (var i = 0; i < Object.values(response)[1].length; i++) {
                                var encrypted_message = JSON.parse(Object.values(response)[1][i].message);
                                var ecc = eosjs__WEBPACK_IMPORTED_MODULE_5__["modules"].ecc;
                                var decrypted_message;
                                var mess;
                                var pub;
                                if (Object.values(response)[1][i].from_account_name == localStorage.getItem(_this.Scatter_account_name).split('-')[0]) {
                                    acc = Object.values(response)[1][i].to_account_name;
                                    pub = Object.values(response)[1][i].to_public_key;
                                }
                                else {
                                    acc = Object.values(response)[1][i].from_account_name;
                                    pub = Object.values(response)[1][i].from_public_key;
                                }
                                decrypted_message = ecc.Aes.decrypt(localStorage.getItem(_this.Scatter_account_name).split('-')[1], pub, encrypted_message.nonce, encrypted_message.message, encrypted_message.checksum);
                                mess = decrypted_message.toString();
                                if (mess.toString().length > 20) {
                                    mess = mess.slice(0, 20) + '...';
                                }
                                testarray.push({
                                    msg: mess,
                                    Time: new Date(Object.values(response)[1][i].createdAt),
                                    account_name: acc,
                                    Name: '',
                                    profile_pic: ''
                                });
                                var _loop_6 = function (i_6) {
                                    _this.getAccountProfile(testarray[i_6].account_name).then(function (res) {
                                        // console.log(res)
                                        testarray[i_6].Name = res[0].account_name;
                                        testarray[i_6].profile_pic = res[0].profile_pic;
                                    });
                                    // console.log(my)
                                };
                                for (var i_6 = 0; i_6 < testarray.length; i_6++) {
                                    _loop_6(i_6);
                                }
                            }
                            _this.ChatHomePage = testarray;
                            // console.log(testarray)
                            resolve(_this.ChatHomePage);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getChatCount = function (from_acc, to_acc) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.get("http://murmurjapi.wandx.co/api/getWhispers?from_account=" + from_acc + "&to_account=" + to_acc)
                            .subscribe(function (response) {
                            resolve(response);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getChatDetails = function (from_acc, to_acc) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log(from_acc, to_acc)
                        _this.getChatCount(from_acc, to_acc).then(function (response) {
                            var testarray = [];
                            var temp = response['data'];
                            for (var i = 0; i < temp.length; i++) {
                                var ecc = eosjs__WEBPACK_IMPORTED_MODULE_5__["modules"].ecc;
                                var decrypted_message;
                                var mess;
                                testarray.push({
                                    block_number: temp[i].block_number,
                                    whisper_id: temp[i].whisper_id,
                                    from_public_key: temp[i].from_public_key,
                                    to_public_key: temp[i].to_public_key,
                                    message: '',
                                    createdAt: new Date(temp[i].createdAt),
                                    from_account_name: '',
                                    to_account_name: ''
                                });
                            }
                            var _loop_7 = function (i) {
                                _this.AccToPub(from_acc).then(function (res) {
                                    if (res == temp[i].from_public_key) {
                                        testarray[i].from_account_name = from_acc;
                                        testarray[i].to_account_name = to_acc;
                                        var encrypted_message = JSON.parse(temp[i].message);
                                        try {
                                            decrypted_message = ecc.Aes.decrypt(localStorage.getItem(_this.Scatter_account_name).split('-')[1], temp[i].to_public_key, encrypted_message.nonce, encrypted_message.message, encrypted_message.checksum);
                                        }
                                        catch (e) {
                                            console.log(e);
                                        }
                                        mess = decrypted_message.toString();
                                        testarray[i].message = mess;
                                    }
                                    else {
                                        testarray[i].from_account_name = to_acc;
                                        testarray[i].to_account_name = from_acc;
                                        var encrypted_message = JSON.parse(temp[i].message);
                                        try {
                                            decrypted_message = ecc.Aes.decrypt(localStorage.getItem(_this.Scatter_account_name).split('-')[1], temp[i].from_public_key, encrypted_message.nonce, encrypted_message.message, encrypted_message.checksum);
                                        }
                                        catch (e) {
                                            console.log(e);
                                        }
                                        mess = decrypted_message.toString();
                                        testarray[i].message = mess;
                                    }
                                });
                                // console.log(testarray)
                            };
                            // console.log(testarray)
                            for (var i = 0; i < testarray.length; i++) {
                                _loop_7(i);
                            }
                            _this.User_both_list = testarray;
                            // console.log(testarray)
                            resolve(_this.User_both_list);
                        });
                    })];
            });
        });
    };
    // Post Calls
    MurmurService.prototype.Post_user_profile = function (fd) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.post("http://murmurjapi.wandx.co/api/update_profile", fd)
                            .subscribe(function (postData) {
                            console.log(postData);
                            resolve(postData['status']);
                        });
                    })];
            });
        });
    };
    // Contract Calls
    MurmurService.prototype.postMurmur = function (post, url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        console.log("Post: " + post + ", URL: " + url);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_1 = window.scatter;
                            scatter_1.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_1.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_1.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_5__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.murmur(account.name, post, url, 1, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    error = JSON.parse(error);
                                    console.error("Error in cont: ", error);
                                    if (error.code == 500)
                                        resolve({ Error: true, errMesg: error.error.details[0].message });
                                    else
                                        resolve({ Error: true, errMesg: error.message });
                                    // resolve(error.message)
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                                resolve();
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.murmur(localStorage.getItem(_this.Scatter_account_name).split('-')[0], post, url, 1);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    error = JSON.parse(error);
                                    console.error(error);
                                    if (error.code == 500)
                                        resolve({ Error: true, errMesg: error.error.details[0].message });
                                    else
                                        resolve({ Error: true, errMesg: error.message });
                                    // reject(error);
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.Snoop = function (id, type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (type == 'murmur') {
                            if (_this.Murmur_Posts[id].action_type == 'murmur') {
                                id = _this.Murmur_Posts[id].murmur.murmur_id;
                                // console.log("Mur id "+id)
                                _this.snoopmurmur(id).then(function (res) { return resolve(res); });
                            }
                            else {
                                id = _this.Murmur_Posts[id].yell.yell_id;
                                // console.log("Yell id "+id)
                                _this.snoopyell(id).then(function (res) { return resolve(res); });
                            }
                        }
                        else {
                            if (_this.My_Murmur_Posts[id].action_type == 'murmur') {
                                id = _this.My_Murmur_Posts[id].murmur.murmur_id;
                                // console.log("Mur id "+id)
                                _this.snoopmurmur(id).then(function (res) { return resolve(res); });
                            }
                            else {
                                id = _this.My_Murmur_Posts[id].yell.yell_id;
                                // console.log("Yell id "+id)
                                _this.snoopyell(id).then(function (res) { return resolve(res); });
                            }
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.snoopmurmur = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("Snoop murmur "+  id);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_2 = window.scatter;
                            scatter_2.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_2.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_2.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_5__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.snoopmurmur(account.name, id, 1, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    error = JSON.parse(error);
                                    console.error(error);
                                    if (error.code == 500)
                                        resolve({ Error: true, errMesg: error.error.details[0].message });
                                    else
                                        resolve({ Error: true, errMesg: error.message });
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.snoopmurmur(localStorage.getItem(_this.Scatter_account_name).split('-')[0], id, 1);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    error = JSON.parse(error);
                                    console.error(error);
                                    if (error.code == 500)
                                        resolve({ Error: true, errMesg: error.error.details[0].message });
                                    else
                                        resolve({ Error: true, errMesg: error.message });
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.snoopyell = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("Snoop yell "+  id);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_3 = window.scatter;
                            scatter_3.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_3.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_3.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_5__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.snoopyell(account.name, id, 1, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    error = JSON.parse(error);
                                    console.error(error);
                                    if (error.code == 500)
                                        resolve({ Error: true, errMesg: error.error.details[0].message });
                                    else
                                        resolve({ Error: true, errMesg: error.message });
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.snoopyell(localStorage.getItem(_this.Scatter_account_name).split('-')[0], id, 1);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    error = JSON.parse(error);
                                    console.error(error);
                                    if (error.code == 500)
                                        resolve({ Error: true, errMesg: error.error.details[0].message });
                                    else
                                        resolve({ Error: true, errMesg: error.message });
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.yell = function (id, msg) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("yell contract call "+  id);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_4 = window.scatter;
                            scatter_4.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_4.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_4.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_5__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.yell(account.name, id, msg, 1, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    error = JSON.parse(error);
                                    console.error(error);
                                    if (error.code == 500)
                                        resolve({ Error: true, errMesg: error.error.details[0].message });
                                    else
                                        resolve({ Error: true, errMesg: error.message });
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.yell(localStorage.getItem(_this.Scatter_account_name).split('-')[0], id, msg, 1);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    error = JSON.parse(error);
                                    console.error(error);
                                    if (error.code == 500)
                                        resolve({ Error: true, errMesg: error.error.details[0].message });
                                    else
                                        resolve({ Error: true, errMesg: error.message });
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.commentmurmur = function (id, cmt) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("comment murmur "+  id);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_5 = window.scatter;
                            scatter_5.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_5.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_5.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_5__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.comentmurmur(account.name, id, cmt, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    error = JSON.parse(error);
                                    console.error(error);
                                    if (error.code == 500)
                                        resolve({ Error: true, errMesg: error.error.details[0].message });
                                    else
                                        resolve({ Error: true, errMesg: error.message });
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.comentmurmur(localStorage.getItem(_this.Scatter_account_name).split('-')[0], id, cmt);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    error = JSON.parse(error);
                                    console.error(error);
                                    if (error.code == 500)
                                        resolve({ Error: true, errMesg: error.error.details[0].message });
                                    else
                                        resolve({ Error: true, errMesg: error.message });
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.commentyell = function (id, cmt) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("Comment yell "+  id);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_6 = window.scatter;
                            scatter_6.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_6.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_6.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_5__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.commentyell(account.name, id, cmt, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    error = JSON.parse(error);
                                    console.error(error);
                                    if (error.code == 500)
                                        resolve({ Error: true, errMesg: error.error.details[0].message });
                                    else
                                        resolve({ Error: true, errMesg: error.message });
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.commentyell(localStorage.getItem(_this.Scatter_account_name).split('-')[0], id, cmt);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    error = JSON.parse(error);
                                    console.error(error);
                                    if (error.code == 500)
                                        resolve({ Error: true, errMesg: error.error.details[0].message });
                                    else
                                        resolve({ Error: true, errMesg: error.message });
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.follow = function (facc) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_7 = window.scatter;
                            scatter_7.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_7.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_7.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_5__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.follow(account.name, facc, 1, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    error = JSON.parse(error);
                                    console.error(error);
                                    if (error.code == 500)
                                        resolve({ Error: true, errMesg: error.error.details[0].message });
                                    else
                                        resolve({ Error: true, errMesg: error.message });
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.follow(localStorage.getItem(_this.Scatter_account_name).split('-')[0], facc, 1);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    error = JSON.parse(error);
                                    console.error(error);
                                    if (error.code == 500)
                                        resolve({ Error: true, errMesg: error.error.details[0].message });
                                    else
                                        resolve({ Error: true, errMesg: error.message });
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.unfollow = function (facc) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_8 = window.scatter;
                            scatter_8.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_8.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_8.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_5__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.unfollow(account.name, facc, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    error = JSON.parse(error);
                                    console.error(error);
                                    if (error.code == 500)
                                        resolve({ Error: true, errMesg: error.error.details[0].message });
                                    else
                                        resolve({ Error: true, errMesg: error.message });
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.unfollow(localStorage.getItem(_this.Scatter_account_name).split('-')[0], facc);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    error = JSON.parse(error);
                                    console.error(error);
                                    if (error.code == 500)
                                        resolve({ Error: true, errMesg: error.error.details[0].message });
                                    else
                                        resolve({ Error: true, errMesg: error.message });
                                    // reject(error);
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.whisper = function (to_account_name, message) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.AccToPub(localStorage.getItem(_this.Scatter_account_name).split('-')[0]).then(function (myPub) {
                            _this.AccToPub(to_account_name).then(function (toPub) {
                                var ecc = eosjs__WEBPACK_IMPORTED_MODULE_5__["modules"].ecc;
                                var encrypted_message = ecc.Aes.encrypt(localStorage.getItem(_this.Scatter_account_name).split('-')[1], toPub, message);
                                encrypted_message.nonce = encrypted_message.nonce.toString();
                                encrypted_message.message = encrypted_message.message.toString("binary");
                                encrypted_message = JSON.stringify(encrypted_message);
                                console.log(localStorage.getItem(_this.Scatter_account_name).split('-')[0], to_account_name, myPub, toPub, encrypted_message);
                                if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 2) {
                                    _this.SetConfig().then(function (eos) {
                                        eos.transaction('murmurdappco', function (contract) {
                                            contract.whisper(localStorage.getItem(_this.Scatter_account_name).split('-')[0], to_account_name, myPub, toPub, encrypted_message);
                                        }, _this.config).then(function (trx) {
                                            resolve({ Error: false, transId: trx.transaction_id });
                                        }).catch(function (error) {
                                            error = JSON.parse(error);
                                            console.error(error);
                                            if (error.code == 500)
                                                resolve({ Error: true, errMesg: error.error.details[0].message });
                                            else
                                                resolve({ Error: true, errMesg: error.message });
                                            // reject(error);
                                        });
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    // remove funcionality --> contract call
    MurmurService.prototype.deleteMurmur = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("Murmur ID: " + id);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_9 = window.scatter;
                            scatter_9.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_9.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_9.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_5__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.deletemurmur(account.name, id, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    console.error("Error in cont: ", error);
                                    resolve({ Error: true, errMesg: error.message });
                                    // resolve(error.message)
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                                resolve();
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.deletemurmur(localStorage.getItem(_this.Scatter_account_name).split('-')[0], id);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    console.error(error);
                                    resolve({ Error: true, errMesg: error.message });
                                    // reject(error);
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.unSnoop = function (id, type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (type == 'murmur') {
                            if (_this.Murmur_Posts[id].action_type == 'murmur') {
                                id = _this.Murmur_Posts[id].murmur.murmur_id;
                                // console.log("Mur id "+id)
                                _this.unsnoopmurmur(id).then(function (res) { return resolve(res); });
                            }
                            else {
                                id = _this.Murmur_Posts[id].yell.yell_id;
                                // console.log("Yell id "+id)
                                _this.unsnoopyell(id).then(function (res) { return resolve(res); });
                            }
                        }
                        else {
                            if (_this.My_Murmur_Posts[id].action_type == 'murmur') {
                                id = _this.My_Murmur_Posts[id].murmur.murmur_id;
                                // console.log("My Mur id "+id)
                                _this.unsnoopmurmur(id).then(function (res) { return resolve(res); });
                            }
                            else {
                                id = _this.My_Murmur_Posts[id].yell.yell_id;
                                // console.log("My Yell id "+id)
                                _this.unsnoopyell(id).then(function (res) { return resolve(res); });
                            }
                            // id = this.My_Murmur_Posts[id].murmur.murmur_id
                            // // console.log("My Mur id "+id)
                            // this.unsnoopmurmur(id).then(res => resolve(res))
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.unsnoopmurmur = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("Snoop murmur "+  id);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_10 = window.scatter;
                            scatter_10.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_10.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_10.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_5__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.usnoopmurmur(account.name, id, 1, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    console.error(error);
                                    resolve({ Error: true, errMesg: error.message });
                                    // reject(error);
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.usnoopmurmur(localStorage.getItem(_this.Scatter_account_name).split('-')[0], id, 1);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    console.error(error);
                                    resolve({ Error: true, errMesg: error.message });
                                    // reject(error);
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.unsnoopyell = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("Snoop yell "+  id);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_11 = window.scatter;
                            scatter_11.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_11.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_11.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_5__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.unsnoopyell(account.name, id, 1, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    console.error(error);
                                    resolve({ Error: true, errMesg: error.message });
                                    // reject(error);
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.unsnoopyell(localStorage.getItem(_this.Scatter_account_name).split('-')[0], id, 1);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    console.error(error);
                                    resolve({ Error: true, errMesg: error.message });
                                    // reject(error);
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.uncommentmurmur = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("comment murmur "+  id);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_12 = window.scatter;
                            scatter_12.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_12.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_12.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_5__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.uncommentmur(account.name, id, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    console.error(error);
                                    resolve({ Error: true, errMesg: error.message });
                                    // reject(error);
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.uncommentmur(localStorage.getItem(_this.Scatter_account_name).split('-')[0], id);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    console.error(error);
                                    resolve({ Error: true, errMesg: error.message });
                                    // reject(error);
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.uncommentyell = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("Comment yell "+  id);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_13 = window.scatter;
                            scatter_13.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_13.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_13.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_5__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.uncomentyell(account.name, id, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    console.error(error);
                                    resolve({ Error: true, errMesg: error.message });
                                    // reject(error);
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.uncomentyell(localStorage.getItem(_this.Scatter_account_name).split('-')[0], id);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    console.error(error);
                                    resolve({ Error: true, errMesg: error.message });
                                    // reject(error);
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.unyell = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("yell contract call "+  id);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_14 = window.scatter;
                            scatter_14.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_14.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_14.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_5__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.unyell(account.name, id, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    console.error(error);
                                    resolve({ Error: true, errMesg: error.message });
                                    // reject(error);
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.unyell(localStorage.getItem(_this.Scatter_account_name).split('-')[0], id);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    resolve({ Error: false, transId: trx.transaction_id });
                                }).catch(function (error) {
                                    console.error(error);
                                    resolve({ Error: true, errMesg: error.message });
                                    // reject(error);
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], MurmurService);
    return MurmurService;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.component.css":
/*!***********************************************************!*\
  !*** ./src/app/notifications/notifications.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: 100%;\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    /*background: #232937;*/\n}\n\n.headerone{\n\n\tbackground-color: #a09fed;\n\tpadding: 10px 16px;\n\theight: 6%;\n\twidth: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsa0JBQWtCO0NBQ2xCLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2IsY0FBYztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLHdCQUF3QjtDQUMzQjs7QUFFRDs7Q0FFQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxZQUFZO0lBQ1QsNEVBQTRFO0lBQzVFLG9CQUFvQjs7Q0FFdkI7O0FBRUQ7O0NBRUMsWUFBWTtJQUNULGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHlsZW9uZXtcblxuXHQvKmRpc3BsYXk6IGZsZXg7Ki9cblx0LypmbGV4LWRpcmVjdGlvbjogY29sdW1uOyovXG5cdGhlaWdodDogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIC8qYmFja2dyb3VuZDogIzIzMjkzNzsqL1xufVxuXG4uaGVhZGVyb25le1xuXG5cdGJhY2tncm91bmQtY29sb3I6ICNhMDlmZWQ7XG5cdHBhZGRpbmc6IDEwcHggMTZweDtcblx0aGVpZ2h0OiA2JTtcblx0d2lkdGg6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbn1cblxuLnVzZXJpbWFnZSB7XG5cblx0d2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmN1cnNvcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/notifications/notifications.component.html":
/*!************************************************************!*\
  !*** ./src/app/notifications/notifications.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"styleone\">\n\t<header class=\"headerone\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-6\">\n\t\t\t\t<!-- <a class=\"cursor\" ><i class=\"material-icons mr-4\" style=\"color: white;\">notifications</i></a> -->\n\t\t\t\t<h3 style=\"color: white;\">Notifications</h3>\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\t<div id = \"divscroll\" style=\"display: block;height: 94%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;padding-bottom: 20px;\" >\n\t\t<div class=\"card mt-0\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t<a class=\"cursor\"><img class=\"userimage\" src=\"assets/img/pic1.png\"></a>\n\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">Sarthak<span class=\"ml-2\" style=\"color: #a09fed;\">liked your post</span></h6></a>\n\t\t\t\t\t\t\t<!-- <a><p>{{mur.murmur.message}}</p></a>\n\t\t\t\t\t\t\t<a *ngIf = \" mur.murmur.attached_url !== ''\" ><img style=\"width: 100%;border-radius: 10px;\" alt=\"\" class=\"mb-4\" src={{mur.murmur.attached_url}}></a> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card mt-0\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t<a class=\"cursor\"><img class=\"userimage\" src=\"assets/img/pic1.png\"></a>\n\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">Sarthak<span class=\"ml-2\" style=\"color: #a09fed;\">started following you</span></h6></a>\n\t\t\t\t\t\t\t<!-- <a><p>{{mur.murmur.message}}</p></a>\n\t\t\t\t\t\t\t<a *ngIf = \" mur.murmur.attached_url !== ''\" ><img style=\"width: 100%;border-radius: 10px;\" alt=\"\" class=\"mb-4\" src={{mur.murmur.attached_url}}></a> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
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

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/postmurmur/postmurmur.component.css":
/*!*****************************************************!*\
  !*** ./src/app/postmurmur/postmurmur.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: 100%;\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n\n.headerone{\n\n\tbackground-color: #ffffff;\n\tpadding: 10px 16px;\n\theight: 6%;\n\twidth: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.userimage1 {\n\n\twidth: 25px;\n    height: 25px;\n    border-radius: 50%;\n}\n\n.footerone {\n\n\tbackground-color: #dcdcdc;\n\tposition: absolute;\n\tbottom: 0;\n\tmin-height: 80px;\n    width: 100%;\n}\n\n.formcolor{\n\n\tbackground-color: #f7f8fa;\n\tborder: 1px solid #f7f8fa;\n}\n\n.threeicons {\n\tfont-size: 20px;\n}\n\n.threeicons:hover {\n\tcolor: #a09fed;\n}\n\n.cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdG11cm11ci9wb3N0bXVybXVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsa0JBQWtCO0NBQ2xCLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2IsY0FBYztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtDQUNiOztBQUVEOztDQUVDLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFlBQVk7SUFDVCw0RUFBNEU7SUFDNUUsb0JBQW9COztDQUV2Qjs7QUFFRDs7Q0FFQyxZQUFZO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtDQUN0Qjs7QUFFRDs7Q0FFQyxZQUFZO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtDQUN0Qjs7QUFFRDs7Q0FFQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixpQkFBaUI7SUFDZCxZQUFZO0NBQ2Y7O0FBRUQ7O0NBRUMsMEJBQTBCO0NBQzFCLDBCQUEwQjtDQUMxQjs7QUFHRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RtdXJtdXIvcG9zdG11cm11ci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0eWxlb25le1xuXG5cdC8qZGlzcGxheTogZmxleDsqL1xuXHQvKmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Ki9cblx0aGVpZ2h0OiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG59XG5cbi5oZWFkZXJvbmV7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0cGFkZGluZzogMTBweCAxNnB4O1xuXHRoZWlnaHQ6IDYlO1xuXHR3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxufVxuXG4udXNlcmltYWdlIHtcblxuXHR3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udXNlcmltYWdlMSB7XG5cblx0d2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmZvb3Rlcm9uZSB7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2RjZGNkYztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDA7XG5cdG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtY29sb3J7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y3ZjhmYTtcbn1cblxuXG4udGhyZWVpY29ucyB7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRocmVlaWNvbnM6aG92ZXIge1xuXHRjb2xvcjogI2EwOWZlZDtcbn1cblxuLmN1cnNvcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/postmurmur/postmurmur.component.html":
/*!******************************************************!*\
  !*** ./src/app/postmurmur/postmurmur.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This sesction is for Detailed User Feed of people. Starts Here -->\n\n<div class=\"styleone\">\n\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\t<header class=\"headerone\">\n\t\t<a class=\"cursor\" (click)=\"goBack()\"><i class=\"material-icons mt-2\">keyboard_backspace</i></a>\n\t</header>\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\n\t<div style=\"display: block;height: 94%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;padding-bottom: 20px;\">\n\t\t<div class=\"card mt-0\">\n\t\t  <div class=\"card-body\">\n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col-1\">\n\t\t    \t\t<a><img class=\"userimage\" src={{My_Profile.profile_pic}}></a>\n\t\t    \t</div>\t\t\t\n\t\t\t\t<div class=\"col-9\" style=\"margin: auto;\">\n\t\t\t\t\t<textarea class=\"form-control formcolor\"  (ngModelChange)=\"check_length()\"  [(ngModel)] = \"murmur\" id=\"exampleFormControlTextarea1\" type=\"text\" placeholder=\"Type a message here\" rows=\"3\"></textarea>\n\t\t\t\t\t<div *ngIf=\"errormsg\">\n\t\t\t\t\t\t<span style=\"color:red\"><i>{{ errorcomments }} </i></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"row\" >\n\t\t\t\t\t\t\t<label for=\"fileToUpload\">\n\t\t\t\t\t\t\t\t<a><i class=\"material-icons mt-3 cursor\" style=\"color: #a09fed;\">image</i></a>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<a style=\"padding: 15px\">&nbsp;{{fileName}}&nbsp;</a>\n\t\t\t\t\t\t\t<label *ngIf = \"File_select\">\n\t\t\t\t\t\t\t\t<a><i class=\"material-icons mt-3 cursor\" (click)=\"file_clear()\" style=\"color: #a09fed;\">clear</i></a>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input id=\"fileToUpload\" type=\"file\" (change)=\"onFileChanged($event)\" accept=\"image/*\" style=\"display:none;\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 mt-4\" style=\"margin: auto;text-align: center;\">\n\t\t\t\t\t<button type=\"button\" [disabled] = \"errormsg\" (click)=\"post()\" class=\"btn btn-secondary\" style=\"background-color: #a09fed;border-color: #a09fed;\">murmur</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngIf=\"url != ''\">\n                <div class=\"col-3\"></div>\n                <div class=\"col-6\">\n\t\t\t\t\t<a><img style=\"width: 100%;height:100%; border-radius: 40px;padding: 10px 16px;\" alt=\"\" class=\"mb-4\" src={{url}}></a>\n\t\t\t\t</div>\n            </div>\n\t\t\t<!-- <a><img style=\"width: 100%; border-radius: 10px;\" alt=\"\" class=\"mb-4\" src={{url}}></a> -->\n\t\t  </div>\n\t\t</div>\n\t\t<ngx-spinner\n\t\t\tbdColor=\"rgba(51,51,51,0.8)\"\n\t\t\tsize=\"medium\"\n\t\t\tcolor=\"#fff\"\n\t\t\tloadingText=\"Loading...\"\n\t\t\ttype=\"ball-scale-multiple\">\n\t\t</ngx-spinner>\n\t</div>\n</div>\n\n<!-- This sesction is for Detailed User Feed of people. Ends Here -->\n<button id=\"openModalButton\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Open Modal</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\"   tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" #closeBtn>\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t<div class=\"modal-body\" style=\"font-size: 20px;margin: auto;\">\n\t\t\t{{resMes}}\n\t\t</div>\n\t\t<div class=\"modal-footer\" style=\"margin: auto;\">\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>  \n"

/***/ }),

/***/ "./src/app/postmurmur/postmurmur.component.ts":
/*!****************************************************!*\
  !*** ./src/app/postmurmur/postmurmur.component.ts ***!
  \****************************************************/
/*! exports provided: PostmurmurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostmurmurComponent", function() { return PostmurmurComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostmurmurComponent = /** @class */ (function () {
    function PostmurmurComponent(ms, http, spin) {
        this.ms = ms;
        this.http = http;
        this.spin = spin;
        this.murmur = '';
        this.selectedFile = {};
        this.My_Profile = {};
        this.display = 'none';
        this.errormsg = false;
        this.errorcomments = "Max 256 charecters only allowed";
        this.url = "";
        this.fileName = "";
    }
    PostmurmurComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.ms.Acc_Profile.length == 0) {
            this.ms.getAccountProfile(localStorage.getItem(this.ms.Scatter_account_name).split('-')[0]).then(function (res) {
                _this.My_Profile = res[0];
            });
        }
        else {
            this.My_Profile = this.ms.Acc_Profile[0];
        }
    };
    PostmurmurComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        this.selectedFile = {};
        this.selectedFile = event.target.files[0];
        this.File_select = true;
        this.fileName = this.selectedFile['name'];
        if (this.fileName.length > 35) {
            this.fileName = this.fileName.slice(0, 30) + '.....' + this.fileName.slice(this.fileName.length - 10, this.fileName.length);
        }
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.url = event.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    PostmurmurComponent.prototype.file_clear = function () {
        this.selectedFile = {};
        this.File_select = false;
        this.url = "";
        this.fileName = "";
        console.log("Cleared");
    };
    PostmurmurComponent.prototype.post_murmur = function () {
        var _this = this;
        if (this.File_select && this.murmur.trim() != '') {
            this.spin.show();
            var fd = new FormData();
            fd.append('path', this.selectedFile);
            this.http.post("https://ipfs.infura.io:5001/api/v0/add?stream-channels=true", fd).subscribe(function (r) {
                console.log(r['Hash']);
                if (_this.murmur == '')
                    _this.murmur = "";
                _this.ms.postMurmur(_this.murmur, r['Hash']).then(function (res) {
                    console.log(res);
                    if (res['Error']) {
                        if (res['errMesg'] == undefined)
                            res['errMesg'] = 'Internal Server Error';
                        console.log(res['errMesg']);
                        _this.spin.hide();
                        _this.resMes = 'Error Message: ' + res['errMesg'];
                        document.getElementById("openModalButton").click();
                    }
                    else {
                        console.log(res['transId']);
                        _this.selectedFile = {};
                        _this.File_select = false;
                        _this.murmur = '';
                        _this.url = '';
                        _this.fileName = '';
                        _this.spin.hide();
                        _this.resMes = 'Your Murmur is submitted into blockchain';
                        document.getElementById("openModalButton").click();
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            });
        }
        else {
            if (this.murmur.trim() != '') {
                this.spin.show();
                this.ms.postMurmur(this.murmur, '').then(function (res) {
                    console.log(res);
                    if (res['Error']) {
                        if (res['errMesg'] == undefined)
                            res['errMesg'] = 'Internal Server Error';
                        console.log(res['errMesg']);
                        _this.spin.hide();
                        _this.resMes = 'Error Message: ' + res['errMesg'];
                        document.getElementById("openModalButton").click();
                    }
                    else {
                        console.log(res['transId']);
                        _this.spin.hide();
                        _this.resMes = 'Your Murmur is submitted into blockchain';
                        document.getElementById("openModalButton").click();
                        _this.murmur = '';
                    }
                });
            }
            else
                this.errormsg = true;
            this.errorcomments = "Please enter feeds description";
        }
    };
    PostmurmurComponent.prototype.post = function () {
        if (this.murmur.toString().length <= 256)
            this.post_murmur();
        else
            this.check_length();
    };
    PostmurmurComponent.prototype.check_length = function () {
        if (this.murmur.toString().length > 256) {
            this.errormsg = true;
            this.errorcomments = "Max 256 charecters only allowed";
        }
        else {
            this.errormsg = false;
        }
    };
    PostmurmurComponent.prototype.goBack = function () {
        this.ms.goBack();
    };
    PostmurmurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postmurmur',
            template: __webpack_require__(/*! ./postmurmur.component.html */ "./src/app/postmurmur/postmurmur.component.html"),
            styles: [__webpack_require__(/*! ./postmurmur.component.css */ "./src/app/postmurmur/postmurmur.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], PostmurmurComponent);
    return PostmurmurComponent;
}());



/***/ }),

/***/ "./src/app/sharepost/sharepost.component.css":
/*!***************************************************!*\
  !*** ./src/app/sharepost/sharepost.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n    /*display: flex;*/\n    /*flex-direction: column;*/\n    height: 100%;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n.headerone{\n    background-color: #ffffff;\n    padding: 10px 16px;\n    height: 6%;\n    width: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n}\n.userimage {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n.userimage1{\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n.footerone {\n    background-color: #ffffff;\n    position: absolute;\n    bottom: 0;\n    min-height: 80px;\n    width: 100%;\n}\n.formcolor{\n    background-color: #f7f8fa;\n    border: 1px solid #f7f8fa;\n}\n.threeicons {\n    font-size: 20px;\n}\n.threeicons:hover {\n    color: #a09fed;\n}\n.countdiv {\n    padding: 0;\n    margin: auto;\n    text-align: left;\n}\n.countdivp{\n    margin: 0;\n}\n.icon {\n    max-width: 70%;\n}\n.icondiv {\n    padding-right: 0;\n}\n.countselected {\n    color: #a09fed;\n}\n.cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVwb3N0L3NoYXJlcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtDQUNiO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEVBQTRFO0lBQzVFLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxVQUFVO0NBQ2I7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVwb3N0L3NoYXJlcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0eWxlb25le1xuICAgIC8qZGlzcGxheTogZmxleDsqL1xuICAgIC8qZmxleC1kaXJlY3Rpb246IGNvbHVtbjsqL1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG59XG4uaGVhZGVyb25le1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIGhlaWdodDogNiU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udXNlcmltYWdlIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnVzZXJpbWFnZTF7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5mb290ZXJvbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmZvcm1jb2xvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmN2Y4ZmE7XG59XG4udGhyZWVpY29ucyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLnRocmVlaWNvbnM6aG92ZXIge1xuICAgIGNvbG9yOiAjYTA5ZmVkO1xufVxuLmNvdW50ZGl2IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvdW50ZGl2cHtcbiAgICBtYXJnaW46IDA7XG59XG4uaWNvbiB7XG4gICAgbWF4LXdpZHRoOiA3MCU7XG59XG4uaWNvbmRpdiB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5jb3VudHNlbGVjdGVkIHtcbiAgICBjb2xvcjogI2EwOWZlZDtcbn1cblxuLmN1cnNvcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/sharepost/sharepost.component.html":
/*!****************************************************!*\
  !*** ./src/app/sharepost/sharepost.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- This sesction is for Detailed User Feed of people. Starts Here -->\n\n<div class=\"styleone\">\n\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\t<header class=\"headerone\">\n\t\t<a class=\"cursor\" (click)=\"goBack()\"><i class=\"material-icons mt-2\">keyboard_backspace</i></a>\n\t</header>\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\n\t<div style=\"display: block;height: 94%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;padding-bottom: 20px;\">\n\n\t\t<div class=\"card mt-0\" *ngFor=\"let mur of Murmur_Posts; let i = index\">\n\t\t\t<div class=\"card-body\" *ngIf = \"mur.action_type == 'murmur'\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t<a class=\"cursor\" (click)=\"otherUser(mur.Acc_id)\"><img class=\"userimage\" src={{mur.image}}></a>\n\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t<a><h5 class=\"mb-1\" style=\"font-weight: 600;\">{{mur.account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.Acc_id}}</span></h5></a>\n\t\t\t\t\t\t\t<a><p>{{mur.murmur.message}}</p></a>\n\t\t\t\t\t\t\t<a *ngIf = \" mur.murmur.attached_url !== ''\" ><img alt=\"\" style=\"width: 100%;border-radius: 10px;\" class=\"mb-4\" src={{mur.murmur.attached_url}}></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\"><a routerLink=\"\" style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">thumb_up</i></a>{{mur.murmur.snoop_count}}</div>\n\t\t\t\t\t\t\t<div class=\"col-4\"><a routerLink=\"/share\"  style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">share</i></a>{{mur.murmur.yell_count}}</div>\n\t\t\t\t\t\t\t<div class=\"col-4\"><a routerLink=\"/comment\" (click)=\"cmt_ID(i)\" style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">comment</i></a>{{mur.murmur.comment_count}}</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\" *ngIf=\"!mur.murmur.snooped\"><a class=\"cursor\" (click)=\"snoop(i)\"><img class=\"icon\" src=\"assets/img/like.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\" *ngIf=\"mur.murmur.snooped\"><a class=\"cursor\" (click)=\"snooped()\"><img class=\"icon\" src=\"assets/img/like_color.png\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.snoop_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a routerLink=\"/comment\" ><img class=\"icon\" src=\"assets/img/comment.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.comment_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a class=\"cursor\"><img class=\"icon\" src=\"assets/img/share.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.yell_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"card mt-0\">\n\t\t  <div class=\"card-body\" style=\"background-color: #dcdcdc;\">\n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col-1\" style=\"margin: auto;text-align: right;padding: 0;\">\n\t\t    \t\t<a><img class=\"userimage1\" src={{My_Profile.profile_pic}}></a>\n\t\t    \t</div>\t\t\t\n\t\t\t\t<div class=\"col-9\" style=\"margin: auto;\">\n\t\t\t\t\t<input class=\"form-control form-control-lg formcolor\" type=\"text\" (ngModelChange)=\"check_length()\" [(ngModel)]=\"yell\" placeholder=\"Type a message here\">\n\t\t\t\t\t<div *ngIf=\"errormsg\">\n\t\t\t\t\t\t<span style=\"color:red\"><i>{{ errorcomments }} </i></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2\" style=\"margin: auto;\">\n\t\t\t\t\t<button type=\"button\" [disabled] = \"errormsg\" (click)=\"yell_murmur()\" class=\"btn btn-secondary\" style=\"background-color: #a09fed;border-color: #a09fed;\">Share</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- This sesction is for Detailed User Feed of people. Ends Here -->\n\n<button id=\"openModalButton\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Open Modal</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\"   tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" #closeBtn>\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t<div class=\"modal-body\" style=\"font-size: 20px;margin: auto;\">\n\t\t\t{{resMes}}\n\t\t</div>\n\t\t<div class=\"modal-footer\" style=\"margin: auto;\">\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>  "

/***/ }),

/***/ "./src/app/sharepost/sharepost.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sharepost/sharepost.component.ts ***!
  \**************************************************/
/*! exports provided: SharepostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharepostComponent", function() { return SharepostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SharepostComponent = /** @class */ (function () {
    function SharepostComponent(ms, router, spin) {
        this.ms = ms;
        this.router = router;
        this.spin = spin;
        this.Murmur_Posts = [];
        this.yell = '';
        this.My_Profile = {};
        this.errormsg = false;
        this.errorcomments = "Max 256 charecters only allowed";
    }
    SharepostComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.ms.Acc_Profile.length == 0) {
            this.ms.getAccountProfile(localStorage.getItem(this.ms.Scatter_account_name).split('-')[0]).then(function (res) {
                _this.My_Profile = res[0];
            });
        }
        else {
            this.My_Profile = this.ms.Acc_Profile[0];
        }
        this.ms.getCommentData().then(function (res) {
            if (res['id'] != undefined) {
                if (res['type'] == 'murmur') {
                    // console.log("mur")
                    _this.ms.getMurmurByIndex(res['id']).then(function (mur) {
                        _this.Murmur_Posts.push(mur);
                    });
                }
                else {
                    // console.log("mymur")
                    _this.ms.getMyMurmurByIndex(res['id']).then(function (mur) {
                        _this.Murmur_Posts.push(mur);
                    });
                }
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    SharepostComponent.prototype.cmt_ID = function (id) {
        var _this = this;
        this.ms.getCommentData().then(function (res) {
            _this.ms.setCommentData(id, res['type']);
        });
    };
    SharepostComponent.prototype.snoop = function (id) {
        var _this = this;
        this.ms.getCommentData().then(function (res) {
            _this.ms.Snoop(res['id'], res['type']).then(function (res) {
                console.log(res);
                if (res['Error']) {
                    if (res['errMesg'] == undefined)
                        res['errMesg'] = 'Internal Server Error';
                    console.log(res['errMesg']);
                    _this.resMes = 'Error Message: ' + res['errMesg'];
                    document.getElementById("openModalButton").click();
                }
                else {
                    console.log(res['transId']);
                    _this.resMes = 'Your Snoop is submitted into blockchain'; // 'Transaction ID: '+res['transId']
                    document.getElementById("openModalButton").click();
                    if (_this.Murmur_Posts[0].action_type == 'murmur') {
                        _this.Murmur_Posts[0].murmur.snooped = 1;
                        _this.Murmur_Posts[0].murmur.snoop_count += 1;
                        // this.ms.setSnoopedMurmur(res['id'], res['type'])
                    }
                    else {
                        _this.Murmur_Posts[0].yell.snooped = 1;
                        _this.Murmur_Posts[0].yell.snoop_count += 1;
                        // this.ms.setSnoopedMurmur(res['id'], res['type'])
                    }
                }
            });
        });
    };
    SharepostComponent.prototype.snooped = function () {
        var _this = this;
        this.ms.getCommentData().then(function (res) {
            _this.ms.unSnoop(res['id'], res['type']).then(function (res) {
                console.log(res);
                if (res['Error']) {
                    if (res['errMesg'] == undefined)
                        res['errMesg'] = 'Internal Server Error';
                    console.log(res['errMesg']);
                    _this.resMes = 'Error Message: ' + res['errMesg'];
                    document.getElementById("openModalButton").click();
                }
                else {
                    console.log(res['transId']);
                    _this.resMes = 'Your UnSnoop is submitted into blockchain'; // 'Transaction ID: '+res['transId']
                    document.getElementById("openModalButton").click();
                    if (_this.Murmur_Posts[0].action_type == 'murmur') {
                        _this.Murmur_Posts[0].murmur.snooped = 0;
                        _this.Murmur_Posts[0].murmur.snoop_count -= 1;
                    }
                    else {
                        _this.Murmur_Posts[0].yell.snooped = 0;
                        _this.Murmur_Posts[0].yell.snoop_count -= 1;
                    }
                }
            });
        });
    };
    SharepostComponent.prototype.otherUser = function (name) {
        this.ms.setOtherUserName(name.split('@')[1]);
        this.router.navigate([{ outlets: { primary: ['userpost'], feed: ['userprofilelist'] } }]);
    };
    SharepostComponent.prototype.post_yell = function () {
        // console.log(this.Murmur_Posts[0].murmur.murmur_id)
        // this.ms.yell(this.Murmur_Posts[0].murmur.murmur_id, this.yell).then(res => {
        //   console.log(res)
        // })
        var _this = this;
        this.ms.getCommentData().then(function (res) {
            var mur = [];
            if (res['id'] != undefined) {
                if (res['type'] == 'murmur') {
                    // console.log("mur")
                    _this.ms.getMurmurByIndex(res['id']).then(function (resp) {
                        mur.push(resp);
                        // console.log(mur)
                        _this.ms.yell(mur[0].murmur.murmur_id, _this.yell).then(function (res) {
                            if (res['Error']) {
                                if (res['errMesg'] == undefined)
                                    res['errMesg'] = 'Internal Server Error';
                                console.log(res['errMesg']);
                                _this.resMes = 'Error Message: ' + res['errMesg'];
                                document.getElementById("openModalButton").click();
                            }
                            else {
                                console.log(res['transId']);
                                _this.resMes = 'Your Yell is submitted into blockchain'; // 'Transaction ID: '+res['transId']
                                document.getElementById("openModalButton").click();
                                _this.yell = '';
                            }
                        });
                    });
                }
                else {
                    // console.log("mymur")
                    _this.ms.getMyMurmurByIndex(res['id']).then(function (resp) {
                        mur.push(resp);
                        // console.log(mur)
                        _this.ms.yell(mur[0].murmur.murmur_id, _this.yell).then(function (res) {
                            console.log(res);
                            if (res['Error']) {
                                if (res['errMesg'] == undefined)
                                    res['errMesg'] = 'Internal Server Error';
                                console.log(res['errMesg']);
                                _this.resMes = 'Error Message: ' + res['errMesg'];
                                document.getElementById("openModalButton").click();
                            }
                            else {
                                console.log(res['transId']);
                                _this.resMes = 'Your Yell is submitted into blockchain'; // 'Transaction ID: '+res['transId']
                                document.getElementById("openModalButton").click();
                                _this.yell = '';
                            }
                        });
                    });
                }
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    SharepostComponent.prototype.yell_murmur = function () {
        if (this.yell.toString().length <= 256)
            this.post_yell();
        else
            this.check_length();
    };
    SharepostComponent.prototype.check_length = function () {
        if (this.yell.toString().length > 256)
            this.errormsg = true;
        else
            this.errormsg = false;
    };
    SharepostComponent.prototype.goBack = function () {
        this.ms.goBack();
    };
    SharepostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sharepost',
            template: __webpack_require__(/*! ./sharepost.component.html */ "./src/app/sharepost/sharepost.component.html"),
            styles: [__webpack_require__(/*! ./sharepost.component.css */ "./src/app/sharepost/sharepost.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], SharepostComponent);
    return SharepostComponent;
}());



/***/ }),

/***/ "./src/app/userchat/userchat.component.css":
/*!*************************************************!*\
  !*** ./src/app/userchat/userchat.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: 100%;\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n\n.headerone{\n\n\tbackground-color: #ffffff;\n\tpadding: 10px 16px;\n\theight: 59px;\n\twidth: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.footerone {\n\n\tbackground-color: #ffffff;\n\tposition: absolute;\n\tbottom: 0;\n\tmin-height: 65px;\n    width: 100%;\n}\n\n.formcolor{\n\n\tbackground-color: #f7f8fa;\n\tborder: 1px solid #f7f8fa;\n}\n\n.inbox_people {\n\tbackground: #f8f8f8 none repeat scroll 0 0;\n\tfloat: left;\n\toverflow: hidden;\n\twidth: 40%; border-right:1px solid #c4c4c4;\n  }\n\n.inbox_msg {\n\tborder: 1px solid #c4c4c4;\n\tclear: both;\n\toverflow: hidden;\n  }\n\n.top_spac{ margin: 20px 0 0;}\n\n.recent_heading {float: left; width:40%;}\n\n.srch_bar {\n\tdisplay: inline-block;\n\ttext-align: right;\n\twidth: 60%;\n  }\n\n.headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}\n\n.recent_heading h4 {\n\tcolor: #a09fed;\n\tfont-size: 21px;\n\tmargin: auto;\n  }\n\n.srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}\n\n.srch_bar .input-group-addon button {\n\tbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n\tborder: medium none;\n\tpadding: 0;\n\tcolor: #707070;\n\tfont-size: 18px;\n  }\n\n.srch_bar .input-group-addon { margin: 0 0 0 -27px;}\n\n.chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}\n\n.chat_ib h5 span{ font-size:13px; float:right;}\n\n.chat_ib p{ font-size:14px; color:#989898; margin:auto}\n\n.chat_img {\n\tfloat: left;\n\twidth: 11%;\n  }\n\n.chat_ib {\n\tfloat: left;\n\tpadding: 0 0 0 15px;\n\twidth: 88%;\n  }\n\n.chat_people{ overflow:hidden; clear:both;}\n\n.chat_list {\n\tborder-bottom: 1px solid #c4c4c4;\n\tmargin: 0;\n\tpadding: 18px 16px 10px;\n  }\n\n.inbox_chat { height: 550px; overflow-y: scroll;}\n\n.active_chat{ background:#ebebeb;}\n\n.incoming_msg_img {\n\tdisplay: inline-block;\n\twidth: 6%;\n  }\n\n.received_msg {\n\tdisplay: inline-block;\n\tpadding: 0 0 0 10px;\n\tvertical-align: top;\n\twidth: 92%;\n\tmargin: 10px 0;\n   }\n\n.received_withd_msg p {\n\tbackground: #ebebeb none repeat scroll 0 0;\n\tborder-radius: 3px;\n\tcolor: #646464;\n\tfont-size: 14px;\n\tmargin: 0;\n\tpadding: 5px 10px 5px 12px;\n\twidth: 100%;\n  }\n\n.time_date {\n\tcolor: #747474;\n\tdisplay: block;\n\tfont-size: 12px;\n\tmargin: 8px 0 0;\n  }\n\n.received_withd_msg { width: 57%;}\n\n.mesgs {\n\tfloat: left;\n\tpadding: 30px 15px 0 25px;\n\twidth: 60%;\n  }\n\n.sent_msg p {\n\tbackground: #a09fed none repeat scroll 0 0;\n\tborder-radius: 3px;\n\tfont-size: 14px;\n\tmargin: 0; color:#fff;\n\tpadding: 5px 10px 5px 12px;\n\twidth:100%;\n  }\n\n.outgoing_msg{ overflow:hidden; margin: 10px 0;\t}\n\n.sent_msg {\n\tfloat: right;\n\twidth: 46%;\n  }\n\n.input_msg_write input {\n\tbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n\tborder: medium none;\n\tcolor: #4c4c4c;\n\tfont-size: 15px;\n\tmin-height: 48px;\n\twidth: 100%;\n  }\n\n.type_msg {border-top: 1px solid #c4c4c4;position: relative;}\n\n.msg_send_btn {\n\tbackground: #a09fed none repeat scroll 0 0;\n\tborder: medium none;\n\tborder-radius: 50%;\n\tcolor: #fff;\n\tcursor: pointer;\n\tfont-size: 17px;\n\theight: 33px;\n\tposition: absolute;\n\tright: 0;\n\ttop: 11px;\n\twidth: 33px;\n  }\n\n.messaging { padding: 0 0 50px 0;}\n\n.msg_history {\n\theight: 516px;\n\toverflow-y: auto;\n  }\n\nimg {\n\t  max-width: 100%;\n\t}\n\n.cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmNoYXQvdXNlcmNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsMkJBQTJCO0NBQzNCLGFBQWE7Q0FDYixjQUFjO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0NBQ2I7O0FBRUQ7O0NBRUMsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsWUFBWTtJQUNULDRFQUE0RTtJQUM1RSxvQkFBb0I7O0NBRXZCOztBQUVEOztDQUVDLFlBQVk7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCOztBQUVEOztDQUVDLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLGlCQUFpQjtJQUNkLFlBQVk7Q0FDZjs7QUFFRDs7Q0FFQywwQkFBMEI7Q0FDMUIsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0MsMkNBQTJDO0NBQzNDLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsV0FBVyxDQUFDLCtCQUErQjtHQUN6Qzs7QUFDRDtDQUNELDBCQUEwQjtDQUMxQixZQUFZO0NBQ1osaUJBQWlCO0dBQ2Y7O0FBQ0QsV0FBVyxpQkFBaUIsQ0FBQzs7QUFHN0IsaUJBQWlCLFlBQVksQ0FBQyxVQUFVLENBQUM7O0FBQ3pDO0NBQ0Qsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixXQUFXO0dBQ1Q7O0FBQ0QsZUFBZSw0QkFBNEIsQ0FBQyxnQkFBZ0IsQ0FBQyxnQ0FBZ0MsQ0FBQzs7QUFFOUY7Q0FDRCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGFBQWE7R0FDWDs7QUFDRCxpQkFBaUIseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDOztBQUN0SDtDQUNELG9EQUFvRDtDQUNwRCxvQkFBb0I7Q0FDcEIsV0FBVztDQUNYLGVBQWU7Q0FDZixnQkFBZ0I7R0FDZDs7QUFDRCwrQkFBK0Isb0JBQW9CLENBQUM7O0FBRXBELGFBQWEsZUFBZSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQzs7QUFDOUQsa0JBQWtCLGVBQWUsQ0FBQyxZQUFZLENBQUM7O0FBQy9DLFlBQVksZUFBZSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7O0FBQ3ZEO0NBQ0QsWUFBWTtDQUNaLFdBQVc7R0FDVDs7QUFDRDtDQUNELFlBQVk7Q0FDWixvQkFBb0I7Q0FDcEIsV0FBVztHQUNUOztBQUVELGNBQWMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDOztBQUMzQztDQUNELGlDQUFpQztDQUNqQyxVQUFVO0NBQ1Ysd0JBQXdCO0dBQ3RCOztBQUNELGNBQWMsY0FBYyxDQUFDLG1CQUFtQixDQUFDOztBQUVqRCxjQUFjLG1CQUFtQixDQUFDOztBQUVsQztDQUNELHNCQUFzQjtDQUN0QixVQUFVO0dBQ1I7O0FBQ0Q7Q0FDRCxzQkFBc0I7Q0FDdEIsb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQixXQUFXO0NBQ1gsZUFBZTtJQUNaOztBQUNEO0NBQ0YsMkNBQTJDO0NBQzNDLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFVBQVU7Q0FDViwyQkFBMkI7Q0FDM0IsWUFBWTtHQUNWOztBQUNEO0NBQ0QsZUFBZTtDQUNmLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0dBQ2Q7O0FBQ0Qsc0JBQXNCLFdBQVcsQ0FBQzs7QUFDbEM7Q0FDRCxZQUFZO0NBQ1osMEJBQTBCO0NBQzFCLFdBQVc7R0FDVDs7QUFFQTtDQUNGLDJDQUEyQztDQUMzQyxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLFVBQVUsQ0FBQyxXQUFXO0NBQ3RCLDJCQUEyQjtDQUMzQixXQUFXO0dBQ1Q7O0FBQ0QsZUFBZSxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUU7O0FBQ2pEO0NBQ0QsYUFBYTtDQUNiLFdBQVc7R0FDVDs7QUFDRDtDQUNELG9EQUFvRDtDQUNwRCxvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsWUFBWTtHQUNWOztBQUVELFdBQVcsOEJBQThCLG1CQUFtQixDQUFDOztBQUM3RDtDQUNELDJDQUEyQztDQUMzQyxvQkFBb0I7Q0FDcEIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULFVBQVU7Q0FDVixZQUFZO0dBQ1Y7O0FBQ0QsYUFBYSxvQkFBb0IsQ0FBQzs7QUFDbEM7Q0FDRCxjQUFjO0NBQ2QsaUJBQWlCO0dBQ2Y7O0FBRUQ7R0FDQyxnQkFBZ0I7RUFDakI7O0FBRUQ7SUFDRyxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyY2hhdC91c2VyY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0eWxlb25le1xuXG5cdC8qZGlzcGxheTogZmxleDsqL1xuXHQvKmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Ki9cblx0aGVpZ2h0OiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG59XG5cbi5oZWFkZXJvbmV7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0cGFkZGluZzogMTBweCAxNnB4O1xuXHRoZWlnaHQ6IDU5cHg7XG5cdHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG59XG5cbi51c2VyaW1hZ2Uge1xuXG5cdHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5mb290ZXJvbmUge1xuXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAwO1xuXHRtaW4taGVpZ2h0OiA2NXB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybWNvbG9ye1xuXG5cdGJhY2tncm91bmQtY29sb3I6ICNmN2Y4ZmE7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNmN2Y4ZmE7XG59XG5cbi5pbmJveF9wZW9wbGUge1xuXHRiYWNrZ3JvdW5kOiAjZjhmOGY4IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG5cdGZsb2F0OiBsZWZ0O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR3aWR0aDogNDAlOyBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNjNGM0YzQ7XG4gIH1cbiAgLmluYm94X21zZyB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XG5cdGNsZWFyOiBib3RoO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC50b3Bfc3BhY3sgbWFyZ2luOiAyMHB4IDAgMDt9XG4gIFxuICBcbiAgLnJlY2VudF9oZWFkaW5nIHtmbG9hdDogbGVmdDsgd2lkdGg6NDAlO31cbiAgLnNyY2hfYmFyIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0d2lkdGg6IDYwJTtcbiAgfVxuICAuaGVhZGluZF9zcmNoeyBwYWRkaW5nOjEwcHggMjlweCAxMHB4IDIwcHg7IG92ZXJmbG93OmhpZGRlbjsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2M0YzRjNDt9XG4gIFxuICAucmVjZW50X2hlYWRpbmcgaDQge1xuXHRjb2xvcjogI2EwOWZlZDtcblx0Zm9udC1zaXplOiAyMXB4O1xuXHRtYXJnaW46IGF1dG87XG4gIH1cbiAgLnNyY2hfYmFyIGlucHV0eyBib3JkZXI6MXB4IHNvbGlkICNjZGNkY2Q7IGJvcmRlci13aWR0aDowIDAgMXB4IDA7IHdpZHRoOjgwJTsgcGFkZGluZzoycHggMCA0cHggNnB4OyBiYWNrZ3JvdW5kOm5vbmU7fVxuICAuc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIGJ1dHRvbiB7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcblx0Ym9yZGVyOiBtZWRpdW0gbm9uZTtcblx0cGFkZGluZzogMDtcblx0Y29sb3I6ICM3MDcwNzA7XG5cdGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIHsgbWFyZ2luOiAwIDAgMCAtMjdweDt9XG4gIFxuICAuY2hhdF9pYiBoNXsgZm9udC1zaXplOjE1cHg7IGNvbG9yOiM0NjQ2NDY7IG1hcmdpbjowIDAgOHB4IDA7fVxuICAuY2hhdF9pYiBoNSBzcGFueyBmb250LXNpemU6MTNweDsgZmxvYXQ6cmlnaHQ7fVxuICAuY2hhdF9pYiBweyBmb250LXNpemU6MTRweDsgY29sb3I6Izk4OTg5ODsgbWFyZ2luOmF1dG99XG4gIC5jaGF0X2ltZyB7XG5cdGZsb2F0OiBsZWZ0O1xuXHR3aWR0aDogMTElO1xuICB9XG4gIC5jaGF0X2liIHtcblx0ZmxvYXQ6IGxlZnQ7XG5cdHBhZGRpbmc6IDAgMCAwIDE1cHg7XG5cdHdpZHRoOiA4OCU7XG4gIH1cbiAgXG4gIC5jaGF0X3Blb3BsZXsgb3ZlcmZsb3c6aGlkZGVuOyBjbGVhcjpib3RoO31cbiAgLmNoYXRfbGlzdCB7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDE4cHggMTZweCAxMHB4O1xuICB9XG4gIC5pbmJveF9jaGF0IHsgaGVpZ2h0OiA1NTBweDsgb3ZlcmZsb3cteTogc2Nyb2xsO31cbiAgXG4gIC5hY3RpdmVfY2hhdHsgYmFja2dyb3VuZDojZWJlYmViO31cbiAgXG4gIC5pbmNvbWluZ19tc2dfaW1nIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR3aWR0aDogNiU7XG4gIH1cbiAgLnJlY2VpdmVkX21zZyB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cGFkZGluZzogMCAwIDAgMTBweDtcblx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0d2lkdGg6IDkyJTtcblx0bWFyZ2luOiAxMHB4IDA7XG4gICB9XG4gICAucmVjZWl2ZWRfd2l0aGRfbXNnIHAge1xuXHRiYWNrZ3JvdW5kOiAjZWJlYmViIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0Y29sb3I6ICM2NDY0NjQ7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcblx0d2lkdGg6IDEwMCU7XG4gIH1cbiAgLnRpbWVfZGF0ZSB7XG5cdGNvbG9yOiAjNzQ3NDc0O1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRtYXJnaW46IDhweCAwIDA7XG4gIH1cbiAgLnJlY2VpdmVkX3dpdGhkX21zZyB7IHdpZHRoOiA1NyU7fVxuICAubWVzZ3Mge1xuXHRmbG9hdDogbGVmdDtcblx0cGFkZGluZzogMzBweCAxNXB4IDAgMjVweDtcblx0d2lkdGg6IDYwJTtcbiAgfVxuICBcbiAgIC5zZW50X21zZyBwIHtcblx0YmFja2dyb3VuZDogI2EwOWZlZCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bWFyZ2luOiAwOyBjb2xvcjojZmZmO1xuXHRwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcblx0d2lkdGg6MTAwJTtcbiAgfVxuICAub3V0Z29pbmdfbXNneyBvdmVyZmxvdzpoaWRkZW47IG1hcmdpbjogMTBweCAwO1x0fVxuICAuc2VudF9tc2cge1xuXHRmbG9hdDogcmlnaHQ7XG5cdHdpZHRoOiA0NiU7XG4gIH1cbiAgLmlucHV0X21zZ193cml0ZSBpbnB1dCB7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcblx0Ym9yZGVyOiBtZWRpdW0gbm9uZTtcblx0Y29sb3I6ICM0YzRjNGM7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0bWluLWhlaWdodDogNDhweDtcblx0d2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC50eXBlX21zZyB7Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNjNGM0YzQ7cG9zaXRpb246IHJlbGF0aXZlO31cbiAgLm1zZ19zZW5kX2J0biB7XG5cdGJhY2tncm91bmQ6ICNhMDlmZWQgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcblx0Ym9yZGVyOiBtZWRpdW0gbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRjb2xvcjogI2ZmZjtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRmb250LXNpemU6IDE3cHg7XG5cdGhlaWdodDogMzNweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogMDtcblx0dG9wOiAxMXB4O1xuXHR3aWR0aDogMzNweDtcbiAgfVxuICAubWVzc2FnaW5nIHsgcGFkZGluZzogMCAwIDUwcHggMDt9XG4gIC5tc2dfaGlzdG9yeSB7XG5cdGhlaWdodDogNTE2cHg7XG5cdG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbiAgXG4gIGltZyB7XG5cdCAgbWF4LXdpZHRoOiAxMDAlO1xuXHR9XG5cdFxuXHQuY3Vyc29ye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/userchat/userchat.component.html":
/*!**************************************************!*\
  !*** ./src/app/userchat/userchat.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"styleone\">\n\t<header class=\"headerone\" style=\"display: inline-flex;\">\n\t\t<a class=\"cursor\" (click)=\"goBack()\"><i class=\"material-icons mt-2\">keyboard_backspace</i></a>\n\t\t<img class=\"userimage cursor\" style=\"margin-left:15px\" alt=\"\" src={{name.profile_pic}}>\n\t\t<div class=\"ml-2\">\n\t\t\t<div><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{name.Name}}</h6></div>\n\t\t\t<div *ngIf=\"name.Time\"><p class=\"mb-0\" style=\"font-style: italic;color: #97979a;font-size: 12px;\">Last Message sent on {{name.Time|date:'shortTime'}}</p></div>\n\t\t</div>\n\t</header>\n\t\n\t<div class=\"container\" id=\"chat\" style=\"display: block; display: flex; flex-direction: column-reverse; height: calc(100vh - 165px);overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;\">\n\t\t<div *ngFor=\"let whis of whisper\">\n\t\t\t<div class=\"incoming_msg\" *ngIf=\"whis.from_account_name == name.account_name && whis.to_account_name == My_Profile\">\n\t\t\t\t<div class=\"incoming_msg_img\"> <img  class=\"userimage\" src={{name.profile_pic}} alt=\"sunil\"> </div>\n\t\t\t\t\t<div class=\"received_msg\"> \n\t\t\t\t\t<div class=\"received_withd_msg\" >\n\t\t\t\t\t\t<p>{{whis.message}}</p>\n\t\t\t\t\t\t<span class=\"time_date\"> {{whis.createdAt|date:'shortTime'}}    |     {{whis.createdAt|date :'dd-MM-yyyy'\t}} </span></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"outgoing_msg\"  *ngIf=\"whis.from_account_name == My_Profile && whis.to_account_name == name.account_name\"> \n\t\t\t\t<div class=\"sent_msg\">\n\t\t\t\t\t<p>{{whis.message}}</p>\n\t\t\t\t\t<span class=\"time_date\">{{whis.createdAt|date:'shortTime'}}    |   {{whis.createdAt|date :'dd-MM-yyyy'}}</span> </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"container footerone\">\n\t\t<div class=\"row mt-3\">\n\t\t\t<div class=\"col-11\">\n\t\t\t\t<input class=\"form-control form-control-lg formcolor\" type=\"text\" (keyup.enter)=\"send_whisper()\" placeholder=\"Type a message here\" [(ngModel)] = \"mesg\">\n\t\t\t</div>\n\t\t\t<div class=\"col-1\" style=\"margin: auto;\" class=\"cursor\" (click)=\"send_whisper()\">\n\t\t\t\t<i class=\"material-icons\">send</i>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div> \n\n\n<!-- This sesction is for Detailed User Feed of people. Ends Here -->\n\n<button id=\"openModalButton\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Open Modal</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\"   tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" #closeBtn>\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t<div class=\"modal-body\" style=\"font-size: 20px;margin: auto;\">\n\t\t\t{{resMes}}\n\t\t</div>\n\t\t<div class=\"modal-footer\" style=\"margin: auto;\">\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>  "

/***/ }),

/***/ "./src/app/userchat/userchat.component.ts":
/*!************************************************!*\
  !*** ./src/app/userchat/userchat.component.ts ***!
  \************************************************/
/*! exports provided: UserchatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserchatComponent", function() { return UserchatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserchatComponent = /** @class */ (function () {
    function UserchatComponent(ms, router) {
        this.ms = ms;
        this.router = router;
        this.name = { Name: "", profile_pic: "", account_name: "", Time: "" };
        this.receive = new Array();
        this.whisper = [];
    }
    UserchatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.My_Profile = localStorage.getItem(this.ms.Scatter_account_name).split('-')[0];
        this.intravel1 = setInterval(function () {
            if (_this.name.account_name != _this.ms.chatName.account_name) {
                _this.name = _this.ms.chatName;
                if (localStorage.getItem(_this.ms.Scatter_account_name).split('-').length == 2)
                    _this.ms.getChatDetails(_this.My_Profile, _this.name.account_name).then(function (res) {
                        // console.log(res)
                        clearInterval(_this.intravel2);
                        _this.whisper = res;
                        _this.get_fequent_msg(_this.name.account_name, res['length']);
                    });
            }
        }, 1000);
    };
    UserchatComponent.prototype.get_fequent_msg = function (acc, len) {
        var _this = this;
        // console.log(len, acc)
        this.intravel2 = setInterval(function () {
            _this.ms.getChatCount(_this.My_Profile, acc).then(function (res) {
                if (res['data']['length']) {
                    // console.log(this.My_Profile,acc,this.whisper.length,res['data']['length'])
                    if (len != res['data']['length']) {
                        _this.ms.getChatDetails(_this.My_Profile, acc).then(function (res) {
                            len = res['length'];
                            _this.whisper.splice(0, 0, res[0]);
                        });
                    }
                }
            });
        }, 1000);
    };
    UserchatComponent.prototype.send_whisper = function () {
        var _this = this;
        if (localStorage.getItem(this.ms.Scatter_account_name).split('-').length == 2) {
            if (this.name.Name != "" && this.name.Name != undefined) {
                var temp_msg = this.mesg;
                this.mesg = undefined;
                if (temp_msg != undefined && temp_msg.trim() != '')
                    this.ms.whisper(this.name.account_name, temp_msg).then(function (res) {
                        console.log(res);
                        if (res['Error']) {
                            if (res['errMesg'] == undefined)
                                res['errMesg'] = 'Internal Server Error';
                            console.log(res['errMesg']);
                            _this.resMes = 'Error Message: ' + res['errMesg'];
                            document.getElementById("openModalButton").click();
                        }
                        else {
                            console.log(res['transId']);
                            _this.resMes = 'Your whisper is submitted into blockchain';
                            document.getElementById("openModalButton").click();
                        }
                    });
                else {
                    this.resMes = 'Please Enter the message!';
                    document.getElementById("openModalButton").click();
                }
            }
            else {
                this.resMes = 'Please choose any receiver account';
                document.getElementById("openModalButton").click();
            }
        }
        else {
            this.resMes = 'Its only working in Privatekey login';
            document.getElementById("openModalButton").click();
        }
    };
    UserchatComponent.prototype.otherUser = function (name) {
        this.ms.setOtherUserName(name);
        this.router.navigate([{ outlets: { primary: ['userpost'], feed: ['userprofilelist'] } }]);
        this.ms.chatName.account_name = undefined;
    };
    UserchatComponent.prototype.goBack = function () {
        this.ms.goBack();
    };
    UserchatComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intravel1);
        clearInterval(this.intravel2);
        this.ms.chatName.account_name = undefined;
    };
    UserchatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userchat',
            template: __webpack_require__(/*! ./userchat.component.html */ "./src/app/userchat/userchat.component.html"),
            styles: [__webpack_require__(/*! ./userchat.component.css */ "./src/app/userchat/userchat.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserchatComponent);
    return UserchatComponent;
}());



/***/ }),

/***/ "./src/app/userpersonalfeed/userpersonalfeed.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/userpersonalfeed/userpersonalfeed.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: 100%;\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n\tborder: 0;\n    bottom: 0;\n}\n\n.headerone{\n\n\tbackground-color: #ffffff;\n\tpadding: 10px 16px;\n\theight: 6%;\n\twidth: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.footerone {\n\n\tbackground-color: #ffffff;\n\tposition: absolute;\n\tbottom: 0;\n\tmin-height: 80px;\n    width: 100%;\n}\n\n.formcolor{\n\n\tbackground-color: #f7f8fa;\n\tborder: 1px solid #f7f8fa;\n}\n\n.threeicons {\n\tfont-size: 20px;\n}\n\n.threeicons:hover {\n\tcolor: #a09fed;\n}\n\n.icon {\n    max-width: 70%;\n}\n\n.countdiv {\n\n\tpadding: 0;\n    margin: auto;\n    text-align: left;\n}\n\n.countdivp{\n\tmargin: 0;\n}\n\n.icondiv {\n\tpadding-right: 0;\n}\n\n.cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnBlcnNvbmFsZmVlZC91c2VycGVyc29uYWxmZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsa0JBQWtCO0NBQ2xCLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2IsY0FBYztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0NBQ2QsVUFBVTtJQUNQLFVBQVU7Q0FDYjs7QUFFRDs7Q0FFQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxZQUFZO0lBQ1QsNEVBQTRFO0lBQzVFLG9CQUFvQjs7Q0FFdkI7O0FBRUQ7O0NBRUMsWUFBWTtJQUNULGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7O0FBRUQ7O0NBRUMsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQixVQUFVO0NBQ1YsaUJBQWlCO0lBQ2QsWUFBWTtDQUNmOztBQUVEOztDQUVDLDBCQUEwQjtDQUMxQiwwQkFBMEI7Q0FDMUI7O0FBR0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVEOztDQUVDLFdBQVc7SUFDUixhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCOztBQUVEO0NBQ0MsVUFBVTtDQUNWOztBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXNlcnBlcnNvbmFsZmVlZC91c2VycGVyc29uYWxmZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R5bGVvbmV7XG5cblx0LypkaXNwbGF5OiBmbGV4OyovXG5cdC8qZmxleC1kaXJlY3Rpb246IGNvbHVtbjsqL1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG4gICAgYm90dG9tOiAwO1xufVxuXG4uaGVhZGVyb25le1xuXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdHBhZGRpbmc6IDEwcHggMTZweDtcblx0aGVpZ2h0OiA2JTtcblx0d2lkdGg6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbn1cblxuLnVzZXJpbWFnZSB7XG5cblx0d2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmZvb3Rlcm9uZSB7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDA7XG5cdG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtY29sb3J7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y3ZjhmYTtcbn1cblxuXG4udGhyZWVpY29ucyB7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRocmVlaWNvbnM6aG92ZXIge1xuXHRjb2xvcjogI2EwOWZlZDtcbn1cblxuLmljb24ge1xuICAgIG1heC13aWR0aDogNzAlO1xufVxuXG4uY291bnRkaXYge1xuXG5cdHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb3VudGRpdnB7XG5cdG1hcmdpbjogMDtcbn1cblxuLmljb25kaXYge1xuXHRwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4uY3Vyc29ye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/userpersonalfeed/userpersonalfeed.component.html":
/*!******************************************************************!*\
  !*** ./src/app/userpersonalfeed/userpersonalfeed.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This sesction is for Detailed User Feed of people. Starts Here -->\n\n<div class=\"styleone\">\n\t<!-- This header is open header for User psersonal Profile. Starts Here -->\n\t<header class=\"headerone\">\n\t\t<a class=\"cursor\" (click)=\"goback()\"><i class=\"material-icons mt-2\">keyboard_backspace</i></a>\n\t</header>\n\t<!-- This header is open header for User psersonal Profile. Ends Here -->\n\n\t<div id = \"divscroll\" style=\"display: block;height: 94%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;padding-bottom: 20px;\" >\n\n\t\t<div class=\"card mt-0\" *ngFor=\"let mur of My_Murmur_Posts; let i = index\" >\n\t\t\t<div class=\"card-body\" *ngIf = \"mur.action_type == 'murmur'\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t<a><img class=\"userimage\" alt=\"\" src={{My_Profile.profile_pic}}></a>\n\t\t\t\t\t\t<!-- <a *ngIf=\"!name\" class=\"cursor\" (click)=\"deleteMurmur(i)\"><i class=\"material-icons mt-2\">delete</i></a> -->\n\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{mur.account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.Acc_id}}</span>\n\t\t\t\t\t\t\t\t<!-- <a *ngIf=\"mur.status\" style=\"float:right;\" class=\"cursor\" (click)=\"deletePost(i)\"><i class=\"material-icons mt-2\">delete</i></a> -->\n\t\t\t\t\t\t\t</h6></a>\n\t\t\t\t\t\t\t<a><p>{{mur.murmur.message}}</p></a>\n\t\t\t\t\t\t\t<a *ngIf = \" mur.murmur.attached_url !== ''\" ><img style=\"width: 100%;border-radius: 10px;\" alt=\"\" class=\"mb-4\" src={{mur.murmur.attached_url}}></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\" *ngIf=\"!mur.murmur.snooped\"><a class=\"cursor\" (click)=\"snoop(i)\"><img class=\"icon\" src=\"assets/img/like.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\" *ngIf=\"mur.murmur.snooped\"><a class=\"cursor\" (click)=\"snooped(i)\"><img class=\"icon\" src=\"assets/img/like_color.png\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.snoop_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a class=\"cursor\" routerLink=\"/comment\" (click)=\"cmt_Data(i)\"><img class=\"icon\" src=\"assets/img/comment.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.comment_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a class=\"cursor\" routerLink=\"/share\" (click)=\"cmt_Data(i)\"><img class=\"icon\" src=\"assets/img/share.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.yell_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body\" *ngIf = \"mur.action_type == 'yell'\">\n\t\t\t\t<div class=\"row\">\n                    <div class=\"col-1\">\n\t\t\t\t\t\t<a class=\"cursor\" (click)=\"otherUser(mur.Acc_id)\"><img class=\"userimage\" src={{mur.image}}></a>\n\t\t\t\t\t\t<!-- <a *ngIf=\"mur.status\" class=\"cursor\" (click)=\"deletePost(i)\"><i class=\"material-icons mt-2\">delete</i></a> -->\n                    </div>            \n\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{mur.account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.Acc_id}}</span>\n\t\t\t\t\t\t\t\t<!-- <a *ngIf=\"mur.status\" style=\"float:right;\" class=\"cursor\" (click)=\"deletePost(i)\"><i class=\"material-icons mt-2\">delete</i></a> -->\n\t\t\t\t\t\t\t</h6></a>\n\t\t\t\t\t\t\t<a><p>{{mur.yell.extra_comment}}</p></a>\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-12 mb-4\">\n\t\t\t\t\t\t\t<div class=\"card mt-0\" style=\"border-radius: 10px;\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"cursor\" (click)=\"otherUser(mur.yell.mur_acc_id)\"><img alt=\"\" class=\"userimage\" src={{mur.yell.mur_acc_image}}></a>\n\t\t\t\t\t\t\t\t\t</div>            \n\t\t\t\t\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{mur.yell.mur_account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.yell.mur_acc_id}}</span></h6></a>\n\t\t\t\t\t\t\t\t\t\t\t<a><p>{{mur.yell.message}}</p></a>\n\t\t\t\t\t\t\t\t\t\t\t<a *ngIf = \" mur.yell.attached_url !== ''\" ><img alt=\"\" style=\"width: 100%;border-radius: 10px;\" class=\"mb-4\" src={{mur.yell.attached_url}}></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\" *ngIf=\"!mur.yell.snooped\"><a class=\"cursor\" (click)=\"snoop(i)\"><img class=\"icon\" src=\"assets/img/like.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\" *ngIf=\"mur.yell.snooped\"><a class=\"cursor\" (click)=\"snooped(i)\"><img class=\"icon\" src=\"assets/img/like_color.png\"></a></div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.yell.snoop_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a class=\"cursor\" routerLink=\"/comment\" (click)=\"cmt_Data(i)\"><img class=\"icon\" src=\"assets/img/comment.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.yell.comment_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n                </div>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div *ngIf=\"load\" style=\"text-align: center;padding-top: 5px;padding-bottom: 5px;\">\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"LoadFeeds()\" style=\"border-radius: 30px;background-color: #a09fed;border-color: #a09fed;\">{{ notificationMessage }}</button>\n\t\t</div>\n\t\t<ngx-spinner\n\t\t\tbdColor=\"rgba(51,51,51,0.8)\"\n\t\t\tsize=\"medium\"\n\t\t\tcolor=\"#fff\"\n\t\t\tloadingText=\"Loading...\"\n\t\t\ttype=\"ball-scale-multiple\">\n\t\t</ngx-spinner>\n\t</div>\n\t<router-outlet></router-outlet>\n</div>\n\n<!-- This sesction is for Detailed User Feed of people. Ends Here -->\n\n<button id=\"openModalButton\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">Open Modal</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\"   tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" #closeBtn>\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t<div class=\"modal-body\" style=\"font-size: 20px;margin: auto;\">\n\t\t\t{{resMes}}\n\t\t</div>\n\t\t<div class=\"modal-footer\" style=\"margin: auto;\">\n\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/userpersonalfeed/userpersonalfeed.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/userpersonalfeed/userpersonalfeed.component.ts ***!
  \****************************************************************/
/*! exports provided: UserpersonalfeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpersonalfeedComponent", function() { return UserpersonalfeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserpersonalfeedComponent = /** @class */ (function () {
    function UserpersonalfeedComponent(ms, router) {
        this.ms = ms;
        this.router = router;
        this.My_Murmur_Posts = [];
        this.My_Profile = {};
        this.name = '';
        this.user = '';
        this.load = false;
        this.last_resp = 1;
        this.notificationMessage = "Load Feed";
    }
    UserpersonalfeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.ms.getOtherUserName().then(function (res) {
                if (_this.name != res) {
                    _this.ms.page_count = 0;
                    _this.name = res;
                    if (res == undefined) {
                        _this.user = localStorage.getItem(_this.ms.Scatter_account_name).split('-')[0];
                        if (_this.ms.Acc_Profile.length == 0) {
                            _this.ms.getAccountDetail(localStorage.getItem(_this.ms.Scatter_account_name).split('-')[0]).then(function (res) {
                                _this.My_Profile = res[0];
                            });
                        }
                        else {
                            _this.My_Profile = _this.ms.Acc_Profile[0];
                        }
                        _this.ms.getAccountActivity(localStorage.getItem(_this.ms.Scatter_account_name).split('-')[0]).then(function (resp) {
                            _this.My_Murmur_Posts = resp;
                            if (_this.My_Murmur_Posts.length != 0)
                                _this.load = true;
                            else
                                _this.load = false;
                            if (_this.My_Murmur_Posts.length < 10)
                                _this.notificationMessage = "No more feeds found";
                        });
                    }
                    else {
                        _this.user = res;
                        _this.ms.getAccountProfile(res).then(function (res) {
                            _this.My_Profile = res[0];
                            // console.log(res)
                        });
                        _this.ms.getAccountActivity(res).then(function (resp) {
                            _this.My_Murmur_Posts = resp;
                            if (_this.My_Murmur_Posts.length != 0)
                                _this.load = true;
                            else
                                _this.load = false;
                            if (_this.My_Murmur_Posts.length < 10)
                                _this.notificationMessage = "No more feeds found";
                            // console.log(res)
                        });
                    }
                }
            });
        }, 50);
    };
    UserpersonalfeedComponent.prototype.snoop = function (id) {
        var _this = this;
        this.ms.Snoop(id, 'mymurmur').then(function (res) {
            console.log(res);
            if (res['Error']) {
                if (res['errMesg'] == undefined)
                    res['errMesg'] = 'Internal Server Error';
                console.log(res['errMesg']);
                _this.resMes = 'Error Message: ' + res['errMesg'];
                document.getElementById("openModalButton").click();
            }
            else {
                console.log(res['transId']);
                _this.resMes = 'Your Snoop is submitted into blockchain';
                document.getElementById("openModalButton").click();
                if (_this.My_Murmur_Posts[id].action_type == 'murmur') {
                    _this.My_Murmur_Posts[id].murmur.snooped = 1;
                    _this.My_Murmur_Posts[id].murmur.snoop_count += 1;
                }
                else {
                    _this.My_Murmur_Posts[id].yell.snooped = 1;
                    _this.My_Murmur_Posts[id].yell.snoop_count += 1;
                }
            }
        });
    };
    UserpersonalfeedComponent.prototype.snooped = function (id) {
        var _this = this;
        this.ms.unSnoop(id, 'mymurmur').then(function (res) {
            console.log(res);
            if (res['Error']) {
                if (res['errMesg'] == undefined)
                    res['errMesg'] = 'Internal Server Error';
                console.log(res['errMesg']);
                _this.resMes = 'Error Message: ' + res['errMesg'];
                document.getElementById("openModalButton").click();
            }
            else {
                console.log(res['transId']);
                _this.resMes = 'Your UnSnoop is submitted into blockchain';
                document.getElementById("openModalButton").click();
                if (_this.My_Murmur_Posts[id].action_type == 'murmur') {
                    _this.My_Murmur_Posts[id].murmur.snooped = 0;
                    _this.My_Murmur_Posts[id].murmur.snoop_count -= 1;
                }
                else {
                    _this.My_Murmur_Posts[id].yell.snooped = 0;
                    _this.My_Murmur_Posts[id].yell.snoop_count -= 1;
                }
            }
        });
        // this.resMes = 'You are already snooped'
        // document.getElementById("openModalButton").click();
    };
    UserpersonalfeedComponent.prototype.cmt_Data = function (id) {
        this.ms.setCommentData(id, 'mymurmur');
    };
    UserpersonalfeedComponent.prototype.goback = function () {
        this.ms.setOtherUserName(undefined);
        this.ms.goBack();
    };
    UserpersonalfeedComponent.prototype.otherUser = function (name) {
        if (name.split('@')[1] != this.user) {
            this.ms.setOtherUserName(name.split('@')[1]);
            this.router.navigate([{ outlets: { primary: ['userpost'], feed: ['userprofilelist'] } }]);
        }
    };
    UserpersonalfeedComponent.prototype.deleteMurmur = function (id) {
        var _this = this;
        if (this.My_Murmur_Posts[id].action_type == "murmur") {
            // console.log(this.Murmur_Posts[id].murmur.murmur_id);
            this.ms.deleteMurmur(this.My_Murmur_Posts[id].murmur.murmur_id).then(function (res) {
                console.log(res);
                if (res['Error']) {
                    if (res['errMesg'] == undefined)
                        res['errMesg'] = 'Internal Server Error';
                    console.log(res['errMesg']);
                    _this.resMes = 'Error Message: ' + res['errMesg'];
                    document.getElementById("openModalButton").click();
                }
                else {
                    console.log(res['transId']);
                    _this.resMes = 'Your Delete Murmur is submitted to blockchain';
                    document.getElementById("openModalButton").click();
                }
            });
        }
        else {
            // console.log(this.Murmur_Posts[id].yell.yell_id);
            this.ms.unyell(this.My_Murmur_Posts[id].yell.yell_id).then(function (res) {
                console.log(res);
                if (res['Error']) {
                    if (res['errMesg'] == undefined)
                        res['errMesg'] = 'Internal Server Error';
                    console.log(res['errMesg']);
                    _this.resMes = 'Error Message: ' + res['errMesg'];
                    document.getElementById("openModalButton").click();
                }
                else {
                    console.log(res['transId']);
                    _this.resMes = 'Your Unyell is submitted to blockchain';
                    document.getElementById("openModalButton").click();
                }
            });
        }
    };
    UserpersonalfeedComponent.prototype.LoadFeeds = function () {
        var _this = this;
        if (this.notificationMessage != "No more feeds found") {
            var meta = this;
            meta.ms.page_count++;
            meta.ms.getAccountActivity(this.user).then(function (res) {
                meta.last_resp = res['length'];
                if (res['length'] !== 0)
                    for (var i = 0; i < res['length']; i++)
                        meta.My_Murmur_Posts.push(res[i]);
                else if (res['length'] == 0) {
                    _this.notificationMessage = "No Feeds Found";
                    _this.interval1 = setInterval(function () {
                        if (meta.last_resp == 0)
                            meta.load = false;
                    }, 50);
                }
            });
        }
    };
    UserpersonalfeedComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
        clearInterval(this.interval1);
    };
    UserpersonalfeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userpersonalfeed',
            template: __webpack_require__(/*! ./userpersonalfeed.component.html */ "./src/app/userpersonalfeed/userpersonalfeed.component.html"),
            styles: [__webpack_require__(/*! ./userpersonalfeed.component.css */ "./src/app/userpersonalfeed/userpersonalfeed.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserpersonalfeedComponent);
    return UserpersonalfeedComponent;
}());



/***/ }),

/***/ "./src/app/userprofilelist/userprofilelist.component.css":
/*!***************************************************************!*\
  !*** ./src/app/userprofilelist/userprofilelist.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userimage {\n\twidth:180px;\n\theight: 180px;\n    border-radius: 50%;\n}\n\n\n.imagecontainer {\n\ttext-align: center;\n}\n\n\n.info {\n\n\tcolor: white;\n\ttext-align: center;\n}\n\n\n.handle {\n\n\tcolor: #a09fed;\n}\n\n\n.righttext {\n\ttext-align: center;\n\tcolor: white;\n\tcursor: pointer;\n}\n\n\n.list {\n\n\tcolor: white;\n    background-color: #ffffff00;\n}\n\n\n.righttextblue {\n\tcolor: #a09fed;\n}\n\n\n.cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnByb2ZpbGVsaXN0L3VzZXJwcm9maWxlbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLGNBQWM7SUFDWCxtQkFBbUI7Q0FDdEI7OztBQUdEO0NBQ0MsbUJBQW1CO0NBQ25COzs7QUFFRDs7Q0FFQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25COzs7QUFFRDs7Q0FFQyxlQUFlO0NBQ2Y7OztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEI7OztBQUVEOztDQUVDLGFBQWE7SUFDViw0QkFBNEI7Q0FDL0I7OztBQUVEO0NBQ0MsZUFBZTtDQUNmOzs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJwcm9maWxlbGlzdC91c2VycHJvZmlsZWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyaW1hZ2Uge1xuXHR3aWR0aDoxODBweDtcblx0aGVpZ2h0OiAxODBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cblxuLmltYWdlY29udGFpbmVyIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5mbyB7XG5cblx0Y29sb3I6IHdoaXRlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oYW5kbGUge1xuXG5cdGNvbG9yOiAjYTA5ZmVkO1xufVxuXG4ucmlnaHR0ZXh0IHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogd2hpdGU7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxpc3Qge1xuXG5cdGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XG59XG5cbi5yaWdodHRleHRibHVlIHtcblx0Y29sb3I6ICNhMDlmZWQ7XG59XG5cbi5jdXJzb3J7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/userprofilelist/userprofilelist.component.html":
/*!****************************************************************!*\
  !*** ./src/app/userprofilelist/userprofilelist.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display: block;height: 94%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;\">\n\t<div class=\"container imagecontainer mt-5\">\n\t\t<img class=\"userimage\" alt=\"\" src={{My_Profile.profile_pic}}>\n\t</div>\n\t<div class=\"info mt-4\" >\n\t\t<a routerLink=\"/userpost\" style=\"outline: none; text-decoration: none; color: white;\">\n\t\t\t<h5>{{My_Profile.account_name}}</h5>\n\t\t\t<h5 class=\"handle\">{{My_Profile.Acc_id}}</h5>\n\t\t</a>\n\t</div>\n\t<div class=\"container mt-4\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-4 righttext\">\n\t\t\t\t<h5 *ngIf = \"!name\" routerLink=\"/followers\" class=\"cursor\" style=\"outline: none; text-decoration: none; color: white;\">Followers</h5>\n\t\t\t\t<h5 *ngIf = \"name\" >Followers</h5>\n\t\t\t\t<h5 class=\"righttextblue\">{{My_Profile.followers}}</h5>\n\t\t\t</div>\n\t\t\t<div class=\"col-4 righttext\">\n\t\t\t\t<h5 *ngIf = \"!name\" routerLink=\"/following\" class=\"cursor\" style=\"outline: none; text-decoration: none; color: white;\">Following</h5>\n\t\t\t\t<h5 *ngIf = \"name\">Following</h5>\n\t\t\t\t<h5 class=\"righttextblue\">{{My_Profile.following}}</h5>\n\t\t\t</div>\n\t\t\t<div class=\"col-4 righttext\">\n\t\t\t\t<h5 routerLink=\"/userpost\" class=\"cursor\" style=\"outline: none; text-decoration: none; color: white;\">murmurs</h5>\n\t\t\t\t<h5 class=\"righttextblue\">{{My_Profile.murmurs}}</h5>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<hr>\n\t<div>\n\t\t<ul class=\"list-group list-group-flush\">\n\t\t\t<li class=\"list-group-item list\" *ngIf = \"!name\">\n\t\t\t\t<div class=\"row\" routerLink=\"/editprofile\" style=\"outline: none;\">\n\t\t\t\t\t<div class=\"col-2 cursor\"><i class=\"material-icons\">edit</i></div>\n\t\t\t\t\t<div class=\"col-10 cursor\" style=\"margin: auto;\">Edit Profile</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"list-group-item list\">\n\t\t\t\t<div class=\"row\" (click)=\"logout()\" style=\"outline: none;\">\n\t\t\t\t\t<div class=\"col-2 cursor\"><i class=\"material-icons\">power_settings_new</i></div>\n\t\t\t\t\t<div class=\"col-10 cursor\" style=\"margin: auto;\">Log Out</div>\n\t\t\t\t</div>\n\t\t\t</li>  \n\t\t</ul>\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/userprofilelist/userprofilelist.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/userprofilelist/userprofilelist.component.ts ***!
  \**************************************************************/
/*! exports provided: UserprofilelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofilelistComponent", function() { return UserprofilelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserprofilelistComponent = /** @class */ (function () {
    function UserprofilelistComponent(ms) {
        this.ms = ms;
        this.My_Profile = {};
        this.name = '';
    }
    UserprofilelistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.ms.getOtherUserName().then(function (res) {
                if (_this.name != res) {
                    _this.name = res;
                    if (res == undefined) {
                        if (_this.ms.Acc_Profile.length == 0) {
                            _this.ms.getAccountDetail(localStorage.getItem(_this.ms.Scatter_account_name).split('-')[0]).then(function (res) {
                                _this.My_Profile = res[0];
                            });
                        }
                        else {
                            _this.My_Profile = _this.ms.Acc_Profile[0];
                        }
                    }
                    else {
                        _this.ms.getAccountDetail(res).then(function (res) {
                            _this.My_Profile = res[0];
                            // console.log(res)
                        });
                    }
                }
            });
            if (_this.name == undefined) {
                if (JSON.stringify(_this.My_Profile) != JSON.stringify(_this.ms.Acc_Profile[0]) && JSON.stringify(_this.ms.Acc_Profile[0])) {
                    // console.log(this.ms.Acc_Profile[0])
                    _this.My_Profile = _this.ms.Acc_Profile[0];
                }
            }
            if (_this.ms.Acc_Profile.length != 0 && name == undefined)
                if (_this.ms.Acc_Profile[0].following != _this.My_Profile.following) {
                    _this.My_Profile.following = _this.ms.Acc_Profile[0].following;
                }
        }, 50);
    };
    UserprofilelistComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    UserprofilelistComponent.prototype.logout = function () {
        if (localStorage.getItem(this.ms.Scatter_account_name).split('-').length == 1)
            this.ms.Scater_logout().then().catch(function (e) {
                console.log("error");
                console.log(e);
            });
        else
            this.ms.PKey_logout().then().catch(function (e) {
                console.log("error");
                console.log(e);
            });
    };
    UserprofilelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userprofilelist',
            template: __webpack_require__(/*! ./userprofilelist.component.html */ "./src/app/userprofilelist/userprofilelist.component.html"),
            styles: [__webpack_require__(/*! ./userprofilelist.component.css */ "./src/app/userprofilelist/userprofilelist.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"]])
    ], UserprofilelistComponent);
    return UserprofilelistComponent;
}());



/***/ }),

/***/ "./src/app/wisperchatlist/wisperchatlist.component.css":
/*!*************************************************************!*\
  !*** ./src/app/wisperchatlist/wisperchatlist.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: 100%;\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    /* background: #232937; */\n    background: #333254;\n}\n\n.headerone{\n\n    /*background-color: #000000;*/\n    padding: 10px 16px;\n    height: 59px;\n    width: 100%;\n\n}\n\n.tablerowdata{\n\n    /*background-color: #000000;*/\n    /*padding: 10px 16px;*/\n    height: 72px;\n    width: 100%;\n\n}\n\n.inputone {\n    \n    width: 100%;\n}\n\n.form-control {\n\n    background-color: #171d2b;\n    border: 1px solid #171d2b;\n}\n\n.userimage {\n\n    width: 49px;\n    height: 49px;\n    border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lzcGVyY2hhdGxpc3Qvd2lzcGVyY2hhdGxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsMkJBQTJCO0NBQzNCLGFBQWE7Q0FDYixjQUFjO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLG9CQUFvQjtDQUN2Qjs7QUFFRDs7SUFFSSw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZOztDQUVmOztBQUVEOztJQUVJLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7O0NBRWY7O0FBRUQ7O0lBRUksWUFBWTtDQUNmOztBQUVEOztJQUVJLDBCQUEwQjtJQUMxQiwwQkFBMEI7Q0FDN0I7O0FBRUQ7O0lBRUksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC93aXNwZXJjaGF0bGlzdC93aXNwZXJjaGF0bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0eWxlb25le1xuXG5cdC8qZGlzcGxheTogZmxleDsqL1xuXHQvKmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Ki9cblx0aGVpZ2h0OiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgLyogYmFja2dyb3VuZDogIzIzMjkzNzsgKi9cbiAgICBiYWNrZ3JvdW5kOiAjMzMzMjU0O1xufVxuXG4uaGVhZGVyb25le1xuXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyovXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIGhlaWdodDogNTlweDtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuXG4udGFibGVyb3dkYXRhe1xuXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyovXG4gICAgLypwYWRkaW5nOiAxMHB4IDE2cHg7Ki9cbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cblxuLmlucHV0b25lIHtcbiAgICBcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxZDJiO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNzFkMmI7XG59XG5cbi51c2VyaW1hZ2Uge1xuXG4gICAgd2lkdGg6IDQ5cHg7XG4gICAgaGVpZ2h0OiA0OXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/wisperchatlist/wisperchatlist.component.html":
/*!**************************************************************!*\
  !*** ./src/app/wisperchatlist/wisperchatlist.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"styleone\">\n\t<div class=\"headerone\">\n\t\t<form class=\"form-inline my-2 my-lg-0\">\n\t\t  <input class=\"form-control inputone\" type=\"search\" placeholder=\"Search or start a new conversation\" aria-label=\"Search\"\n\t\t  \t(input)=\"somevalue($event.target.value);\" >\n\t    </form>\n\t</div>  \n\t<div style=\"display: block;height: 100%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;\">\n\t\t  <div *ngFor=\"let arr of ChatUserList; let i = index\">\n\t\t\t\t<div class=\"tablerowdata\" id={{i}} (click)=\"select_User(i)\">\n\t\t\t\t\t<div class=\"container\" style=\"padding: 10px 16px;color: white;\">\n\t\t\t\t\t\t\n\t\t    \t\t<div class=\"row\">\n\t\t\t\t      <div class=\"col-3\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t<img class=\"userimage\" src={{arr.profile_pic}} alt=''>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-9\" style=\"padding-left: 0px;\">\n\t\t\t\t\t\t\t\t<div class=\"row\" >\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-6\"><h6 class=\"h6\">{{arr.Name}}</h6></div>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-6\" style=\"text-align: right;\"><h6>{{arr.Time|date:'shortTime'}}</h6></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<p>{{arr.msg}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t    \t</div>\t\t      \n\t\t\t\t</div>\n\t\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/wisperchatlist/wisperchatlist.component.ts":
/*!************************************************************!*\
  !*** ./src/app/wisperchatlist/wisperchatlist.component.ts ***!
  \************************************************************/
/*! exports provided: WisperchatlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WisperchatlistComponent", function() { return WisperchatlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WisperchatlistComponent = /** @class */ (function () {
    function WisperchatlistComponent(router, ms) {
        this.router = router;
        this.ms = ms;
        this.ChatUserList = [];
        this.tempList = [];
        this.selected_account = '';
    }
    WisperchatlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem(this.ms.Scatter_account_name).split('-').length == 2)
            this.ms.getWhisperHomePage().then(function (res) {
                _this.ChatUserList = res;
                _this.tempList = res;
                console.log(res);
                _this.get_list();
                _this.change_highlighter();
            });
    };
    WisperchatlistComponent.prototype.select_User = function (index) {
        this.ms.setdata(this.ChatUserList[index]);
        this.router.navigate(['/userchat']);
    };
    WisperchatlistComponent.prototype.change_highlighter = function () {
        var _this = this;
        this.interval2 = setInterval(function () {
            if (_this.selected_account != _this.ms.chatName.account_name) {
                _this.selected_account = _this.ms.chatName.account_name;
                for (_this.i = 0; _this.i < _this.ChatUserList.length; _this.i++) {
                    if (_this.selected_account == _this.ChatUserList[_this.i].account_name)
                        document.getElementById(_this.i).setAttribute("style", "border-left: 10px solid #a09fed;background: #171d2b;border-bottom: 1px solid #161c2b;");
                    else
                        document.getElementById(_this.i).removeAttribute("style");
                }
            }
        }, 500);
    };
    WisperchatlistComponent.prototype.somevalue = function (text) {
        var _this = this;
        this.temp_key1 = text;
        if (text != "") {
            var temp_key2_1 = text;
            this.ms.getsearchProfile(text).then(function (res) {
                // this.ChatUserList = res;
                for (var i = 0; i < res['length']; i++) {
                    for (var j = 0; j < _this.tempList.length; j++) {
                        if (res[i].account_name == _this.tempList[j].account_name)
                            res[i] = _this.tempList[j];
                    }
                }
                _this.updatelist(temp_key2_1, res);
            });
        }
        else {
            this.ChatUserList = this.tempList;
        }
    };
    WisperchatlistComponent.prototype.updatelist = function (key, res) {
        if (key == this.temp_key1)
            this.ChatUserList = res;
    };
    WisperchatlistComponent.prototype.get_list = function () {
        var _this = this;
        if (localStorage.getItem(this.ms.Scatter_account_name).split('-').length == 2) {
            var temp_list_1;
            this.interval1 = setInterval(function () {
                _this.ms.getWhisperHomePageList().then(function (res) {
                    if (temp_list_1 != JSON.stringify(res['data'])) {
                        console.log("found some updates");
                        temp_list_1 = JSON.stringify(res['data']);
                        _this.update_List_Data();
                    }
                });
            }, 1000);
        }
    };
    WisperchatlistComponent.prototype.update_List_Data = function () {
        var _this = this;
        console.log("inside the list updater");
        this.ms.getWhisperHomePage().then(function (resp) {
            var data = resp;
            var len = 0;
            console.log("successfully got the updated msgs");
            if (_this.ChatUserList.length != data['length']) {
                len = data['length'] - _this.ChatUserList.length;
                for (var i = 0; i < len; i++) {
                    console.log("append new user");
                    _this.ChatUserList.splice(i, i, data[i]);
                }
            }
            for (var i = len; i < data['length']; i++) {
                if (_this.ChatUserList[0].account_name == data[i].account_name)
                    if (_this.ChatUserList[0].msg != data[i].msg)
                        if (_this.ChatUserList[0].Time.getTime() !== data[i].Time.getTime()) {
                            _this.ChatUserList[0].msg = data[i].msg;
                            _this.ChatUserList[0].Time = data[i].Time.getTime();
                            break;
                        }
                if (_this.ChatUserList[i].account_name != data[i].account_name)
                    if (_this.ChatUserList[i].Name != data[i].Name)
                        if (_this.ChatUserList[i].msg != data[i].msg)
                            if (_this.ChatUserList[i].Time.getTime() !== data[i].Time.getTime()) {
                                for (var j = 0; j < _this.ChatUserList.length; j++) {
                                    if (_this.ChatUserList[j].account_name == data[i].account_name) {
                                        _this.ChatUserList.splice(j, 1);
                                        _this.ChatUserList.splice(0, 0, data[i]);
                                        break;
                                    }
                                }
                                break;
                            }
            }
            _this.selected_account = undefined;
        });
    };
    WisperchatlistComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval1);
        clearInterval(this.interval2);
        this.selected_account = undefined;
    };
    WisperchatlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wisperchatlist',
            template: __webpack_require__(/*! ./wisperchatlist.component.html */ "./src/app/wisperchatlist/wisperchatlist.component.html"),
            styles: [__webpack_require__(/*! ./wisperchatlist.component.css */ "./src/app/wisperchatlist/wisperchatlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _murmur_service__WEBPACK_IMPORTED_MODULE_2__["MurmurService"]])
    ], WisperchatlistComponent);
    return WisperchatlistComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chainflux/123/GV/murmur_web/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map