import { verifyAge, User, NACIONALITY, LOCATION, Casino } from "../src/verifyAge"


test("Brazilian in establishment in Brazil", () => {
  const brazilian: User = {
    name: "Andrius",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN
  }

  const casino: Casino = {
    name: "Casino na aldeia",
    location: LOCATION.BRAZIL
  }

  const result = verifyAge(casino, [brazilian])
  expect(result.brazilians.allowed).toEqual(["Andrius"])
})

test("American in establishment in Brazil", () => {
  const brazilian: User = {
    name: "Andrius",
    age: 26,
    nacionality: NACIONALITY.AMERICAN
  }

  const casino: Casino = {
    name: "Casino da aldeia",
    location: LOCATION.BRAZIL
  }

  const result = verifyAge(casino, [brazilian])
  expect(result.americans.allowed).toEqual(["Andrius"])
})

test("No one allowed", () => {
  const brazilian: User = {
    name: "Andrius BR",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const american: User = {
    name: "Andrius EUA",
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Casino dos gringo",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [
    brazilian,
    brazilian,
    american,
    american,
  ]);

  // console.log(result.brazilians.unallowed)

  expect(result.brazilians.unallowed).toEqual(["Andrius BR", "Andrius BR"]);

  expect(result.americans.unallowed).toEqual([
    "Andrius EUA",
    "Andrius EUA",
  ]);
});

test("2 american allowed and 2 brazilians unallowed", () => {
  const brazilian: User = {
    name: "Andrius BR",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const american: User = {
    name: "Andrius EUA",
    age: 21,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Casino dos gringo",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [
    brazilian,
    brazilian,
    american,
    american,
  ]);

  console.log(result.brazilians.unallowed)
  console.log(result.brazilians.allowed)

  expect(result.brazilians.unallowed).toEqual([
    "Andrius BR",
    "Andrius BR"
  ]);

  expect(result.americans.allowed).toEqual([
    "Andrius EUA",
    "Andrius EUA",
  ]);

});

test("1 brazilian allowed", () => {
  const brazilian: User = {
    name: "Andrius",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const casino: Casino = {
    name: "Casino na aldeia",
    location: LOCATION.BRAZIL,
  };

  const result = verifyAge(casino, [brazilian]);
  expect(result.brazilians.allowed.length).toBeGreaterThan(0);
  expect(result.brazilians.allowed.length).toBeLessThan(2);

});

test("1 american allowed", () => {
  const brazilian: User = {
    name: "Astrodev",
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Balada Estelar",
    location: LOCATION.BRAZIL,
  };

  const result = verifyAge(casino, [brazilian]);
  expect(result.americans.unallowed.length).toBe(0);
});

test("No one allowed", () => {
  const brazilian: User = {
    name: "Astrodev BR",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const american: User = {
    name: "Astrodev EUA",
    age: 19,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Balada Estelar",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [
    brazilian,
    brazilian,
    american,
    american,
  ]);

  expect(result.brazilians.unallowed).toContain("Astrodev BR");
  expect(result.americans.unallowed).toContain("Astrodev EUA");
});

test("2 american allowed and 2 brazilians unallowed", () => {
  const brazilian: User = {
    name: "Astrodev BR",
    age: 19,
    nacionality: NACIONALITY.BRAZILIAN,
  };

  const american: User = {
    name: "Astrodev EUA",
    age: 21,
    nacionality: NACIONALITY.AMERICAN,
  };

  const casino: Casino = {
    name: "Balada Estelar",
    location: LOCATION.EUA,
  };

  const result = verifyAge(casino, [
    brazilian,
    brazilian,
    american,
    american,
  ]);
  expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
  expect(result.americans.unallowed.length).toBeLessThan(1);
  expect(result.americans.allowed.length).toBe(2);
});
