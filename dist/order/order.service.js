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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const order_schema_1 = require("./schema/order.schema");
const mongoose_2 = require("mongoose");
const bull_1 = require("@nestjs/bull");
let OrderService = class OrderService {
    constructor(orderModel, downloadTgQueue, printQueue) {
        this.orderModel = orderModel;
        this.downloadTgQueue = downloadTgQueue;
        this.printQueue = printQueue;
    }
    async createOrder(data) {
        const { client } = data, rest = __rest(data, ["client"]);
        const order = await this.orderModel.create(Object.assign(Object.assign({}, rest), { client: new mongoose_2.Types.ObjectId(client) }));
        if (order.source === order_schema_1.OrderSource.Telegram) {
            await this.downloadTgQueue.add({
                orderId: order._id.toHexString(),
                fileId: order.tgFileId,
            });
        }
        else {
            await this.printQueue.add({
                orderId: order._id.toHexString(),
                path: order.path,
            });
        }
        return order;
    }
    findAll() {
        return this.orderModel.find();
    }
    findOne(id) {
        return this.orderModel.findById(id);
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schema_1.Order.name)),
    __param(1, (0, bull_1.InjectQueue)("download_telegram_file")),
    __param(2, (0, bull_1.InjectQueue)("print")),
    __metadata("design:paramtypes", [mongoose_2.Model, Object, Object])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map