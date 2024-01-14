import Navbar from "../../Navbar/Navbar";
import TopFilter from "./TopFilter/TopFilter";

const Home = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <Navbar />
            <div className="max-w-[1440px] mx-auto">
            <TopFilter />
            </div>
        </div>
    );
};

export default Home;