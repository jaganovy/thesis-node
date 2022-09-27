import * as api from '../api'

export const getEvents = () => async (dispatch) => {
    try {
        const {data} = await api.fetchEvents()

        dispatch({type: 'FETCH_ALL', payload: data})
    } catch (err) {
        console.log(err)
    }

}

export const createEvent = () => async (dispatch) => {
    try {
        const {data} = await api.createEvent()

        dispatch({type: 'CREATE', payload: data})
    } catch (err) {
        console.log(err)
    }
}