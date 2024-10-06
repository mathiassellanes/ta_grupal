import { FC } from "react"
import { CardType } from "../../constants/types"
import Card from "../Card"

type ColumnProps = {
  title: string
  items: CardType[]
  image: string
}

const Column: FC<ColumnProps> = ({ title, items, image }) => {
  return (
    <div className="column">
      <div className="level">
        <div className="level-item">
          <figure className="image is-16x16">
            <img src={image} alt="Menu icon" />
          </figure>
        </div>
        <div className="level-item">
          <h2 className="is-size-4">{title}</h2>
        </div>
      </div>
      {items.map((item) => (
        <Card {...item} />
      ))}
    </div>
  )
}

export default Column
