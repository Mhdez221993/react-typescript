type OrizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'button'

type ToasPosition = {
  position: Exclude <`${OrizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

const Toast = ({position}: ToasPosition) => {
  return (
    <div>
        Toast notification position - {position}
    </div>
  )
}

export default Toast
