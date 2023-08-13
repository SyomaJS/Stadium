"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Otp = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
let Otp = exports.Otp = class Otp extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123e4567-e89b-12d3-a456-426655440000',
        description: 'Unique ID of the OTP',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        primaryKey: true,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Otp.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123456',
        description: 'OTP code',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Otp.prototype, "otp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-08-08T12:34:56Z',
        description: 'Expiration time of the OTP',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Otp.prototype, "expiration_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'Flag indicating if the OTP has been verified',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], Otp.prototype, "verified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'phone',
        description: 'Type of check (e.g., phone)',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Otp.prototype, "check", void 0);
exports.Otp = Otp = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'otp' })
], Otp);
//# sourceMappingURL=otp.model.js.map