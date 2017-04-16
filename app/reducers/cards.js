import { fromJS } from 'immutable';

const initialState = fromJS([
    { name: '1', image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif' },
    { name: '2', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif' },
    { name: '3', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif' },
    { name: '4', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif' },
    { name: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif' },
    { name: '6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif' },
    { name: '7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif' },
    { name: '8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif' },
    { name: '9', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif' },
    { name: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif' },
    { name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif' },
    { name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif' },
    { name: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif' },
]);

export default function cards(state: List<Map<string, string>> = initialState, action) {

    switch (action.type) {
        default:
            return state;
    }

}