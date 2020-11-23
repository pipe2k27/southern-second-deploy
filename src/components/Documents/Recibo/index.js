import React, { useState, useEffect } from 'react';
import FechaLugar from '../../Questions/fechaLugar';
import Persona from '../../Questions/Persona';
import ReciboPago from './Questions/ReciboPago';
import Repaso from '../../Questions/Repaso';
import Pago from '../../Questions/Pago';

import Description from '../Description'


import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

import "../styles.css";





const Recibo = () => {
    const [data, setData] = useState({});
    const [questions, setQuestions] = useState({});
    const [page, setPage] = useState(1);
    const [persona1, setPersona1] = useState("");
    const [persona2, setPersona2] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const MyDoc = () => (
        <Document>
            <Page size="A4" style={styles.body}>
                <Text style={styles.header} fixed>
                    ~ Documento creado con Southern Legal Tech ~
                </Text>
                <Text style={styles.title}>Recibo de pago</Text>
                <View style={{ marginTop: 20 }}>
                    {data[13] === 'cheque' ? <Text style={styles.text}>En {data[2]}, {data[1]}, al  {data[3]}, recibí de {data[5]}, {data[6]} n°: {data[7]}, un cheque emitido por {data["13b"]} por {data["13c"]} {data["13d"]} bajo el número  {data["13a"]}, en concepto de {data[12]}.</Text> : null}
                    {data[13] === 'entrega de cosa' ? <Text style={styles.text}>En {data[2]}, {data[1]}, al  {data[3]}, recibí de {data[5]}, {data[6]} n°: {data[7]}, {data["13b"]} {data["13a"]}, en concepto de {data[12]}.</Text> : null}
                    {data[13] === 'criptomoneda' ? <Text style={styles.text}>En {data[2]}, {data[1]}, al  {data[3]}, recibí de {data[5]}, {data[6]} n°: {data[7]}, la cantidad de {data["13b"]} {data["13a"]} (criptomoneda), en concepto de {data[12]}.</Text> : null}
                    {data[13] === 'efectivo' ? <Text style={styles.text}>En {data[2]}, {data[1]}, al  {data[3]}, recibí de {data[5]}, {data[6]} n°: {data[7]}, la cantidad de {data["13b"]} {data["13a"]} en {data[13]}, en concepto de {data[12]}.</Text> : null}
                </View>
                <View style={styles.signature}>
                    <Text style={styles.textSig}>{data[9]}</Text>
                    <Text style={styles.textSig}>{data[10]} {data[11]}</Text>
                </View>

            </Page>
        </Document>
    )

    return (
        <div>
            <Description title={"Recibo"} text={"Un recibo o justificante de pago es un documento mediante el cual una persona reconoce haber recibido una cantidad de dinero de otra persona. El recibo constituye la prueba de que un pago ha sido efectuado. Este documento puede servir como justificante del pago de cualquier cantidad"} />
            <div className="create-box">
                <h2 className="center-text question-description">Contestá las siguientes preguntas:</h2>
                {page === 1 && <FechaLugar titulo={"recibo"} provincia={1} ciudad={2} day={3} set={setData} data={data} setQuestions={setQuestions} questions={questions} />}
                {page === 2 && <Persona titulo={"recibo"} tipoPersona={4} nombre={5} tipoDni={6} dni={7} set={setData} data={data} setQuestions={setQuestions} persona={persona1} setPersona={setPersona1} message={"El pagador"} questions={questions} />}
                {page === 3 && <Persona titulo={"recibo"} tipoPersona={8} nombre={9} tipoDni={10} dni={11} set={setData} data={data} setQuestions={setQuestions} persona={persona2} setPersona={setPersona2} message={"El Acreedor (Quien recibe el pago)"} questions={questions} />}
                {page === 4 && <ReciboPago titulo={"recibo"} set={setData} data={data} setQuestions={setQuestions} message={"El pago"} formaPago={13} monedaEfe={'13a'} montoEfe={'13b'} cheNumero={'13a'} cheBanco={'13b'} cheMonto={'13c'} cheMoneda={'13d'} cosa={'13a'} cosaCant={'13b'} criTipo={'13a'} criMonto={'13b'} motivo={12} questions={questions} />}
                {page === 5 && <Repaso data={data} questions={questions} />}
                {page === 6 && <Pago data={data} questions={questions} />}

                <p className="end-note">*Al terminar de responder todas las preguntas tu documento se generará automaticamente y podrás descargarlo.</p>
                <div className="button-box flex  grid-mobile">
                    {page > 1 && <a className="question-button button-primary" onClick={() => setPage(prevPage => prevPage - 1)}>Anterior</a>}
                    {page < 6 && <a className="question-button button-primary" onClick={() => setPage(prevPage => prevPage + 1)}>Siguiente</a>}
                    {page === 6 && <span className="question-button button-primary"> <PDFDownloadLink document={<MyDoc />} fileName="Recibo.pdf" style={{ color: "white", textDecoration: "none" }}>
                        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Pagar y Descargar!')}
                    </PDFDownloadLink></span>
                    }

                </div>
                <p className="page-number">{page}/6</p>
            </div>
        </div >
    )
}



const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Times-Roman'
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
    signature: {
        position: "relative",
        left: 370,
        top: 80,

    },
    textSig: {
        margin: 2,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },

});

export default Recibo;