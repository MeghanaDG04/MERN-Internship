import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import img1 from './img1.jpg';


export default function Cards() {
     const placeData = [
    {
      title: 'Murudeshwar',
      description:
        'Murudeshwar is a famous coastal town in Karnataka, known for the world’s second-tallest Shiva statue and the beautiful Arabian Sea views.',
      image: img1,
    },
  ];

  return (
    <div style={{display: 'flex', flexWrap: 'wrap',justifyContent: 'center' }}>
        {placeData.map((place) => (
        <Card sx={{ maxWidth: 700, m: 5 }}>
          <CardMedia
            component="img"
            height="450"
            image={place.image}
            alt={place.title}
          />

          <CardContent>
            <Typography gutterBottom variant="h4">
              <b>{place.title}</b>
            </Typography>

            <Typography variant="body3" sx={{ color: 'text.primary' }}>
              <h4>{place.description}</h4>
            </Typography>
          </CardContent>

          {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
      ))}
    </div>
    )
}
