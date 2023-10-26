import Services from "../../Services/Services";
import About from "./About/About";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About/>
            <Services></Services>
           <h2>This is home component</h2> 
        </div>
    );
};

export default Home;