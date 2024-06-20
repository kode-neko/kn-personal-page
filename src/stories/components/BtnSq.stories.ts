import type { Meta, StoryObj } from '@storybook/react';
import { BtnSq } from '../../components';

const meta = {
  title: 'Personal Page/BtnSq',
  component: BtnSq,
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
    label: 'Minim mollit',
    size: 'sm',
    color: 'pink'
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BtnSq>;

export default meta;
type Story = StoryObj<typeof meta>;

export const smBtnSq: Story = {
  args: {
    size: 'sm',
    color: 'pink'
  }
};

export const mdBtnSq: Story = {
  args: {
    size: 'md',
    color: 'pink'
  }
};

export const lgBtnSq: Story = {
  args: {
    size: 'lg',
    color: 'blue'
  }
};

export const noIcon: Story = {
  args: {
    icon: undefined,
    size: 'lg',
    color: 'blue'
  }
};