import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT || 3030;

    const config = new DocumentBuilder()
      .setTitle('Stadium finder')
      .setDescription('REST API')
      .setVersion('1.0.0')
      .addTag('NestJS, Postgres, Sequelize, JWT, Swagger, Sequelize.....')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);
    app.use(cookieParser());

    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}-port`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
