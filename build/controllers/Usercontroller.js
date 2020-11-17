"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var User_1 = require("./../model/User");
var user_repo_1 = require("./../repository/user-repo");
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
var types_1 = require("../types");
var express = require("express");
var UserController = /** @class */ (function () {
    function UserController(userService) {
        this.userService = userService;
    }
    //Get all Users
    UserController.prototype.getUsers = function (req, res) {
        var users = this.userService.getUsers();
        if (!users) {
            res.status(404).json({ error: "users not found" });
        }
        return users;
    };
    // Get User by Id
    UserController.prototype.getUserById = function (id, res) {
        var user = this.userService.getUserById(id);
        if (!user) {
            res.status(404).json({ error: "user not found" });
        }
        return user;
    };
    // Create a new User
    UserController.prototype.createUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userService.createUser(req.body)];
                    case 1:
                        _a.sent();
                        res.sendStatus(201);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.status(400).json({ error: error_1.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // //Update an existing User
    UserController.prototype.updateUser = function (id, request) {
        return this.userService.updateUser(request.params.id, request.body);
    };
    // Delete a User
    UserController.prototype.deleteUser = function (id, res) {
        return this.userService.deleteUser(id);
    };
    __decorate([
        inversify_express_utils_1.httpGet("/"),
        __param(0, inversify_express_utils_1.request()),
        __param(1, inversify_express_utils_1.response()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "getUsers", null);
    __decorate([
        inversify_express_utils_1.httpGet("/:id"),
        __param(0, inversify_express_utils_1.requestParam("id")),
        __param(1, inversify_express_utils_1.response()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "getUserById", null);
    __decorate([
        inversify_express_utils_1.httpPost("/create"),
        __param(0, inversify_express_utils_1.request()),
        __param(1, inversify_express_utils_1.response()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "createUser", null);
    __decorate([
        inversify_express_utils_1.httpPut("/:id"),
        __param(0, inversify_express_utils_1.requestParam("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", User_1.User)
    ], UserController.prototype, "updateUser", null);
    __decorate([
        inversify_express_utils_1.httpDelete("/:id"),
        __param(0, inversify_express_utils_1.requestParam("id")),
        __param(1, inversify_express_utils_1.response()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Array)
    ], UserController.prototype, "deleteUser", null);
    UserController = __decorate([
        inversify_express_utils_1.controller("/users"),
        __param(0, inversify_1.inject(types_1.TYPES.UsersQuery)),
        __metadata("design:paramtypes", [user_repo_1.UserService])
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
