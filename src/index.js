import "./style/index.scss";

const elvenShielRecipe = {
  one: 1,
  two: 2,
  three: 6,
};

const foo = {
  ...elvenShielRecipe,
  for: 4,
  one: 7,
};

console.log(elvenShielRecipe);

console.log(foo);
