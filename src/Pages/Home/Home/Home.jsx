import { useContext } from "react";
import Header from "../Header/Header";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <Header />
        </div>
    );
};

export default Home;