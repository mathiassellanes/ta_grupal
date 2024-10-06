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
  setCards: (cards: CardType[]) => void
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
  cards: [],

  setCards: (cards) => set((state) => ({
    ...state,
    cards,
  })),

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
