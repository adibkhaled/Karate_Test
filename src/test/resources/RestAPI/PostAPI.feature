Feature: Create A new Pet

  Background: 
      * def baseUrl = baseUrl
      * def user = userName
      * def pass = password
      * def postRequest = read('classpath:JSON/post.json') #read the json file
      Given url baseUrl
      And header Authorization = call read('basic-auth.js') { username : '#(user)' , password : '#(pass)' }
    

  Scenario: Add a new pet to the store
    Given header Content-Type = 'application/json'
    And request postRequest
    When method post
    Then status 201
    And match response.success == true
    And match response.data.name == "<name>"
    Examples:
      | read('classpath:CSV/PostAPIResult.csv') |