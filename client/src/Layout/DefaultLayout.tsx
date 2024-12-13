import  React from 'react';
import Nav from '../Components/UI/Nav';
import Footer from '../Components/UI/Footer';

interface Props{
    children:React.ReactNode;
}

const DefaultLayout: React.FC<Props>=({children})=>{
return(
    <>

<main>
    <Nav/>
    {children}
    <Footer/>
    </main>


    </>
)
}

export default DefaultLayout;