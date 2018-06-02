const months = {
    1: 'January',
    5: 'May',
    6: 'June'
}




export const getMonth = month => {
    return months[month]
}

export const splitMonth = date => {
    return splitDateIntoDMY(date)[1]
}

export const splitDay = date => splitDateIntoDMY(date)[0]

export const splitDateIntoDMY = date => date.split('/')