'use client'
const CopyInClipboard= ()=>{
    function copyFunction() {
        if (typeof window !== 'undefined') {
          const link = document.getElementById("getlink").value;
          navigator.clipboard.writeText(link)
            .then(() => {
              document.getElementById("cpNotif").innerHTML = "<span>Link copied to clipboard!</span>";
            })
            .catch(err => {
              document.getElementById("cpNotif").innerHTML = "<span style={{color:'red'}}>Fail to copy link</span>";
            });
        }
      }
      return(
        <label htmlFor="getlink" onClick={copyFunction}>Copy</label>
      )
}
export default CopyInClipboard;