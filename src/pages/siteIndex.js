import React from "react";
import PhotoLayout from '../components/photoLayout'
import garden from "../images/IMG_0804-1.jpg";

export const SiteIndex = () => {
    return (
        <PhotoLayout>
            <section><h1>A New Zealand home gardener's notebook</h1></section>
            <img src={garden} alt="Koanga poppies"/>
        </PhotoLayout>
    )
}
