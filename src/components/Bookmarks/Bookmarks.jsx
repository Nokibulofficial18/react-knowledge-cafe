import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 ml-8 mt-5 bg-gray-300 rounded-lg p-4">
            <h2 className="text-4xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark = {bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;