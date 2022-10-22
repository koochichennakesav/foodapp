import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterByPrice = price => {
        return results.filter((prices) => prices.price === price);
    }

    return <View style={styles.backgroundStyle}>
        <SearchBar
            term={term}
            onChangeTerm={setTerm}
            onSubmitTerm={() => searchApi(term)}
        />
        {!errorMessage && <Text>{errorMessage}</Text>}
        <ScrollView>
            <ResultsList results={filterByPrice("$")} title="Cost Effective" />
            <ResultsList results={filterByPrice("$$")} title="Big Pricier" />
            <ResultsList results={filterByPrice("$$$")} title="Big Spender" />
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#fff',
        flex: 1,
    },
});

export default SearchScreen;