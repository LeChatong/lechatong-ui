import { Meta, StoryObj } from "@storybook/angular";
import InputSelect from "./input-select.component";

const meta: Meta<InputSelect> = {
    title: 'Example/SelectInput',
    component: InputSelect,
    tags: ['autodocs'],
    render: (args: InputSelect) => ({
        props: {
            ...args,
        },
    }),
    argTypes:{},
};

export default meta;
type Story = StoryObj<InputSelect>;

export const Label: Story = {
    args: {
      label: 'Label'
    }
  }
