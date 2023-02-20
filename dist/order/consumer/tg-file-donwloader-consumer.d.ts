import { Job, Queue } from "bull";
import DownloadTgFileQueue from "../dto/queue/download-tg-file.queue";
import { Context, Telegraf } from "telegraf";
export declare class TgFileDonwloader {
    private bot;
    private printQueue;
    private logger;
    constructor(bot: Telegraf<Context>, printQueue: Queue);
    download(job: Job<DownloadTgFileQueue>): Promise<void>;
    private downloadFileAxios;
}
