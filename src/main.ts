import { Telegraf } from "telegraf";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import axios from "axios";
import { getBotToken } from "nestjs-telegraf";
const cors = require("cors");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.enableCors({
    origin: ["http://localhost:8080"],
  });


  // const setupWebhook = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `${TELEGRAM_API}/setWebhook?url=${webhookURL}&drop_pending_updates=true`
  //     );
  //     console.log(data);
  //   } catch (error) {
  //     return error;
  //   }
  // };

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://ieltszone.netlify.app/");
    next();
  });

  // if (process.env.SERVER_URL) {
  //   const bot = app.get(getBotToken());
  //   app.use(bot.webhookCallback(process.env.SERVER_URL));
  // }

  const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  };
  app.use(cors(corsOptions));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
