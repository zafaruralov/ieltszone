"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryModule = void 0;
const history_service_1 = require("./history.service");
const history_controller_1 = require("./history.controller");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const history_schema_1 = require("./schema/history.schema");
let HistoryModule = class HistoryModule {
};
HistoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: "History", schema: history_schema_1.default }]),
        ],
        controllers: [history_controller_1.HistoryController],
        providers: [history_service_1.HistoryService],
        exports: [history_service_1.HistoryService],
    })
], HistoryModule);
exports.HistoryModule = HistoryModule;
//# sourceMappingURL=history.module.js.map