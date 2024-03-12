import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';

@UseGuards(JwtAuthGuard)
@Controller('consulta')
export class ConsultaController {
    constructor(
        private readonly consultaService: ConsultaService
    ) { }

    @Get()
    async listarConsultas(@Res() res: Response) {
        const consultas = await this.consultaService.listarConsultas();
        return res.json(consultas);
    }
}
