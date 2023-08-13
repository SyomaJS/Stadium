import { Model } from 'sequelize-typescript';
interface IOtpAttr {
    id: string;
    otp: string;
    expiration_time: Date;
    verified: boolean;
    check: string;
}
export declare class Otp extends Model<Otp, IOtpAttr> {
    id: string;
    otp: string;
    expiration_time: Date;
    verified: boolean;
    check: string;
}
export {};
