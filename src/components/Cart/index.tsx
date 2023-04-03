import * as Dialog from '@radix-ui/react-dialog';
import { CartButton } from '../CartButton';
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from './styles';
import { X } from 'phosphor-react'
import Image from 'next/image';

export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>
      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight='bold' />
          </CartClose>
          <h2>Sacola de compras</h2>
          <section>
            <p>
              Seu carrinho está vazio! : (
            </p>
            <CartProduct>
              <CartProductImage>
                <Image
                  width={100}
                  height={93}
                  alt=''
                  src='https://s3-alpha-sig.figma.com/img/389f/ecc9/dfd930c7acf7b3b2e05b363813fe1f6b?Expires=1681689600&Signature=RWpILFkQV7kdmj340uK1IO7tepdXwnEfLu-xdLTv52ZJEylVErtnXyKubskmntVUB9~bdwkoKLE8UIKQiKJ65aPeY0EbSQJefd93Frm8vH13PhgaHVDtOdgsDMEfLhe9OIWy1tQLQedCuHEDHmdil-LUg7MUoC-yl~BrCGd~TU~oNX6DuaJSzaA3nrqzRyVP4kXUEGljdAr3tfvTjFT~qBz9EwnSTushwHRn2YNDC1zTh~7aZwtwk0ce0OG6HcVY7TKznhKwbx0MPRcUykpw4-aFJozWSgraQyyDNuDrLsM8bozzVAZScKgOiEoiPvAq2~UyDmZKqg~ZhIlreVYF3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                />
              </CartProductImage>
              <CartProductDetails>
                <p>Produto 1</p>
                <strong>R$ 50.00</strong>
                <button>Remover</button>
              </CartProductDetails>
            </CartProduct>
          </section>
          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>2 itens</p>
              </div>
              <div>
                <span>Valor total</span>
                <div>R$ 100,00</div>
              </div>
            </FinalizationDetails>
            <button>Finalizar compra</button>
          </CartFinalization>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}