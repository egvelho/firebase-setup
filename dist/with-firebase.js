"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithFirebase = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var app_1 = tslib_1.__importDefault(require("firebase/app"));
var firebase_config_1 = tslib_1.__importDefault(require("./firebase-config"));
function initializeApp(_a) {
    var _b = _a.analytics, analytics = _b === void 0 ? false : _b, _c = _a.notifications, notifications = _c === void 0 ? false : _c, _d = _a.auth, auth = _d === void 0 ? false : _d;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _e, _f, _g;
        return tslib_1.__generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    if (app_1.default.apps.length) {
                        return [2 /*return*/];
                    }
                    _e = notifications;
                    if (!_e) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(require("firebase/messaging")); })];
                case 1:
                    _e = (_h.sent());
                    _h.label = 2;
                case 2:
                    _e;
                    _f = analytics;
                    if (!_f) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(require("firebase/analytics")); })];
                case 3:
                    _f = (_h.sent());
                    _h.label = 4;
                case 4:
                    _f;
                    _g = auth;
                    if (!_g) return [3 /*break*/, 6];
                    return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(require("firebase/auth")); })];
                case 5:
                    _g = (_h.sent());
                    _h.label = 6;
                case 6:
                    _g;
                    app_1.default.initializeApp(firebase_config_1.default);
                    analytics && app_1.default.analytics();
                    auth &&
                        firebase_config_1.default.languageCode &&
                        (app_1.default.auth().languageCode = firebase_config_1.default.languageCode);
                    return [2 /*return*/];
            }
        });
    });
}
function WithFirebase(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.analytics, analytics = _c === void 0 ? false : _c, _d = _b.notifications, notifications = _d === void 0 ? false : _d, _e = _b.auth, auth = _e === void 0 ? false : _e;
    react_1.useEffect(function () {
        initializeApp({ analytics: analytics, notifications: notifications, auth: auth });
    }, []);
    return null;
}
exports.WithFirebase = WithFirebase;
//# sourceMappingURL=with-firebase.js.map