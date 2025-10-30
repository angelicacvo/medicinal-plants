import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDTO } from './dto/register.dto';   
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {
    private users:User[] = [];
    private globalID:number = 1;

    constructor(private jwtService: JwtService){}

    async register (dto: RegisterDTO) {
        const hashedpassword = await bcrypt.hash(dto.password, 10);
        const user = {
            id: this.globalID,
            ...dto,
            password: hashedpassword,
        };

        this.users.push(user);
        this.globalID += 1;

        return { message: 'User registered successfully', user: { ...user, password: undefined } };
    }

    async login (dto:LoginDto) {
        const user = this.users.find((u) => u.email === dto.email);
        if (!user) throw new UnauthorizedException("Invalid credentials");

        const validPassword = await bcrypt.compare(dto.password, user.password);
        if (!validPassword) throw new UnauthorizedException("Invalid credentials");

        const payload = {sub:user.id,email:user.email,role:user.role};

        const token =await this.jwtService.signAsync(payload);

        return {access:token, user: {id: user.id, name: user.name, email: user.email, role: user.role}}
    }

    async validateUser(payload:any){
        return this.users.find((u) => u.id === payload.sub);
    }
}
