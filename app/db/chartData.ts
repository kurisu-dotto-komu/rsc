"use server";

const coreData = [
  { key: "Technology", value: 38.1 },
  { key: "Financials", value: 25.3 },
  { key: "Energy", value: 23.1 },
  { key: "Cyclical", value: 19.5 },
  { key: "Defensive", value: 14.7 },
  { key: "Utilities", value: 5.8 },
].toSorted((a, b) => b.value - a.value);

// Function to generate random data with a simulated timeout
export async function getChartData() {
  // Simulate a network delay between 10-100ms for each item
  const delay = Math.floor(Math.random() * 90) + 10;
  await new Promise((resolve) => setTimeout(resolve, delay));

  // Generate random data based on core data structure
  return coreData.map((item) => ({
    key: item.key,
    value: Math.random() * 50 + 5, // Random value between 5 and 55
  }));
}
