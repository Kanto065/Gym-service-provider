import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h5>1. Difference between authorization and authentication</h5>
            <p>authorization is the process of verifying what specific applications, files, and data a user has access to whether authentication is the process of verifying who someone is.</p>
            <h5>2. Why are you using firebase? What other options do you have to implement authentication?</h5>
            <p>firebase is free to use. other authentication provider such as oAuth Client, oAuth Client, OpenID Connect, SAML IDP Provider.</p>
            <h5>3. What other services does firebase provide other than authentication</h5>
            <p>database, hosting, storage</p>
        </div>
    );
};

export default Blogs;