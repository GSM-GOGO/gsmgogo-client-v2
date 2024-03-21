import { Meta } from '@storybook/react';
import Input from '.';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    errors: { control: 'boolean' },
    message: { control: 'text' },
    type: { control: 'text' },
    maxLength: { control: 'number' },
    readOnly: { control: 'boolean' },
    register: { table: { disable: true } },
  },
} as Meta;

const Template = (args : any) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: '입력해주세요',
  errors: false,
  message: '',
  type: 'text',
  maxLength: undefined,
  readOnly: false,
  register: () => {},
};
