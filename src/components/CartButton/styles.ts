import { styled } from '../../styles';

export const CartButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 6,
  position: 'relative',

  '&:disabled': {
    opacity: .6,
    cursor: 'not-allowed'
  },

  background: '$gray800',
  color: '$gray500',
  height: '3rem',
  width: '3rem',

  svg: {
    fontSize: 24
  }
})