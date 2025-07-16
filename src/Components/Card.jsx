import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './componentstyle.css'

export default function ImgMediaCard({title,body,image,href,page,namehref}) {
  return (
    <Card sx={{ maxWidth: 545 }} className='card' >
      <CardMedia
      style={{height:'14rem'}}
        component="img"
        alt="green iguana"
        height="150"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{backgroundColor:'#1976D2',color:'white'}} href={href} size="small">{namehref}</Button>
      </CardActions>
    </Card>
  );
}