import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const allNews = useLoaderData();

    const{title, image_url, _id, details, category_id } = allNews;
    return (
        <div>


            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                       {details}
                    </Card.Text>
                    <Button variant=""> <Link to={`/category/${category_id}`}>all news</Link></Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>

        </div>
    );
};

export default News;