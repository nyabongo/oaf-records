import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

jest.mock('./serviceWorker');

describe('Root Index', () => {
  beforeAll(async () => {
    ReactDOM.render = jest.fn();
    await import('.');
  });
  it('should call ReactDOM.render and register service worker', () => {
    expect(ReactDOM.render).toHaveBeenCalled();
  });
  it('should register service worker', () => {
    expect(serviceWorker.register).toHaveBeenCalled();
  });
});
