import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img:
      'https://s.aficionados.com.br/imagens/hunter-x-hunter-conheca-os-personagens-do-iconico-anime_f.jpg',
    title: 'Hunter x Hunter',
    subtitle:
      '<p>Watch the new <strong>Game</strong> of the perfect anime hunter x hunter</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/hunter-x-hunter'
  },
  argTypes: {
    ribbon: { type: 'string' }
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => <Banner {...args} />

export const WithRibbon: Story<BannerProps> = (args) => <Banner {...args} />

WithRibbon.args = {
  ribbon: '20% off',
  ribbonSize: 'normal',
  ribbobColor: 'primary'
}
