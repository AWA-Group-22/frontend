import axios from 'axios';
import React, { Component } from 'react';
import styles from './SearchResult.module.css';
import { Link } from 'react-router-dom';

export default class SearchResult extends Component {

    constructor(props) {
        super(props)
        this.state = { restaurants: [0] };
        }

    componentDidMount() {
        console.log("Component mounted successfully")
        axios.get('https://back-end-22-group.herokuapp.com/restaurants')
            .then((res) => {
                console.log(res);
                this.setState({ restaurants: res.data });
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.restaurants.map((restaurant, index) => {
                        return <div className={ styles.restaurantContainer } key={ index }>
                            <div> { restaurant.image } </div>
                            <div> { restaurant.restaurant_name } </div>
                            <div> { restaurant.operating_hours } </div>
                        </div>
                    })
                }
            </div>

            
        )
    }
}
