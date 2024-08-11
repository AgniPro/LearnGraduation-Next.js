'use client';
import React from 'react';
import style from '../../app/admin/dashboard.module.css';
import { api } from '@/app/Contexts';
import toast from 'react-hot-toast';

const DeleteBtn = ({ itemId, itemType, postId ,setCcontent}) => {
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
            url = `${api}/api/p/${postId}/comment/${itemId}`;
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
                    setCcontent((prev) => prev.filter((item) => item._id !== itemId));
                }
            } else {
                toast.error(`Failed to delete ${itemType}`);
            }
        }).catch((error) => {
            toast.error(`An error occurred: ${error.message}`);
        });
    };

    return (
        <label className={style.delpst} onClick={handleDelete}>
            🗑️
        </label>
    );
};

export default DeleteBtn;