import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import React from 'react';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    image: {
        height: "80px",
        width: "80px",
        marginLeft: "400px"
    },
    details: {
        marginTop: "-80px"
    },
    hospital_image: {
        height: "230px",
        width: "230px",
        borderRadius: "8px",
        margin: "8px",
        flexDirection: 'row',
    },
    data: {
        color: "red",
        fontSize: "20px"
    }

});

// Create Document Component
const MyDocument = (props) => {
    console.log(props)
    return (
        < Document >
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Image src={props.data.logo} style={styles.image} alt="" />
                    <View style={styles.details}>
                        <Text>Hospital Name:</Text>
                        <Text style={styles.data}>{props.data.name}</Text>
                        <Text>Address:</Text>
                        <Text style={styles.data}>{props.data.address}</Text>
                        <Text>Pictures:</Text>
                        {props.data.pictures ? <>
                            <Image src={props.data.pictures[0]} style={styles.hospital_image} />
                        </> : null}
                    </View>
                </View>
            </Page>
        </Document >)
};

export default MyDocument;