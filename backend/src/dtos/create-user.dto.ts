import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: '사용자의 이름' })
  name: string;

  @ApiProperty({ example: 'john.doe@example.com', description: '사용자의 이메일' })
  email: string;
}
