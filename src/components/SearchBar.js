import { StyleSheet, Text, TextInput, View } from "react-native"
import { Feather } from '@expo/vector-icons'

const SearchBar = ({
    onChangeTerm,
    onSubmitTerm,
    term,
}) => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" size={25} style={styles.iconStyles} />
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
            style={styles.inputStyle}
            onChangeText={onChangeTerm}
            onSubmitEditing={onSubmitTerm}
            value={term}
        />
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#f0eeee',
        borderRadius: 8,
        marginHorizontal: 10,
        marginTop: 5,
        flexDirection: 'row',
        height: 50,
    },
    iconStyles: {
        marginHorizontal: 8,
        alignSelf: 'center',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    }
});

export default SearchBar;