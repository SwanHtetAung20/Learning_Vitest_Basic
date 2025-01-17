import { expect, it, describe } from "vitest";
import { screen, render, fireEvent } from "@testing-library/vue";
import Animals from "../Animals.vue";

describe("Animals", () => {
  it("Get All Animals", async () => {
    render(Animals);
    const getButton = await screen.findByText("Get Animal Datas");
    await fireEvent.click(getButton);
    const value = await screen.findByText("ivysaur");

    expect(value.innerHTML).toBe("ivysaur");
  });
});
