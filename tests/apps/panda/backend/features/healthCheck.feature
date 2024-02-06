Feature: Api status
  In order to know the server is up and running
  As a health check
  I want to check the api status


  Scenario: Check the api health check
    Given I send a GET request to "/api/health_check"
    Then  the response status code should be 200
    And the response content should be:
    """
    {
      "success":true,
      "date":"2024-02-01T15:41:56.240Z"
    }
    """
