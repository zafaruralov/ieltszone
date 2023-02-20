"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegram_upate_1 = require("./telegram.upate");
const order_module_1 = require("./../order/order.module");
const client_module_1 = require("./../client/client.module");
const common_1 = require("@nestjs/common");
let TelegramModule = class TelegramModule {
};
TelegramModule = __decorate([
    (0, common_1.Module)({
        providers: [telegram_upate_1.TelegramUpdate],
        imports: [client_module_1.ClientModule, order_module_1.OrderModule],
    })
], TelegramModule);
exports.default = TelegramModule;
//# sourceMappingURL=telegram.module.js.map