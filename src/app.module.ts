import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConsultorioModule } from './consultorio/consultorio.module';
import { CryptografiaService } from './cryptografia/cryptografia.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ConsultaModule } from './consulta/consulta.module';
import { MedicoModule } from './medico/medico.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DatabaseModule,
    ConsultorioModule,
    AuthModule,
    ConsultaModule,
    MedicoModule],
  controllers: [],
  providers: [CryptografiaService],
})
export class AppModule { }
