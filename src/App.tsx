import { useStore } from './helpers/store'

import Column from './components/Column'
import { CardType } from './constants/types'
import Modal from './components/Modals'

import { columns } from './constants'

import './App.css'

function App() {
  const {
    cards,
    dispatchModal,
    isOpen,
    modalCard
  } = useStore((state) => state)

  const cardByState = cards.reduce((acc: {
    [key: string]: CardType[]
  }, card: CardType) => {
    acc[card.status].push(card)

    return acc
  }, {
    'Backlog': [],
    'To Do': [],
    'In Progress': [],
    'Blocked': [],
    'Done': [],
  })

  return (
    <>
      <div className="has-text-black">
        <div style={{ position: 'relative' }}>
          <h1 className="title has-text-black has-text-centered mt-5">
            GESTOR DE TAREAS
          </h1>
          <button className="button mb-5" id="toggle-dark-mode">
            <span className="icon is-small">
              <img id="toggle-image" src="assets/moon-solid.svg" />
            </span>
          </button>
        </div>
        <div className="interstice is-flex is-justify-content-end pr-3">
          <button onClick={() => dispatchModal({
            type: 'OPENCREATE'
          })} className="interstice js-modal-trigger button mb-5 add-task" data-target="modal-js-example">
            Agregar tarea
          </button>
          <button className="interstice js-modal-trigger js-modal-trigger-mobile button mb-5 add-task-mobile" data-target="modal-js-example">
            <span>+</span>
          </button>
        </div>
        <div className="columns">
          {
            columns.map((column) => (
              <Column title={column} items={cardByState[column]} />
            ))
          }
        </div>
        {
          isOpen && (
            <Modal card={modalCard}/>
          )
        }





        {/*

        <div className="modal" id="edit-card">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Editar Tarea</p>
              <button
                // onclick="handleCardCancel()"¿
                className="delete" aria-label="close"></button>
            </header>
            <form className="modal-card-body">
              <label className="label">Nombre de la tarea</label>
              <div className="control">
                <input className="input" id="edit-title" type="text" placeholder="Text input" />
                <span id="edit-errorTitle" className="error"></span>
              </div>
              <div className="field">
                <label className="label">Descripción de la tarea</label>
                <div className="control">
                  <textarea id="edit-description" className="input" placeholder="Textarea"></textarea>
                  <span id="edit-errorDescription" className="error"></span>
                </div>
              </div>
              <div className="field">
                <label className="label">Asignado</label>
                <div className="control">
                  <input type="text" id="edit-assigned" className="input" />
                </div>
              </div>
              <div className="field is-flex is-justify-content-space-between">
                <div className="field">
                  <label className="label">Estado</label>
                  <div className="control">
                    <div className="select">
                      <select id="edit-state">
                        <option value="Backlog">Backlog</option>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Blocked">Blocked</option>
                        <option value="Done">Done</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Prioridad</label>
                  <div className="control">
                    <div className="select">
                      <select id="edit-priority">
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
                  <input id="edit-deadline" className="input" type="date" />
                  <span id="edit-errorDeadLine" className="error"></span>
                </div>
              </div>
              <footer className="modal-card-foot">
                <div className="buttons">
                  <button onClick={() => { }} type="button" className="button is-danger">Eliminar</button>
                  <button onClick={() => { }} type="button" className="button">Cancelar</button>
                  <button onClick={() => { }} type="button" className="button is-success">Guardar cambios</button>
                </div>
              </footer>
            </form>
          </div> */}
        {/* </div> */}
        <script src="src/apiInteraction.js" defer></script>
        <script src="src/editHelper.js" defer></script>
        <script src="src/dragHelpers.js" defer></script>
        <script src="src/script.js" defer></script>
        <script src="src/darkLightMode.js" defer></script>
      </div >
    </>
  )
}

export default App
