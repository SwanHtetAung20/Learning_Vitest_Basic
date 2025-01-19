import { describe, it, expect, vi } from "vitest";
import App from "../../App.vue";
import View from "../View.vue";
import { mount } from "@vue/test-utils";
import Animals from "../Animals.vue";
import { beforeEach } from "node:test";
import CustomInput from "../CustomInput.vue";

describe("App View Component", () => {
  it("Render View Component", async () => {
    const wrapper = mount(App);
    console.log(wrapper.html());

    expect(wrapper.text()).toContain("Hello World.!");
    expect(wrapper.findComponent(View).vm.element).toBe("div");
    expect(wrapper.findComponent(View).props("element")).toBe("div");
    expect(wrapper.findComponent(View).text()).toContain(
      "This is View Component.!"
    );
    expect(wrapper.findComponent(Animals));

    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);

    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    await button.trigger("click");
    console.log("Button clicked");
    expect(alertMock).toBeCalledTimes(1);
    expect(alertMock).toHaveBeenCalledWith("hello click mal");
    alertMock.mockRestore();
  });

  it("Testing App Custom Component", () => {
    const wrapper = mount(App);
    expect(wrapper.findComponent(CustomInput).exists()).toBe(true);
    expect(wrapper.findComponent(CustomInput).classes()).toContain("container");
    expect(wrapper.text()).toContain("Clear");
  });

  it.only("Testing Custom Input Component", async () => {
    const wrapper = mount(CustomInput);
    const button = wrapper.find("button");
    expect(button.element.disabled).toBe(true);
    const input = wrapper.find("input");
    await input.setValue("Something");
    expect(button.element.disabled).toBe(false);
    await button.trigger("click");
    expect(input.element.value).toBe("");
    expect(button.element.disabled).toBe(true);
  });
});
