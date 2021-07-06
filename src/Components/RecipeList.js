import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getALL} from '../actions/index';
import Recipe from '../Components/Recipe';


class RecipeList extends Component {
    componentDidMount() {
        this.props.getALL();
    }
    state = {
        recipe: {
            title: '',
            mealType: '',
            ingredients: '',
            instructions: '',
            image: ''
            
        },
        
    };
    render() {
    return (
        <div>
        {this.props.getALL ? <h1>Loading Recipes...</h1> : null}
        {this.props.error !== '' ? <h1>{this.props.error}</h1> : null}
        {this.props.recipes.map(recipe => <Recipe recipe={recipe} key={Math.random()}/>)}


        </div>
    );

    }
}
const mapStateToProps = state => {
    return {
        getALL: state.getALL,
        error: state.error,
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, {getALL})(RecipeList);