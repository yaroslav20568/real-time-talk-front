import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from 'storybook/preview-api';

import { Input, type IProps as IInputProps } from './Input';

import s from './Input.module.scss';

const meta = {
  title: 'u/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const RenderInput = (args: IInputProps) => {
  const [{ value }, updateArgs] = useArgs<IInputProps>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateArgs({ value: e.target.value });
  };

  return (
    <div className={s.wrapper}>
      <Input {...args} value={value} onChange={onChange} />
    </div>
  );
};

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
    type: 'text',
    value: '',
    onChange: () => {}
  },
  render: RenderInput
};

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    value: '',
    onChange: () => {}
  },
  render: RenderInput
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    error: 'This field is required',
    value: '',
    onChange: () => {}
  },
  render: RenderInput
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    value: '',
    onChange: () => {}
  },
  render: RenderInput
};

export const Disabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    disabled: true,
    value: 'disabled@example.com',
    onChange: () => {}
  },
  render: RenderInput
};
