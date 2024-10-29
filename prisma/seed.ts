import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();
// npx prisma db seed
// npx prisma studio
async function main() {
  // const data = Array.from({ length: 10 }).map(() => ({
  //   title: faker.lorem.words({ min: 2, max: 5 }),
  //   body: faker.lorem.words({ min: 1, max: 10 }),
  //   user_id: faker.datatype.uuid(), // Assuming user_id is a UUID
  // }));

  // await prisma.todo.createMany({
  //   data: data,
  // });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
