import { Context, Telegraf } from "telegraf";
import { ClientServices } from "../client/client.service";
import { OrderService } from "../order/order.service";
export declare class TelegramUpdate {
    private bot;
    private orderService;
    private clientService;
    constructor(bot: Telegraf<Context>, orderService: OrderService, clientService: ClientServices);
    start(ctx: Context): Promise<void>;
    private sendWelcomeMessage;
    registerClient(ctx: Context): Promise<void>;
    handleFile(ctx: Context): Promise<void>;
    help(ctx: Context): Promise<void>;
}
