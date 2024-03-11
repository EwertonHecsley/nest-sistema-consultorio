import { Module } from '@nestjs/common';
import { ConsultorioService } from './consultorio.service';
import { ConsultorioController } from './consultorio.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  providers: [ConsultorioService, DatabaseService],
  controllers: [ConsultorioController]
})
export class ConsultorioModule { }
