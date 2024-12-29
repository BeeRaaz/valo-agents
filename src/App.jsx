import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {

  useGSAP(() => {
    const wrapper = document.querySelector('.wrapper');
    const cursor = document.querySelector('.cursor');

    wrapper.addEventListener('mousemove', (dets) => {
      cursor.style.display = 'block';
      gsap.to(cursor, { x: dets.x, y: dets.y })
    })
  }, {})

  return (
    <>
      <div className="wrapper">
        <div className="cursor bg-transparent border border-white-50 rounded-full fixed top-0 left-0 z-[99999] w-10 h-10 hidden"></div>
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
