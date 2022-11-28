type ButtonProps = {
  variant: 'primary' | 'secondary',
} & React.ComponentProps<'button'>

const Button = ({variant, children, ...rest}: ButtonProps) => {
  return (
    <div className={`class-name-${variant}`}>
        {children}
    </div>
  );
};

export default Button
