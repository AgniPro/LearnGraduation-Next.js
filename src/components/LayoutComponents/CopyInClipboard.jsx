'use client'
const CopyInClipboard= (props)=>{
    function copyFunction() {
        if (typeof window !== 'undefined') {
          navigator.clipboard.writeText(props.link)
            .then(() => {
              document.getElementById("cpNotif").innerHTML = "<span>Link copied to clipboard!</span>";
            })
            .catch(err => {
              console.error('Failed to copy text: ', err);
            });
        }
      }
      return(
        <label htmlFor="getlink" onClick={copyFunction}>Copy</label>
      )
}
export default CopyInClipboard;
