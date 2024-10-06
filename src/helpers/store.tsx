import { create } from 'zustand'
import { CardType } from '../constants/types'

const defaultCard: CardType = {
  id: '',
  title: '',
  description: '',
  assignedTo: '',
  priority: '',
  status: 'Backlog',
  endDate: '',
  index: 0,
};

type Store = {
  cards: CardType[]
  addCard: (card: CardType) => void
  deleteCard: (id: string) => void
  updateCard: (id: string, card: CardType) => void
  getCard: (id: string) => CardType
  isOpen: boolean
  modalCard: CardType
  setModalCard: (card: CardType) => void
  dispatchModal: (action: { type: string}) => void
}

const modalReducer: {
  (state: Store, action: { type: string }): Store
} = (state, action) => {
  switch (action.type) {
    case 'OPENCREATE':
      return {
        ...state,
        isOpen: true,
        modalCard: defaultCard
      }
    case 'OPENEDIT':
      return {
        ...state,
        isOpen: true,
      }
    case 'CLOSE':
      return {
        ...state,
        isOpen: false,
      }
    default:
      return state
  }
}

export const useStore = create<Store>((set) => ({
  cards: [
    {
      id: '1',
      title: 'Tarea 1',
      description: 'Descripción de la tarea 1',
      assignedTo: 'Juan Perez',
      priority: 'Alta',
      status: 'Backlog',
      endDate: '2021-12-31',
      index: 0,
    },
    {
      id: '2',
      title: 'Tarea 2',
      description: 'Descripción de la tarea 2',
      assignedTo: 'Juan Perez',
      priority: 'Media',
      status: 'To Do',
      endDate: '2021-12-31',
      index: 1,
    },
    {
      id: '3',
      title: 'Tarea 3',
      description: 'Descripción de la tarea 3',
      assignedTo: 'Juan Perez',
      priority: 'Baja',
      status: 'In Progress',
      endDate: '2021-12-31',
      index: 2,
    },
    {
      id: '4',
      title: 'Tarea 4',
      description: 'Descripción de la tarea 4',
      assignedTo: 'Juan Perez',
      priority: 'Alta',
      status: 'Blocked',
      endDate: '2021-12-31',
      index: 3,
    },
    {
      id: '5',
      title: 'Tarea 5',
      description: 'Descripción de la tarea 5',
      assignedTo: 'Juan Perez',
      priority: 'Media',
      status: 'Done',
      endDate: '2021-12-31',
      index: 4,
    }
  ],

  addCard: (card) => {
    set((state) => ({
      ...state,
      cards: [
        ...state.cards,
        card,
      ],
    }))
  },

  deleteCard: (id) => {
    set((state) => ({
      ...state,
      cards: state.cards.filter((card) => card.id !== id),
    }))
  },

  updateCard: (id, updatedCard) => {
    set((state) => ({
      ...state,
      cards: state.cards.map((card) =>
        card.id === id ? updatedCard : card
      ),
    }))
  },

  getCard: (id) => {
    const card = useStore.getState().cards.find((card) => card.id === id) as CardType

    return card
  },

  isOpen: false,

  modalCard: defaultCard,

  setModalCard: (card) => set((state) => ({
    ...state,
    modalCard: card
  })),

  dispatchModal: (action: { type: string }) => {set((state) => modalReducer(state, action))},



}))
