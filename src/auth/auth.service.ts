import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService 
    ) {}

    async signin(signinDto: SigninDto) {
      
        const user = await this.userService.findOneByEmail(signinDto.email); 
      
        if (!user) {
          throw new UnauthorizedException('Invalid credentials');
        }
      
        const isPasswordValid = await bcrypt.compare(signinDto.password, user.password);
        if (!isPasswordValid) {
          throw new UnauthorizedException('Invalid credentials');
        }

        const payload = {
            id: user.id,
        }

        const acces_token = await this.jwtService.sign(payload)

        return { acces_token} ;
      }
      
    async signup(signupDto: SignupDto) {
        // crypter le password
        const password = await bcrypt.hashSync(signupDto.password, 10)
        signupDto.password = password

        console.log(signupDto)
        // create user
        this.userService.create(signupDto)
        return "I'm signed up";
    }
}
