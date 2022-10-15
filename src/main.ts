import { LoggingInterceptor } from './libs/interceptor/logging-interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { initializeTransactionalContext } from 'typeorm-transactional';
import { useContainer } from 'class-validator';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  initializeTransactionalContext()
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  // const config = new DocumentBuilder()
  //   .setTitle('Cats example')
  //   .setDescription('The cats API description')
  //   .setVersion('1.0')
  //   .addTag('cats')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);
  // app.useGlobalInterceptors(new LoggingInterceptor())

  // app.enableCors({
  //   origin: true,
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   credentials: true,
  // });

  // useContainer(app.select(AppModule), { fallbackOnErrors: true });


  await app.listen(3000);
}
bootstrap();
