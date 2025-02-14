import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS antes de iniciar el servidor
  app.enableCors({
    origin: 'http://localhost:4200', // Cambia esto al dominio de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });

  // Habilitar validación global con conversión automática de tipos
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Ignora propiedades desconocidas en los DTOs
      forbidNonWhitelisted: true, // Lanza error si hay propiedades no permitidas
      transform: true, // Convierte los datos al tipo esperado en los DTOs
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
