import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // CORS 설정 (가장 간단한 방법: 모든 Origin 허용 - 개발 환경에서만 권장)
  // app.enableCors();

  // CORS 설정 (더욱 안전한 방법: 특정 Origin 허용 - 프로덕션 환경에서 권장)
  app.enableCors({
    origin: 'http://localhost:5000', // 프론트엔드 주소 (본인 환경에 맞게 수정)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 허용할 HTTP 메서드
    credentials: true, // 쿠키 전달 허용 (필요한 경우)
    allowedHeaders: 'Content-Type, Accept', // 허용할 Header
  });

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
