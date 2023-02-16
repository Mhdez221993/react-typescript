
type TextOwnProps<E extends React.ElementType<any>> = {
  size?: 'sm' | 'lg' | 'md',
  color?: 'primary' | 'secondary',
  children: React.ReactNode,
  as: keyof HTMLElementTagNameMap,
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

const Text = <E extends React.ElementType = 'div'>({ size, color, children, as }: TextProps<E>) => {

  const Component = as || 'div'
  return (
    <Component className={`class-wit-${size}-${color}`}>
      {children}
    </Component>
  )
}

export default Text
