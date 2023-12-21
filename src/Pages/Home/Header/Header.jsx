
import Navbar from '../../../Components/Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import './Header.css'

const Header = () => {
  return (
    <div className="bgImg">
      <Navbar></Navbar>
      <Banner/>
    </div>
  );
};

export default Header;
