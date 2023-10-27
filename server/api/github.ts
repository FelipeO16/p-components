export default defineEventHandler(async (event) => {
  const data = await fetch("https://api.github.com/users/FelipeO16");
  return data.json();
});
