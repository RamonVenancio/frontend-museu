import { PDFDownloadLink } from "@react-pdf/renderer";
import styled from "styled-components";
import PDFDocument from "../../components/PDFDocument";
import { useEffect, useState } from "react";
import { Chart } from "primereact/chart";
import { Api } from "../../services";

const TelaAdminContainer = styled.section`
    padding: 60px;
    & h1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        & a{
            display: inline-block;
            line-height: 46px;
            background-color: #ff00a2;
            padding: 0 26px;
            border-radius: 5px;
            color: white;
            font-size: 14px;
            text-transform: uppercase;
            text-decoration: none;
        }
    }
    & .graficos{
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        margin-top: 26px;
        & div{
            flex: 1;
            padding: 16px;
            border-radius: 5px;
            border: 1px solid #DDD;
            &:nth-child(even){
                width: 30%;
            }
            & .grafico{
                width: 100%;
                max-height: 400px;
                border: 0;
            }
        }
    }
`;


const TelaAdmin = () => {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [chartDataPie, setChartDataPie] = useState({});
    const [chartOptionsPie, setChartOptionsPie] = useState({});
    const [chartDataLine, setChartDataLine] = useState({});
    const [chartOptionsLine, setChartOptionsLine] = useState({});
    const [chartDataPieGender, setChartDataPieGender] = useState({});
    const [chartOptionsPieGender, setChartOptionsPieGender] = useState({});
    const [chartDataPieCidade, setChartDataPieCidade] = useState({});
    const [chartOptionsPieCidade, setChartOptionsPieCidade] = useState({});
    const [chartDataPieEstado, setChartDataPieEstado] = useState({});
    const [chartOptionsPieEstado, setChartOptionsPieEstado] = useState({});
    const [chartDataPieProfissao, setChartDataPieProfissao] = useState({});
    const [chartOptionsPieProfissao, setChartOptionsPieProfissao] = useState({});
    
    const visitantesPorGenero = async () => {
        try {
            const request = await Api.get("/user/results"); //aqui devolve uma promessa e tem que tratar ela
            const response = await request.data;
            console.log(response)

        // Configurações do chart pie
        const dataPieGender = {
            labels: response.generos.map(r => r.genero),
            datasets: [
                {
                    data: response.generos.map(r => r.total),
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ]
                }
            ]
        }



        const optionsPieGender = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartDataPieGender(dataPieGender);
        setChartOptionsPieGender(optionsPieGender);

            console.log(response);
        } catch (error) {
            alert(error.message)
        }
    }
    const visitantesPorCidade = async () => {
        try {
            const request = await Api.get("/user/results"); //aqui devolve uma promessa e tem que tratar ela
            const response = await request.data;
            console.log(response)

            const dataPieCidade = {
                labels: response.cidade.map(r => r.cidade),
                datasets: [
                    {
                        data: response.cidade.map(r => r.total),
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                        ]
                    }
                ]
            }



        const optionsPieGender = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartDataPieCidade(dataPieCidade);
        setChartOptionsPieCidade(optionsPieGender);

            console.log(response);
        } catch (error) {
            alert(error.message)
        }
    }
    const visitantesPorEstado = async () => {
        try {
            const request = await Api.get("/user/results"); //aqui devolve uma promessa e tem que tratar ela
            const response = await request.data;
            console.log(response)

            const dataPieEstado = {
                labels: response.estado.map(r => r.estado || 'estado'),
                datasets: [
                    {
                        data: response.estado.map(r => r.total),
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                        ]
                    }
                ]
            }



        const optionsPieEstado = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartDataPieEstado(dataPieEstado);
        setChartOptionsPieEstado(optionsPieEstado);

        } catch (error) {
            alert(error.message)
        }
    }
    const visitantesPorProfissao = async () => {
        try {
            const request = await Api.get("/user/results"); //aqui devolve uma promessa e tem que tratar ela
            const response = await request.data;
            console.log(response)

            const dataPieProfissao = {
                labels: response.profissao.map(r => r.profissao),
                datasets: [
                    {
                        data: response.profissao.map(r => r.total),
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                        ]
                    }
                ]
            }



        const optionsPieProfissao = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartDataPieProfissao(dataPieProfissao);
        setChartOptionsPieProfissao(optionsPieProfissao);

            console.log(response);
        } catch (error) {
            alert(error.message)
        }
    }


    useEffect(() => {
        visitantesPorCidade();
        visitantesPorEstado();
        visitantesPorProfissao();
        visitantesPorGenero();
    }, []);

    return(
        <>
        <TelaAdminContainer>
            <h1>
                Dashboard
                <PDFDownloadLink 
                    document={<PDFDocument />}
                    fileName="registros.pdf"
                >
                        Baixar PDF
                </PDFDownloadLink>
            </h1>
            <div className="graficos">
                <div>
                    <h6>Total de visitas por genero</h6>
                    <Chart className="grafico" type="pie" data={chartDataPieGender} options={chartOptionsPieGender}  />
                </div>
                <div>
                    <h6>Visitantes por cidade</h6>
                    <Chart className="grafico" type="pie" data={chartDataPieCidade} options={chartOptionsPieCidade}  />
                </div>
                <div>
                    <h6>Visitantes por estado</h6>
                    <Chart className="grafico" type="line" data={chartDataPieEstado} options={chartOptionsPieEstado} />
                </div>
                <div>
                    <h6>Visitantes por profissao</h6>
                    <Chart className="grafico" type="pie" data={chartDataPieProfissao} options={chartOptionsPieProfissao}  />
                </div>
            </div>
        </TelaAdminContainer>
        </>
    );
}

export default TelaAdmin;