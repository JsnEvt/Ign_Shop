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


  variants: {
    color: {
      gray: {
        background: '$gray800',
        color: '$gray500',
      },
      green: {
        background: '$green500',
        color: '$white',

        '&:not(:disabled):hover': {
          background: '$green300',
        }
      },
    },
    size: {
      medium: {
        width: '3rem',
        height: '3rem',

        svg: {
          fontSize: 24
        },
      },
      large: {
        width: '3.5rem',
        height: '3.5rem',

        svg: {
          fontSize: 32
        },
      },
    },
  },

  defaultVariants: {
    color: 'gray',
    size: 'medium'
  }
})