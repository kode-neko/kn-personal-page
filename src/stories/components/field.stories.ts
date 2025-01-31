import type { Meta, StoryObj } from '@storybook/react';
import { Field } from '../../components';

const meta = {
  title: 'Personal Page/Field',
  component: Field,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    name: 'name',
    icon: 'fa-solid fa-face-smile', 
    placeholder: 'type your name', 
    isTextarea: false,
    errors: {},
    dirtyFields: {},
    touchedFields: {}
  }
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = {
  args: {
    name: 'name',
    icon: 'fa-solid fa-face-smile',
    placeholder: 'type your name',
    isTextarea: false,
  }
};

export const Textarea: Story = {
  args: {
    isTextarea: true,
  }
};
