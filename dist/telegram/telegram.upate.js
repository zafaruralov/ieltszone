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
exports.TelegramUpdate = void 0;
const nestjs_telegraf_1 = require("nestjs-telegraf");
const telegraf_1 = require("telegraf");
const client_service_1 = require("../client/client.service");
const order_service_1 = require("../order/order.service");
const order_schema_1 = require("../order/schema/order.schema");
let TelegramUpdate = class TelegramUpdate {
    constructor(bot, orderService, clientService) {
        this.bot = bot;
        this.orderService = orderService;
        this.clientService = clientService;
    }
    async start(ctx) {
        if (await this.clientService.hasTelegramUser(ctx.chat.id)) {
            await this.sendWelcomeMessage(ctx);
        }
        else {
            await ctx.reply("Iltimos, telefon raqamingizni yuboring", {
                reply_markup: {
                    keyboard: [
                        [
                            {
                                text: "📲 Raqamni yuborish",
                                request_contact: true,
                            },
                        ],
                    ],
                },
            });
        }
    }
    async sendWelcomeMessage(ctx) {
        await ctx.reply("PrintServicega xush kelibsiz!\nHujjatingiz chop etish uchun bizga yuboring");
    }
    async registerClient(ctx) {
        const msg = ctx.message;
        if (msg.from.id === msg.contact.user_id) {
            if (await this.clientService.hasTelegramUser(msg.contact.user_id)) {
                await ctx.reply("Siz allaqachon ro'yxatdan o'tdingiz", {
                    reply_markup: { remove_keyboard: true },
                });
            }
            else {
                await this.clientService.createClient({
                    name: msg.from.first_name,
                    phone: msg.contact.phone_number,
                    telegramId: msg.contact.user_id,
                });
                await ctx.reply(`Siz muvaffaqiyatli ro'yxatdan o'tdingiz`, {
                    reply_markup: { remove_keyboard: true },
                });
                await this.sendWelcomeMessage(ctx);
            }
        }
        else {
            await ctx.reply("O'zingizni raqamingizni yuboring");
        }
    }
    async handleFile(ctx) {
        const msg = ctx.message;
        if (await this.clientService.hasTelegramUser(msg.from.id)) {
            const client = await this.clientService.getClientByTelegramId(msg.from.id);
            await ctx.reply("Hujjatingiz chop etilmoqda");
            await this.orderService.createOrder({
                client: client._id.toHexString(),
                tgFileId: msg.document.file_id,
                source: order_schema_1.OrderSource.Telegram,
            });
            await ctx.reply("Hujjatingiz tayyor");
        }
        else {
            await ctx.reply("Ro'yxatdan o'tishingiz kerak");
        }
        msg.from.id;
        await ctx.reply(JSON.stringify(msg.document));
    }
    async help(ctx) {
        await ctx.reply("Hujjatlarni chop etadingan bot");
    }
};
__decorate([
    (0, nestjs_telegraf_1.Start)(),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], TelegramUpdate.prototype, "start", null);
__decorate([
    (0, nestjs_telegraf_1.On)("contact"),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], TelegramUpdate.prototype, "registerClient", null);
__decorate([
    (0, nestjs_telegraf_1.On)("document"),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], TelegramUpdate.prototype, "handleFile", null);
__decorate([
    (0, nestjs_telegraf_1.Help)(),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], TelegramUpdate.prototype, "help", null);
TelegramUpdate = __decorate([
    (0, nestjs_telegraf_1.Update)(),
    __param(0, (0, nestjs_telegraf_1.InjectBot)()),
    __metadata("design:paramtypes", [telegraf_1.Telegraf,
        order_service_1.OrderService,
        client_service_1.ClientServices])
], TelegramUpdate);
exports.TelegramUpdate = TelegramUpdate;
//# sourceMappingURL=telegram.upate.js.map