import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MediaModule } from './media/media.module';
import { ExpenceModule } from './expence/expence.module';

@Module({
  imports: [
    MediaModule,
    AuthModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      subscriptions: {
        onConnect: (connectionParams: any, websocket, context) => {
          context.request.headers.authorization =
            connectionParams?.Authorization;
        },
      },
      context: ({ req }) => ({ req }),
      installSubscriptionHandlers: true,
    }),
    MongooseModule.forRoot(process.env.URI),
    ExpenceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
