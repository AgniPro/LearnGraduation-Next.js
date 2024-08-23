import { date } from "../Contexts";
import Link from "next/link";

async function getPostData(searchTerm) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/search-posts?q=${searchTerm}`, {
    next: { revalidate: 0 },
    headers: {
      'Cache-Control': 'no-store',
      'credentials': 'include',
    }
  });
  if (!res.ok) {
    return [];
  }
  return res.json();
}

const Search = async ({ searchParams }) => {
  const searchTerm = searchParams.q;
  const [postcontent] = await Promise.all([getPostData(searchTerm)]);
  if (postcontent.length === 0) {
    return <div className="widget Blog" data-version="2" id="Blog1">
      <div className="blogTtl">
        <div className="t srch">
          <span data-text="Search: ">{searchTerm}</span>
        </div>
      </div>
      <div className="blogPts mty">
        <div className="noPosts">
          <h2>No result found...</h2>
          <p>Sorry 🙄, but nothing matched your search terms. Please try again with some different keywords.</p>
        </div>
      </div>
    </div>
  }
      return <>
        <div className="widget Blog" data-version="2" id="Blog1">
          <div className="blogTtl">
            <div className="t srch">
              <span data-text="Search: ">{searchTerm}</span>
            </div>
          </div>
          <div className="blogPts">
            {postcontent?.slice(0, 16)?.map((item) => {
              const { pubinfo, month, year } = date(item.createdAt, item.updatedAt);
              return (
                <article key={item._id} className="ntry noThmb">
                  <div className="pThmb">
                    <Link className="thmb" href={"/p/" + item.url}>
                      <img className="imgThm lazy loaded" data-src={item.image} src={item.image} alt={item.title} lazied="true" />
                    </Link>
                  </div>
                  <div className="pCntn">
                    <div className="pHdr pSml">
                    {item?.categories[0]?
                      <div className="pLbls" data-text="in ">
                        <Link aria-label={item.categories[0]} data-text={item.categories[0]} href={"/search?q="+item.categories[0]} rel="tag">
                        </Link>
                        {item.categories[1]?
                        <Link aria-label={item.categories[1]} data-text={item.categories[1]} href={"/search?q="+item.categories[1]} rel="tag">
                        </Link>:<></>}
                      </div>
                    :<></>}
                    </div>
                    <h2 className="pTtl aTtl sml">
                      <Link data-text={item.title} href={"/p/" + item.url} rel="bookmark">{item.title} </Link>
                    </h2>
                    <div className="pSnpt">
                      {item.description}
                    </div>
                    <div className="pInf pSml">

                      <time className="aTtmp pTtmp pbl" data-text={`${month}, ${year}`} dateTime={item.updatedAt} title={`${pubinfo} ${month}, ${year}`} />
                      <Link aria-label="Read more" className="pJmp" data-text="Keep reading" href={"/p/" + item.url}></Link>
                    </div>
                  </div>
                </article>)
            }
            )}
          </div>
        </div>
      </>
}
      export default Search;

      export const generateMetadata = ({searchParams}) => {
  const searchTerm = searchParams?.q;
      return {
        title: `Search - ${searchTerm}`,
      description: "LearnGraduation is owned and dev. by AgniPro",
      keywords: 'learnGraduation, AgniPro,learn graduation, under graduate , vbu ug , vbu graduation, vbu new syllabus, vbu FYUGP syllabus,VBU previous year question paper, vbu notes',
  };
};