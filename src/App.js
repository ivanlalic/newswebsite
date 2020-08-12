import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/header';
import Form from './components/form';
import NewsList from './components/newslist';

function App() {

  //set Category and news
  const [category, setCategory] = useState('');

  //Create a state with news
  const [news, setNews] = useState([]);

  //Call API
  //Using useEffect will detect any change in "category" and will execute
  useEffect( ()=> {

    const callAPI = async () => {

      const URL=`https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=d156456776bc43bbb56ac27a15862c2c`
      const answer = await fetch(URL);
      const news = await answer.json();
      setNews(news.articles);
    }
    callAPI(); //Call the function to make the request

  }, [category] )




  return (
    <Fragment>
      <Header 
        title='News Site'
      />

      <div className="container white">
        <Form 
          setCategory={setCategory}
        />

        <NewsList 
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
