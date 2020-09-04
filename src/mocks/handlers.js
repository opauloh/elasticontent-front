import { rest } from 'msw';
import faker from 'faker';
import * as moment from 'moment';
faker.locale = 'pt_BR';

const random = (max) => Math.floor(Math.random() * (max + 1));
const randomBetween = (min, max) =>
  Math.round(min - 0.5 + Math.random() * (max - min + 1));

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body;

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick'
      })
    );
  }),
  rest.get('/inbox', (req, res, ctx) => {
    let inbox = [];

    let companies = [];

    for (let i = 0; i < 5; i++) {
      companies.push({
        name: faker.company.companyName(),
        logo: faker.image.avatar()
      });
    }

    const status = ['UPDATING', 'PRODUCTION', 'APPROVING'];

    for (let i = 0; i < randomBetween(5, 2000); i++) {
      const userId = ['1', faker.random.uuid()][random(1)];

      const company = companies[random(4)];
      const date = faker.date.past();
      inbox.push({
        id: faker.random.uuid(),
        company: {
          id: company.name,
          name: company.name,
          logo: company.logo
        },
        new: faker.random.boolean(),
        active: false,
        starred: faker.random.boolean(),
        title: faker.lorem.words(),
        datetime: date,
        datetime_x: moment(date).format('x'),
        responsible: {
          id: userId,
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          image: faker.image.avatar()
        },
        status: status[random(2)],
        description: faker.lorem.paragraph()
      });
    }

    return res(ctx.json(inbox.sort((a, b) => b.datetime - a.datetime)));
  })
];
