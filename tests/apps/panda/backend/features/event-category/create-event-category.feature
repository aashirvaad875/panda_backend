Feature: Create a new event category
  In order to have event category in the platform
  As a user with admin permissions
  I want to create a new event category
 
  Scenario: A valid non existing event category
    Given I send a POST request to "/api/event/category" with body:
    """
     {
      "id": "c32e4709-b960-407f-82dc-5d90c384fa0d",
      "name": "test",
      "description": "this is test description"
     }
    """
    Then the response status code should be 201
    And  the response should be empty  

  Scenario: An invalid id non existing event category
    Given I send a POST request to "/api/event/category" with body:
     """
      {
        "id": "c32e4709-b960-407f-82dc-5d90c384fa0sd",
        "name": "test",
        "description": "this is test description"
      }
     """
    Then the response status code should be 422