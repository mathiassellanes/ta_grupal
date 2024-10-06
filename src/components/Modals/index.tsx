import { useEffect, useState } from "react";
import { CardType } from "../../constants/types";
import { useStore } from "../../helpers/store";
import Input from "../FormInputs/input";

import './styles.scss'
import Select from "../FormInputs/select";
import { postCard, deleteCard, putCard } from "../../api";

const Modal = ({
  card = {
    id: '',
    title: '',
    description: '',
    assignedTo: '',
    priority: '',
    status: 'Backlog',
    endDate: '',
    index: 0,
  },
}: {
  card?: CardType
}) => {
  const [form, setForm] = useState(card)

  const {
    dispatchModal,
    addCard,
    updateCard,
    deleteCard: deleteCardStore,
  } = useStore((state) => state);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {
    if (card.id) {
      const updatedCard = await putCard(card.id, form)

      updateCard(card.id, updatedCard)

      dispatchModal({ type: 'CLOSE' })
    } else {
      const card = await postCard(form)
      addCard(card)
      dispatchModal({ type: 'CLOSE' })
    }
  }

  const handleDelete = async () => {
    await deleteCard(card.id)

    deleteCardStore(card.id)

    dispatchModal({ type: 'CLOSE' })
  }

  return (
    <div className="modal show-modal" id="addcard">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{card.id ? 'Editar Tarea' : 'Nueva Tarea'}</p>
          <button
            onClick={() => { dispatchModal({ type: 'CLOSE' }) }}
            className="delete"
            aria-label="close"
          ></button>
        </header>
        <form className="modal-card-body">
          <Input
            label="Nombre de la tarea"
            value={form.title}
            onChange={handleChange}
            name="title"
          />
          <Input
            label="Descripción de la tarea"
            value={form.description}
            onChange={handleChange}
            name="description"
            type="textarea"
          />
          <Input
            label="Asignado"
            value={form.assignedTo}
            onChange={handleChange}
            name="assignedTo"
          />
          <div className="field is-flex is-justify-content-space-between">
            <Select
              label="Estado"
              options={[
                { value: 'Backlog', label: 'Backlog' },
                { value: 'To Do', label: 'To Do' },
                { value: 'In Progress', label: 'In Progress' },
                { value: 'Blocked', label: 'Blocked' },
                { value: 'Done', label: 'Done' },
              ]}
              defaultValue={card.status}
              onChange={handleChange}
              value={form.status}
              name="status"
            />
            <Select
              label="Prioridad"
              options={[
                { value: 'High', label: 'Alta' },
                { value: 'Medium', label: 'Media' },
                { value: 'Low', label: 'Baja' },
              ]}
              onChange={handleChange}
              value={form.priority}
              defaultValue={card.priority}
              name="priority"
            />
          </div>
          <Input
            label="Fecha Límite"
            value={form.endDate}
            onChange={handleChange}
            name="endDate"
            type="date"
          />
          <footer className="py-2 is-flex is-justify-content-space-between">
            {
              card.id ? (
                <button
                  onClick={handleDelete}
                  type="button"
                  className="button is-danger"
                >
                  Eliminar
                </button>
              ) : (
                <button
                  onClick={() => { { dispatchModal({ type: 'CLOSE' }) } }}
                  type="button"
                  className="button"
                >
                  Cancelar
                </button>
              )
            }
            <button
              onClick={handleSubmit}
              type="button"
              className="button is-success"

            >
              Guardar cambios
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default Modal;
