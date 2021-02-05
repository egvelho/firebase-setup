"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithNotifications = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var app_1 = tslib_1.__importDefault(require("firebase/app"));
var firebase_config_1 = tslib_1.__importDefault(require("./firebase-config"));
function startNotifications(_a) {
    var _b;
    var onMessage = _a.onMessage, onTokenRefresh = _a.onTokenRefresh, beforeRequestPermission = _a.beforeRequestPermission;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var messagingInstance, permission, token;
        var _this = this;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    messagingInstance = app_1.default.messaging();
                    messagingInstance.usePublicVapidKey((_b = firebase_config_1.default.publicVapidKey) !== null && _b !== void 0 ? _b : "");
                    if (!("Notification" in window)) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, beforeRequestPermission()];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, Notification.requestPermission()];
                case 2:
                    permission = _c.sent();
                    if (!(permission === "granted")) return [3 /*break*/, 4];
                    return [4 /*yield*/, messagingInstance.getToken()];
                case 3:
                    token = _c.sent();
                    onTokenRefresh(token);
                    _c.label = 4;
                case 4:
                    messagingInstance.onTokenRefresh(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var token;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, messagingInstance.getToken()];
                                case 1:
                                    token = _a.sent();
                                    onTokenRefresh(token);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    messagingInstance.onMessage(onMessage);
                    return [2 /*return*/];
            }
        });
    });
}
function WithNotifications(props) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            react_1.useEffect(function () {
                startNotifications(props);
            }, []);
            return [2 /*return*/, null];
        });
    });
}
exports.WithNotifications = WithNotifications;
//# sourceMappingURL=with-notifications.js.map