import React from "react";
import usePostForm from "../../hooks/usePostForm";

const CreatePostForm = () => {
    const {
        title,
        content,
        handleTitleChange,
        handleContentChange,
        handleSubmit,
    } = usePostForm();

    return (
        <div className="max-w-md mx-auto p-6 border rounded-md shadow-lg bg-gray-50">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Create a New Post</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 text-white bg-teal-600 hover:bg-teal-700 rounded-md transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreatePostForm;