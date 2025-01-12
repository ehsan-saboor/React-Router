import { useState } from "react";
import createPost from "../services/createPostService"; // Adjust the import path as necessary

const usePostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [posts, setPosts] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = { title, content }; // Create an object to store post data
        console.log("Creating post:", postData); // Log the post data to the console
        try {
            const post = await createPost(postData);
            setTitle("");
            setContent("");
            setPosts([...posts, post]);
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return {
        title,
        content,
        posts,
        handleTitleChange,
        handleContentChange,
        handleSubmit,
    };
};

export default usePostForm;