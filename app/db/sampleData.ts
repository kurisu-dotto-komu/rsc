import { faker } from "@faker-js/faker";

export type UserType = {
  id: string;
  avatar: string;
  name: string;
  email: string;
  title: string;
  jobArea: string;
  joinDate: Date;
  jobDescription: string;
  jobDescriptor: string;
};

export async function getSampleData(count: number = 3): Promise<UserType[]> {
  // Simulate a a 50-250ms delay
  const delay = 50 + Math.random() * 200;
  await new Promise((resolve) => setTimeout(resolve, delay));

  const sex = faker.person.sexType();
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    avatar: faker.image.personPortrait({ sex }),
    name: faker.person.fullName({ sex }),
    email: faker.internet.email(),
    title: faker.person.jobTitle(),
    jobArea: faker.person.jobArea(),
    jobDescriptor: faker.person.jobDescriptor(),
    joinDate: faker.date.past({ years: 5 }),
    jobDescription: faker.lorem.paragraph(5),
  }));
}
