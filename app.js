import React from 'react';
import {ScrollView} from 'react-native';
import Movie from './components/Movie';

const AllMovies = () => {
    return (
        <ScrollView>
            <Movie title="Doctor Sleep" year= "2019" poster={require('./img/doctor-sleep.jpg')} icon_name="skull"/>
            <Movie title="Midway" year= "2020" poster={require('./img/midway.jpg')} icon_name="person-rifle"/>
            <Text>Github</Text>
        </ScrollView>
    );
};

export default AllMovies;
