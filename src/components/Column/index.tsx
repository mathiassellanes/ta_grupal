import { FC } from "react"
import { CardType } from "../../constants/types"
import Card from "../Card"

type ColumnProps = {
  title: string
  items: CardType[]
}

const Column: FC<ColumnProps> = ({ title, items }) => {
  return (
    <div className="columns-container">
      <div className="column">
        <div className="level">
          <div className="level-item">
            <figure className="image is-16x16">
              <img src="../../assets/menu-hamburguesa.png" alt="Menu icon" />
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
    </div>
  )
}

export default Column