import type { Meta, StoryObj } from '@storybook/react';

import { EyeIcon } from '@/shared/ui/Icons';

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
      options: ['tab', 'filled', 'icon']
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

export const Tab: Story = {
  args: {
    variant: 'tab',
    children: 'Button'
  }
};

export const FilledWithText: Story = {
  args: {
    variant: 'filled',
    children: 'Login'
  }
};

export const TabWithLongText: Story = {
  args: {
    variant: 'tab',
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

export const DisabledTab: Story = {
  args: {
    variant: 'tab',
    children: 'Disabled Button',
    disabled: true
  }
};

export const Icon: Story = {
  args: {
    variant: 'icon',
    children: <EyeIcon />
  }
};

export const IconDisabled: Story = {
  args: {
    variant: 'icon',
    children: <EyeIcon />,
    disabled: true
  }
};
