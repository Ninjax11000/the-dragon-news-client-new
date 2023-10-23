import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import QZone from '../Qzone/Qzone';
import bg from '../../assets/bg1.png'
const RightNav = () => {
    return (
        <div >
            <h4 className='fw-bold'>Login With</h4>
            <Button className='mb-2 w-75' variant="outline-primary"><FaGoogle className='me-2 mb-1' />Login with Google</Button>
            <Button className='w-75' variant="outline-secondary"><FaGithub className='me-2 mb-1' />Login with Github</Button>
            <h4 className='my-3 fw-bold '>Find us on</h4>
            <ListGroup>
                <ListGroup.Item action><Link className='link-underline link-underline-opacity-0'><FaFacebook className='me-2 mb-1' />Facebook</Link></ListGroup.Item>
                <ListGroup.Item action><FaWhatsapp className='me-2 mb-1' />Whatsapp</ListGroup.Item>
                <ListGroup.Item action><FaTwitter className='me-2 mb-1' />Twitter</ListGroup.Item>
                <ListGroup.Item action><FaTwitch className='me-2 mb-1' />Twitch</ListGroup.Item>

            </ListGroup>
            <div className='bg-secondary-subtle my-5'>
                <QZone></QZone>
            </div>
            <div className='position-relative'>

                <img className='w-100  ' src={bg} alt="" />
                <div className='position-absolute top-50 start-50 translate-middle text-white'>
                    <h4 className=' fw-bold fs-2'>Create an Amazing Newspaper</h4>
                    <p className=' my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <div className='bg-danger mx-2 px-3 py-1  '>
                        <p className='fs-5 fw-normal my-1 fw-bold'>Learn More</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightNav;