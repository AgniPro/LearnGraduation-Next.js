'use client';
import { useState } from "react";
import Editor from "@monaco-editor/react";
import { api } from "@/app/Contexts";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function Compose() {
  const router = useRouter();
  const [content, setContent] = useState(null);
  function savePost() {
    let postTitle = document.getElementById('title').value;
    let postContent = content;
    let url = document.getElementById("url").value;
    let description = document.getElementById("description").value;
    let image = document.getElementById("image").value;
    let tags = document.getElementById("tags").value;
    let categories = document.getElementById("categories").value;

    if (!url) {
      toast.error("Please enter URL for your post")
      document.getElementById("url").style
      return;
    }
    fetch(api + "/api/create-post", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include",
      body: JSON.stringify({
        url: url,
        title: postTitle,
        description: description,
        image: image,
        content: postContent,
        categories: categories,
        tags: tags
      })
    }).then(response => response.json().then(data => {
      if (response.ok) {
        toast.success("Post Created Successfully");
        router.push("/admin");
      } else {
        toast.error(data.error);
      }
    }))
  };

  const back = () => {

  }
  return (
    <>
      <div className="section" id="main-widget">
        <div className="widget Blog" data-version={2} id="Blog1">
          <div className="blogPts">
            <article className="ntry ps post">
              <div
                className="brdCmb"
                itemScope="itemscope"
                itemType="https://schema.org/BreadcrumbList"
              >
                <div
                  className="hm"
                  itemProp="itemListElement"
                  itemScope="itemscope"
                  itemType="https://schema.org/ListItem"
                >
                  <a
                    href="/"
                    itemProp="item"
                  >
                    <span itemProp="name">Home</span>
                  </a>
                  <meta content={1} itemProp="position" />
                </div>
                <div className="tl" data-text="Make a New Post" />
              </div>
              <div className="pInr">
                <div className="pEnt" id="ID-3764233">
                  <div className="pS post-body postBody" id="postBody">
                    <button onClick={back} className="button ln" style={{ marginRight: "28px" }}>🔙</button>
                    <button className="button ln" onClick={savePost}>
                      Save Post
                    </button>
                    <div className="container">
                      <div className="jumbotron centered">
                        <div className="form-group row">
                          <div>
                            <label htmlFor="url" >URL:</label>
                            <br />
                            <input required className="form-control " name="url" type="text" id="url" />
                            <br />

                            <label htmlFor="title">Title:</label>
                            <br />
                            <input
                              required
                              className="form-control form-control-lg "
                              type="text"
                              name="title"
                              id="title"
                            />
                            <br />
                            <label htmlFor="description">Description:</label>
                            <br />
                            <input required className="form-control " name="description" type="text" id="description" />
                            <br />
                            <label htmlFor="image">Thumbnail:</label>
                            <br />
                            <input
                              required
                              className="form-control"
                              type="text"
                              id="image"
                              name="thumbnail"
                              defaultValue="https://1.bp.blogspot.com/-YurRRss-7Vs/YPF73EG4oqI/AAAAAAAACrY/EwlnBWaqUXEmxfhzm2hixuCV_edgZcYkQCPcBGAYYCw/s16000/learngraduation.png"
                            />
                            <br />
                            <div style={{ display: "flex", alignItems: "center" }}>
                              <label htmlFor="categories">Categories:</label>
                              <input type="text" className="form-control" id="categories" name="categories" />
                              <br />
                              <label htmlFor="tags">Tags:</label>
                              <input type="text" className="form-control" id="tags" name="tags" /></div>
                            <br />
                            <label htmlFor="editor">Content:</label>
                            <br />
                          </div>
                          <Editor
                            height="80vh"
                            width="100%"
                            theme="vs-dark"
                            defaultLanguage="html"
                            value={content}
                            onChange={(e) => setContent(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>

  );
}
export default Compose;
