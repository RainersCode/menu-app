import { Text, View, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { useSelector } from "react-redux";


function FavoritesScreen(){
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id))

    if(favoriteMeals.length === 0){
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        );
    }

    return <MealsList items={favoriteMeals}/>
}

export default FavoritesScreen;


const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    rootContainer:{
        marginVertical: '50%',
        alignItems: 'center',
        flex: 1
    }
})