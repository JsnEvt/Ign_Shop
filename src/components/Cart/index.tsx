import * as Dialog from '@radix-ui/react-dialog';
import { CartButton } from '../CartButton';
import { CartClose, CartContent, CartFinalization, CartProduct, CartProductDetails, CartProductImage, FinalizationDetails } from './styles';
import { X } from 'phosphor-react'
import Image from 'next/image';
import { useCart } from '../../hooks/useCart';

export function Cart() {
  const { cartItems } = useCart()
  const cartQuantity = cartItems.length

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
            {cartQuantity <= 0 && <p>Seu carrinho está vazio : (</p>}
            {cartItems.map((cartItem) => (
              <CartProduct key={cartItem.id}>
                <CartProductImage>
                  <Image
                    width={100}
                    height={93}
                    alt=''
                    src={cartItem.imageUrl}
                  />
                </CartProductImage>
                <CartProductDetails>
                  <p>{cartItem.name}</p>
                  <strong>{cartItem.price} </strong>
                  <button>Remover</button>
                </CartProductDetails>
              </CartProduct>
            ))}
          </section>
          <CartFinalization>
            <FinalizationDetails>
              <div>
                <span>Quantidade</span>
                <p>{cartQuantity} {cartQuantity > 1 ? 'items' : 'item'}</p>
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