import { Body, Controller, Get, HttpStatus, Post, Res, UseGuards } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';
import { ConsultaDto } from './dto/consulta.dto';

@UseGuards(JwtAuthGuard)
@Controller('consulta')
export class ConsultaController {
    constructor(
        private readonly consultaService: ConsultaService
    ) { }

    @Post()
    async cadastrar(@Body() dataConsulta: ConsultaDto, @Res() res: Response) {
        await this.consultaService.cadastrarConsulta(dataConsulta);

        return res.status(HttpStatus.NO_CONTENT).send();
    }

    @Get()
    async listarConsultas(@Res() res: Response) {
        const consultas = await this.consultaService.listarConsultas();
        return res.json(consultas);
    }
}
