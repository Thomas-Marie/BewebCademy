import BadgeList from "../components/BadgeList";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";

const Profil: React.FC = () => {

    // console.log(props.location);
    // console.log(props.match);
    // console.log(props.history);

    return (
        <div className="profil">
            <Header />
            <NavBar />
            <br/>
            <br/>
            <BadgeList/>
            <Footer />
        </div>
    )
}

export default Profil;
