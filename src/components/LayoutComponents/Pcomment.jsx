'use client';
import React, { useEffect, useState } from 'react';
import { api, date } from '@/app/Contexts';
import toast from 'react-hot-toast';
import avatarDefault from "../../../public/assets/avatar.png";
import { useGetUserQuery } from '@/lib/services/auth';
import DeleteBtn from '../Admin/DeleteBtn';

function Pcomment(props) {
    const { data, refetch, isSuccess, error } = useGetUserQuery();
    const [user, setUser] = useState("");
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

    const submitComment = async () => {
        let content = document.getElementById('addComment').value;
        if (!content) {
            toast.error('write something to comment')
            return;
        }
        try {
            fetch(`${api}/api/p/${props.pcomment._id}/comment`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify({
                    content: content
                })
            }).then(response => response.json().then(data => {
                toast.success("Comment posted");
                setCcontent(data.comments);
                document.getElementById('addComment').value = ""
            })).catch(error => {
                toast.error("Please try again later")
            })
        } catch (error) {
            toast.error("Something went wrong");
        }
    }

    const login_toComment = () => {
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
                                                                    {comment.author?.name ? comment.author.name : "Unknown"} {comment.author?.role === 'admin' ? '✅' : ''}
                                                                </bdi>
                                                            </span>
                                                            <span className="d dtTm" data-datetime={new Date(comment?.createdAt).toISOString()} itemprop="datePublished">&#183; {month}</span>
                                                        </div>
                                                        <div className="cmCo" itemProp="text">
                                                            {comment.content}
                                                        </div>
                                                    </div>
                                                </div>
                                                {user && data.user.role === 'admin' ? (
                                                    <label className="cmAv" style={{ right: '12px', left: 'unset' }}>
                                                        <DeleteBtn setCcontent={setCcontent} itemId={comment._id} itemType="comment" postId={props.pcomment._id} />
                                                    </label>) : ''}
                                            </li>
                                        )
                                    })}
                                    <li className="c">
                                        {user ? (
                                            <div className="cmFrm" id="commentForm">
                                                <label htmlFor="addComment">Comment as {user}</label>
                                                <textarea minLength={5} maxLength={250} name="addComment" id="addComment" cols="1" rows="1" />
                                                <button className='button' role='button' onClick={submitComment}>Publish</button>
                                            </div>)
                                            : (<div className="cmAd " id="addCm">
                                                <div aria-label="Berkomentar" className="cmBtn button ln" role="button" onClick={login_toComment}>
                                                    Post a Comment
                                                </div>
                                            </div>)
                                        }
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <label className="fCls" htmlFor="forComments" />
            </section >
        </div >

    )
}
export default Pcomment;
