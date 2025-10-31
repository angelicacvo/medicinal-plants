import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  
  // Enable CORS for frontend integration
  app.enableCors();
  
  // Global validation pipe for DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove properties that don't have decorators
    forbidNonWhitelisted: true, // Throw error if non-whitelisted properties are present
    transform: true, // Transform payloads to be objects typed according to their DTO classes
  }));

  // Swagger API Documentation Setup
  const config = new DocumentBuilder()
    .setTitle('Medicinal Plants API')
    .setDescription('A complete API for managing medicinal plants and users with authentication')
    .setVersion('1.0')
    .addTag('auth', 'Authentication endpoints')
    .addTag('users', 'User management endpoints')
    .addTag('plants', 'Medicinal plants management endpoints')
    .addBearerAuth() // Enable JWT authentication in Swagger UI
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true, // Keep JWT token when refreshing page
    },
  });

  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
  
  console.log(`🚀 Application is running on: http://localhost:${port}`);
  console.log(`📚 Swagger documentation available at: http://localhost:${port}/api/docs`);
}
bootstrap();
