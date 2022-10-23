import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Disease from '../pages/Disease';
import Alzheimer from '../pages/Alzheimer';
import Test from '../pages/Test';
import DonateDate from '../pages/DonateDate';

export default function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/disease" element={<Disease />} />
                <Route path="/alzheimer" element={<Alzheimer />} />
                <Route path="/test" element={<Test />} />
                <Route path="/donate" element={<DonateDate />} />
            </Routes>
        </BrowserRouter>
    )
}
