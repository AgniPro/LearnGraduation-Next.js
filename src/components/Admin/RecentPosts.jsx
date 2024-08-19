import { api, date } from "@/app/Contexts";
import Link from "next/link";
import Like from "../LayoutComponents/Like";
import style from '../../app/admin/dashboard.module.css';
import DeleteBtn from "./DeleteBtn";

async function getPostData(skip,limit) {
    skip = skip || 0;
    limit = limit ||0;
    const res = await fetch(`${api}/api/get-posts?skip=${skip}&limit=${limit}`, {
        method: 'GET',
        next: { revalidate: 0 },
        headers: {
            'Content-Type': 'application/json',
            'cache-control': 'no-cache',
        },
    });
    return res.json();
}

const RecentPosts = async ({limit,skip}) => {
    const postData = await getPostData(skip,limit);
    if(postData.length === 0){ return <div>No Posts Found</div>}
    return (
        <div style={{ width: '380px' }}>
            <span className="aTtl">All Posts</span>
            {postData?.map((item) => {
                const { pubinfo, month, year } = date(item.createdAt, item.updatedAt);
                return (
                    <article key={item._id} className={`ntry ${style.adminAll}`}>
                        <div className={`pThmb ${style.pThmb}`}>
                            <Link className={`thmb ${style.thmb}`} href={"/admin/edit-post?purl=" + item.url} >
                                <img alt={item.title} className={`imgThm lazy loaded ${style.img}`} data-src={item.image} src={item.image} lazied="true" />
                            </Link>

                            <div className="iFxd">
                                <Like postId={item._id} postLikes={item.likes} />

                                {item.comments.length > 0 ?
                                    <Link aria-label="Comments" className="cmnt" data-text={item.comments.length} href={"/p/" + item.url + "#comments"} role="button">
                                        <svg className="line" viewBox="0 0 24 24"><g transform="translate(2.000000, 2.000000)"><path d="M17.0710351,17.0698449 C14.0159481,20.1263505 9.48959549,20.7867004 5.78630747,19.074012 C5.23960769,18.8538953 1.70113357,19.8338667 0.933341969,19.0669763 C0.165550368,18.2990808 1.14639409,14.7601278 0.926307229,14.213354 C-0.787154393,10.5105699 -0.125888852,5.98259958 2.93020311,2.9270991 C6.83146881,-0.9756997 13.1697694,-0.9756997 17.0710351,2.9270991 C20.9803405,6.8359285 20.9723008,13.1680512 17.0710351,17.0698449 Z"></path></g></svg>
                                    </Link>
                                    : <></>}
                            </div>
                        </div>
                        <div className={`pCntn ${style.pCntn}`}>
                            <div className="pHdr pSml">
                                {item.categories[0] ? (
                                    <div className="pLbls" data-text="in ">
                                        <Link aria-label={item.categories[0]} data-text={item.categories[0]} href={"/search/" + item.categories[0]} rel="tag">
                                        </Link>
                                        {item.categories[1] ? <Link aria-label={item.categories[1]} data-text={item.categories[1]} href={"/search/" + item.categories[1]} rel="tag"></Link> : <></>}
                                    </div>) : <></>}
                            </div>
                            <h2 className="pTtl aTtl sml">
                                <Link className={style.ttle} data-text={item.title} href={"/admin/edit-post?purl=" + item.url} rel="bookmark">
                                    {item.title}
                                </Link>
                            </h2>
                            <div className="pInf pSml">
                                <time className="aTtmp pTtmp pbl" data-text={`${month}, ${year}`} dateTime={item.updatedAt} title={`${pubinfo} ${month}, ${year}`} />
                                <Link aria-label="Edit ✏️" className="pJmp" data-text="Edit" href={"/admin/edit-post?purl=" + item.url}></Link>
                            </div>
                        </div>
                        <DeleteBtn postId={item._id} itemType="post"/>
                    </article>
                )
            })}
            {postData.length === limit & limit>4 ? <div className="blogPg" id="blogPager"><button aria-label="Load more posts" id="loadmorepost" className="jsLd" data-text="Load more posts" /></div> : <></>
            }
        </div>
    );
};
export default RecentPosts;
