import Header from '../../components/header/header'
import Firehose from '../../components/firehose/firehose'
import MenuButton from '../../components/buttons/menu/menu'
import DrinksButton from '../../components/buttons/drinks/drinks'
import Links from '../../components/lebels/links'
import Gallery from '../../components/Gallery/gallery'
import Footer from '../../components/footer/footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Firehose />
      
      <MenuButton />
      <DrinksButton />
      
      <Links />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home;