import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'u/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'filled']
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Button'
  }
};

export const Underline: Story = {
  args: {
    variant: 'underline',
    children: 'Button'
  }
};

export const FilledWithText: Story = {
  args: {
    variant: 'filled',
    children: 'Login'
  }
};

export const UnderlineWithLongText: Story = {
  args: {
    variant: 'underline',
    children: 'Long Button Text'
  }
};

export const Disabled: Story = {
  args: {
    variant: 'filled',
    children: 'Disabled Button',
    disabled: true
  }
};

export const DisabledUnderline: Story = {
  args: {
    variant: 'underline',
    children: 'Disabled Button',
    disabled: true
  }
};
