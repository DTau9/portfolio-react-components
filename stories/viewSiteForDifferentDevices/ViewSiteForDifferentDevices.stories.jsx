import React from 'react';
import ViewSiteForDifferentDevices from '../../src/components/viewSiteForDifferentDevices/ViewSiteForDifferentDevices';
import dataProjects from '../../src/data/dataProjects';

const linksToSitesList = dataProjects.reduce((acc, cur) => {
  if (cur.device) acc.push(cur.url)
  return acc;
}, []);

export default {
  title: 'Different devices',
  component: ViewSiteForDifferentDevices,
  argTypes: {
    linkToSite: {
      options: linksToSitesList,
      control: { type: 'radio' }
    },
    activeDevice: { table: { disable: true } }
  }
}

const Template = (args) => <ViewSiteForDifferentDevices {...args} />

export const PhoneViewStory = Template.bind({});
PhoneViewStory.args = {
  linkToSite: linksToSitesList[0],
  activeDevice: 'phone'
}

export const TabletViewStory = Template.bind({});
TabletViewStory.args = {
  linkToSite: linksToSitesList[0],
  activeDevice: 'tablet'
}

export const DesktopViewStory = Template.bind({});
DesktopViewStory.args = {
  linkToSite: linksToSitesList[0],
  activeDevice: 'desktop'
}
