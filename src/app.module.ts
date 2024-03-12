import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConsultorioModule } from './consultorio/consultorio.module';
import { CryptografiaService } from './cryptografia/cryptografia.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DatabaseModule,
    ConsultorioModule,
    AuthModule],
  controllers: [],
  providers: [CryptografiaService],
})
export class AppModule { }
