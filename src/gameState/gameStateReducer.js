export const initialGameState = {
  currentPlayer: 'aliens',
  trackPosition: 10,
  playFieldItems: []
}

export const gameStateReducer = (state, action) => {
  switch (action.type) {
    // case UPDATE_FORM_VALUES:
    //   return {...state, formState: {...state.formState, ...action.sectionData} }
    // case UPDATE_SECTION_STATUS:
    //   state[action.activeForm].completed = true
    //   return { ...state }
    // case UPDATE_ACTIVE_FORM:
    //   state[action.activeTab].completed = false
    //   return {...state, activeForm: action.activeTab}
    // case UPDATE_EDIT_FORM:
    //   return { ...state, currentEditForm: action.activeEdit }
    // case STORE_PAYMENT_TOKEN:
    //   return {...state, formState: {...state.formState, ...action.stripePaymentInfo} }
    default:
      return state
  }
}
