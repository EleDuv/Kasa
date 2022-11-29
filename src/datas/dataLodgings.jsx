import Lodgings from "./lodgings.json"

// Récupération des données des logements
const getAllLodgings = () => {
  return Lodgings
}

const getOneLodging = (id) => {
  return Lodgings.find(log => log.id === id)
}

export const dataLodgings = {
  getAllLodgings, getOneLodging
}