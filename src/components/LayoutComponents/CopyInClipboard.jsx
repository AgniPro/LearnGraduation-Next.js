'use client'

const CopyInClipboard = () => {
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
  return (
    <label htmlFor="getlink" onClick={copyFunction}>Copy</label>
  )
}

const SaveAsPdf = ({
  targetId = "article",
  logoUrl = "https://1.bp.blogspot.com/-YurRRss-7Vs/YPF73EG4oqI/AAAAAAAACrQ/Zvp7-CXxPpUNT8dTJ3xnflcEpN1K1TRvACLcBGAsYHQ/w200/learngraduation.png", // Replace with your logo URL
}) => {
  const saveAsPdf = () => {
    if (typeof window !== "undefined") {
      const contentElement = document.getElementById(targetId);
      if (contentElement) {
        // Hide everything except the target content
        const originalBody = document.body.cloneNode(true); // Clone the entire body
        const originalStyle = document.body.style.cssText; // Save original styles

        const wrapper = document.createElement("div");
        wrapper.innerHTML = `
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="${logoUrl}" alt="Logo" style="max-width: 200px; height: auto;" />
          </div>
          ${contentElement.outerHTML}
        `;
        document.body.innerHTML = wrapper.outerHTML;
        window.print();
        window.location.reload();
        // Restore the original content and styles
        document.body.replaceWith(originalBody);
        document.body.style.cssText = originalStyle;
      } else {
        alert(`Element with id "${targetId}" not found.`);
      }
    }
  };

  return (
    <a htmlFor="saveaspdf" onClick={saveAsPdf} href="#">
      <svg viewBox="0 -960 960 960" aria-hidden="true">
        <path d="M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
      </svg>
    </a>
  );
};
export { CopyInClipboard, SaveAsPdf };
