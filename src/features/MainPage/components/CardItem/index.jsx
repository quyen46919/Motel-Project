
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import React from "react";
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 315
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
}));

export default function CardItem({img}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  return (
    <Card className={`${classes.root} card-item`} >
      <CardMedia
        className={classes.media}
        image={img}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="button" gutterBottom>
            Cho thuê 1 phòng trọ tại K544/16 Đường 2/9 Quận Hải Châu (chỉ nữ)
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          2.500.000 VND
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="card-item__card--action">
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
