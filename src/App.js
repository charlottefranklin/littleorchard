import React from "react"
import './App.scss'

import PhotoLayout from "./components/photoLayout"
import garden from "./images/IMG_0804-1.jpg";

export default function Main() {
    return <PhotoLayout>
        <section><h1>A New Zealand home gardener's notebook</h1></section>
        <img src={garden} alt="Koanga poppies"/>
    </PhotoLayout>
}
