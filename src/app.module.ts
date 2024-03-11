import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConsultorioModule } from './consultorio/consultorio.module';

@Module({
  imports: [DatabaseModule, ConsultorioModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
