import Footer from "@/components/LayoutComponents/Footer"
import Mobilemenu from "@/components/LayoutComponents/Mobilemenu"
import Notification from "@/components/LayoutComponents/Notification"
import Sidebar from "@/components/LayoutComponents/Sidebar"
import Menu from "@/components/Menu"

const PostLayout = ({ children }) => {
    return (
        <>
        <Menu />
            <div className="blogCont onItm onPs">
                <div className="secIn">
                    <Notification />
                    <div className="blogM">
                        {/*[ Main content ]*/}
                        <main className="blogItm mainbar">
                            <div className="section" id="main-widget"><div className="widget HTML" data-version={2} id="HTML93">
                                <div className="widget-content">
                                    <div className="adB" data-text="Ads go here" />
                                </div>
                            </div>
                                {children}
                            </div>
                        </main>
                        <Sidebar />
                    </div>
                    <Mobilemenu />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default PostLayout