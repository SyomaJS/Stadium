import { Model } from 'sequelize-typescript';
interface UserAttrs {
    first_name: string;
    last_name: string;
    username: string;
    hashed_password: string;
    telegram_link: string;
    email: string;
    phone: string;
    user_photo: string;
    birthday: Date;
    is_owner: string;
    is_active: string;
    hashed_refresh_token: string;
}
export declare class User extends Model<User, UserAttrs> {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    telegram_link: string;
    hashed_password: string;
    email: string;
    phone: string;
    user_photo: string;
    birthday: Date;
    is_owner: boolean;
    is_active: boolean;
    hashed_refresh_token: string;
    activation_link: string;
}
export {};
