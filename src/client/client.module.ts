import clientSchema, { Client } from "./schema/client.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { OrderModule } from "./../order/order.module";
import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { ClientServices } from "./client.service";
import { ClientController } from "./client.controller";

@Module({
  providers: [ClientServices],
  controllers: [ClientController],
  exports: [ClientServices],
  imports: [
    OrderModule,
    MongooseModule.forFeature([{ name: Client.name, schema: clientSchema }]),
  ],
})
export class ClientModule {}
