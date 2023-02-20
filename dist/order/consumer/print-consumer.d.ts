import { Job } from "bull";
import PrintFileQueue from "../dto/queue/print-file.queue";
export declare class PrintConsumer {
    private logger;
    donwload(job: Job<PrintFileQueue>): Promise<{}>;
}
