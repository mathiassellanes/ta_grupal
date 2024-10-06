import { useContext, useEffect } from 'react'
import { useStore } from './helpers/store'

import Column from './components/Column'
import { CardType } from './constants/types'
import Modal from './components/Modals'

import { DarkModeContext } from './helpers/DarkMode'
import { columns } from './constants'

import sunIcon from './assets/sun-solid.svg'
import moonIcon from './assets/moon-solid.svg'

import './App.css'
import { getCards } from './api'

function App() {
  const {
    cards,
    dispatchModal,
    isOpen,
    modalCard,
    setCards,
  } = useStore((state) => state)

  const {
    isDarkMode,
    toggleDarkMode
  } = useContext(DarkModeContext);

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

  const fetchCards = async () => {
    const cards = await getCards()
    setCards(cards)
  }

  useEffect(() => {
    fetchCards();
  }, [])

  return (
    <>
      <div className="has-text-black">
        <div style={{ position: 'relative' }}>
          <h1 className="title has-text-centered mt-5">
            GESTOR DE TAREAS
          </h1>
          <button onClick={toggleDarkMode} className="button mb-5" id="toggle-dark-mode">
            <span className="icon is-small">
              <img id="toggle-image" src={isDarkMode ? moonIcon : sunIcon} alt="moon" />
            </span>
          </button>
        </div>
        <div className="interstice is-flex is-justify-content-end pr-3">
          <button
            onClick={() => dispatchModal({
              type: 'OPENCREATE'
            })}
            className="interstice js-modal-trigger button mb-5 add-task"
          >
            Agregar tarea
          </button>
          <button
            className="interstice js-modal-trigger js-modal-trigger-mobile button mb-5 add-task-mobile"
            onClick={() => dispatchModal({
              type: 'OPENCREATE'
            })}
          >
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
            <Modal card={modalCard} />
          )
        }
      </div >
    </>
  )
}

export default App
