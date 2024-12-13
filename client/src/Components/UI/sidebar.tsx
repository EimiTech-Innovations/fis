import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";


interface SidebarProps{}


const Sidebar:React.FC<SidebarProps>=()=>{


// const MainMenuLink =[

// ]




  return (
    <div className="flex flex-col w-64 h-screen bg-gray-100 shadow-lg">
      {/* Sidebar Header */}
      <div className="flex items-center px-6 py-4 bg-white shadow-sm">
        <div className="text-xl font-bold text-gray-800">EIMITECH INN.</div>
      </div>

      {/* Main Menu Section */}
      <div className="mt-6 px-4 space-y-4">
        <h2 className="text-sm font-medium text-gray-600 uppercase">Main Menu</h2>

        <a
          href="/billing"
          className="flex items-center gap-3 p-2 text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          <span><i className="fa-solid fa-money-bill"></i></span>
          <span>Billing</span>
        </a>

        <a
          href="/services"
          className="flex items-center gap-3 p-2 text-gray-800 rounded-lg hover:bg-gray-300"
        >
          <i className="fa-brands fa-medium"></i>
          <span>Services</span>
        </a>
        <a
          href="/customers"
          className="flex items-center gap-3 p-2 text-gray-800 rounded-lg hover:bg-gray-300"
        >
          <i className="fa-solid fa-user-group"></i>
        <span>Customers</span>
        </a>
        <a
          href="/customers"
          className="flex items-center gap-3 p-2 text-gray-800 rounded-lg hover:bg-gray-300"
        >
          <i className="fa-solid fa-user-tie"></i>
          <span>Employee</span>
        </a>

        <a
          href="/customers"
          className="flex items-center gap-3 p-2 text-gray-800 rounded-lg hover:bg-gray-300"
        >
          <i className="fa-solid fa-bag-shopping"></i>
          <span>Products</span>
        </a>
      </div>

      

      {/* Account Section */}
      <div className="mt-6 px-4 space-y-4">
        <h2 className="text-sm font-medium text-gray-600 uppercase">Account</h2>

        <a
          href="/account-settings"
          className="flex items-center gap-3 p-2 text-gray-800 rounded-lg hover:bg-gray-300"
        >
         <i className="fa-solid fa-gear"></i>
          <span>Account Settings</span>
        </a>

        <a
          href="/login"
          className="flex items-center gap-3 p-2 text-gray-800 rounded-lg hover:bg-gray-300"
        >
          <span>🔐</span>
          <span>Login</span>
        </a>

        <a
          href="/logout"
          className="flex items-center gap-3 p-2 text-gray-800 rounded-lg hover:bg-gray-300"
        >
          <span>🚪</span>
          <span>Logout</span>
        </a>
      </div>

      {/* Footer Section */}
      <div className="mt-auto px-4 py-4 border-t border-gray-300">
        <div className="flex items-center gap-3">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">Ronald Richards</p>
            <p className="text-sm text-gray-600">ronald.richards@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
