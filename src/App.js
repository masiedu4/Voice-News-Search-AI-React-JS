/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 28/09/2021 - 23:23:53
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 28/09/2021
 * - Author          : Michael
 * - Modification    :
 **/
import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import wordsToNumbers from "words-to-numbers";

import useStyles from "./styles";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: "7cb8ac3fa9e1f319c26b0c5f42bf42e72e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          console.log(articles);
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText("please try that again");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText('Opening the article for you')
          }
        }
      },
    });
  }, []);

  return (
    <div style={{backgroundColor: "#c6d8d3" , margin: "15px"} }>
      <div className="header">
        <h2 > Voice News Search - AI </h2>
       
      </div>
      <div className={classes.logoContainer}>
        <img
          src="https://static.voices.com/wp-content/uploads/2019/02/MR_3006-SyntheticVoiceGuide.jpg"
          className={classes.alanLogo}
          alt="alan logo"
        />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
