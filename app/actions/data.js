import uuid from 'uuid-v4'

export const submitDatum = values => ({
    type: 'ADD_DATUM',
    payload: { id: uuid(), ...values }
})