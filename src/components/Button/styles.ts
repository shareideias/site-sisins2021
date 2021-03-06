import styled, { css } from 'styled-components';

interface ButtonProps {
  size?: 'normal' | 'small';
  enabled?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  position: relative;
  z-index: 1;
  background-color: ${({ enabled, theme }) =>
    enabled ? theme.colors.blue : theme.colors.blues[6]};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  overflow: hidden;
  outline: none;
  width: fit-content;

  ${({ size, theme }) => {
    if (size === 'small') {
      return css`
        font-size: 0.75rem;
        padding: 0.5rem 1rem;
        border-radius: 0.3125rem;

        @media (min-width: ${theme.sizes.mobile}) {
          font-size: 1rem;
          padding: 1rem 2rem;
          border-radius: 0.625rem;
        }
      `;
    } else {
      return css`
        font-size: 1rem;
        padding: 1rem 2rem;
        border-radius: 0.3125rem;
      `;
    }
  }};

  ${({ enabled }) => {
    if (enabled) {
      return css`
        transition: background-color 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.blues[5]};
        }

        &:after {
          content: '';
          z-index: -2;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.colors.blues[4]};
          opacity: 0;
          transition: all 0.2s;
          transition-timing-function: linear;
        }

        &:active {
          &:after {
            content: '';
            opacity: 1;
            width: 300px;
            height: 300px;
          }
        }
      `;
    }
  }}
`;
