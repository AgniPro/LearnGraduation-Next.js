'use client';
import { useEffect, useState } from "react";
import { api } from "@/app/Contexts";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function Like(props) {
  const [post, setPost] = useState(props.postId);
  const [isLiked, setIsLiked] = useState(false);
  const [likeNumber,setLikeNumber] = useState(props.postLikes?.length);
  useEffect(() => {
    const uid = Cookies.get('uid')
    if (props.postLikes?.includes(uid)) {
      setIsLiked(true);
    }
    setPost(props.postId)
  }, [props.postId]);

  const submitLike = async () => {
    setIsLiked(!isLiked);
    try {
      const likeresponse = await fetch(`${api}/api/p/${post}/like`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: "include"
      });
      if (likeresponse.ok) {
        const likemessage = await likeresponse.json();
        toast.success(likemessage.message);
        if (likemessage.message==="Like has been removed.") {
          setLikeNumber(likeNumber-1)
        } else {
          setLikeNumber(likeNumber+1)
        }
      }else{
        toast.error('Login to Like')
      }
    } catch (error) {
      toast.error('Some thing went wrong')
    }
  };

  return (
    <label htmlFor={post} className="cmnt" data-text={likeNumber} onClick={submitLike}>
      <button className={`like-button ${isLiked ? 'like-active' : ''}`} title="Like" type="button" name={props.postId}>
        <div className="like-wrapper" >
          <svg className="heart" width={24} height={24} viewBox="0 0 24 24" >
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
          </svg>
          <div className="particles likea">
            <div className="particle likeb" />
            <div className="particle likec" />
            <div className="particle liked" />
            <div className="particle likee" />
            <div className="particle likef" />
            <div className="particle likeg" />
          </div>
        </div>
      </button>
    </label>
  );
} export default Like;