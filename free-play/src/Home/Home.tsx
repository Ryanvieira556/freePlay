import { About } from "../components/About/About"
import { Banner } from "../components/Banner/Banner"
import { Cards } from "../components/Cards/Cards"
import { Community } from "../components/Community/Community"
import { Footer } from "../components/Footer/Footer"





export const Home = () => {
    return (
        <>
        <Banner />
        <Cards />
        <About />
        <Community />

        <Footer />
        </>
    )
}