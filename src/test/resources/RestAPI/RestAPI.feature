Feature: Test get application call in RestAPI

  Background: 
    * def baseUrl = baseUrl
    * def user = userName
    * def pass = password
    Given url baseUrl
    And header Authorization = call read('basic-auth.js') { username : '#(user)' , password : '#(pass)' }

  Scenario: Check the all the rest api services
    Given print env
    And path 'api/services/public/util/services_info'
    When method GET
    Then status 200
    And match each response contains { resource: '#string', name: '#string'}


  Scenario: Get a public API
    Given print env
    When method get
    Then status 200
    And match response.id == 1
  
  Scenario Outline: Add a new grocery item (Post)
    Given header Content-Type = 'application/json'
    And request 
      """
      {
        "name": "<name>",
        "price": <price>,
        "stock": <stock>
      }
      """
    And path '/addGrocery'
    When method post
    Then status 201
    And match response == 
      {
        success: true,
        message: '#string',
        data: {
          id: '#present',
          name: '<name>',
          price: <price>,
          stock: <stock>
        }
      }

    Examples:
      | name   | price | stock |
      | apple  | 2.5   | 100   |
      | grapes | 3.0   | 50    |