import React from "react";

const Heading = ({ title, description, keywords }) => {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            <meta charSet="UTF-8" />
            <meta
                content="width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5"
                name="viewport"
            />
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta content="#ff0040" name="theme-color" />
            <meta content="#ff0040" name="msapplication-navbutton-color" />
            <meta content="#ff0040" name="apple-mobile-web-app-status-bar-style" />
            <meta content="true" name="apple-mobile-web-app-capable" />
           
        </>
    )
}

export default Heading;