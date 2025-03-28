
import Link from "next/link";
import { CopyInClipboard, SaveAsPdf } from "./CopyInClipboard";

function Pshare(props) {
  return (
    <div className="pSh">
      <div className="pShc" data-text="Share:">
        <Link
          aria-label="Facebook"
          className="c fb"
          data-text="Share"
          href={'https://www.facebook.com/sharer.php?u=' + props.link}
          rel="noopener"
          role="button"
          target="_blank"
        >
          <svg viewBox="0 0 64 64">
            <path d="M20.1,36h3.4c0.3,0,0.6,0.3,0.6,0.6V58c0,1.1,0.9,2,2,2h7.8c1.1,0,2-0.9,2-2V36.6c0-0.3,0.3-0.6,0.6-0.6h5.6 c1,0,1.9-0.7,2-1.7l1.3-7.8c0.2-1.2-0.8-2.4-2-2.4h-6.6c-0.5,0-0.9-0.4-0.9-0.9v-5c0-1.3,0.7-2,2-2h5.9c1.1,0,2-0.9,2-2V6.2 c0-1.1-0.9-2-2-2h-7.1c-13,0-12.7,10.5-12.7,12v7.3c0,0.3-0.3,0.6-0.6,0.6h-3.4c-1.1,0-2,0.9-2,2v7.8C18.1,35.1,19,36,20.1,36z" />
          </svg>
        </Link>
        <Link
          aria-label="Whatsapp"
          className="c wa"
          data-text="Share"
          href={"https://api.whatsapp.com/send?text=" + props.link}
          rel="noopener"
          role="button"
          target="_blank"
        >
          <svg viewBox="0 0 24 24">
            <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z" />
          </svg>
        </Link>
        <Link
          aria-label="Twitter"
          className="c tw"
          data-text="Tweet"
          href={"https://x.com/intent/post?url=" + props.link}
          rel="noopener"
          role="button"
          target="_blank"
        >
          <svg viewBox="0 0 512 512"><path d="M290.425,233.064l110.65-137.91h-32.05l-94.62,117.94l-94.63-117.94H74.125l147.45,183.78l-110.66,137.92   h32.05l94.63-117.95l94.64,117.95h105.65L290.425,233.064z M126.225,120.153h41.55l218,271.7h-41.55L126.225,120.153z" /></svg>
        </Link>

        <label aria-label="Share to other apps" htmlFor="forShare">
          <svg className="line" viewBox="0 0 24 24">
            <path
              d="M92.30583,264.72053a3.42745,3.42745,0,0,1-.37,1.57,3.51,3.51,0,1,1,0-3.13995A3.42751,3.42751,0,0,1,92.30583,264.72053Z"
              transform="translate(-83.28571 -252.73452)"
            />
            <circle cx="18.48892" cy="5.49436" r="3.51099" />
            <circle cx="18.48892" cy="18.50564" r="3.51099" />
            <line
              className="cls-3"
              x1="12.53012"
              x2="8.65012"
              y1="8.476"
              y2="10.416"
            />
            <line
              className="cls-3"
              x1="12.53012"
              x2="8.65012"
              y1="15.496"
              y2="13.556"
            />
          </svg>
        </label>
      </div>
    </div>
  );
}
export { Pshare };

function Share(props) {
  const mailtoLink = `mailto:?subject=${encodeURIComponent('Check this out – ' + props.title)}&body=${encodeURIComponent(`${props.title} \n \n Check out this link: ${props.link}`)}`;

  return (
    <div className="shBr fixL">
      <div className="shBri fixLi">
        <div className="shBrs fixLs">
          <div className="shH fixH fixT" data-text="Share to other apps">
            <label aria-label="Close" className="c cl" htmlFor="forShare" />
          </div>
          <div className="sharePreview">
            <div className="previewImg lazy" data-style={`background-image: url(${props.image})`} lazied="true" style={{ backgroundImage: `url(${props.image})` }} />
            <div className="previewContent">
              <div className="previewTitle" data-text={props.title} />
              <div className="previewLabel">
                <span data-text="#Bsc" />
              </div>
            </div>
          </div>
          <div className="shC">
            <div className="shL">
              <div data-text="Facebook">
                <Link aria-label="Facebook" href={"https://www.facebook.com/sharer.php?u=" + props.link} rel="noopener" target="_blank">
                  <svg viewBox="0 0 64 64"><path d="M20.1,36h3.4c0.3,0,0.6,0.3,0.6,0.6V58c0,1.1,0.9,2,2,2h7.8c1.1,0,2-0.9,2-2V36.6c0-0.3,0.3-0.6,0.6-0.6h5.6 c1,0,1.9-0.7,2-1.7l1.3-7.8c0.2-1.2-0.8-2.4-2-2.4h-6.6c-0.5,0-0.9-0.4-0.9-0.9v-5c0-1.3,0.7-2,2-2h5.9c1.1,0,2-0.9,2-2V6.2 c0-1.1-0.9-2-2-2h-7.1c-13,0-12.7,10.5-12.7,12v7.3c0,0.3-0.3,0.6-0.6,0.6h-3.4c-1.1,0-2,0.9-2,2v7.8C18.1,35.1,19,36,20.1,36z" /></svg>
                </Link>
              </div>
              <div data-text="WhatsApp">
                <Link aria-label="Whatsapp" href={"https://api.whatsapp.com/send?text=" + props.link} rel="noopener" target="_blank">
                  <svg viewBox="0 0 24 24"><path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z" /></svg>
                </Link>
              </div>
              <div data-text="X">
                <Link aria-label="X" href={"https://x.com/intent/post?url=" + props.link} rel="noopener" target="_blank">
                  <svg viewBox="0 0 512 512"><path d="M290.425,233.064l110.65-137.91h-32.05l-94.62,117.94l-94.63-117.94H74.125l147.45,183.78l-110.66,137.92   h32.05l94.63-117.95l94.64,117.95h105.65L290.425,233.064z M126.225,120.153h41.55l218,271.7h-41.55L126.225,120.153z" /></svg>
                </Link>
              </div>
              <div data-text="Telegram">
                <Link aria-label="Telegram" href={"https://t.me/share/url?url=" + props.link} rel="noopener" target="_blank">
                  <svg viewBox="0 0 64 64"><path d="M56.4,8.2l-51.2,20c-1.7,0.6-1.6,3,0.1,3.5l9.7,2.9c2.1,0.6,3.8,2.2,4.4,4.3l3.8,12.1c0.5,1.6,2.5,2.1,3.7,0.9 l5.2-5.3c0.9-0.9,2.2-1,3.2-0.3l11.5,8.4c1.6,1.2,3.9,0.3,4.3-1.7l8.7-41.8C60.4,9.1,58.4,7.4,56.4,8.2z M50,17.4L29.4,35.6 c-1.1,1-1.9,2.4-2,3.9c-0.2,1.5-2.3,1.7-2.8,0.3l-0.9-3c-0.7-2.2,0.2-4.5,2.1-5.7l23.5-14.6C49.9,16.1,50.5,16.9,50,17.4z" /></svg>
                </Link>
              </div>
              <div data-text="Pinterest">
                <Link aria-label="Pinterest" data-pin-config="beside" href={`https://pinterest.com/pin/create/button/?url=${props.link}&media=${props.image}`} rel="noopener" target="_blank">
                  <svg viewBox="0 0 64 64"><path d="M14.4,53.8c2.4,2,6.1,0.6,6.8-2.4l0-0.1c0.4-1.8,2.4-10.2,3.2-13.7c0.2-0.9,0.2-1.8-0.1-2.7 C24.2,34,24,32.8,24,31.5c0-4.1,2.4-7.2,5.4-7.2c2.5,0,3.8,1.9,3.8,4.2c0,2.6-1.6,6.4-2.5,9.9c-0.7,3,1.5,5.4,4.4,5.4 c5.3,0,8.9-6.8,8.9-14.9c0-6.1-4.1-10.7-11.6-10.7c-8.5,0-13.8,6.3-13.8,13.4c0,2.4,0.7,4.2,1.8,5.5c0.5,0.6,0.6,0.9,0.4,1.6 c-0.1,0.5-0.4,1.8-0.6,2.2c-0.2,0.7-0.8,1-1.4,0.7c-3.9-1.6-5.7-5.9-5.7-10.7c0-8,6.7-17.5,20-17.5c10.7,0,17.7,7.7,17.7,16 c0,11-6.1,19.2-15.1,19.2c-1.9,0-3.8-0.7-5.2-1.6c-0.9-0.6-2.1-0.1-2.4,0.9c-0.5,1.9-1.1,4.3-1.3,4.9c-0.1,0.5-0.3,0.9-0.4,1.4 c-1,2.7,0.9,5.5,3.7,5.7c2.1,0.1,4.2,0,6.3-0.3c12.4-2,22.1-12.2,23.4-24.7C61.5,18.1,48.4,4,32,4C16.5,4,4,16.5,4,32 C4,40.8,8.1,48.6,14.4,53.8z" /></svg>
                </Link>
              </div>
              <div data-text="LinkedIn">
                <Link aria-label="Linkedin" href={"https://www.linkedin.com/sharing/share-offsite/?url=" + props.link} rel="noopener" target="_blank">
                  <svg viewBox="0 0 64 64"><path d="M8,54.7C8,55.4,8.6,56,9.3,56h9.3c0.7,0,1.3-0.6,1.3-1.3V23.9c0-0.7-0.6-1.3-1.3-1.3H9.3 c-0.7,0-1.3,0.6-1.3,1.3V54.7z" /><path d="M46.6,22.3c-4.5,0-7.7,1.8-9.4,3.7c-0.4,0.4-1.1,0.1-1.1-0.5l0-1.6c0-0.7-0.6-1.3-1.3-1.3h-9.4 c-0.7,0-1.3,0.6-1.3,1.3c0.1,5.7,0,25.4,0,30.7c0,0.7,0.6,1.3,1.3,1.3h9.5c0.7,0,1.3-0.6,1.3-1.3V37.9c0-1,0-2,0.3-2.7 c0.8-2,2.6-4.1,5.7-4.1c4.1,0,6,3.1,6,7.6v15.9c0,0.7,0.6,1.3,1.3,1.3h9.3c0.7,0,1.3-0.6,1.3-1.3V37.4C60,27.1,54.1,22.3,46.6,22.3 z" /><path d="M13.9,18.9L13.9,18.9c3.8,0,6.1-2.4,6.1-5.4C19.9,10.3,17.7,8,14,8c-3.7,0-6,2.3-6,5.4 C8,16.5,10.3,18.9,13.9,18.9z" /></svg>
                </Link>
              </div>
              <div data-text="Email">
                <a
                  aria-label="Email"
                  href={mailtoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 500 500"><path d="M468.051,222.657c0-12.724-5.27-24.257-13.717-32.527 L282.253,45.304c-17.811-17.807-46.702-17.807-64.505,0L45.666,190.129c-8.448,8.271-13.717,19.803-13.717,32.527v209.054 c0,20.079,16.264,36.341,36.34,36.341h363.421c20.078,0,36.34-16.262,36.34-36.341V222.657z M124.621,186.402h250.758 c11.081,0,19.987,8.905,19.987,19.991v34.523c-0.088,4.359-1.818,8.631-5.181,11.997l-55.966,56.419l83.224,83.127 c6.904,6.904,6.904,18.081,0,24.985s-18.085,6.904-24.985,0l-85.676-85.672H193.034l-85.492,85.672 c-6.907,6.904-18.081,6.904-24.985,0c-6.906-6.904-6.906-18.081,0-24.985l83.131-83.127l-55.875-56.419 c-3.638-3.638-5.363-8.358-5.181-13.177v-33.343C104.632,195.307,113.537,186.402,124.621,186.402z" /></svg>
                </a>
              </div>
              <div data-text="Save As PDF">
                <SaveAsPdf />
              </div>

            </div>
            <div className="cpL" data-message="Copy to clipboard" data-text="or copy link">
              <div className="cpLb">
                <svg className="line" viewBox="0 0 24 24"><path d="M13.0601 10.9399C15.3101 13.1899 15.3101 16.8299 13.0601 19.0699C10.8101 21.3099 7.17009 21.3199 4.93009 19.0699C2.69009 16.8199 2.68009 13.1799 4.93009 10.9399" /><path d="M10.59 13.4099C8.24996 11.0699 8.24996 7.26988 10.59 4.91988C12.93 2.56988 16.73 2.57988 19.08 4.91988C21.43 7.25988 21.42 11.0599 19.08 13.4099" /></svg>
                <input id="getlink" readOnly="readonly" defaultValue={props.link} />
                <CopyInClipboard link={props.link} />
              </div>
              <div className="cpLn" id="cpNotif" />
            </div>
          </div>
        </div>
      </div>
      <label className="fCls" htmlFor="forShare" />
    </div>

  )
}
export { Share };
