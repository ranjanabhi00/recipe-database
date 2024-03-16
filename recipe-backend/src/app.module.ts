import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database-1.cfo4y0wqcnwv.ap-south-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'postgres123',
      database: 'postgres',
      entities: ["src/**/*.entity{.ts,.js}"],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false
    }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
