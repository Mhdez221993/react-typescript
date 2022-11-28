type OrizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'button'

type ToasPosition = {
  position: `${OrizontalPosition}-${VerticalPosition}`
}

const Toast = ({position}: ToasPosition) => {
  return (
    <div>
        Toast notification position - {position}
    </div>
  )
}

export default Toast
