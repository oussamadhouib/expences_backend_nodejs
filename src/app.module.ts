import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MediaModule } from './media/media.module';
import { ExpenceModule } from './expence/expence.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [
    MediaModule,
    AuthModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),
      installSubscriptionHandlers: true,
    }),
    MongooseModule.forRoot(process.env.URI),
    ExpenceModule,
    WalletModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
