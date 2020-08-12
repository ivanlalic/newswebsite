import React from 'react';
import News from './news';
import PropTypes from 'prop-types';

const NewsList = ({news}) => {
    return ( 
        <div className="row">
            {news.map(news => (
                <News 
                    key={news.url}
                    news={news}
                />
            ))}
        </div>
     );
}

NewsList.propTypes = {
    news: PropTypes.array.isRequired
}

export default NewsList;
