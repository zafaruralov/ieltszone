import { Body, Controller, Get, Post } from "@nestjs/common";
import { ClientServices } from "./client.service";
import { CreateClientBody } from "./dto/create-client-body.dto";

@Controller("client")
export class ClientController {
  constructor(private readonly clientService: ClientServices) {}

  // @Get("create-order")
  // createOrder() {
  //   return this.clientService.createOrder();
  // }

  @Post()
  createClient(@Body() data: CreateClientBody) {
    return this.clientService.createClient(data);
  }
}
