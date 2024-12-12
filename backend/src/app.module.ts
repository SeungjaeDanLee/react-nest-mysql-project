import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database.module';
import { UserModule } from './modules/user.module';

@Module({
  imports: [
    DatabaseModule, // 데이터베이스 설정 모듈
    UserModule,     // 사용자 관련 모듈
  ],
})
export class AppModule {}
