import React from 'react';
import DeviceSwitcher from '../../src/components/deviceSwitcher/DeviceSwitcher';

export default {
  title: 'DeviceSwitcher',
  component: DeviceSwitcher,
  argTypes: {
    activeDevice: {
      options: ['phone', 'tablet', 'desktop'],
      control: { type: 'radio' }
    },
    devicesCurrentMenuItem: {
      options: ['phone', 'tablet', 'desktop'],
      control: { type: 'check' }
    },
    onDeviceClick: { table: { disable: true } }
  }
}

const Template = (args) => <DeviceSwitcher {...args} />

export const DeviceSwitcherStory = Template.bind({});
DeviceSwitcherStory.args = {
  devicesCurrentMenuItem: ['phone', 'tablet', 'desktop'],
  activeDevice: 'phone'
}

