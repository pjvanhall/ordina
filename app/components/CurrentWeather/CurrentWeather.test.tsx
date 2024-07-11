import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { handlers } from "../../mocks/handlers";
import { CurrentWeatherContainer } from "./CurrentWeatherContainer";
import { Suspense } from "react";

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

  // Testing async RSC's
  // https://github.com/testing-library/react-testing-library/issues/1209#issuecomment-1569813305
  it("should render currentWeather", async () => {
    process.env.TOMORROW_API_URL =
      "https://api.tomorrow.io/v4/weather/realtime";
    process.env.TOMORROW_API_KEY = "xxxxxx";

    const { container } = render(
      <Suspense>
        <CurrentWeatherContainer />
      </Suspense>
    );

    await screen.findByText("");
    expect(container).toBeDefined();
  });
});
