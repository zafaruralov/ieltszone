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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashCardController = void 0;
const update_flashcard_dto_1 = require("./dto/update-flashcard.dto");
const create_flashcard_dto_1 = require("./dto/create-flashcard.dto");
const flashcard_service_1 = require("./flashcard.service");
const common_1 = require("@nestjs/common");
let FlashCardController = class FlashCardController {
    constructor(flashCardService) {
        this.flashCardService = flashCardService;
    }
    async create(createFlashCardDto) {
        try {
            const user = await this.flashCardService.create(createFlashCardDto);
            return user;
        }
        catch (error) {
            return error.message;
        }
    }
    findAll(page) {
        return this.flashCardService.getAll(page);
    }
    update(id, updateFlashCardDto) {
        return this.flashCardService.update(id, updateFlashCardDto);
    }
    remove(id) {
        return this.flashCardService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flashcard_dto_1.CreateFlashCardDto]),
    __metadata("design:returntype", Promise)
], FlashCardController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("page")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FlashCardController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_flashcard_dto_1.UpdateFlashCardDto]),
    __metadata("design:returntype", void 0)
], FlashCardController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlashCardController.prototype, "remove", null);
FlashCardController = __decorate([
    (0, common_1.Controller)("flashcards"),
    __metadata("design:paramtypes", [flashcard_service_1.FlashCardService])
], FlashCardController);
exports.FlashCardController = FlashCardController;
//# sourceMappingURL=flashcard.controller.js.map