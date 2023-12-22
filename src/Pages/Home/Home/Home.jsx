import { useContext } from "react";
import Header from "../Header/Header";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import WhoBanifit from "../WhoBanifit/WhoBanifit";

const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <Header />
            <WhoBanifit/>
        </div>
    );
};

export default Home;