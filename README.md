# React + NestJS + MySQL 프로젝트

## 프레임워크 및 기술 스택
- 프론트엔드: React, TypeScript
- 백엔드: NestJS, TypeScript
- 데이터베이스: MySQL

### 버전
- NodeJS : 22.12.0
- NestJS : 10.4.9
- TypeScript : 5.7.2
- MySQL2 : 3.11.5

## 실행 방법

### 프론트엔드
```bash
cd frontend
npm install
npm start
```

### 백엔드
```bash
cd backend
npm install
npm run start
```

## 데이터베이스 설정
MySQL을 로컬에 설치하고 `backend/.env` 파일을 생성하세요.

### .env 예시
```env
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=your_database
```
