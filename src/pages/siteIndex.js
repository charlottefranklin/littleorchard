import React from "react";
import PhotoLayout from '../components/photoLayout'
import garden from "../components/navigation/unused/garden";

export const SiteIndex =() => {
    return(
   <PhotoLayout>
            <section><h1>A New Zealand home gardener's notebook</h1></section>
            <img src={garden} alt="Koanga poppies"/>
        </PhotoLayout>
    )
}
