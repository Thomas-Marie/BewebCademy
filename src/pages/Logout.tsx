import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const Logout = (props: any) => {

    // console.log(props.location);
    // console.log(props.match);
    // console.log(props.history);

    return (
        <div className="logout">
            <Header />
            T DECO
            <Footer />
        </div>
    )
}

export default Logout;