'use client';
import React, { useEffect, useState } from 'react';
import { api, date } from '@/app/Contexts';
import toast from 'react-hot-toast';
import avatarDefault from "../../../public/assets/avatar.png";
import { useGetUserQuery } from '@/lib/services/auth';
import DeleteBtn from '../Admin/DeleteBtn';
import { Verified } from '../Svg/SvgIcons';

function Pcomment(props) {
    const { data, refetch, isSuccess, error } = useGetUserQuery();
    const [user, setUser] = useState("");
    const [cmntType, setCmntType] = useState('reply');
    const [replyID, setReplyId] = useState('');
    const [loading,setLoading]= useState(false);
    useEffect(() => {
        if (data && isSuccess) {
            setUser(data.user.name);
        }
    }, [data, isSuccess, error]);

    useEffect(() => {
        if (Array.isArray(props.pcomment.comments)) {
            setCcontent(props.pcomment.comments);
        }
    }, [props.pcomment]);

    const [cContent, setCcontent] = useState([]);

    const submitComment = async (replyToId = null) => {
        let content = document.getElementById('addComment').value;
        if (!content) {
            toast.error('Write something to comment');
            return;
        }
        setLoading(true); 
        try {
            const endpoint = cmntType === 'reply'
                ? `${api}/api/p/${props.pcomment._id}/comment/${replyToId}/reply`
                : `${api}/api/p/${props.pcomment._id}/comment`;

            const response = await fetch(endpoint, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify({ content })
            });

            const data = await response.json();
            if (response.ok) {
                toast.success("Comment posted");
                setLoading(false);
                setCcontent(data.comments);
                document.getElementById('addComment').value = "";
            } else {
                toast.error(data.message || "Please try again later");
                setLoading(false);
            }
        } catch (error) {
            toast.error("Something went wrong");
            setLoading(false);
        }
    };

    const login_toComment = () => {
        if (user) {
            setCmntType('comment');
            return
        }
        toast.error("Login to Comment")
    };

    return (
        <div className="pCmnts" id="comment">
            <input className="cmSh fixi hidden" id="forComments" type="checkbox" />
            <input className="cmAl hidden" id="forAllCm" type="checkbox" />
            <div className="cmShw">
                <label className="cmBtn button ln" htmlFor="forComments">
                    <span>Join the conversation</span>
                </label>
            </div>
            <section className="cm cmBr fixL" data-embed="true" data-num-comments={1} id="comments">
                <div className="cmBri">
                    <div className="cmBrs fixLs">
                        <div className="cmH fixH">
                            <h3 className="title">
                                Comment
                            </h3>
                            <div className="cmI cl">
                                <label aria-label className="s" data-new="Newest" data-text="Oldest" htmlFor="forAllCm" />
                                <label aria-label="Close" className="c" htmlFor="forComments" />
                            </div>
                        </div>
                        <div className="cmC">
                            <div className="cmCn">
                                <ol className="cmHl" id="cmHolder">

                                    {cContent?.slice(0, 10).map(comment => {
                                        const { month } = date(comment?.createdAt, comment?.updatedAt);
                                        return (

                                            <li className="c" key={comment._id} id={comment._id}>
                                                <div className="cmAv">
                                                    <div className="im lazy loaded" lazied="true" style={{ backgroundImage: `url(${comment.author?.avatar ? comment.author?.avatar.url : avatarDefault.src})` }}>
                                                    </div>
                                                </div>
                                                <div className="cmIn">
                                                    <div className="cmBd" itemScope="true" itemType="https://schema.org/Comment">
                                                        <div className="cmHr">
                                                            <span className="n" itemProp="author" itemScope='true' itemType="https://schema.org/Person">
                                                                <bdi itemProp="name">
                                                                    {comment.author?.name ? comment.author.name : "Unknown"} {comment.author?.role === 'admin' ? <Verified/> : ''}
                                                                </bdi>
                                                            </span>
                                                            <span className="d dtTm" data-datetime={new Date(comment?.createdAt).toISOString()} content={new Date(comment?.createdAt).toISOString()} itemprop="datePublished">&#183; {month}</span>
                                                        </div>
                                                        <div className="cmCo" itemProp="text">
                                                            {comment.content}
                                                        </div>

                                                    </div>
                                                    <input className="cmRi hidden" id={'to-' + comment._id} type="checkbox" />
                                                    <div className="cmRp">
                                                        {comment?.replies?.length > 0 ? (
                                                            <div className="cmTh" id={comment._id + 'replies'}>
                                                                <label aria-label={`View ${comment.replies.length} replies`} className="thTg" data-text="Hide replies" htmlFor={'to-' + comment._id} />
                                                                <ol className="thCh">
                                                                    {comment.replies.map(rpComment => {
                                                                        const { month } = date(rpComment?.createdAt, rpComment?.updatedAt);
                                                                        return (<li className="c" id={`c${rpComment._id}`}>
                                                                            <div className="cmAv">
                                                                                <div className="im" data-style={`background-image: url(${rpComment.author?.avatar ? rpComment.author.avatar.url : avatarDefault.src})`} lazied="true" style={{ backgroundImage: `url(${rpComment.author?.avatar ? rpComment.author.avatar.url : avatarDefault.src})` }}>
                                                                                </div>
                                                                            </div>
                                                                            <div className="cmIn">
                                                                                <div className="cmBd" itemScope="itemscope" itemType="https://schema.org/Comment">
                                                                                    <div className="cmHr">
                                                                                        <span className="n" itemProp="author" itemScope="itemscope" itemType="https://schema.org/Person">
                                                                                            <bdi itemProp="name">{rpComment.author?.name? rpComment.author.name : "Unknown"} {rpComment.author?.role === 'admin' ? <Verified/> : ''}</bdi>
                                                                                        </span>
                                                                                        <span className="d dtTm" data-datetime={new Date(rpComment?.updatedAt).toISOString()}>{month}</span>
                                                                                    </div>
                                                                                    <div className="cmCo" itemProp="text">
                                                                                        {rpComment.content}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {user && data.user.role === 'admin' ? (
                                                                                <label className="cmAv" style={{ right: '12px', left: 'unset' }}>
                                                                                    <DeleteBtn setCcontent={setCcontent} commentId={comment._id} replyId={rpComment._id} itemType="reply" postId={props.pcomment._id} />
                                                                                </label>) : ''}
                                                                        </li>
                                                                        )
                                                                    })}
                                                                </ol>
                                                            </div>
                                                        ) : (
                                                            <></>
                                                        )}

                                                        <div className={`cmAc ${comment?.replies?.length > 0 ? 'cmR' : ''}`}>
                                                            {user && cmntType === 'reply' && replyID === comment._id ? (
                                                                <div className="cmFrm" id={"comment-reply"}>
                                                                    <label htmlFor="addComment">Comment as {user}</label>
                                                                    <textarea minLength={5} maxLength={250} name="addComment" id="addComment" cols="1" rows="1" />
                                                                    <button className='button' role='button' onClick={() => submitComment(comment._id)} loading={loading}>{loading ? 'Publishing...' : 'Publish'}</button>
                                                                </div>
                                                            ) : (
                                                                <a
                                                                    aria-label="Reply"
                                                                    className="rpTo"
                                                                    onClick={() => { setReplyId(comment._id); setCmntType('reply') }}
                                                                    data-text="Reply"
                                                                    href="javascript:;"
                                                                    target="_self"
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                {user && data.user.role === 'admin' ? (
                                                    <label className="cmAv" style={{ right: '12px', left: 'unset' }}>
                                                        <DeleteBtn setCcontent={setCcontent} commentId={comment._id} itemType="comment" postId={props.pcomment._id} />
                                                    </label>) : ''}
                                            </li>
                                        )
                                    })}
                                </ol>
                            </div>
                        </div>
                        <div className="cmAd" id="addCm">
                            {user && cmntType === 'comment' ? (
                                <div className="cmFrm" id="commentForm">
                                    <label htmlFor="addComment">Comment as {user}</label>
                                    <textarea minLength={5} maxLength={250} name="addComment" id="addComment" cols="1" rows="1" />
                                    <button className='button' role='button' onClick={submitComment} loading={loading}>{loading ? 'Publishing...' : 'Publish'}</button>
                                </div>)
                                : (<div className="cmAd " id="addCm">
                                    <div aria-label="Berkomentar" className="cmBtn button ln" role="button" onClick={login_toComment}>
                                        Post a Comment
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <label className="fCls" htmlFor="forComments" />
            </section >
        </div >

    )
}
export default Pcomment;


