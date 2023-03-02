import dataI from './collapse.json'

const All = () => {
    return dataI
    
}

const One = (id) => {
    return dataI.find(log => log.id === id)
}

export const dataU = {All, One}