/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 29/09/2021 - 22:58:21
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 29/09/2021
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";

import useStyles from "./styles";
import NewsCard from "../NewsCard/NewsCard";

const infoCards = [
  { color: "#c6d8d3", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#c6d8d3",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#c6d8d3",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#c6d8d3",
    title: "News by Sources",
    info: "CNN News, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me updates from CNN News",
  },
];

const NewsCards = ({ articles , activeArticle }) => {
  const classes = useStyles();
  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          classname={classes.container}
          container
          alighItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              {" "}
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                {" "}
                <Typography variant="h5"> {infoCard.title}</Typography>
                {infoCard.info ? (
                  <Typography variant="h6">
                    <strong>
                      {" "}
                      {infoCard.title.split(" ")[2]} : <br /> {infoCard.info}{" "}
                    </strong>
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  {" "}
                  Say : <br /> <i> {infoCard.text}</i>{" "}
                </Typography>
              </div>{" "}
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
  return (
    <Grow in>
      <Grid
        classname={classes.container}
        container
        alighItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} i={i} activeArticle={activeArticle} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
