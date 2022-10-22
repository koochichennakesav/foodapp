import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState([]);
    const id = navigation.getParam('id');

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data.photos);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result.length) {
        return null;
    }

    return <View style={{ flex: 1 }}>
        <FlatList
            data={result}
            keyExtractor={photo => photo}
            renderItem={({ item }) => {
                return (<Image style={styles.image} source={{ uri: item }} />)
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
    },
});

export default ResultShowScreen;