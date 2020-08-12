import React from 'react';
import styles from './form.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';



const Form = ({setCategory}) => {

    //Create options
    const OPTIONS = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Business'},
        { value: 'entertainment', label: 'Entertainment'},
        { value: 'health', label: 'Health'},
        { value: 'science', label: 'Science'},
        { value: 'sports', label: 'Sports'},
        { value: 'technology', label: 'Technology'}
    ];



    //Use custom hook
    const [category, NewsSelect] = useSelect('general', OPTIONS); //pass 'general' so when it iniciate it will show that, and the OPTIONS
   
    
    // When user press SUBMIT→pass category to app.js
    const searchNews = e => {
        e.preventDefault();
        setCategory(category) //pass the category chosen
    }


    return ( 
        <div className={`${styles.search} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={searchNews}
                >
                    <h2 className={styles.heading}>Find News By Category</h2>
                    <NewsSelect />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Form.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default Form;