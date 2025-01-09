import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService) {};

    @HttpCode(HttpStatus.OK)
    @Post('signin')
    signin(@Body() body: SigninDto) {
        return this.authService.signin(body)
    }

    @UseGuards(AuthGuard)
    @Post('signup')
    signup(@Body() body: SignupDto) {
        return this.authService.signup(body)
    }
}
