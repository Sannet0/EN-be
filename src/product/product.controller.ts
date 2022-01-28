import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateNewProductDto } from './dto/create-new-product.dto';
import { GetProductInfoDto } from './dto/get-product-info.dto';
import { EditProductDto } from './dto/edit-product.dto';
import { IProduct } from '../interface/product-interface';
import { IHttpStatus } from '../interface/http-status-interface';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('')
  createNewProduct(@Body() dto: CreateNewProductDto): Promise<[] | IHttpStatus> {
    return this.productService.createNewProduct(dto);
  }

  @Put('')
  async editProduct(@Body() dto: EditProductDto): Promise<[[], number] | IHttpStatus> {
    return await this.productService.editProduct(dto);
  }

  @Get('/:id')
  async getProductInfo(@Param() dto: GetProductInfoDto): Promise<IProduct[] | IHttpStatus> {
    return await this.productService.getProductInfo(dto);
  }
}
