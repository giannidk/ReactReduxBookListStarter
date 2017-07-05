import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
    renderContent(){
        if(!this.props.book){
            return <div>Please select a book</div>;
        }
        return(
            <div>
                <h3>{this.props.book.title}</h3>
                <div><strong>Pages: </strong>{this.props.book.pages}</div>
            </div>
            
        )
    }

    render(){
        return(
            <div className="col-sm-8">
                {this.renderContent()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.selectBook
    }
}

export default connect(mapStateToProps)(BookDetails);