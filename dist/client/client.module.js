"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModule = void 0;
const client_schema_1 = require("./schema/client.schema");
const mongoose_1 = require("@nestjs/mongoose");
const order_module_1 = require("./../order/order.module");
const module_decorator_1 = require("@nestjs/common/decorators/modules/module.decorator");
const client_service_1 = require("./client.service");
const client_controller_1 = require("./client.controller");
let ClientModule = class ClientModule {
};
ClientModule = __decorate([
    (0, module_decorator_1.Module)({
        providers: [client_service_1.ClientServices],
        controllers: [client_controller_1.ClientController],
        exports: [client_service_1.ClientServices],
        imports: [
            order_module_1.OrderModule,
            mongoose_1.MongooseModule.forFeature([{ name: client_schema_1.Client.name, schema: client_schema_1.default }]),
        ],
    })
], ClientModule);
exports.ClientModule = ClientModule;
//# sourceMappingURL=client.module.js.map