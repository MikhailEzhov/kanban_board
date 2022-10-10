const kanbanData = [
  {
    id: '1',
    title: 'TODO',
    tasks: [
      {
        id: '11',
        title: 'купить хлеб',
        description: 'description11',
        authorId: '555',
        authorName: 'misha',
        comments: [
          {
            id: '111',
            authorId: '555',
            authorName: 'misha',
            authorText: 'commentAuthorText111',
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
        title: 'выкинуть мусор сегодня',
        description: 'description22',
        authorId: '555',
        authorName: 'misha',
        comments: [
          {
            id: '222',
            authorId: '555',
            authorName: 'misha',
            authorText: 'commentAuthorText222',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'Testing',
    tasks: [
      {
        id: '33',
        title: 'погулять с собакой',
        description: 'description33',
        authorId: '555',
        authorName: 'misha',
        comments: [
          {
            id: '333',
            authorId: '555',
            authorName: 'misha',
            authorText: 'commentAuthorText333',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    title: 'Done',
    tasks: [
      {
        id: '44',
        title: 'ещё ещё ещё',
        description: 'description44',
        authorId: '555',
        authorName: 'misha',
        comments: [
          {
            id: '444',
            authorId: '555',
            authorName: 'misha',
            authorText: 'commentAuthorText444',
          },
        ],
      },
      {
        id: '45',
        title: 'ещё ещё ещё5',
        description: 'description45',
        authorId: '555',
        authorName: 'misha',
        comments: [
          {
            id: '445',
            authorId: '555',
            authorName: 'misha',
            authorText: 'commentAuthorText445',
          },
        ],
      },
      {
        id: '46',
        title: 'ещё ещё ещё6',
        description: 'description46',
        authorId: '555',
        authorName: 'misha',
        comments: [
          {
            id: '446',
            authorId: '555',
            authorName: 'misha',
            authorText: 'commentAuthorText446',
          },
        ],
      },
    ],
  },
];

export default kanbanData;
