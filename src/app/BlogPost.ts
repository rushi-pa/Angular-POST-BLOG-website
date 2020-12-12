import { Comment } from "./comment";

export class BlogPost {
    _id: string
    title: string;
    postDate: string;
    featuredImage: string;
    post: string;
    postedBy: string;
    comments: Array<Comment>;
    category: string;
    tags: Array<string>;
    isPrivate: Boolean;
    views: number;
}
