import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { app_name,base_url } from '../constant/Constants';
import { capitalize } from '../globle/GlobleFun';


const News =(props)=> {

    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(true);
    const [page,setPage] = useState(1);
    const [totalResults,setTotalResults] = useState(0);

    const updateNews= async ()=> {
        //console.log(props)
        //console.log(props.apikey)
        props.setProgress(10);
        const api_url = `${base_url}?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(api_url);
        props.setProgress(30);
        let parseData = await data.json()
        props.setProgress(70);
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        
        props.setProgress(100);

    }

    useEffect(()=>{
        document.title = `${capitalize(props.category)} - ${app_name}`
        updateNews();
    },[])


    const handlePrevClick = async () => {
        console.log("Prev")
        setPage(page-1)
        updateNews()
        
    }

    const handleNextClick = async () => {
        console.log("Next")
        setPage(page+1)
        updateNews()

    }

    const fetchMoreData = async ()=>{
        setPage(page+1)
        const api_url = `${base_url}?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        //this.setState({ loading: true })
        let data = await fetch(api_url);
        let parseData = await data.json()
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
        setLoading(false)

    }

    
        return (
            <>
                <h1 className='text-center'>{app_name} - Top headlines</h1>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                >
               <div className="container">
                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItems title={element.title.slice(0, 40)} description={element.description != null ? element.description.slice(0, 60) : ''} imageUrl={element.urlToImage} url={element.url}
                                author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>

                    })}
                </div>
                </div>
                </InfiniteScroll>
                
            </>
        )
    
}

News.defaultProps = {
    country: "in",
    pageSize: 20,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
