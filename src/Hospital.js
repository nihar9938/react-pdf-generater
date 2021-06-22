import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import "./App.css"
import MyDocument from "./Document";

const Hospital = () => {

    const hospital = {
        name: "Langone Hospitals",
        address: "New York",
        logo: "https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1406476369/uokjcgtdwuoyhky7koi6.png",
        pictures: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjd7dU-d3JqzUXyhDVXoriGZOMS5n145lXQ&usqp=CAU"]
    }

    return (
        <div className="container">
            <img src={hospital.logo} style={{ height: "150px", width: "150px", float: 'right' }} alt="" />
            <h4>Hospital Name:
            <span className="hospital-detail">{hospital.name}</span></h4>
            <h4>Address:
            <span className="hospital-detail">{hospital.address}</span></h4>
            <h4>Pictures</h4>
            {hospital.pictures ?
                <img src={hospital.pictures[0]} alt="" className="image" /> : null}
            <br></br>
            <button className="button1">
                <PDFDownloadLink document={<MyDocument data={hospital} />} fileName="details.pdf" style={{ color: "white", textDecoration: "none" }}>
                    {({ loading }) => (loading ? 'Loading...' : 'Download as PDF')}
                </PDFDownloadLink>
            </button>

            <PDFViewer width="800px" height="600px">
                <MyDocument data={hospital} />
            </PDFViewer>

        </div >
    )
}

export default Hospital;
