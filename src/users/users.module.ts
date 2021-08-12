import { Module } from "@nestjs/common";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./user.service";

@Module({
    providers: [UsersResolver, UsersService]
})
export class UsersModule { }