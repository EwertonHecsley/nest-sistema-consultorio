import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';

@Controller('login')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post()
    async login(@Body() dataLogin: LoginDto, @Req() req: Request, @Res() res: Response) {
        const { cnes, senha } = dataLogin;

        const consultorio = await this.authService.validate(cnes, senha);

        const token = await this.authService.login(consultorio);

        const { senha: _, medicoId: __, ...response } = consultorio;

        req.user = { id: response.id, cnes: response.cnes };

        return res.status(HttpStatus.ACCEPTED).json({ consultorio: response, token });
    }
}
