import React from 'react';
import Description from '../../src/components/description/Description';
import dataProjects from '../../src/data/dataProjects';

const descriptionCurrentMenuItem = dataProjects.reduce((acc, cur) => {
  if (cur.description) acc.push(cur.name)
  return acc;
}, []);

export default {
  title: 'Description',
  component: Description,
  argTypes: {
    currentMenuItem: {
      options: descriptionCurrentMenuItem,
      control: {
        type: 'inline-radio'
      }
    }
  }
}

const Template = (args) => <Description {...args} />

export const DescriptionStory = Template.bind({});
DescriptionStory.args = {
  currentMenuItem: 'lmarkt'
}
