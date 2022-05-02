import { DynamicModule, HttpModule, Module } from '@nestjs/common';
import { Authenticate } from './auth';
import { ConfigModule } from './config';
import { DatabaseModule } from './database';
import { IRolesService, RolesModule } from './roles';
import { IUserRoleRelService, UserRoleRelModule } from './user-role-rel';
import { IUsersService, UsersModule } from './users';
import { HealthModule } from './health/health.module';
import { TerminusModule } from '@nestjs/terminus';
import { MongooseModule } from '@nestjs/mongoose';
@Module({})
export class AppModule {
  static async forRoot(dependencies: {
    usersService: IUsersService;
    rolesService: IRolesService;
    userRoleRelService: IUserRoleRelService;
    authenticate: Authenticate;
  }): Promise<DynamicModule> {
    return {
      module: AppModule,
      imports: [
        HttpModule,
        MongooseModule,
        TerminusModule,
        ConfigModule,
        DatabaseModule,
        HealthModule,

        RolesModule.forRoot(dependencies),
        UsersModule.forRoot(dependencies),
        UserRoleRelModule.forRoot(dependencies),
      ],
    };
  }
}
