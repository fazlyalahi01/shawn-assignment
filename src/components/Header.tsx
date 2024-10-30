import React from "react";
import SectionContainer from "./Container/SectionContainer";

function Header() {
    return (
        <header className="bg-black bg-opacity-90 py-6">
            <SectionContainer className="flex justify-between items-center">
                <img src="/images/logo.png" alt="logo" className="w-32" />
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#testimonial_1" className="text-white">Layout 1</a></li>
                        <li><a href="#testimonial_2" className="text-white">Layout 2</a></li>
                    </ul>
                </nav>
            </SectionContainer>
        </header>
    );
}

export default Header;
