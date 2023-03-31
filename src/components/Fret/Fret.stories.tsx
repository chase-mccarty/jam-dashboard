// Fret.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Fret, { FretProps } from './Fret';

export default {
  title: 'Components/Fret',
  component: Fret,
} as Meta;

const Template: Story<FretProps> = (args) => <Fret {...args} />;

export const Default = Template.bind({});
Default.args = {
  rootNote: 'C',
  fretNumber: 1,
  highlightedNotes: [{note: 'C', color: "blue"}, {note: 'E', color: "red"}],
};