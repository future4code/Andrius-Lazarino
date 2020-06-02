import { validateCharacter } from "../src/validateCharacter";


test("Teste com nome vazio", () => {
    const result = validateCharacter({
        name: "",
        life: 1500,
        strength: 333,
        defense: 501
    });

    expect(result).toBe(false);
});

test("Teste com vida vazia", () => {
    const result = validateCharacter({
        name: "Andrius",
        life: 0,
        strength: 333,
        defense: 501
    });

    expect(result).toBe(true);
});

test("Teste com força vazia", () => {
    const result = validateCharacter({
        name: "Andrius",
        life: 1500,
        strength: 0,
        defense: 500
    });

    expect(result).toBe(true);
});

test("Teste com defesa vazia", () => {
    const result = validateCharacter({
        name: "Andrius",
        life: 1500,
        strength: 333,
        defense: 0
    });

    expect(result).toBe(true);
});

test("Teste com defesa negativa", () => {
    const result = validateCharacter({
        name: "Andrius",
        life: 1500,
        strength: 333,
        defense: -3
    });

    expect(result).toBe(false);
});

test("Teste com defesa vazia", () => {
    const result = validateCharacter({
        name: "Andrius",
        life: 1500,
        strength: 333,
        defense: 0
    });

    expect(result).toBe(true);
});

test("Teste com informações validas", () => {
    const result = validateCharacter({
        name: "Andrius",
        life: 1500,
        strength: 333,
        defense: 639
    });

    expect(result).toBe(true);
});