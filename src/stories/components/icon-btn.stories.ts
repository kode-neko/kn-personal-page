import type { Meta, StoryObj } from '@storybook/react';
import { BtnIcon } from '../../components';

const meta = {
  title: 'Personal Page/BtnIcon',
  component: BtnIcon,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Descripción del componente',
      }
    }
  },
  args: {
    icon: 'fa-brands fa-twitter',
    size: 'sm',
    color: 'pink'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BtnIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const sm: Story = {};

export const md: Story = {
  args: {
    size: 'md'
  }
};

export const lg: Story = {
  args: {
    size: 'lg'
  },
};