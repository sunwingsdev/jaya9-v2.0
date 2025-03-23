import  { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Contact from '../components/Contact/Contact';
import SmallDeviceModal from '../components/SmallDeviceModal/SmallDeviceModal';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  const [isModal, setIsModal] = useState(true);
  return (
    <div className="App">
      <SmallDeviceModal isModal={isModal} setIsModal={setIsModal}/>
      <Header isModal={isModal}/>
      <main>
        <Outlet />
      </main>
      <Footer />
      <Contact/>
    </div>
  );
};

export default MainLayout;
