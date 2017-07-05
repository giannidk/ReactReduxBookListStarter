import { combineReducers } from 'redux';
import BooksList from './reducer_booksList';
import SelectBook from './reducer_active_book';

const rootReducer = combineReducers({
    booksList: BooksList,
    selectBook: SelectBook
})

export default rootReducer;
