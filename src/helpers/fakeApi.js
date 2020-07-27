var API = {};

function fail() {
  return Math.floor(Math.random() * (5 - 1)) === 3;
}

function generateId() {
  return Math.random().toString(36).substring(2);
}

var goals = [
  {
    id: generateId(),
    name: 'Learn Redux'
  },
  {
    id: generateId(),
    name: 'Read 50 books this year'
  }
];
var inbox = [
  {
    id: generateId(),
    company: 'Elasticontent',
    new: true,
    active: false,
    starred: false,
    title: 'Briefing mês de julho 01',
    datetime: new Date(),
    responsible: {
      name: 'Drieli Lopes',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvL8VK49O_3-UUwrUQhbfs_pnXTBGBYjm40g&usqp=CAU'
    },
    status: 'new',
    description: 'Esse é o conteúdo que será abordado durante o mês de julho'
  },
  {
    id: generateId(),
    company: 'Elasticontent',
    new: true,
    active: false,
    starred: false,
    title: 'Briefing mês de julho 01',
    datetime: new Date(),
    responsible: {
      name: 'Drieli Lopes',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvL8VK49O_3-UUwrUQhbfs_pnXTBGBYjm40g&usqp=CAU'
    },
    status: 'new',
    description: 'Esse é o conteúdo que será abordado durante o mês de julho'
  },
  {
    id: generateId(),
    company: 'Elasticontent',
    new: false,
    active: false,
    starred: true,
    title: 'Briefing mês de julho 01',
    datetime: new Date(),
    responsible: {
      name: 'Drieli Lopes',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvL8VK49O_3-UUwrUQhbfs_pnXTBGBYjm40g&usqp=CAU'
    },
    status: 'pending',
    description: 'Esse é o conteúdo que será abordado durante o mês de julho'
  },
  {
    id: generateId(),
    company: 'Elasticontent',
    new: false,
    active: true,
    starred: false,
    title: 'Briefing mês de julho 01',
    datetime: new Date(),
    responsible: {
      name: 'Drieli Lopes',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvL8VK49O_3-UUwrUQhbfs_pnXTBGBYjm40g&usqp=CAU'
    },
    status: 'pending',
    description: '😃 Esse é o conteúdo que será abordado durante o mês de julho'
  },
  {
    id: generateId(),
    company: 'Elasticontent',
    new: false,
    active: false,
    starred: true,
    title: 'Briefing mês de julho 01',
    datetime: new Date(),
    responsible: {
      name: 'Drieli Lopes',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvL8VK49O_3-UUwrUQhbfs_pnXTBGBYjm40g&usqp=CAU'
    },
    status: 'pending',
    description: 'Esse é o conteúdo que será abordado durante o mês de julho'
  },
  {
    id: generateId(),
    company: 'Elasticontent',
    new: false,
    active: false,
    starred: true,
    title: 'Briefing mês de julho 01',
    datetime: new Date(),
    responsible: {
      name: 'Drieli Lopes',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvL8VK49O_3-UUwrUQhbfs_pnXTBGBYjm40g&usqp=CAU'
    },
    status: 'pending',
    description: 'Esse é o conteúdo que será abordado durante o mês de julho'
  },
  {
    id: generateId(),
    company: 'Elasticontent',
    new: false,
    active: false,
    starred: true,
    title: 'Briefing mês de julho 01',
    datetime: new Date(),
    responsible: {
      name: 'Drieli Lopes',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvL8VK49O_3-UUwrUQhbfs_pnXTBGBYjm40g&usqp=CAU'
    },
    status: 'pending',
    description: 'Esse é o conteúdo que será abordado durante o mês de julho'
  }
];

API.fetchGoals = function () {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res(goals);
    }, 2000);
  });
};

API.fetchInbox = function () {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res(inbox);
    }, 500);
  });
};

API.saveTodo = function (name) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const todo = {
        id: generateId(),
        name: name,
        complete: false
      };
      inbox = inbox.concat([todo]);
      fail() ? rej(todo) : res(todo);
    }, 300);
  });
};

API.saveGoal = function (name) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const goal = {
        id: generateId(),
        name: name
      };
      goals = goals.concat([goal]);
      fail() ? rej(goal) : res(goal);
    }, 300);
  });
};

API.deleteGoal = function (id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      goals = goals.filter((goal) => goal.id !== id);
      fail() ? rej() : res(goals);
    }, 300);
  });
};

API.deleteTodo = function (id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      inbox = inbox.filter((todo) => todo.id !== id);
      fail() ? rej() : res(inbox);
    }, 300);
  });
};

API.saveTodoToggle = function (id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      inbox = inbox.map((todo) =>
        todo.id !== id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );

      fail() ? rej() : res(inbox);
    }, 300);
  });
};

module.exports = API;
