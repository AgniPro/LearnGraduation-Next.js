'use client';
import { useGetAllUserQuery } from '@/lib/services/auth';
import avatarDefault from '../../../public/assets/avatar.png';
import style from '../../app/admin/dashboard.module.css';
import { date } from '@/app/Contexts';
import { useState } from 'react';


const AllUsers = () => {
    let allUsers;
    const {data,isSuccess,error}= useGetAllUserQuery();
    if(isSuccess){
        allUsers = data.users;
    }
    const [isEditing, setIsEditing] = useState(false);
    const [selectedRole, setSelectedRole] = useState('admin');
  
    const handleRoleClick = () => {
      setIsEditing(true);
    };
  
    const handleRoleChange = (e) => {
      const newRole = e.target.value;
      setSelectedRole(newRole);
      setIsEditing(false);
    };

    return (
        <div>
        {allUsers? <span>All Users</span>:<p>Loading...</p>}
            <div className={style.userCn + ' cmCn'}>
            <br />
                <ol className="cmHl" id="cmHolder">
                    {allUsers?.map((user)=> {
                        const {month} = date(user.createdAt, user.lastActive);
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
                                        {isEditing ? (
        <select value={selectedRole} onChange={handleRoleChange} autoFocus>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
        </select>
      ) : (
        <span className="d" onClick={handleRoleClick}>
          Role: {user.role}
        </span>
      )}
                                    </div>
                                    <div className="cmCo" itemProp="text">
                                        {user.email}
                                    </div>
                                </div>
                            </div>
                        </li>)}
                    )}
                </ol>
                see all
            </div>
        </div>
    )
}
export default AllUsers;


<div className="cmIn">
    <div className="cmBd" itemScope="itemscope" itemType="https://schema.org/Comment">
        <div className="cmHr">
            <span className="n" itemProp="author" itemScope="itemscope" itemType="https://schema.org/Person">
                <bdi itemProp="name">
                    Abhishek kumar Mehta</bdi>
            </span>
            <span className="d dtTm" data-datetime="August 18, 2024 at 6:06 PM">second ago</span>
            <span className="d date" data-datetime="August 18, 2024 at 6:06 PM" itemProp="datePublished">August 18, 2024 at 6:06 PM</span>
        </div>
        <div className="cmCo" itemProp="text">
            Ho friends
        </div>
    </div>
    <input className="cmRi hidden" id="to-3616030899389916259" type="checkbox" />
    <div className="cmRp">
        <div className="cmTh" id="c3616030899389916259-rt">
            <label aria-label="View 2 replies" className="thTg" data-text="Hide replies" htmlFor="to-3616030899389916259" />
            <ol className="thCh">
                <li className="c" id="c1375688582881665740">
                    <div className="cmAv">
                        <div className="im lazy loaded" data-style="background-image: url(//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1EwFaW4JRBIyt5ofXFLa75xEfbvLheYEEfwcJU5uIiTLekBbPIb-ovKlgCwraiPeaLqIWcBLDPzFgXCKtCq0WXx5ajTPd7yOdydoZSP1TSib_qLDXn6D1GpuhTAgk-w/w35-h35-p-k-no-nu/agni.png)" lazied style={{ backgroundImage: 'url("//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1EwFaW4JRBIyt5ofXFLa75xEfbvLheYEEfwcJU5uIiTLekBbPIb-ovKlgCwraiPeaLqIWcBLDPzFgXCKtCq0WXx5ajTPd7yOdydoZSP1TSib_qLDXn6D1GpuhTAgk-w/w35-h35-p-k-no-nu/agni.png")' }}>
                        </div>
                    </div>
                    <div className="cmIn">
                        <div className="cmBd" itemScope="itemscope" itemType="https://schema.org/Comment">
                            <div className="cmHr">
                                <span className="n" itemProp="author" itemScope="itemscope" itemType="https://schema.org/Person">
                                    <bdi itemProp="name">
                                        Abhishek kumar Mehta</bdi>
                                </span>
                                <span className="d dtTm" data-datetime="August 18, 2024 at 6:07 PM">second ago</span>
                                <span className="d date" data-datetime="August 18, 2024 at 6:07 PM" itemProp="datePublished">August 18, 2024 at 6:07 PM</span>
                            </div>
                            <div className="cmCo" itemProp="text">
                            🌟🌟🌟
                            </div>
                        </div>
                    </div>
                </li>
                <li className="c" id="c3297661718408759007">
                    <div className="cmAv">
                        <div className="im lazy loaded" data-style="background-image: url(//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1EwFaW4JRBIyt5ofXFLa75xEfbvLheYEEfwcJU5uIiTLekBbPIb-ovKlgCwraiPeaLqIWcBLDPzFgXCKtCq0WXx5ajTPd7yOdydoZSP1TSib_qLDXn6D1GpuhTAgk-w/w35-h35-p-k-no-nu/agni.png)" lazied style={{ backgroundImage: 'url("//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1EwFaW4JRBIyt5ofXFLa75xEfbvLheYEEfwcJU5uIiTLekBbPIb-ovKlgCwraiPeaLqIWcBLDPzFgXCKtCq0WXx5ajTPd7yOdydoZSP1TSib_qLDXn6D1GpuhTAgk-w/w35-h35-p-k-no-nu/agni.png")' }}>
                        </div>
                    </div>
                    <div className="cmIn">
                        <div className="cmBd" itemScope="itemscope" itemType="https://schema.org/Comment">
                            <div className="cmHr">
                                <span className="n" itemProp="author" itemScope="itemscope" itemType="https://schema.org/Person">
                                    <bdi itemProp="name">Abhishek kumar Mehta</bdi>
                                </span>
                                <span className="d dtTm" data-datetime="August 18, 2024 at 6:07 PM">second ago</span>
                                <span className="d date" data-datetime="August 18, 2024 at 6:07 PM" itemProp="datePublished">August 18, 2024 at 6:07 PM</span>
                            </div>
                            <div className="cmCo" itemProp="text">
                                Bsobs
                            </div>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
        <div className="cmAc cmR">
            <a aria-label="Reply" className="rpTo" data-reply-to={3616030899389916259} data-text="Reply" href="javascript:;" target="_self" />
        </div>
    </div>
    <div className="cmAc">
        <a aria-label="Reply" className="rpTo" data-reply-to={3616030899389916259} data-text="Reply" href="javascript:;" target="_self" />
    </div>
</div>
