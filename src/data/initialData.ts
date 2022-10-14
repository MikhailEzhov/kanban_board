const initialData = [
  {
    id: '1',
    title: 'TODO',
    tasks: [
      {
        id: '11',
        title: 'Call an old friend or former classmate',
        description: 'Call an old friend or former classmate and offer to meet',
        authorId: '111',
        authorName: 'user111',
        comments: [
          {
            id: '1111',
            authorId: '111',
            authorName: 'user111',
            authorText: 'I think it`s a good idea',
          },
          {
            id: '1112',
            authorId: '222',
            authorName: 'user222',
            authorText: 'This is what I did last week',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'In Progress',
    tasks: [
      {
        id: '22',
        title: 'Write a list of things you want to do in your life',
        description: '',
        authorId: '333',
        authorName: 'user333',
        comments: [],
      },
    ],
  },
  {
    id: '3',
    title: 'Testing',
    tasks: [],
  },
  {
    id: '4',
    title: 'Done',
    tasks: [],
  },
];

export default initialData;
