interface CommentStatus {
    author: string;
    description: string;
    date: string;
    like: number;
    hate: number;
}
declare const commentItems: CommentStatus[];
export default commentItems;
