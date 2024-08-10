import Footer from "@/components/LayoutComponents/Footer"
import Menu from "@/components/LayoutComponents/Menu"
import Mobilemenu from "@/components/LayoutComponents/Mobilemenu"
import Notification from "@/components/LayoutComponents/Notification"

const SearchLayout = ({ children }) => {
    return (
        <>
        <Menu />
            <div className="blogCont onItm onPg">
                <div className="secIn">
                    <Notification />
                    <div className="blogM">
                        {/*[ Main content ]*/}
                        <main className="blogItm mainbar">
                            <div className="section" id="main-widget">
                                {children}
                            </div>
                        </main>
                    </div>
                    <Mobilemenu />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default SearchLayout;