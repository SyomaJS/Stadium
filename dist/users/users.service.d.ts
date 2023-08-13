import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { MailService } from '../mail/mail.service';
import { BotService } from '../bot/bot.service';
import { Otp } from '../otp/models/otp.model';
import { PhoneUserDto } from './dto/phone-user.dto';
import { VerifyOtpDto } from './dto/verfy-otp.dto';
export declare class UsersService {
    private readonly userRepo;
    private readonly otpRepo;
    private readonly jwtService;
    private readonly mailService;
    private readonly botService;
    constructor(userRepo: typeof User, otpRepo: typeof Otp, jwtService: JwtService, mailService: MailService, botService: BotService);
    registration(createUserDto: CreateUserDto, res: Response): Promise<{
        msg: string;
        user: User;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    getTokens(user: User): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    login(loginUserDto: LoginUserDto, res: Response): Promise<{
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
    refreshToken(user_id: number, refreshToken: string, res: Response): Promise<{
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
    newOTP(phoneUserDto: PhoneUserDto): Promise<{
        status: string;
        details: string;
    }>;
    verifyOtp(verifyOtpDto: VerifyOtpDto): Promise<{
        message: string;
        user: User;
    }>;
}
