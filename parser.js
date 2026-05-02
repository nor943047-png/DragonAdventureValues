function getValue(name) {

  name = name.toLowerCase();

  if (name.includes("veidreki")) return 1000000;
  if (name.includes("fulong")) return 950000;
  if (name.includes("aranga")) return 500000;
  if (name.includes("amaris")) return 600000;
  if (name.includes("event")) return 400000;
  if (name.includes("season")) return 350000;
  if (name.includes("world")) return 10000;

  return 200000;
}
