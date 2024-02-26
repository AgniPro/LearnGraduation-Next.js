import React from 'react';

const Page = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Arvo" />
             <style>
                {`
                .black{ color:black !important;}
                .page_404{ padding:40px 0; background:#fff; font-family: 'Arvo', serif;}
                .page_404  img{ width:100%;}
                .four_zero_four_bg{
                    background-image: url(https://vieurl.web.app/assets/404.gif);
                    height: 400px;
                    background-position: center; 
                }
                .four_zero_four_bg h1{
                    font-size:80px;
                }
                .four_zero_four_bg h3{
                    font-size:80px;
                }
                .link_404{ 
                    color: #fff!important;
                    padding: 10px 20px;
                    background: #39ac31;
                    margin: 20px 0;
                    display: inline-block;}
                .contant_box_404{ margin-top:-50px;}
                `}
            </style>
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center " style={{color:"#ff8401"}}>404</h1>
                                </div>
                                <div className="contant_box_404">
                                    <h3 className="h2 black">
                                        Look like you're lost
                                    </h3>
                                    <p className='black'>the page you are looking for not avaible!</p>
                                    <a href="/" className="link_404">Go to Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Page;