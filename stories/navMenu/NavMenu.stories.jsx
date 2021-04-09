import React from 'react';
import NavMenu from '../../src/components/navMenu/NavMenu';
import themes from '../../src/configs/themesToProjects';

export default {
  title: 'NavMenu',
  component: NavMenu,
  argTypes: {
    currentMenuItem: {
      options: Object.keys(themes),
      control: {
        type: 'inline-radio'
      }
    },
    onItemMenuClick: { table: { disable: true } }
  }
}

const Template = (args) => <NavMenu {...args} />

export const NavMenuStory = Template.bind({});
NavMenuStory.args = {
  currentMenuItem: 'lmarkt'
}


