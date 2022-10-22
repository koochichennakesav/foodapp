import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { withNavigation } from "react-navigation";
import ResultsDetails from "./ResultsDetails";

const ResultsList = ({
    title,
    results,
    navigation,
}) => {
    if (!results.length) {
        return null
    }
    
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                showsHorizontalScrollIndicator={false}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Photos', { id: item.id });
                        }}>
                            <ResultsDetails item={item} />
                        </TouchableOpacity>)
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        marginHorizontal: 10,
    },
});

export default withNavigation(ResultsList);