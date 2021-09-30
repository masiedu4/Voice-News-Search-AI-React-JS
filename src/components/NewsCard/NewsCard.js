/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 29/09/2021 - 23:05:57
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 29/09/2021
 * - Author          : Michael
 * - Modification    :
 **/
import React, { useState, useEffect, createRef } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import classNames from "classnames";

import useStyles from "./styles";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
  activeArticle,
}) => {
  const classes = useStyles();

  // articles scroll code below
  const [elRefs, setElRefs] = useState([]);

  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <Card
      ref={elRefs[i]}
      className={classNames(
        classes.card,
        activeArticle === i ? classes.activeCard : null
      )}
    >
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            `https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_b4d19ef76d0539e1fb35e42c2565501a/newsapi-ai.png`
          }
        />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {" "}
            {new Date(publishedAt).toDateString()}{" "}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {" "}
            {source.name}{" "}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">
          {" "}
          {title}{" "}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {" "}
            {description}{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          {" "}
          Read more
        </Button>
        <Typography variant="h5" color="textSecondary">
          {" "}
          {i + 1}{" "}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
