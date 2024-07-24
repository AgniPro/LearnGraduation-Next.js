'use client';
import { api,date } from "@/app/Contexts";
import Link from "next/link";
import React,{useState} from "react";   
import { CardLoading } from "../LayoutComponents/CardLodaing";
import Like from "../LayoutComponents/Like";

function LattestPost(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [homedata, setHomedata] = useState(props.postData || setIsLoading(true));
    const [loadbtn, setLoadbtn] = useState("Load more posts");
    if (props.postData === undefined) {
        setIsLoading(true);
    }
    const homecontent = async (skip) => {
        const response = await fetch(api+"/api/get-posts?skip=" + skip, {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        setIsLoading(false);
        if (!response.ok) {
            setLoadbtn("something went wrong");
        } else {
            setHomedata(prevData => [...prevData, ...data]);
            if (data.length == 0) {
                setLoadbtn("No More Post");
            }
        }
    };

    const handlescroll = () => {
        const skip = homedata.length;
        if (loadbtn === "No More Post") {
            return;
        }
        homecontent(skip);
    };

    return (
        <div className="widget Blog" data-version={2} id="Blog1">
            <div className="blogTtl hm">
                <h3 className="title">Latest Posts</h3>
            </div>
            {isLoading ? <CardLoading /> : <>
                <div className="blogPts">
                    {homedata?.map((item) => {
                        const { pubinfo, month, year } = date(item.createdAt, item.updatedAt);
                        return (
                            <article key={item._id} className="ntry">
                                <div className="pThmb">
                                    <Link className="thmb" href={"/p/" + item.url} >
                                        <img alt={item.title} className="imgThm lazy loaded" data-src={item.image} src={item.image} lazied="true" />
                                    </Link>

                                    <div className="iFxd">
                                        <Like postId={item._id} postLikes={item.likes}/>

                                        {item.comments.length>0 ?
                                            <Link aria-label="Comments" className="cmnt" data-text={item.comments.length} href={"/p/" + item.url + "#comments"} role="button">
                                                <svg className="line" viewBox="0 0 24 24"><g transform="translate(2.000000, 2.000000)"><path d="M17.0710351,17.0698449 C14.0159481,20.1263505 9.48959549,20.7867004 5.78630747,19.074012 C5.23960769,18.8538953 1.70113357,19.8338667 0.933341969,19.0669763 C0.165550368,18.2990808 1.14639409,14.7601278 0.926307229,14.213354 C-0.787154393,10.5105699 -0.125888852,5.98259958 2.93020311,2.9270991 C6.83146881,-0.9756997 13.1697694,-0.9756997 17.0710351,2.9270991 C20.9803405,6.8359285 20.9723008,13.1680512 17.0710351,17.0698449 Z"></path></g></svg>
                                            </Link>
                                            : <></>}
                                    </div>
                                </div>
                                <div className="pCntn">
                                    <div className="pHdr pSml">
                                        <div className="pLbls" data-text="in">
                                            <Link aria-label="Bsc" data-text="Bsc" href={"https://learngraduation.blogspot.com/search/label/Bsc"} rel="tag">
                                            </Link>
                                            <Link aria-label="Mathematics" data-text="Mathematics" href="https://learngraduation.blogspot.com/search/label/Mathematics" rel="tag">
                                            </Link>
                                        </div>
                                    </div>
                                    <h2 className="pTtl aTtl sml">
                                        <Link data-text={item.title} href={"/p/" + item.url} rel="bookmark">
                                            {item.title}
                                        </Link>
                                    </h2>
                                    <div className="pSnpt">
                                        {item.description}
                                    </div>
                                    <div className="pInf pSml">
                                        <time className="aTtmp pTtmp pbl" data-text={`${month}, ${year}`} dateTime={item.updatedAt} title={`${pubinfo} ${month}, ${year}`} />
                                        <Link aria-label="Read more" className="pJmp" data-text="Keep reading" href={"/p/" + item.url}></Link>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
        <div className="blogPg" id="blogPager"><button aria-label={loadbtn} id="loadmorepost" className="jsLd" data-text={loadbtn} onClick={handlescroll} /></div>
            </>}
        </div>
    );
}
export default LattestPost;