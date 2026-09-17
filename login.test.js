const login = require("./login");

describe("Test hàm login", () => {

    test("Đăng nhập đúng username và password", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("Sai username", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Sai password", () => {
        expect(login("admin", "456")).toBe(false);
    });

    test("Sai cả username và password", () => {
        expect(login("user", "456")).toBe(false);
    });

});
