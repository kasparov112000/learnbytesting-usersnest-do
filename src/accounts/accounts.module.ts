import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountSchema } from './schema/account.schema';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { MongodDbService } from '../mongo-db.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Account', schema: AccountSchema }]),
  ],
  controllers: [AccountsController],
  providers: [AccountsService, MongodDbService],
})
export class AccountsModule {}