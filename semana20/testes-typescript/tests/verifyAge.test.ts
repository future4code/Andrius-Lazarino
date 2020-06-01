import { verifyAge, User, NACIONALITY, LOCATION, Casino } from "../src/verifyAge"


test("Brazilian in establishment in Brazil",()=>{
    const brazilian: User = {
        name: "Andrius",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }

    const casino: Casino = {
        name: "Balada na aldeia",
        location: LOCATION.BRAZIL
    }

    const result = verifyAge(casino, [brazilian])
    expect(result.brazilians.allowed).toEqual(["Andrius"])
})

test("American in establishment in Brazil",()=>{
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
    console.log(result.brazilians.unallowed)
    expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
    expect(result.americans.unallowed).toEqual([
      "Astrodev EUA",
      "Astrodev EUA",
    ]);
  });