import { Meta, StoryObj } from "@storybook/angular";
import InputText from "./input-text.component";

const meta: Meta<InputText> = {
    title: 'Example/TextInput',
    component: InputText,
    tags: ['autodocs'],
    render: (args: InputText) => ({
        props: {
            ...args,
        },
    }),
    argTypes:{},
};

export default meta;
type Story = StoryObj<InputText>;

export const Label: Story = {
    args: {
      label: 'Label'
    }
  }