export const survivorCards = [
  {
    type: 'instant',
    name: 'Lockdown',
    description: 'Aliens unable to access ship deck during next turn',
    requirement: [{ap: 2}],
    baseQty: 3
  },
  {
    type: 'defense',
    name: 'Hunker Down',
    description: 'Add 1 to defense',
    requirement: [],
    baseQty: 5
  },
  {
    type: 'defense',
    name: 'Makeshift Cover',
    description: 'Add 3 to defense',
    requirement: [{scrap: 1}],
    baseQty: 3
  }
]

export const shipCards = [
  {
    name: 'Mess Hall',
    survivorDescription: '+1 scrap',
    alienDescription: '+1 biomass'
  }
]

export const cardTypes = [
  'instant',
  'offense',
  'defense'
]