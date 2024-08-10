
import Like from "@/components/LayoutComponents/Like";
import Link from "next/link";
import Pcomment from "@/components/LayoutComponents/Pcomment";
import { api, date} from '@/app/Contexts'
import { Pshare, Share } from "@/components/LayoutComponents/Pshare";
import { redirect } from "next/navigation";
import ReadTime from "@/components/LayoutComponents/ReadTime";

async function getPostData(post) {
  const res = await fetch(`${api}/api/p/${post}`, {
    headers: {
      cache: 'no-store',
      credentials: 'include',
    }
  });
  if(!res.ok){
    redirect("/404")
  }
  return res.json();
}

export default async function Page({ params: { post } }) {
  const [postcontent] = await Promise.all([getPostData(post)])

  const { pubinfo, month, year } = date(postcontent?.createdAt, postcontent?.updatedAt);
  const url = `${process.env.NEXT_PUBLIC_URL}/p/${postcontent.url}`;
  return (
    <div className="widget Blog" data-version={2} id="Blog1">
      <div className="blogPts">
        <article id="article" className="ntry ps post">

          <div className="brdCmb" itemScope="itemscope" itemType="https://schema.org/BreadcrumbList">
            <div className="hm" itemProp="itemListElement" itemScope="itemscope" itemType="https://schema.org/ListItem">
              <Link href="/" itemProp="item"><span itemProp="name">Home</span></Link>
              <meta content={1} itemProp="position" />
            </div>
            {postcontent.categories[0] ?
              <div className="lb" itemProp="itemListElement" itemScope="itemscope" itemType="https://schema.org/ListItem">
              <Link href={postcontent.categories[0]} itemProp="item"><span itemProp="name">{postcontent.categories[0]}</span></Link>
              <meta content={2} itemProp="position" />
            </div>: <></>}
          </div>
          <h1 className="pTtl aTtl sml itm">
            <span>
              {postcontent.title}
            </span>
          </h1>
          <div className="pDesc">{postcontent.description}</div>
          <div className="pInf pSml ps">
            <div className="pIm">

              <div className="im lazy lazy loaded" data-style={`background-image: url(${postcontent.author?.avatar.url})`} lazied="true" style={{ backgroundImage: `url(${postcontent.author?.avatar.url})` }}>
              </div>
            </div>
            <div className="pNm">
              <bdi className="nm" data-text={postcontent.author?.name || "Anonymous"} />
              <div className="pDr">
                <bdi className="pDt pIn">
                  <time className="aTtmp pTtmp upd" data-date={pubinfo} data-text={`${month}, ${year}`} dateTime={postcontent.updatedAt} title={`${pubinfo} ${month}, ${year}`} />
                </bdi>
                <div className="pRd pIn"><ReadTime content={postcontent.content}/></div>
              </div>
            </div>
            <div className="pCm">
              <div className="pIc" >
                <Like postId={postcontent._id} postLikes={postcontent.likes} />
                <label className="cmnt tIc" data-text={postcontent.comments?.length} htmlFor="forComments">
                  <svg className="line" viewBox="0 0 24 24"><g transform="translate(2.000000, 2.000000)"><path d="M17.0710351,17.0698449 C14.0159481,20.1263505 9.48959549,20.7867004 5.78630747,19.074012 C5.23960769,18.8538953 1.70113357,19.8338667 0.933341969,19.0669763 C0.165550368,18.2990808 1.14639409,14.7601278 0.926307229,14.213354 C-0.787154393,10.5105699 -0.125888852,5.98259958 2.93020311,2.9270991 C6.83146881,-0.9756997 13.1697694,-0.9756997 17.0710351,2.9270991 C20.9803405,6.8359285 20.9723008,13.1680512 17.0710351,17.0698449 Z"></path></g></svg>
                </label>
                <label className="sh tIc" htmlFor="forShare">
                  <svg className="line" viewBox="0 0 24 24"><path d="M92.30583,264.72053a3.42745,3.42745,0,0,1-.37,1.57,3.51,3.51,0,1,1,0-3.13995A3.42751,3.42751,0,0,1,92.30583,264.72053Z" transform="translate(-83.28571 -252.73452)" /><circle cx="18.48892" cy="5.49436" r="3.51099" /><circle cx="18.48892" cy="18.50564" r="3.51099" /><line className="cls-3" x1="12.53012" x2="8.65012" y1="8.476" y2="10.416" /><line className="cls-3" x1="12.53012" x2="8.65012" y1="15.496" y2="13.556" /></svg>
                </label>
              </div>
            </div>
          </div>
          <div className="pInr">
            <div className="pAd">
            </div>
            <div className="pEnt" id={postcontent._id}>
              <div className="pS post-body postBody" id="postBody" dangerouslySetInnerHTML={{ __html: postcontent.content }} />

              <div className="pAd">
              </div>
              <Pshare link={url} />
            </div>
          </div>
        </article>
        <div className="pFoot">
          <input className="shIn fixi hidden" id="forShare" type="checkbox" />
          <Share link={url} title={postcontent.title} image={postcontent.image} />
          <div className="rPst" id="rPst">
          </div>
          <Pcomment pcomment={postcontent} />
        </div>
      </div>
    </div>
  )

}
export async function generateMetadata({ params: { post } }) {
  const [postcontent] = await Promise.all([getPostData(post)])
  return {
    title: `${postcontent.title}`,
    description: `${postcontent.description}`,
    keywords: `${postcontent.tags}`,
  };
}