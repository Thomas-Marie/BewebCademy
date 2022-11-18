import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ListTable from '../components/ListTable';

const Exercice: React.FC = () => {
  return (
    <div className="exercice">
      <Header></Header>
      <br /><br/>
      <h1>Voici un joli exercice</h1>
      <ListTable/>
      <Footer></Footer>
    </div>
  )
}

export default Exercice;
