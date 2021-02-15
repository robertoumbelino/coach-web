import styled, { css } from 'styled-components'

export interface ContainerProps {
  webImage: string
}

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  ${({ webImage }) =>
    webImage &&
    css`
      background-image: url(${webImage});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `};
`

export const ContainerText = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 50px;
`

export const Text = styled.p`
  color: #fff;
  font-size: 7vw;

  text-align: center;
`
