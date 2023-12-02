import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque alias quod laboriosam totam dolorem dolor quisquam eveniet sed quis porro repellat optio quam aperiam commodi placeat, laborum fugit voluptatibus cumque. Doloribus architecto illum laudantium dolor nisi! Adipisci labore officiis molestias impedit, vel excepturi in, itaque expedita praesentium beatae quidem distinctio?</p>
            <p>Go back <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;