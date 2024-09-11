
import {createBrowserRouter} from 'react-router-dom'
import Layout from '../../Layout'
import Home from '../../pages/Home';
import RedactarCoreo from '../../pages/RedactarCoreo';
import ListaCorreos from '../../pages/ListaCorreos';


const router = createBrowserRouter(
    [{
        path: '/',
        element: <Layout />,
        children: [
            {
            path: '/',
            element: <Home />
            },
            {
            path: '/nuevo',
            element: <RedactarCoreo />
            },
            {
            path: '/correos',
            element: <ListaCorreos />
            }
        ],
    }]
);

export default router;
