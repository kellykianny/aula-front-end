import {Product} from '../product/product';

export interface Carrinho {
    ativo: boolean;
    products : Product[];
}