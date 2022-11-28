type ButtonProps = React.ComponentProps<'input'>

const Input = (props: ButtonProps) => {
  return (
    <input type="text" {...props} />
  );
};

export default Input;