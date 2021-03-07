import React from "react";
import PhotoLayout from '../components/photoLayout'
import garden from "../images/IMG_0804-1.jpg";

export const SiteIndex = () => {
    return (
        <PhotoLayout>
            <section>
                <p className="align-center">Welcome, and please excuse the mess whilst I begin the migration back to analog.</p>
            </section>
            <img src={garden} alt="Koanga poppies"/>
        </PhotoLayout>
    )
}
