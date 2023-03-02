import data from './dataL.json'

const getAll = () => {
    return data
    
}

const getOne = (id) => {
    return data.find(log => log.id === id)
}

export const dataLodgings = {getAll, getOne}