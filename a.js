const names = ["debola", "loran", "dave"];
const capitalizedName = names.map((name) => name[0].toUpperCase());
// console.log(capitalizedName);

const profiles = [
  {
    name: "Afolabi",
    age: 34,
    city: "Kano",
    hobbies: { hobby1: "Traveling", hobby2: "Cooking" },
  },
  {
    name: "Pamela",
    age: 28,
    city: "Delta",
    hobbies: { hobby1: "Traveling", hobby2: "Cooking" },
  },
  {
    name: "Olivia",
    age: 32,
    city: "Lagos",
    hobbies: { hobby1: "Traveling", hobby2: "Cooking" },
  },
];

// console.log(profiles);

console.log(profiles[2].hobbies.hobby2);
