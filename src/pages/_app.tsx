import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app';
import { Cart } from '../components/Cart';
import { CartContextProvider } from '../contexts/CartContext';


globalStyles()
export default function App({ Component, pageProps }: AppProps) {

  return (
    <CartContextProvider>
      <Container>
        <Header>
          <img src={logoImg.src} alt="" />
          <Cart />
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}

