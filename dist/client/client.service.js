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
exports.ClientServices = void 0;
const common_1 = require("@nestjs/common");
const client_schema_1 = require("./schema/client.schema");
const mongoose_1 = require("@nestjs/mongoose");
const order_service_1 = require("./../order/order.service");
const mongoose_2 = require("mongoose");
let ClientServices = class ClientServices {
    constructor(orderService, clientModel) {
        this.orderService = orderService;
        this.clientModel = clientModel;
    }
    createClient(data) {
        return this.clientModel.create(data);
    }
    async hasTelegramUser(telegramId) {
        const exists = await this.clientModel.exists({ telegramId });
        return exists !== null;
    }
    async getClientByTelegramId(telegramId) {
        return this.clientModel.findOne({
            telegramId,
        }, {
            _id: 1,
        });
    }
};
ClientServices = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(client_schema_1.Client.name)),
    __metadata("design:paramtypes", [order_service_1.OrderService,
        mongoose_2.Model])
], ClientServices);
exports.ClientServices = ClientServices;
//# sourceMappingURL=client.service.js.map