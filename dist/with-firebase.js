"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithFirebase = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var app_1 = tslib_1.__importDefault(require("firebase/app"));
var firebase_config_1 = tslib_1.__importDefault(require("./firebase-config"));
function initializeApp(_a) {
    var _b = _a.withAnalytics, withAnalytics = _b === void 0 ? false : _b, _c = _a.withNotifications, withNotifications = _c === void 0 ? false : _c, _d = _a.withAuth, withAuth = _d === void 0 ? false : _d;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _e, _f, _g;
        return tslib_1.__generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    if (app_1.default.apps.length) {
                        return [2 /*return*/];
                    }
                    _e = withNotifications;
                    if (!_e) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(require("firebase/messaging")); })];
                case 1:
                    _e = (_h.sent());
                    _h.label = 2;
                case 2:
                    _e;
                    _f = withAnalytics;
                    if (!_f) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(require("firebase/analytics")); })];
                case 3:
                    _f = (_h.sent());
                    _h.label = 4;
                case 4:
                    _f;
                    _g = withAuth;
                    if (!_g) return [3 /*break*/, 6];
                    return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(require("firebase/auth")); })];
                case 5:
                    _g = (_h.sent());
                    _h.label = 6;
                case 6:
                    _g;
                    app_1.default.initializeApp(firebase_config_1.default);
                    withAnalytics && app_1.default.analytics();
                    withAuth &&
                        firebase_config_1.default.languageCode &&
                        (app_1.default.auth().languageCode = firebase_config_1.default.languageCode);
                    return [2 /*return*/];
            }
        });
    });
}
function WithFirebase(_a) {
    var _b = _a.withAnalytics, withAnalytics = _b === void 0 ? false : _b, _c = _a.withNotifications, withNotifications = _c === void 0 ? false : _c, _d = _a.withAuth, withAuth = _d === void 0 ? false : _d;
    react_1.useEffect(function () {
        initializeApp({ withAnalytics: withAnalytics, withNotifications: withNotifications, withAuth: withAuth });
    }, []);
    return null;
}
exports.WithFirebase = WithFirebase;
//# sourceMappingURL=with-firebase.js.map