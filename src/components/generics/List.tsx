
type ListProps<T> = {
  items: T[]
  onClick: (value: T) => void
}

const List = <T extends {first: string}>({items, onClick}: ListProps<T>) => {
  return (
    <div>
      <h1>List of items</h1>
      {
        items.map((item, i) => {
          return (
            <div onClick={() => onClick(item)} key={i}>
              <h1>{item.first}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default List
