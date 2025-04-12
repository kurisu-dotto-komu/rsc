import { faker } from "@faker-js/faker";

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  joinDate: Date;
};

export async function getSampleData(count: number = 3): Promise<User[]> {
  // Simulate network delay with random timeout up to 200ms
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 200));

  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(["Developer", "Designer", "Manager", "Analyst"]),
    department: faker.helpers.arrayElement(["Engineering", "Design", "Product", "Marketing"]),
    joinDate: faker.date.past({ years: 5 }),
  }));
}
