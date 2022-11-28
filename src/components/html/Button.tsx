type ButtonProps = {
  variant: 'primary' | 'secondary',
  children: string
} & Omit<React.ComponentProps<'button'> ,'children'>

const Button = ({variant, children, ...rest}: ButtonProps) => {
  return (
    <div className={`class-name-${variant}`}>
        {children}
    </div>
  );
};

export default Button
