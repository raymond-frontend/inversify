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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
var search_1 = require("./../model/search");
var types_1 = require("./../constants/types");
var express = require("express");
var inversify_express_utils_1 = require("inversify-express-utils");
var book_entity_1 = require("../entities/book.entity");
var inversify_1 = require("inversify");
var express_validator_1 = require("express-validator");
var books_validation_1 = require("../middleware/books.validation");
var BookController = /** @class */ (function () {
    function BookController(bookService) {
        this.bookService = bookService;
    }
    /**
     * create the API endpoint to retieve books *
     * @param res
     */
    BookController.prototype.getBooks = function (res, sortOrder, author, genre, title, year, skip, take, id) {
        return __awaiter(this, void 0, void 0, function () {
            var searchOptions, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchOptions = {
                            where: [{ title: title }, { author: author }, { genre: genre }, { id: id }, { year: year }],
                            order: {
                                title: sortOrder,
                            },
                            skip: skip,
                            take: take,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.bookService.getBooks(searchOptions)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_1 = _a.sent();
                        res.status(500);
                        res.send(error_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * API call to create a book with a book validation middleware*
     * @param req
     * @param res
     */
    BookController.prototype.createBook = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var errors, newBook, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        errors = express_validator_1.validationResult(req);
                        if (!errors.isEmpty()) {
                            return [2 /*return*/, res.status(400).send(errors)];
                        }
                        return [4 /*yield*/, new book_entity_1.Book()];
                    case 1:
                        newBook = _a.sent();
                        newBook.title = req.body.title;
                        newBook.author = req.body.author;
                        newBook.genre = req.body.genre;
                        newBook.description = req.body.description;
                        newBook.year = req.body.year;
                        return [4 /*yield*/, this.bookService.createBook(newBook)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        res.status(500);
                        res.send(error_2.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_express_utils_1.httpGet("/"),
        __param(0, inversify_express_utils_1.response()),
        __param(1, inversify_express_utils_1.queryParam("sortOrder")),
        __param(2, inversify_express_utils_1.queryParam("author")),
        __param(3, inversify_express_utils_1.queryParam("genre")),
        __param(4, inversify_express_utils_1.queryParam("title")),
        __param(5, inversify_express_utils_1.queryParam("year")),
        __param(6, inversify_express_utils_1.queryParam("skip")),
        __param(7, inversify_express_utils_1.queryParam("take")),
        __param(8, inversify_express_utils_1.queryParam("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String, String, String, String, Number, Number, Number, Number]),
        __metadata("design:returntype", Promise)
    ], BookController.prototype, "getBooks", null);
    __decorate([
        inversify_express_utils_1.httpPost.apply(void 0, __spreadArrays(["/create"], books_validation_1.validateBookRequest)),
        __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], BookController.prototype, "createBook", null);
    BookController = __decorate([
        inversify_express_utils_1.controller("/api/books"),
        __param(0, inversify_1.inject(types_1.TYPE.BookRepository)),
        __metadata("design:paramtypes", [Object])
    ], BookController);
    return BookController;
}());
exports.BookController = BookController;
