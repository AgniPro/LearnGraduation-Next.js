'use client';
import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { api } from "@/app/Contexts";
import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";

function EditPost({ searchParams }) {
    const router = useRouter();
    const [content, setContent] = useState(null);
    const [pid, setPid] = useState(null);
    const pUrl = searchParams.purl;

    useEffect(() => {
        if (!pUrl) {
            toast.error("Invalid URL");
            router.push("/admin");
            return;
        }
        getPostData(pUrl);
    }, [])
    function getPostData(pUrl) {
        fetch(`${api}/api/p/${pUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include",
        }).then(response => response.json().then(data => {
            if (response.ok) {
                setContent(data.content);
                setPid(data._id);
                document.getElementById("url").value = data.url;
                document.getElementById("title").value = data.title;
                document.getElementById("description").value = data.description;
                document.getElementById("image").value = data.image;
                document.getElementById("tags").value = data.tags;
                document.getElementById("categories").value = data.categories;
            } else {
                toast.error(data.error);
                redirect("/admin");
            }
        }))
    };
    function savePost() {
        let postTitle = document.getElementById('title').value;
        let url = document.getElementById("url").value;
        let description = document.getElementById("description").value;
        let image = document.getElementById("image").value;
        let tags = document.getElementById("tags").value;
        let categories = document.getElementById("categories").value;
        if (!url) {
            toast.error("Please enter URL for your post");
            document.getElementById("url").style.borderColor = "red";
            return;
        }
        fetch(`${api}/api/update-post?pid=${pid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify({
                url: url,
                title: postTitle,
                description: description,
                image: image,
                content: content,
                categories: categories,
                tags: tags
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success === true) {
                    toast.success("Post Updated Successfully");
                    router.push("/admin");
                } else {
                    toast.error(data.message);
                }
            })
            .catch(error => {
                toast.error("An error occurred while updating the post.");
            });
    }
    function handleEditorChange(value, event) {
        setContent(value)
    }
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
                                                        onChange={handleEditorChange}
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
export default EditPost;
