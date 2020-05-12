export const survivorCards = {
  lockdown: {
    type: 'instant',
    name: 'Lockdown',
    description: 'Aliens unable to access ship deck during next turn',
    requirement: {ap: 2},
    baseQty: 3
  },
  hunkerDown: {
    type: 'defense',
    name: 'Hunker Down',
    description: 'Add 1 to defense',
    requirement: [],
    baseQty: 5
  },
  makeshiftCover: {
    type: 'defense',
    name: 'Makeshift Cover',
    description: 'Add 3 to defense',
    requirement: {scrap: 1},
    baseQty: 3
  },
  scrap: {
    type: 'defense',
    name: 'Scrap',
    description: 'Flotsam...',
    requirement: {scrap: 1},
    baseQty: 3
  }
}

export const alienCards = {
  biomass: {
    type: 'instant',
    name: 'Biomass',
    description: 'Gooey...',
    requirement: {ap: 2},
    baseQty: 3
  },
  attack: {
    type: 'instant',
    name: 'Attack!',
    description: 'Attack with any cards you have in play',
    requirement: {ap: 2},
    baseQty: 3
  }
}

export const shipCards = {
  messHall: {
    name: 'Mess Hall',
    survivorDescription: '+1 scrap',
    alienDescription: '+1 biomass'
  }
}

export const cardTypes = [
  'resource',
  'action',
  'deployable'
]