import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConsultorioService } from 'src/consultorio/consultorio.service';
import { CryptografiaService } from 'src/cryptografia/cryptografia.service';
import { ConsultorioDto } from 'src/consultorio/dto/constultorio.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        private readonly consultorioService: ConsultorioService,
        private readonly hashService: CryptografiaService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ) { }

    async validate(cnes: string, senha: string): Promise<any> {
        const consultorio = await this.consultorioService.buscaroConsultorioCnes(cnes);
        if (!consultorio) throw new UnauthorizedException('Consultorio não encontrado.');

        const hashPassword = await this.hashService.compareHash(senha, consultorio.senha);
        if (!hashPassword) throw new UnauthorizedException('Senha inválida');

        return consultorio;
    }

    async login(constultorio: ConsultorioDto) {
        const payload = { id: constultorio.id, cnes: constultorio.cnes };
        const secret = this.configService.get<string>('JWT_SECRET');

        return await this.jwtService.signAsync(payload, { secret });
    }
}
