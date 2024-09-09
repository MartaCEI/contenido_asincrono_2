import { landingData } from "../data/mockdata";

const responseApi = {
    data: [],
    msg: "Data fetched successfully",
    status: "success"
}

const { hero, sections, aplications, clients } = landingData;

// GET all data from the landing page
export const getLandingData = (req, res) => {
    try {
        // Consultamos la base de datos
        const statusCode = landingData.length ? 200 : 204;

        responseApi.msg = "Datos obtenidos con éxito";
        // responseApi.count = landingData.length;
        responseApi.data= landingData;

        res.status(statusCode).json(responseApi);
    } catch (error) {

        //  Guarda en la base de datos 
        console.log("error", error)

        responseApi.status = "error"
        responseApi.msg = "Tuvimos un error al obtener la BD"
        res.status(500).json(responseApi)
    }
}

// export const getHero = (req, res) => {
//     try {
//         // Consultamos la base de datos
//         const statusCode = hero.length ? 200 : 204;

//         responseApi.msg = "Datos obtenidos con éxito";
//         responseApi.count = hero.length;
//         responseApi.data= hero;

//         res.status(statusCode).json(responseApi);
//     } catch (error) {

//         //  Guarda en la base de datos 
//         console.log("error", error)

//         responseApi.status = "error"
//         responseApi.msg = "Tuvimos un error al obtener la BD"
//         res.status(500).json(responseApi)
//     }
// }

// // get all sections
// export const getSections = (req, res) => {
//     try {
//         // Consultamos la base de datos
//         const statusCode = sections.length ? 200 : 204;

//         responseApi.msg = "Datos obtenidos con éxito";
//         responseApi.count = sections.length;
//         responseApi.data= sections;

//         res.status(statusCode).json(responseApi);
//     } catch (error) {

//         //  Guarda en la base de datos 
//         console.log("error", error)

//         responseApi.status = "error"
//         responseApi.msg = "Tuvimos un error al obtener la BD"
//         res.status(500).json(responseApi)
//     }
// }

// // get all aplications
// export const getAplications = (req, res) => {
//     try {
//         // Consultamos la base de datos
//         const statusCode = aplications.length ? 200 : 204;

//         responseApi.msg = "Datos obtenidos con éxito";
//         responseApi.count = aplications.length;
//         responseApi.data= aplications;

//         res.status(statusCode).json(responseApi);
//     } catch (error) {

//         //  Guarda en la base de datos 
//         console.log("error", error)

//         responseApi.status = "error"
//         responseApi.msg = "Tuvimos un error al obtener la BD"
//         res.status(500).json(responseApi)
//     }
// }

// // get all clients
// export const getClients = (req, res) => {
//     try {
//         // Consultamos la base de datos
//         const statusCode = clients.length ? 200 : 204;

//         responseApi.msg = "Datos obtenidos con éxito";
//         responseApi.count = clients.length;
//         responseApi.data= clients;

//         res.status(statusCode).json(responseApi);
//     } catch (error) {

//         //  Guarda en la base de datos 
//         console.log("error", error)

//         responseApi.status = "error"
//         responseApi.msg = "Tuvimos un error al obtener la BD"
//         res.status(500).json(responseApi)
//     }
// }