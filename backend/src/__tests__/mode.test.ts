import request from 'supertest';
import { describe, it, expect } from 'vitest';

import { configValues } from '../config';
import app from '../app';

describe('Check mode', () => {
  it('should return development or production', async () => {
    const response = await request(app).get(`/api/${configValues.PREFIX}/mode`);

    if (process.env.NODE_ENV == 'dev') {
      // Assert the response status
      expect(response.status).toBe(200);

      // Assert the response body
      expect(response.body).toEqual({
        success: true,
        environment: 'development',
      });
    }

    if (process.env.NODE_ENV == 'prod') {
      // Assert the response status
      expect(response.status).toBe(200);

      // Assert the response body
      expect(response.body).toEqual({
        success: true,
        environment: 'production',
      });
    }
  });
});
