'use client';
import { useGetAllUserQuery } from '@/lib/services/auth';
import avatarDefault from '../../../public/assets/avatar.png';
import style from '../../app/admin/dashboard.module.css';
import { date } from '@/app/Contexts';
import { useState } from 'react';


const AllUsers = () => {
    let allUsers;
    const [showAll, setShowAll] = useState(false);
    const { data, isSuccess, error } = useGetAllUserQuery();
    if (isSuccess) {
        allUsers = data.users;
    }
    const handleSeeAll = () => {
        setShowAll(true);
      };
    const usersToDisplay = showAll ? allUsers : allUsers?.slice(0, 6);
    return (
        <div>
            {allUsers ? <span>All Users</span> : <p>Loading...</p>}
            <div className={style.userCn + ' cmCn'}>
                <br />
                <ol className="cmHl" id="cmHolder">
                    {usersToDisplay?.map((user) => {
                        const { month } = date(user.createdAt, user.lastActive);
                        return (
                            <li className="c" key={user._id} id={user._id}>
                                <div className="cmAv">
                                    <div className="im lazy loaded" lazied="true" style={{ backgroundImage: `url(${user.avatar ? user.avatar.url : avatarDefault.src})` }}>
                                    </div>
                                </div>
                                <div className="cmIn">
                                    <div className="cmBd" itemScope="itemscope" itemType="https://schema.org/Comment">
                                        <div className="cmHr">
                                            <span className="n" itemProp="author" itemScope="itemscope" itemType="https://schema.org/Person">
                                                <bdi itemProp="name">
                                                    {user.name}
                                                </bdi>
                                            </span>
                                            <span className='d'>{'Role: '+user.role}</span>
                                            <span className="d" data-datetime={user.updatedAt}>Last seen: {month} </span>
                                        </div>
                                        <div className="cmCo" itemProp="text">
                                            {user.email}
                                        </div>
                                    </div>
                                </div>
                            </li>)
                    }
                    )}
                </ol>
                {!showAll && allUsers?.length >6 && (
                    <button
                        className='jsLd'
                        onClick={handleSeeAll}
                    >
                        See All
                    </button>
                )}
            </div>
        </div>
    )
}
export default AllUsers;

