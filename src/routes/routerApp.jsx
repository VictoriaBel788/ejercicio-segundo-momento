import Home from "../pages/Home";
import Phylosophy from "../pages/Phylosophy";
import Gallery from "../pages/Gallery";
import Reservations from "../pages/Reservations";

export let routerApp =[
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/phylosophy",
        element: <Phylosophy/>
    },
    {
        path: "/gallery",
        element: <Gallery/>
    },
    {
        path: "/reservations",
        element: <Reservations/>
    }
]