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
var TgFileDonwloader_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TgFileDonwloader = void 0;
const bull_1 = require("@nestjs/bull");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const telegraf_1 = require("telegraf");
const axios_1 = require("axios");
const fs = require("fs");
const common_1 = require("@nestjs/common");
const downloader = axios_1.default.create();
let TgFileDonwloader = TgFileDonwloader_1 = class TgFileDonwloader {
    constructor(bot, printQueue) {
        this.bot = bot;
        this.printQueue = printQueue;
        this.logger = new common_1.Logger(TgFileDonwloader_1.name);
    }
    async download(job) {
        const file = await this.bot.telegram.getFileLink(job.data.fileId);
        const savePath = `./files/${job.data.orderId}.pdf`;
        await this.downloadFileAxios(file.href, savePath);
    }
    async downloadFileAxios(url, savePath) {
        const result = await downloader.get(url, {
            responseType: "stream",
        });
        await new Promise((resolve, reject) => {
            result.data.pipe(fs.createWriteStream(savePath), { end: true });
            result.data.on("close", resolve);
            result.data.on("error", reject);
        });
    }
};
__decorate([
    (0, bull_1.Process)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TgFileDonwloader.prototype, "download", null);
TgFileDonwloader = TgFileDonwloader_1 = __decorate([
    (0, bull_1.Processor)("download_telegram_file"),
    __param(0, (0, nestjs_telegraf_1.InjectBot)()),
    __param(1, (0, bull_1.InjectQueue)("print")),
    __metadata("design:paramtypes", [telegraf_1.Telegraf, Object])
], TgFileDonwloader);
exports.TgFileDonwloader = TgFileDonwloader;
//# sourceMappingURL=tg-file-donwloader-consumer.js.map