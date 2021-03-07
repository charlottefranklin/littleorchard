import React from "react";
import PhotoLayout from '../components/photoLayout'
import garden from "../images/IMG_0804-1.jpg";

export const SiteIndex = () => {
    return (
        <PhotoLayout>
            <section>
                <p className="align-center">Hello, and please excuse the mess whilst the renovations are underway.</p>
            </section>
            <img src={garden} alt="Koanga poppies"/>
        </PhotoLayout>
    )
}
