import { Image, StyleSheet, Text, View } from "react-native";

const ResultsDetails = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: item.image_url }} />
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.rating} Stars, {item.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    image: {
        width: 300,
        height: 200,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
});

export default ResultsDetails;