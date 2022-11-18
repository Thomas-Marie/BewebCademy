import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import NavBar from "../components/layout/NavBar";

const ExerciceList: React.FC = () => {
  return (
    <div className="exerciceList">
      <Header></Header>
      <NavBar></NavBar>
      <Footer></Footer>
    </div>
  )
}

export default ExerciceList;