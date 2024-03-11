import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConsultorioModule } from './consultorio/consultorio.module';
import { CryptografiaService } from './cryptografia/cryptografia.service';

@Module({
  imports: [DatabaseModule, ConsultorioModule],
  controllers: [],
  providers: [CryptografiaService],
})
export class AppModule { }
