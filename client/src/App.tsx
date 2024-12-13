// import React from "react";
// import { Route, Routes, useLocation } from "react-router-dom";
// import Home from "./Pages/Home";
// import NotFound from "./Components/UI/NotFound";
// import { ContactUs } from "./Components/UI/ContactUs";
// import Nav from "./Components/UI/Nav";
// import Footer from "./Components/UI/Footer";
// import Mission from "./Components/UI/Mission";
// import { Work } from "./Components/UI/Work";
// import { AboutUs } from "./Components/UI/AboutUs";
// import Community from "./Components/UI/Community";
// import Login from "./Pages/user/Login";
// import Signup from "./Pages/user/Signup";
// import CookiePolicy from "./Pages/legal/CookiePolicy";
// import CookieConsents from "./Pages/legal/CookieConsents";
// import PrivacyPolicy from "./Pages/legal/PrivacyPolicy";
// import TermsCondition from "./Pages/legal/TermsCondition";
// import Dashboard from "./Pages/Dashboard/dashboard";



// const App: React.FC = () => {
//   const location = useLocation()

//   const hideNavFooter = ["/signup", "/login"]

//   const shouldHideNavFooter = hideNavFooter.includes(location.pathname)

//   return (
//     <>
//       {
//         !shouldHideNavFooter && <Nav />
//       }

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/mission" element={<Mission />} />
//         <Route path="/services" element={<Work />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/community" element={<Community />} />

//         {/* User */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/*" element={<NotFound />} />

//         {/* Legal */}
//         <Route path="/cookie-policy" element={<CookiePolicy />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/terms-conditions" element={<TermsCondition />} />

//         {/*Dashboard pages*/}
//         <Route path="/dashboard" element={<Dashboard/>}/>
//       </Routes>
//       <CookieConsents />
//       {
//         !shouldHideNavFooter && <Footer />
//       }


//     </>
//   );
// };

// export default App;



import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Components/UI/NotFound";
import { ContactUs } from "./Components/UI/ContactUs";
import Mission from "./Components/UI/Mission";
import { Work } from "./Components/UI/Work";
import { AboutUs } from "./Components/UI/AboutUs";
import Community from "./Components/UI/Community";
import Login from "./Pages/user/Login";
import Signup from "./Pages/user/Signup";
import CookiePolicy from "./Pages/legal/CookiePolicy";
import CookieConsents from "./Pages/legal/CookieConsents";
import PrivacyPolicy from "./Pages/legal/PrivacyPolicy";
import TermsCondition from "./Pages/legal/TermsCondition";
// import Dashboard from "./Pages/Dashboard/dashboard";
import DefaultLayout from "./Layout/DefaultLayout";
import DashboardLayout from "./Layout/DashboardLayout";
import MainDashboard from "./Pages/Dashboard/dashboard";

const App: React.FC = () => {
  return (

    <>

    <Routes>
      
      {/* Routes with Default Layout */}
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
      <Route
        path="/mission"
        element={
          <DefaultLayout>
            <Mission />
          </DefaultLayout>
        }
      />
      <Route
        path="/services"
        element={
          <DefaultLayout>
            <Work />
          </DefaultLayout>
        }
      />
      <Route
        path="/about"
        element={
          <DefaultLayout>
            <AboutUs />
          </DefaultLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <DefaultLayout>
            <ContactUs />
          </DefaultLayout>
        }
      />
      <Route
        path="/community"
        element={
          <DefaultLayout>
            <Community />
          </DefaultLayout>
        }
      />
      <Route
        path="/cookie-policy"
        element={
          <DefaultLayout>
            <CookiePolicy />
          </DefaultLayout>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <DefaultLayout>
            <PrivacyPolicy />
          </DefaultLayout>
        }
      />
      <Route
        path="/terms-conditions"
        element={
          <DefaultLayout>
            <TermsCondition />
          </DefaultLayout>
        }
      />
      <Route
        path="/*"
        element={
          <DefaultLayout>
            <NotFound />
          </DefaultLayout>
        }
      />

      {/* Routes without Nav and Footer */}
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* Dashboard Route */}
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <MainDashboard/>
          </DashboardLayout>
        }
      />
    </Routes>
  <CookieConsents />
      </>
  );
};

export default App;



