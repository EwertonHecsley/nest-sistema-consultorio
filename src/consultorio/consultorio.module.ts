import { Module } from '@nestjs/common';
import { ConsultorioService } from './consultorio.service';
import { ConsultorioController } from './consultorio.controller';
import { DatabaseService } from 'src/database/database.service';
import { CryptografiaService } from 'src/cryptografia/cryptografia.service';

@Module({
  providers: [ConsultorioService, DatabaseService, CryptografiaService],
  controllers: [ConsultorioController]
})
export class ConsultorioModule { }
