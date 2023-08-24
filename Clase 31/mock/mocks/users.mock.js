import { faker } from "@faker-js/faker/locale/es";

export const generateUser = () => {
  const roles = ["cliente", "vendedor", "admin"];

  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    sex: faker.person.sex,
    birthDate: faker.date.birthdate(),
    id: faker.database.mongodbObjectId(),
    image: faker.image.avatar(),
    phone: faker.phone.number(),
    role: faker.helpers.arrayElement(roles),
    premium: faker.datatype.boolean(),
    job: faker.person.jobTitle(),
  };
};
