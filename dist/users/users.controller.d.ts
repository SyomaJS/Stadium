import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Response } from 'express';
import { User } from './models/user.model';
import { LoginUserDto } from './dto/login-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { PhoneUserDto } from './dto/phone-user.dto';
import { VerifyOtpDto } from './dto/verfy-otp.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    registration(createUserDto: CreateUserDto, res: Response): Promise<{
        msg: string;
        user: User;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    login(loginDto: LoginUserDto, res: Response): Promise<{
        msg: string;
        user: User;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
        user: User;
    }>;
    refresh(id: string, refreshToken: string, res: Response): Promise<{
        msg: string;
        user: User;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    findAll(findUserDto: FindUserDto): Promise<User[]>;
    activate(link: string): Promise<{
        message: string;
        user: [affectedCount: number, affectedRows: User[]];
    }>;
    newOtp(phoneUserDto: PhoneUserDto): Promise<{
        status: string;
        details: string;
    }>;
    verifyOtp(verifyOtpDto: VerifyOtpDto): Promise<{
        message: string;
        user: User;
    }>;
}
