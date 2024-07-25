import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Rating from '@mui/material/Rating';
import Typography from '@mui/joy/Typography';
const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];
 const MovieCard = ({props}) => {
  const {
    backdrop_path,
    original_title,
    genre_ids,
    overview,
    vote_average,
    release_date
  } = props;
  return (
    <Card variant="soft" sx={{ width: 320, bgcolor:"#090A0A" }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md"  textColor={'white'}><strong>{props.original_title
        }</strong></Typography>
        <Typography level="body-sm" textColor={'white'}>{
          genres.filter((g) => genre_ids.includes(g.id)).map((g) => g.name).join(", ")
        }</Typography>
        <Typography level="body-xs" textColor={'gray'} >{overview.substring(0, 100)}</Typography>
        <Typography level="body-xs" textColor="white">

              {release_date.substring(0, 4)}
            </Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{  bgcolor:"#313434"  }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
         
            <Typography level="body-xs" fontWeight="md" textColor="white">
              <Rating name="half-rating-read" value={vote_average/2} precision={0.25}  readOnly />
            </Typography>
            <div className=' mt-1 '>
            <Typography fontSize='sm' fontWeight="md" textColor="white">
              {vote_average}
            </Typography>
          </div>
            
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
export default MovieCard;