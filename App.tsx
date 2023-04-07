import {StatusBar} from 'expo-status-bar';
import {FlatList, Image, ListRenderItem, StyleSheet, Text, View} from 'react-native';

type ItemType = {
    id: number
    title: string
    price: number
    image: any
}

const images = [
    require('./assets/image1.png'),
    require('./assets/image2.png'),
    require('./assets/image3.png'),
    require('./assets/image4.png'),
    require('./assets/image5.png'),
    require('./assets/image6.png'),
]

const titles = [
    'Apple iPhone 13 \n128GB Blue',
    'Apple iPhone 14 Pro 128GB Space Black',
    'Apple iPhone 12 128GB Purple',
    'Apple iPhone SE 128GB 2022 Midnight',
    'Apple iPhone 13 512GB Midnight',
    'Apple iPhone 14 Pro Max 256GB Purple'
]
const prices = [999, 1199, 799, 599, 899, 1199]

const fakeData: ItemType[] = [...Array(12)].map((_, index) => ({
    id: index + 1,
    title: titles[index % titles.length],
    price: prices[index % prices.length],
    image: images[index % images.length],
}))

const PADDING = 16;
const WIDTH = 400;

export default function App() {

    const renderItem: ListRenderItem<ItemType> = ({item}) => {
        return <View style={styles.itemIphone}>
            <Image
                style={{
                    width: 100,
                    height: 100,
                }}
                resizeMode={'contain'}
                source={item.image}
            />
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
        </View>
    }

    return (
        <View style={styles.container}>
            <StatusBar style={'light'}/>
            <FlatList
                data={fakeData}
                renderItem={renderItem}
                numColumns={2}
                contentContainerStyle={{paddingHorizontal: PADDING}}
                columnWrapperStyle={{justifyContent: 'space-between'}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cecece',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemIphone: {
        backgroundColor: '#fff',
        width: (WIDTH - PADDING * 2) / 2 - 8,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.4)',
        borderRadius: 5,
        paddingTop: 12,
    },
});
