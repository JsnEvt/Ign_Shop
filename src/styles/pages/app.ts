import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100hv',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  marginTop: '8rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  button: {
    marginLeft: 'auto'
  }
})