import { render } from "@testing-library/react";
import { setupServer } from "msw/node";
import { handlers } from "../../mocks/handlers";
import { CurrentWeather } from "./CurrentWeather";

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

describe("Page", () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };
  });
  afterEach(() => {
    process.env = env;
  });

  it("should render currentWeather", async () => {
    process.env.TOMORROW_API_URL =
      "https://api.tomorrow.io/v4/weather/realtime";
    process.env.TOMORROW_API_KEY = "xxxxxx";

    const Result = await CurrentWeather({ geoLocation: "Tiel", lang: "en" });

    const { container } = render(Result);

    expect(container).toBeDefined();
  });
});
