import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { DatabaseService } from 'src/database/database.service';
import { CryptografiaService } from 'src/cryptografia/cryptografia.service';

@Module({
  providers: [PacienteService, DatabaseService, CryptografiaService],
  controllers: [PacienteController]
})
export class PacienteModule { }
