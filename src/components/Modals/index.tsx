import { CardType } from "../../constants/types";

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
  return (
    <div className="modal" id="addcard">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button
            onClick={() => { }}
            className="delete"
            aria-label="close"
          ></button>
        </header>
        <form className="modal-card-body">
          <div className="control">
            <label className="label">Nombre de la tarea</label>
            <input
              className="input"
              id="title"
              type="text"
              placeholder="Text input"
              value={card?.title}
            />
            <span id="errorTitle" className="error"></span>
          </div>
          <div className="field">
            <label className="label">Descripción de la tarea</label>
            <div className="control">
              <textarea
                id="description"
                className="input"
                placeholder="Textarea"
                value={card?.description}
              ></textarea>
              <span id="errorDescription" className="error"></span>
            </div>
          </div>
          <div className="field">
            <label className="label">Asignado</label>
            <div className="control">
              <input type="text" id="assigned" className="input" value={card?.assignedTo} />
            </div>
          </div>
          <div className="field is-flex is-justify-content-space-between">
            <div className="control">
              <label className="label">Estado</label>
              <div className="select">
                <select id="state" value={card?.status}>
                  <option value="Backlog">Backlog</option>
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Blocked">Blocked</option>
                  <option value="Done">Done</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label className="label">Prioridad</label>
              <div className="control">
                <div className="select">
                  <select id="priority" value={card.priority}>
                    <option value="High">Alta</option>
                    <option value="Medium">Media</option>
                    <option value="Low">Baja</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Fecha Límite</label>
            <div className="control">
              <input id="deadline" className="input" type="date" value={card.endDate} />
              <span id="errorDeadLine" className="error"></span>
            </div>
          </div>
          <footer className="py-2 is-flex is-justify-content-space-between">
            <button
              // onclick="handleCardCancel()"
              type="button"
              className="button"
            >
              Cancelar
            </button>
            <button
              // onclick="handleCardSave()"
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
