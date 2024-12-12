import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('My App API')
    .setDescription('API documentation for the My App project')
    .setVersion('1.0')
    .addTag('users') // 사용자 태그 추가
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // http://localhost:3000/api 에서 문서 확인 가능

  await app.listen(3000);
}
bootstrap();
