interface CommentStatus {
  author: string;
  description: string;
  date: string;
  like: number;
  hate: number;
}

const dates = [
  '2022.07.11 12:23',
  '2022.09.12 08:56',
  '2022.09.13 22:00',
  '2022.10.14 19:57',
  '2022.11.15 16:48',
  '2022.12.16 14:23',
];

const authors = [
  'kingdev',
  'headfirst',
  'realfood',
  'python',
  'yes24yes',
  'worldone',
];

const commentItems = dates.map(
  (date, idx): CommentStatus => ({
    date,
    author: authors[idx],
    description: `${idx + 1}번째 댓글임`,
    like: Math.floor(Math.random() * 10),
    hate: Math.floor(Math.random() * 10),
  }),
);

export default commentItems;
