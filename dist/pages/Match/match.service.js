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
exports.MatchService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const match_schema_1 = require("./schema/match.schema");
const mongoose_2 = require("mongoose");
let MatchService = class MatchService {
    constructor(matchModel) {
        this.matchModel = matchModel;
    }
    create(createMatchDto) {
        return this.matchModel.create(createMatchDto);
    }
    remove(id) {
        return this.matchModel.findByIdAndDelete(id);
    }
    async getAll(documentsToSkip = 0, limitOfDocuments) {
        const query = this.matchModel.find().sort({ _id: 1 });
        if (limitOfDocuments) {
            query.limit(limitOfDocuments);
        }
        const result = await query;
        const count = await this.matchModel.count();
        return { result, count };
    }
};
MatchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(match_schema_1.Match.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MatchService);
exports.MatchService = MatchService;
//# sourceMappingURL=match.service.js.map