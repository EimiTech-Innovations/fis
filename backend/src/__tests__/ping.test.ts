import request from 'supertest';
import { describe, it, expect } from 'vitest';

import { configValues } from '../config';
import { app1 } from '../server';

describe('Ping Endpoint', () => {
  it('should return Pong with success true', async () => {
    const response = await request(app1).get(
      `/api/${configValues.PREFIX}/ping`
    );

    // Assert the response status
    expect(response.status).toBe(200);

    // Assert the response body
    expect(response.body).toEqual({
      success: true,
      message: 'Pong',
    });
  });
});
