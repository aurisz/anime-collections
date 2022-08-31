import '@testing-library/jest-dom/extend-expect'

jest.spyOn(global.console, 'error').mockImplementation(() => jest.fn())
