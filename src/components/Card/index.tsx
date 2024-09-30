import { FC } from "react"
import { CardType } from "../../constants/types"
import { useStore } from "../../helpers/store"

import redFlag from '../../assets/Icon-Flag.png'
import calendar from '../../assets/Icon-Calendar.png'
import editIcon from '../../assets/edit.png'

type CardProps = CardType

const Card: FC<CardProps> = ({
  title,
  description,
  endDate,
  priority,
  id,
  assignedTo,
  status,
  index
}) => {
  const { dispatchModal, setModalCard } = useStore();

  return (
    <div className="card draggable">
      <div className="card-header">
        <span className="priority text-highlight">
          <figure className="image is-16x16">
            <img src={redFlag} alt="Priority flag icon" /> {priority}
          </figure>
        </span>
        <h5 className="title is-size-5">{title}</h5>
      </div>
      <button className="image is-20x20 edit-icon" onClick={() => {dispatchModal({
        type: 'OPENEDIT',
      }); setModalCard({ id, title, description, endDate, priority, assignedTo, status, index })}}>
        <img src={editIcon} alt="Description of image" />
      </button>
      <p className="description is-size-6">{description}</p>
      <div className="card-footer">
        <span className="deadline text-highlight">
          <figure className="image is-16x16">
            <img src={calendar} alt="Calendar icon" /> {endDate}
          </figure>
        </span>
      </div>
    </div>
  )
}

export default Card
