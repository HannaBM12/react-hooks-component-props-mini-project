import React from 'react';

function makeEmoji(minuets){
    const interval = minuets < 30? 5: 10;
    const emoji = minuets < 30? "☕️": '🍱 ';

    let emojis = '';
    for (let i=0; i<minuets; i+=interval){
        emojis +=emoji;
    }
    return emojis;
}

function Article({
    title,
    date = "January 1, 1970",
    preview,
    minuets
}){
    const emojis = makeEmoji(minuets)
    return(
        <>
        <h3>{title}</h3>
        <small>{date} ...   {emojis}{minuets}min read</small>
        <p>{preview}</p>
        </>
    );
}
export default Article;