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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.OrderSource = exports.OrderStatus = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["New"] = 0] = "New";
    OrderStatus[OrderStatus["InProcess"] = 1] = "InProcess";
    OrderStatus[OrderStatus["Delivering"] = 2] = "Delivering";
    OrderStatus[OrderStatus["Delivered"] = 3] = "Delivered";
    OrderStatus[OrderStatus["Canceled"] = -1] = "Canceled";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var OrderSource;
(function (OrderSource) {
    OrderSource[OrderSource["Telegram"] = 0] = "Telegram";
    OrderSource[OrderSource["Web"] = 1] = "Web";
})(OrderSource = exports.OrderSource || (exports.OrderSource = {}));
let Order = class Order {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", String)
], Order.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: false }),
    __metadata("design:type", Number)
], Order.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, enum: OrderStatus, default: OrderStatus.New }),
    __metadata("design:type", Number)
], Order.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "Client", required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Order.prototype, "client", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, enum: OrderSource, default: OrderSource.Web }),
    __metadata("design:type", Number)
], Order.prototype, "source", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", String)
], Order.prototype, "tgFileId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", String)
], Order.prototype, "path", void 0);
Order = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], Order);
exports.Order = Order;
const OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
exports.default = OrderSchema;
//# sourceMappingURL=order.schema.js.map