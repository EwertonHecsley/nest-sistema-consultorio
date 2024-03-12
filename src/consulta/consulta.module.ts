import { Module } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { ConsultaController } from './consulta.controller';
import { DatabaseService } from 'src/database/database.service';
import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';

@Module({
  providers: [ConsultaService, DatabaseService, JwtStrategy],
  controllers: [ConsultaController]
})
export class ConsultaModule { }
