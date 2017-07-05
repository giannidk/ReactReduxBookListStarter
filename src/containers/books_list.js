import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BooksList extends Component {
    renderList(){
        return (
            this.props.books.map((book => {
            return(
                <li 
                    onClick={() => this.props.selectBook(book)}
                    key={book.title}
                    className="list-group-item"
                >
                    {book.title}
                </li>
            );
        }))
        );
    }
    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}


function mapStateToProps(state) {
    return{
        ciccio: 'bonbo cannoniere',
        books: state.booksList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);