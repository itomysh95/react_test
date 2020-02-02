import {connect} from 'react-redux';
import React from 'react';

const ExpenseDashBoardPage = (props)=>{
    <div>
    </div>
}

const mapStateToProps = (state)=>{
    return{
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseDashBoardPage)