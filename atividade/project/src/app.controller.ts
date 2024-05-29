import { Body, Controller, Get, Post, Query, } from '@nestjs/common';
import { AppService } from './app.service';
import { CarrinhoClient } from './client/CarrinhoClient';
import { PROPERTY_DEPS_METADATA } from '@nestjs/common/constants';


@Controller()
export class AppController {

  private carrinhoClient: CarrinhoClient

  public constructor() {
    this.carrinhoClient = CarrinhoClient.getInstance();
  }

  @Post('add_carrinho')
  public async addCarrinho(@Body() data: any) {  
    await this.carrinhoClient.authentication(data.email, data.senha);

    await this.carrinhoClient.addCarrinho(data.produtos);

    const produtos = await this.carrinhoClient.getProducts();
    return { message: 'Carrinho criado com sucesso', produtos: produtos};
  }
}
