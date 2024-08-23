'use client';
import React from 'react';
import style from '../../app/admin/dashboard.module.css';
import { api } from '@/app/Contexts';
import toast from 'react-hot-toast';

const DeleteBtn = ({itemType, postId, commentId, setCcontent,replyId }) => {
    const handleDelete = () => {
        const confirmMessage = `Are you sure you want to delete this ${itemType}?`;
        if (!confirm(confirmMessage)) return;
        let url = '';
        if (itemType === undefined && postId === undefined) {
            toast.error('something went wrong');
            return;
        }
        if (itemType === 'post') {
            url = `${api}/api/delete-post?pId=${postId}`;
        } else if (itemType === 'comment') {
            url = `${api}/api/p/${postId}/comment/${commentId}`;
        } else if (itemType === 'reply') {
            url = `${api}/api/p/${postId}/comment/${commentId}/reply/${replyId}`;
        }
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'cache-control': 'no-cache',
            },
            credentials: 'include',
        }).then((res) => {
            if (res.ok && res.status === 200) {
                toast.success(`${itemType.charAt(0).toUpperCase() + itemType.slice(1)} deleted successfully`);
                if (itemType === 'post') {
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000); // 1000 milliseconds = 1 second
                }
                if (itemType === 'comment') {
                    setCcontent((prev) => prev.filter((item) => item._id !== commentId));
                }
                if (itemType === 'reply') {
                    setCcontent((prev) => {
                        return prev.map((comment) => {
                            if (comment._id === commentId) {
                                return {
                                    ...comment,
                                    replies: comment.replies.filter((reply) => reply._id !== replyId),
                                };
                            }
                            return comment;
                        });
                    });
                }
            } else {
                toast.error(`Failed to delete ${itemType}`);
            }
        }).catch((error) => {
            toast.error(`An error occurred: ${error.message}`);
        });
    };

    return (
        <label key={postId} className={style.delpst} onClick={handleDelete}>
            🗑️
        </label>
    );
};

export default DeleteBtn;