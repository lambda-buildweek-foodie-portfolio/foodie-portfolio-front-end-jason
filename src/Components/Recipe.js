import React from 'react';
import {connect} from 'react-redux';
import {deleteRecipe} from '../actions/index'


const Recipe = props => {
    console.log(props)
    const deleteClickHandler = (e) => {
        e.preventDefault();
        props.deleteRecipe(props.recipe.id);
    }

    
    return (
        <div>
        <p>{props.recipe}</p>
        <button onClick={deleteClickHandler}> Delete Reicpe! </button>

    </div>
    )

}
const mapStateToProps = () => ({});
export default connect(mapStateToProps, {deleteRecipe})(Recipe);