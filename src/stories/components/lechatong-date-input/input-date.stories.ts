import { Meta, StoryObj } from "@storybook/angular";
import InputDate from "./input-date.component";

const meta: Meta<InputDate> = {
    title: 'Example/DateInput',
    component: InputDate,
    tags: ['autodocs'],
    render: (args: InputDate) => ({
        props: {
            ...args,
        },
    }),
    argTypes:{},
};

export default meta;
type Story = StoryObj<InputDate>;

export const Label: Story = {
    args: {
      label: 'Label'
    }
  }
