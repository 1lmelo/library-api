"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksModule = void 0;
const common_1 = require("@nestjs/common");
const book_controller_1 = require("./controllers/book/book.controller");
const book_service_1 = require("./services/book/book.service");
const book_repository_service_1 = require("./repositories/book-repository.service");
const typeorm_1 = require("@nestjs/typeorm");
const book_entity_1 = require("./entities/book.entity");
const book_repository_interface_1 = require("./repositories/book-repository.interface");
let BooksModule = class BooksModule {
};
exports.BooksModule = BooksModule;
exports.BooksModule = BooksModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([book_entity_1.Book])],
        controllers: [book_controller_1.BookController],
        providers: [
            book_service_1.BookService,
            { useClass: book_repository_service_1.BookRepositoryService, provide: book_repository_interface_1.BOOK_REPOSITORY }
        ],
    })
], BooksModule);
//# sourceMappingURL=books.module.js.map