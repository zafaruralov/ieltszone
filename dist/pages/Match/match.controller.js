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
exports.MatchController = void 0;
const create_match_dto_1 = require("./dto/create-match.dto");
const common_1 = require("@nestjs/common");
const match_service_1 = require("./match.service");
const paginationParams_1 = require("./dto/paginationParams");
let MatchController = class MatchController {
    constructor(matchService) {
        this.matchService = matchService;
    }
    async create(createMatchDto) {
        try {
            return await this.matchService.create(createMatchDto);
        }
        catch (error) {
            return error.message;
        }
    }
    findAll({ skip, limit }) {
        return this.matchService.getAll(skip, limit);
    }
    remove(id) {
        return this.matchService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_match_dto_1.CreateMatchDto]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paginationParams_1.PaginationParams]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MatchController.prototype, "remove", null);
MatchController = __decorate([
    (0, common_1.Controller)("match"),
    __metadata("design:paramtypes", [match_service_1.MatchService])
], MatchController);
exports.MatchController = MatchController;
//# sourceMappingURL=match.controller.js.map