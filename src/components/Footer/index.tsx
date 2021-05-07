import * as S from './styles'

import Logo from 'components/Logo'
import Heading from 'components/Heading'
import Link from 'next/link'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact us
        </Heading>
        <a href="mailto:sac@mail.com">sac@mail.com</a>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          <a target="_blank" rel="noopenner, noreferrer" href="#">
            Instagram
          </a>
          <a target="_blank" rel="noopenner, noreferrer" href="#">
            Twitter
          </a>
          <a target="_blank" rel="noopenner, noreferrer" href="#">
            Youtube
          </a>
          <a target="_blank" rel="noopenner, noreferrer" href="#">
            Facebook
          </a>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Loren ipsun ok true</span>
        <span>Loren ipsun ok true</span>
        <span>Loren ipsun ok true</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2020 @ All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
