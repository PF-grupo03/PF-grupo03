import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET, RESTART_SCHEMA } from './config/env.config';
import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { FileUploadModule } from './modules/file-upload/file-upload.module';
import { OrdersModule } from './modules/orders/orders.module';
import { SeederService } from './seeders/seeder.service';
import { CategoryEntity } from './modules/categories/category.entity';
import { ProductEntity } from './modules/products/product.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('typeorm'),
    }),
    JwtModule.register({
      global: true,
      secret: JWT_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
    ProductsModule,
    UsersModule,
    AuthModule,
    CategoriesModule,
    FileUploadModule,
    OrdersModule,
    TypeOrmModule.forFeature([CategoryEntity, ProductEntity]),
  ],
  providers: [SeederService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly seederService: SeederService) {}
  async onModuleInit() {
    if (RESTART_SCHEMA) {
      await this.seederService.seedProducts();
      console.log('Database seeding completed');
    }
  }
}
