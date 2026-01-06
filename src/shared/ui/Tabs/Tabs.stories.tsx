import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';

const meta = {
  title: 'u/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Tab 1', value: 'tab1', content: 'Content for Tab 1' },
      { label: 'Tab 2', value: 'tab2', content: 'Content for Tab 2' },
      { label: 'Tab 3', value: 'tab3', content: 'Content for Tab 3' }
    ],
    defaultValue: 'tab1'
  }
};
