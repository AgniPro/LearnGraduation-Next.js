import React from 'react';
import pcss from '../app/page.module.css'
import Menu from '@/components/LayoutComponents/Menu';

const Page = () => {
    return (
        <><Menu />
            <section className={pcss.page_404}>
                <div className={pcss.four_zero_four_bg}>
                    <h1 style={{ color: "#ff8401" }} className={pcss.htag}>404</h1>
                </div>
                <div className={pcss.c_box_404}>
                    <h3 className="h2 " style={{color:"#ff8401"}}>
                        Look like you're lost
                    </h3>
                    <p>the page you are looking for not avaible!</p>
                    <a href="/" className={pcss.link_404}>Go to Home</a>
                </div>

            </section>
        </>
    );
};
export default Page;