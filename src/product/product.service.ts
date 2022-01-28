import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entity/product.entity';
import { CreateNewProductDto } from './dto/create-new-product.dto';
import { GetProductInfoDto } from './dto/get-product-info.dto';
import { EditProductDto } from './dto/edit-product.dto';
import { IProduct } from '../interface/product-interface';
import { IHttpStatus } from '../interface/http-status-interface';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private  productRepository: Repository<Product>) {}

  async createNewProduct(dto: CreateNewProductDto): Promise<[] | IHttpStatus> {
    const { name, description, price } = dto;

    try {
      return await this.productRepository.query(`
                                                INSERT INTO products ("name", "description", "price") 
                                                VALUES ('${ name }', '${ description }', ${ price })
                                               `);
    } catch (err) {
      throw new HttpException(err.detail || err.response || '', HttpStatus.BAD_REQUEST);
    }
  }

  async editProduct(dto: EditProductDto): Promise<[[], number] | IHttpStatus> {
    const { id, name, description, price } = dto;

    try {
      return await this.productRepository.query(`
                                                UPDATE products 
                                                SET name = '${ name }', description = '${ description }', price = ${ price }
                                                WHERE id = ${ id }
                                                `);
    } catch (err) {
      throw new HttpException(err.detail || err.response || '', HttpStatus.BAD_REQUEST);
    }
  }

  async getProductInfo(dto: GetProductInfoDto): Promise<IProduct[] | IHttpStatus> {
    const { id } = dto;

    try {
      return await this.productRepository.query(`
                                                SELECT * FROM products 
                                                WHERE id = ${ id }
                                                `);
    } catch (err) {
      throw new HttpException(err.detail || err.response || '', HttpStatus.BAD_REQUEST);
    }
  }
}
