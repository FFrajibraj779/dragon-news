import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShare } from "react-icons/fa";

const NewsDetails = ({ news }) => {

    const { author, details, image_url, title, _id } = news;
    const { name, published_date, img } = author;

    return (
        <div>
            <Card className="">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex gap-3'>
                        <Image variant="top" roundedCircle style={{ height: "60px", width: '50px' }} src={img ? img :'not found'} />
                        <div className=''>
                            <p className='mb-0'>{name ? name :'system'}</p>
                            <p>{published_date ? published_date :'not found'}</p>
                        </div>
                    </div>

                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShare></FaShare>
                    </div>

                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length > 250 ? <p>{details.slice(0, 200) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
                                : <p>{details}</p>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>

        </div>
    );
};

export default NewsDetails;