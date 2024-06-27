import { render } from "@testing-library/react";
import Page from "./page";
import { setupServer } from 'msw/node';
import { handlers } from '../../../mocks/handlers'

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});



afterAll(() => {
  server.close();
});

describe("Page", () => {
    const env = process.env

    beforeEach(() => {
        jest.resetModules()
        process.env = { ...env }
    })

    afterEach(() => {
        process.env = env
    })

  it("should render currentWeather", async () => {
    
    process.env.TOMORROW_API_URL='https://api.tomorrow.io/v4/weather/realtime';
    process.env.TOMORROW_API_KEY='xxxxxx'

    const Result = await Page({params: { geoLocation: ['Tiel'] }})

    const { container } = render(
        Result
    );

    console.log('UUU', container)
   
    expect(container).toBeDefined();
  });
});