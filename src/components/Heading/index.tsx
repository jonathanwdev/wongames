import React from 'react'
import * as S from './styles'

export type LineColorsProps = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  size?: 'small' | 'medium'
  lineColor?: LineColorsProps
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'primary'
}: HeadingProps) => (
  <S.Wrapper
    lineColor={lineColor}
    size={size}
    lineBottom={lineBottom}
    lineLeft={lineLeft}
    color={color}
  >
    {children}
  </S.Wrapper>
)

export default Heading
