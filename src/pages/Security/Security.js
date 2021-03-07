import React from 'react';
import {BookmarkDisplay} from "./Bookmarks/bookmarks-display";
import {bookmarksData} from "./Bookmarks/bookmarks-data";

import Layout from "../../components/layout";

const Security = () => {
    return (<Layout>
            <h1>Security</h1>
            <h2>Bookmarks</h2>
            <section>
                <h3>Books</h3>
                {bookmarksData.books.map((bookmark, i) => <BookmarkDisplay bookmark={bookmark} key={i}/>)}
                <h3>Calculators</h3>
                {bookmarksData.calculators.map((bookmark, i) => <BookmarkDisplay bookmark={bookmark} key={i}/>)}
                <h3>Conferences</h3>
                {bookmarksData.conferences.map((bookmark, i) => <BookmarkDisplay bookmark={bookmark} key={i}/>)}
                <h3>IOT</h3>
                {bookmarksData.iot.map((bookmark, i) => <BookmarkDisplay bookmark={bookmark} key={i}/>)}
                <h3>Protocols</h3>
                {bookmarksData.protocols.map((bookmark, i) => <BookmarkDisplay bookmark={bookmark} key={i}/>)}
                <h3>Papers</h3>
                {bookmarksData.papers.map((bookmark, i) => <BookmarkDisplay bookmark={bookmark} key={i}/>)}
                <h3>People</h3>
                {bookmarksData.people.map((bookmark, i) => <BookmarkDisplay bookmark={bookmark} key={i}/>)}
                <h3>Universities</h3>
                {bookmarksData.universities.map((bookmark, i) => <BookmarkDisplay bookmark={bookmark} key={i}/>)}
            </section>
        </Layout>
    )
}

export default Security;
