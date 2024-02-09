import assert from 'assert';
import request from 'supertest';
import { application } from './hooks.steps';
import * as http from 'http';
const { Then, Given } = require('@cucumber/cucumber');

let _request: request.Test;
let _response: request.Response;

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer as http.Server).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
  _request = request(application.httpServer as http.Server)
    .put(route)
    .send(JSON.parse(body));
});

Given('I send a POST request to {string} with body:', (route: string, body: string) => {
  _request = request(application.httpServer as http.Server)
    .post(route)
    .send(JSON.parse(body));
});

Then('the response should be empty', () => {
  assert.deepStrictEqual(_response.body, {});
});

Then('the response content should be:', (response: any) => {
  if (_response.body.date) {
    const expectedResponse = JSON.parse(response);
    const actualDate = new Date(_response.body.date).toISOString(); // Convert to ISO string for consistent format
    expectedResponse.date = actualDate; // Update the expected date with the actual date
    assert.deepStrictEqual(_response.body, expectedResponse);
  } else {
    assert.deepStrictEqual(_response.body, JSON.parse(response));
  }
});
