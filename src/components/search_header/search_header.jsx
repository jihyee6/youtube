import styles from './search_header.module.css'
import React, { memo, useRef } from 'react';

const SearchHeader =  memo(({ onSearch }) => {
        const inputRef = useRef();
        const handleSearch = () =>{
            const value = inputRef.current.value;
            onSearch(value);
        }
        const onClick = () =>{
            handleSearch();
        }
        const onkeyPress = event => {
            if(event.key ==='Enter'){
                handleSearch();
            }
        }
        return(
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img className={styles.img} src="/images/logo.png" alt="logo" />
                    <h1 className={styles.title}>Youtube</h1>
                </div>
                <input 
                    ref={inputRef}
                    className={styles.input} 
                    type="search" 
                    placeholder='search...' 
                    onKeyPress={onkeyPress}
                />
                <button type='submit' className={styles.button} onClick={onClick}>
                    <img 
                        className={styles.buttonImg} 
                        src="/images/search.png" 
                        alt="search" 
                    />
                </button>
            </header>
        )
    }
);

export default SearchHeader;