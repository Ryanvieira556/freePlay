import { Home } from "../Home/Home"
import { useRoutes } from "react-router-dom"
import { GamesPages } from "../GamesPage/GamesPage"
export const RoutList = () => {
    return useRoutes([
        {path:'/' ,  element: <Home />} ,
        {path:'/games',  element:  <GamesPages /> }
    

    ])
}