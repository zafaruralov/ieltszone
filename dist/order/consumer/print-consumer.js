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
var PrintConsumer_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintConsumer = void 0;
const common_1 = require("@nestjs/common");
const bull_1 = require("@nestjs/bull");
const child_process_1 = require("child_process");
let PrintConsumer = PrintConsumer_1 = class PrintConsumer {
    constructor() {
        this.logger = new common_1.Logger(PrintConsumer_1.name);
    }
    async donwload(job) {
        child_process_1.default.spawnSync("lp", [
            "-d",
            "Brother_HL-L2320D_series",
            job.data.path,
        ]);
        this.logger.log("Print file", job.data.path);
        return {};
    }
};
__decorate([
    (0, bull_1.Process)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PrintConsumer.prototype, "donwload", null);
PrintConsumer = PrintConsumer_1 = __decorate([
    (0, bull_1.Processor)("print")
], PrintConsumer);
exports.PrintConsumer = PrintConsumer;
//# sourceMappingURL=print-consumer.js.map