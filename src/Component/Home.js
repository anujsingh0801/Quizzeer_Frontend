import React, {useEffect} from 'react'

const Home = () => {

    useEffect(()=>{
        document.title = "Home || Quizzeer"
    }, []);

    return (
        <h1>
            Testing for home page. Will Add something in future;
        </h1>
    )
}

export default Home;