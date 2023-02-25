"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const client_module_1 = require("./../client/client.module");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const order_module_1 = require("../order/order.module");
const bull_1 = require("@nestjs/bull");
const telegram_module_1 = require("../telegram/telegram.module");
const flashcard_module_1 = require("../pages/Flashcard/flashcard.module");
const match_module_1 = require("../pages/Match/match.module");
const history_module_1 = require("../pages/History/history.module");
require("dotenv").config();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            client_module_1.ClientModule,
            order_module_1.OrderModule,
            flashcard_module_1.FalshCardModule,
            match_module_1.MatchModule,
            history_module_1.HistoryModule,
            nestjs_telegraf_1.TelegrafModule.forRoot({
                token: `${process.env.TELEGRAM_TOKEN}`,
            }),
            bull_1.BullModule.forRoot({
                redis: {
                    host: "localhost",
                    port: 16379,
                },
            }),
            telegram_module_1.default,
            mongoose_1.MongooseModule.forRoot("mongodb+srv://zafaruralov:1A1s1D1f0@cluster0.rwu0b.mongodb.net/?retryWrites=true&w=majority", {
                dbName: "ieltsZona",
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map